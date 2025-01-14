import { DeepKeyTokenMap } from "@tokens-studio/types";
import { DesignToken } from "style-dictionary/types/DesignToken.js";
import {
  TransformOptions,
  ExpandablesAsStrings,
  Expandables,
  expandablesAsStringsArr,
} from "../utils/transformOptions.js";
import { matchPlaceholderElement, tokenStudioCustomVariableIndicator } from "../utils/regex.js";
import { shouldExpand, expandToken } from "../utils/compositeTokens.js";
import { convertTokenToStyleDictionaryFormat } from "../utils/convertTokenToStyleDictionaryFormat.js";

/**
 * Figma Token Studio creates an odd type of composite token where the "value" may contain an object of "key: value" pairs rather than a sting.
 * Here we will lift these composite tokens up to match the Style Dictionary format.
 *
 * @param {DeepKeyTokenMap} dictionary the raw JSON object in the token files. We will assume this is a token object generated by Figma Token Studio and may require composite tokens to be expanded.
 * @param {string} filePath the absolute file path to the JSON token file.
 * @param {TransformOptions} transformOpts the options passed in from the Style Dictionary config and runner
 * @returns {DeepKeyTokenMap} a token object where any Figma Token Studio composite tokens now match the Style Dictionary token format
 */
export function expandComposites(
  dictionary: DeepKeyTokenMap,
  filePath: string,
  transformOpts: TransformOptions = {}
): DeepKeyTokenMap {
  const opts = {
    ...transformOpts,
    expand: {
      composition: true,
      typography: false,
      border: false,
      shadow: false,
      ...transformOpts.expand,
    },
  };
  const returnSlice: DeepKeyTokenMap = {};
  const handleTokenStudioVariables = convertTokenToStyleDictionaryFormat(tokenStudioCustomVariableIndicator);
  const newDictionary = Object.entries(dictionary).reduce((acc, [key, token]) => {
    const { type } = token;

    if (
      matchPlaceholderElement.test(`${key}`) ||
      (typeof token.value === "string" && matchPlaceholderElement.test(`${token.value}`))
    ) {
      return acc;
    }

    if (token.value && type) {
      const includesType = expandablesAsStringsArr.includes(`${type}`);

      if (includesType) {
        const expandType = (type as ExpandablesAsStrings) === "boxShadow" ? "shadow" : type;
        const expand = shouldExpand<Expandables>(token as Expandables, opts.expand[`${expandType}`], filePath);
        if (expand) {
          const expandedToken = expandToken(token as DesignToken, expandType === "shadow", handleTokenStudioVariables);
          return expandedToken;
        }
      } else if (typeof token.value === "string") {
        token.value = handleTokenStudioVariables(token.value);
        acc[key] = token;
      } else {
        acc[key] = token;
      }
    } else if (typeof token === "object") {
      acc[key] = expandComposites(token as DeepKeyTokenMap, filePath, transformOpts);
    }
    return acc;
  }, returnSlice);

  return newDictionary || {};
}
