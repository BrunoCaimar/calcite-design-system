# calcite-flow

The `calcite-flow` component is a series of panels that provides a user with a workflow (eg. editing experience), by which the user can switch from panel to panel of `calcite-panel`s.

<!-- Auto Generated Below -->

## Usage

### Basic

Renders a basic flow with a couple `calcite-panel`s.

```html
<calcite-flow>
  <calcite-panel heading="one, two, three, four">
    <!-- image -->
  </calcite-panel>
  <calcite-panel heading="tell me that you love me more">
    <!-- image -->
  </calcite-panel>
</calcite-flow>
```

### Menu-actions-and-footer

Renders a flow with menu-actions and footer in the form of buttons.

```html
<calcite-flow>
  <calcite-panel heading="What are the most popular commute alternatives?">
    <button slot="header-menu-actions">Reset</button>
    <button slot="header-menu-actions">Rename</button>
    <button slot="footer">Save</button>
    <button slot="footer">Cancel</button>
  </calcite-panel>
</calcite-flow>
```

## Methods

### `back() => Promise<HTMLCalciteFlowItemElement>`

Removes the currently active `calcite-flow-item`.

#### Returns

Type: `Promise<HTMLCalciteFlowItemElement>`

## Slots

| Slot | Description                                                      |
| ---- | ---------------------------------------------------------------- |
|      | A slot for adding `calcite-flow-item` elements to the component. |

---

_Built with [StencilJS](https://stenciljs.com/)_