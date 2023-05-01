import StyleDictionary from 'style-dictionary';
import { registerTransforms } from '@tokens-studio/sd-transforms';
import { expandComposites } from './parse/expandComposites.js';
import { Theme } from './getThemes.js';
import { nameCamelCase } from './transform/nameCamelCase.js';
import { nameKebabCase } from './transform/nameKebabCase.js';
import { parseName } from './utils/parseName.js';

const matchExclusions = /(backup|\[|\])(?=\.\w+$)/
const matchFiles = (filePath: string, matchList: string[]) => {
  return matchList.some((value) =>  filePath.includes(value) && !matchExclusions.test(filePath));
}

/**
 * Style Dictionary runner configuration overrides.
 * 
 * @param tokenDir the directory containing design token files
 * @param buildPath the directory to write generated assets to
 * @param theme
 * @param theme.name the name of the theme. This will be used as the basis for the generated asset file names.
 * @param theme.enabled an array of partial file names matching the token files which should be included in the output
 * @param theme.disabled an array of partial file names matching the token files which should explicitly not be included in the output
 * @param theme.source an array of partial file names matching the token files which should not always be included in the output but who's values should be used for variables references in the "enabled" files
 */
export const run = async (
  tokenDir: string = 'tokens',
  buildPath: string = 'build',
  theme: Pick<Theme, 'enabled' | 'disabled' | 'name' | 'source'>
) => {
  const fileName = parseName(theme.name);
  const include = theme.source.map(tokenFile => `${tokenDir}/${tokenFile}.json`);
  const source = theme.enabled.map(tokenFile => `${tokenDir}/${tokenFile}.json`);
  const options = {
    enabled: theme.enabled,
    source: theme.source,
    disabled: theme.disabled,
    outputReferences: false,
    sourceReferencesOnly: false,
  };

  // Here we are registering the Transforms provided by Token Studio however, 
  // we need to pass "expand: false" so that we can use our own custom JSON file parser.
  // any references to "ts/..." below are references to these Token Studio transformers
  // https://github.com/tokens-studio/sd-transforms
  await registerTransforms(StyleDictionary, { expand: false });

  // Registering Style Dictionary transformers https://amzn.github.io/style-dictionary/#/transforms?id=defining-custom-transforms
  StyleDictionary.registerTransform({
    name: 'name/calcite/camel',
    type: 'name',
    transformer: nameCamelCase
  })

  StyleDictionary.registerTransform({
    name: 'name/calcite/kebab',
    type: 'name',
    transformer: nameKebabCase
  })

  StyleDictionary.registerFilter({
    name: 'filterSource',
    matcher: (token) => token.isSource
  })

  const sd = StyleDictionary.extend({
    source,
    include,
    platforms: {
      js: {
        prefix: "calcite",
        transforms: [
          'ts/descriptionToComment',
          'ts/opacity',
          'ts/size/lineheight',
          'ts/type/fontWeight',
          'ts/resolveMath',
          'ts/size/css/letterspacing',
          'ts/color/css/hexrgba',
          'ts/color/modifiers',
          'name/calcite/camel',
        ],
        buildPath: `${buildPath}/js/`,
        files: [{
          destination: `${fileName}.js`, 
          format: "javascript/es6",
          filter: /headless/gi.test(fileName) ? null : 'filterSource',
          options: /headless/gi.test(fileName) ? { ...options, outputReferences: true } : options,
        }]
      },
      css: {
        prefix: "calcite",
        transforms: [
          'ts/descriptionToComment',
          'ts/size/px',
          'ts/opacity',
          'ts/size/lineheight',
          'ts/type/fontWeight',
          'ts/resolveMath',
          'ts/size/css/letterspacing',
          'ts/color/css/hexrgba',
          'ts/color/modifiers',
          'name/calcite/kebab',
        ],
        buildPath: `${buildPath}/css/`,
        files: [{
          destination: `${fileName}.css`, 
          format: "css/variables",
          filter: /headless/gi.test(fileName) ? null : 'filterSource',
          options: /headless/gi.test(fileName) ? { ...options, outputReferences: true } : options,
        }]
      }
    },
    parsers: [{
      pattern: /\.json$/,
      parse: (file) => {
        if (matchFiles(file.filePath, [...include, ...theme.source, ...theme.enabled])) {
          const obj = JSON.parse(file.contents);
          const expanded = expandComposites(obj, file.filePath);
          
          return expanded;
        }
        
        return {};
      }
    }]
  });

  try {
    sd.cleanAllPlatforms();
    sd.buildAllPlatforms();
  } catch (error) {
    console.error(error)
  }
}
