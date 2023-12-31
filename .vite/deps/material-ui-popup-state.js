import {
  require_prop_types
} from "./chunk-P3WVVHHB.js";
import "./chunk-KEE3L4NC.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/material-ui-popup-state/es/index.mjs
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/material-ui-popup-state/es/hooks.mjs
var import_react = __toESM(require_react(), 1);

// node_modules/material-ui-popup-state/es/useEvent.mjs
var React = __toESM(require_react(), 1);
function useEvent(handler) {
  if (typeof window === "undefined") {
    return handler;
  }
  const handlerRef = React.useRef(null);
  React.useLayoutEffect(() => {
    handlerRef.current = handler;
  });
  return React.useCallback((...args) => {
    var _handlerRef$current;
    (_handlerRef$current = handlerRef.current) === null || _handlerRef$current === void 0 ? void 0 : _handlerRef$current.call(handlerRef, ...args);
  }, []);
}

// node_modules/material-ui-popup-state/es/hooks.mjs
var printedWarnings = {};
function warn(key, message) {
  if (printedWarnings[key])
    return;
  printedWarnings[key] = true;
  console.error("[material-ui-popup-state] WARNING", message);
}
var initCoreState = {
  isOpen: false,
  setAnchorElUsed: false,
  anchorEl: void 0,
  anchorPosition: void 0,
  hovered: false,
  focused: false,
  _openEventType: null,
  _childPopupState: null,
  _deferNextOpen: false,
  _deferNextClose: false
};
function usePopupState({
  parentPopupState,
  popupId,
  variant,
  disableAutoFocus
}) {
  const isMounted = (0, import_react.useRef)(true);
  (0, import_react.useEffect)(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  const [state, _setState] = (0, import_react.useState)(initCoreState);
  const setState = (0, import_react.useCallback)((state2) => {
    if (isMounted.current)
      _setState(state2);
  }, []);
  const setAnchorEl = (0, import_react.useCallback)((anchorEl) => setState((state2) => ({
    ...state2,
    setAnchorElUsed: true,
    anchorEl: anchorEl !== null && anchorEl !== void 0 ? anchorEl : void 0
  })), []);
  const toggle = useEvent((eventOrAnchorEl) => {
    if (state.isOpen)
      close(eventOrAnchorEl);
    else
      open(eventOrAnchorEl);
    return state;
  });
  const open = useEvent((eventOrAnchorEl) => {
    const event = eventOrAnchorEl instanceof Element ? void 0 : eventOrAnchorEl;
    const element = eventOrAnchorEl instanceof Element ? eventOrAnchorEl : (eventOrAnchorEl === null || eventOrAnchorEl === void 0 ? void 0 : eventOrAnchorEl.currentTarget) instanceof Element ? eventOrAnchorEl.currentTarget : void 0;
    if ((event === null || event === void 0 ? void 0 : event.type) === "touchstart") {
      setState((state2) => ({
        ...state2,
        _deferNextOpen: true
      }));
      return;
    }
    const clientX = event === null || event === void 0 ? void 0 : event.clientX;
    const clientY = event === null || event === void 0 ? void 0 : event.clientY;
    const anchorPosition = typeof clientX === "number" && typeof clientY === "number" ? {
      left: clientX,
      top: clientY
    } : void 0;
    const doOpen = (state2) => {
      if (!eventOrAnchorEl && !state2.setAnchorElUsed && variant !== "dialog") {
        warn("missingEventOrAnchorEl", "eventOrAnchorEl should be defined if setAnchorEl is not used");
      }
      if (parentPopupState) {
        if (!parentPopupState.isOpen)
          return state2;
        setTimeout(() => parentPopupState._setChildPopupState(popupState));
      }
      const newState = {
        ...state2,
        isOpen: true,
        anchorPosition,
        hovered: (event === null || event === void 0 ? void 0 : event.type) === "mouseover" || state2.hovered,
        focused: (event === null || event === void 0 ? void 0 : event.type) === "focus" || state2.focused,
        _openEventType: event === null || event === void 0 ? void 0 : event.type
      };
      if (event !== null && event !== void 0 && event.currentTarget) {
        if (!state2.setAnchorElUsed) {
          newState.anchorEl = event === null || event === void 0 ? void 0 : event.currentTarget;
        }
      } else if (element) {
        newState.anchorEl = element;
      }
      return newState;
    };
    setState((state2) => {
      if (state2._deferNextOpen) {
        setTimeout(() => setState(doOpen), 0);
        return {
          ...state2,
          _deferNextOpen: false
        };
      } else {
        return doOpen(state2);
      }
    });
  });
  const doClose = (state2) => {
    const {
      _childPopupState
    } = state2;
    setTimeout(() => {
      _childPopupState === null || _childPopupState === void 0 ? void 0 : _childPopupState.close();
      parentPopupState === null || parentPopupState === void 0 ? void 0 : parentPopupState._setChildPopupState(null);
    });
    return {
      ...state2,
      isOpen: false,
      hovered: false,
      focused: false
    };
  };
  const close = useEvent((eventOrAnchorEl) => {
    const event = eventOrAnchorEl instanceof Element ? void 0 : eventOrAnchorEl;
    if ((event === null || event === void 0 ? void 0 : event.type) === "touchstart") {
      setState((state2) => ({
        ...state2,
        _deferNextClose: true
      }));
      return;
    }
    setState((state2) => {
      if (state2._deferNextClose) {
        setTimeout(() => setState(doClose), 0);
        return {
          ...state2,
          _deferNextClose: false
        };
      } else {
        return doClose(state2);
      }
    });
  });
  const setOpen = (0, import_react.useCallback)((nextOpen, eventOrAnchorEl) => {
    if (nextOpen) {
      open(eventOrAnchorEl);
    } else {
      close(eventOrAnchorEl);
    }
  }, []);
  const onMouseLeave = useEvent((event) => {
    const {
      relatedTarget
    } = event;
    setState((state2) => {
      if (state2.hovered && !(relatedTarget instanceof Element && isElementInPopup(relatedTarget, popupState))) {
        if (state2.focused) {
          return {
            ...state2,
            hovered: false
          };
        } else {
          return doClose(state2);
        }
      }
      return state2;
    });
  });
  const onBlur = useEvent((event) => {
    if (!event)
      return;
    const {
      relatedTarget
    } = event;
    setState((state2) => {
      if (state2.focused && !(relatedTarget instanceof Element && isElementInPopup(relatedTarget, popupState))) {
        if (state2.hovered) {
          return {
            ...state2,
            focused: false
          };
        } else {
          return doClose(state2);
        }
      }
      return state2;
    });
  });
  const _setChildPopupState = (0, import_react.useCallback)((_childPopupState) => setState((state2) => ({
    ...state2,
    _childPopupState
  })), []);
  const popupState = {
    ...state,
    setAnchorEl,
    popupId,
    variant,
    open,
    close,
    toggle,
    setOpen,
    onBlur,
    onMouseLeave,
    disableAutoFocus: disableAutoFocus !== null && disableAutoFocus !== void 0 ? disableAutoFocus : Boolean(state.hovered || state.focused),
    _setChildPopupState
  };
  return popupState;
}
function anchorRef({
  setAnchorEl
}) {
  return setAnchorEl;
}
function controlAriaProps({
  isOpen,
  popupId,
  variant
}) {
  return {
    ...variant === "popover" ? {
      "aria-haspopup": true,
      "aria-controls": isOpen && popupId != null ? popupId : void 0
    } : variant === "popper" ? {
      "aria-describedby": isOpen && popupId != null ? popupId : void 0
    } : void 0
  };
}
function bindTrigger(popupState) {
  return {
    ...controlAriaProps(popupState),
    onClick: popupState.open,
    onTouchStart: popupState.open
  };
}
function bindContextMenu(popupState) {
  return {
    ...controlAriaProps(popupState),
    onContextMenu: (e) => {
      e.preventDefault();
      popupState.open(e);
    }
  };
}
function bindToggle(popupState) {
  return {
    ...controlAriaProps(popupState),
    onClick: popupState.toggle,
    onTouchStart: popupState.toggle
  };
}
function bindHover(popupState) {
  const {
    open,
    onMouseLeave
  } = popupState;
  return {
    ...controlAriaProps(popupState),
    onTouchStart: open,
    onMouseOver: open,
    onMouseLeave
  };
}
function bindFocus(popupState) {
  const {
    open,
    onBlur
  } = popupState;
  return {
    ...controlAriaProps(popupState),
    onFocus: open,
    onBlur
  };
}
function bindDoubleClick({
  isOpen,
  open,
  popupId,
  variant
}) {
  return {
    // $FlowFixMe
    [variant === "popover" ? "aria-controls" : "aria-describedby"]: isOpen ? popupId : null,
    "aria-haspopup": variant === "popover" ? true : void 0,
    onDoubleClick: open
  };
}
function bindPopover({
  isOpen,
  anchorEl,
  anchorPosition,
  close,
  popupId,
  onMouseLeave,
  disableAutoFocus,
  _openEventType
}) {
  const usePopoverPosition = _openEventType === "contextmenu";
  return {
    id: popupId,
    anchorEl,
    anchorPosition,
    anchorReference: usePopoverPosition ? "anchorPosition" : "anchorEl",
    open: isOpen,
    onClose: close,
    onMouseLeave,
    ...disableAutoFocus && {
      disableAutoFocus: true,
      disableEnforceFocus: true,
      disableRestoreFocus: true
    }
  };
}
function bindMenu({
  isOpen,
  anchorEl,
  anchorPosition,
  close,
  popupId,
  onMouseLeave,
  disableAutoFocus,
  _openEventType
}) {
  const usePopoverPosition = _openEventType === "contextmenu";
  return {
    id: popupId,
    anchorEl,
    anchorPosition,
    anchorReference: usePopoverPosition ? "anchorPosition" : "anchorEl",
    open: isOpen,
    onClose: close,
    onMouseLeave,
    ...disableAutoFocus && {
      autoFocus: false,
      disableAutoFocusItem: true,
      disableAutoFocus: true,
      disableEnforceFocus: true,
      disableRestoreFocus: true
    }
  };
}
function bindPopper({
  isOpen,
  anchorEl,
  popupId,
  onMouseLeave
}) {
  return {
    id: popupId,
    anchorEl,
    open: isOpen,
    onMouseLeave
  };
}
function bindDialog({
  isOpen,
  close
}) {
  return {
    open: isOpen,
    onClose: close
  };
}
function getPopup(element, {
  popupId
}) {
  if (!popupId)
    return null;
  const rootNode = typeof element.getRootNode === "function" ? element.getRootNode() : document;
  if (typeof rootNode.getElementById === "function") {
    return rootNode.getElementById(popupId);
  }
  return null;
}
function isElementInPopup(element, popupState) {
  const {
    anchorEl,
    _childPopupState
  } = popupState;
  return isAncestor(anchorEl, element) || isAncestor(getPopup(element, popupState), element) || _childPopupState != null && isElementInPopup(element, _childPopupState);
}
function isAncestor(parent, child) {
  if (!parent)
    return false;
  while (child) {
    if (child === parent)
      return true;
    child = child.parentElement;
  }
  return false;
}

// node_modules/material-ui-popup-state/es/index.mjs
function PopupState({
  children,
  popupId,
  variant,
  parentPopupState,
  disableAutoFocus
}) {
  const popupState = usePopupState({
    popupId,
    variant,
    parentPopupState,
    disableAutoFocus
  });
  const result = children(popupState);
  return result != null ? result : null;
}
PopupState.propTypes = {
  /**
   * The render function.
   *
   * @param {object} props the properties injected by `PopupState`:
   * <ul>
   *   <li>`open(eventOrAnchorEl)`: opens the popup</li>
   *   <li>`close()`: closes the popup</li>
   *   <li>`toggle(eventOrAnchorEl)`: opens the popup if it is closed, or
   *     closes the popup if it is open.
   *   </li>
   *   <li>`setOpen(open, [eventOrAnchorEl])`: sets whether the popup is open.
   *     `eventOrAnchorEl` is required if `open` is truthy.
   *   </li>
   *   <li>`isOpen`: `true`/`false` if the popup is open/closed</li>
   *   <li>`anchorEl`: the current anchor element (`null` the popup is closed)</li>
   *   <li>`popupId`: the `popupId` prop you passed</li>
   * </ul>
   *
   * @returns {React.Node} the content to display
   */
  children: import_prop_types.default.func.isRequired,
  /**
   * The `id` property to use for the popup.  Will be passed to the render
   * function as `bindPopup.id`, and also used for the `aria-controls` property
   * passed to the trigger component via `bindTrigger`.
   */
  popupId: import_prop_types.default.string,
  /**
   * Which type of popup you are controlling.  Use `'popover'` for `Popover`
   * and `Menu`; use `'popper'` for `Popper`s.  Right now this only affects
   * whether `aria-controls` or `aria-describedby` is used on the trigger
   * component.
   */
  variant: import_prop_types.default.oneOf(["popover", "popper"]).isRequired,
  /**
   * The popupState of the parent menu (for cascading menus)
   */
  parentPopupState: import_prop_types.default.object,
  /**
   * Will focus the popup when it opens unless disableAutoFocus is explicitly false.
   */
  disableAutoFocus: import_prop_types.default.bool
};
export {
  anchorRef,
  bindContextMenu,
  bindDialog,
  bindDoubleClick,
  bindFocus,
  bindHover,
  bindMenu,
  bindPopover,
  bindPopper,
  bindToggle,
  bindTrigger,
  PopupState as default
};
//# sourceMappingURL=material-ui-popup-state.js.map
