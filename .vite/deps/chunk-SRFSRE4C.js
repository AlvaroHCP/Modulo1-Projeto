import {
  createStyled,
  defaultTheme_default,
  identifier_default,
  init_defaultTheme,
  init_esm2 as init_esm,
  init_identifier,
  shouldForwardProp
} from "./chunk-VPGLYD5Q.js";
import {
  __esm
} from "./chunk-ROME4SDB.js";

// node_modules/@mui/material/styles/styled.js
var rootShouldForwardProp, slotShouldForwardProp, styled, styled_default;
var init_styled = __esm({
  "node_modules/@mui/material/styles/styled.js"() {
    "use client";
    init_esm();
    init_defaultTheme();
    init_identifier();
    rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
    slotShouldForwardProp = shouldForwardProp;
    styled = createStyled({
      themeId: identifier_default,
      defaultTheme: defaultTheme_default,
      rootShouldForwardProp
    });
    styled_default = styled;
  }
});

export {
  rootShouldForwardProp,
  slotShouldForwardProp,
  styled_default,
  init_styled
};
//# sourceMappingURL=chunk-SRFSRE4C.js.map
