import * as React from 'react';
import React__default, { forwardRef, useRef, useState, useImperativeHandle, useEffect, useLayoutEffect, useCallback, useContext, useMemo } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import 'axios';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$7 = ".text-main-style {\n  display: block;\n  margin-block-start: 0em;\n  margin-block-end: 0em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  font-family: Helvetica, Arial, sans-serif;\n  line-height: 1.15;\n}";
styleInject(css_248z$7);

var Text = function (_a) {
    var label = _a.label, className = _a.className, props = __rest(_a, ["label", "className"]);
    return (React__default.createElement("p", __assign({ className: "text-main-style ".concat(className) }, props), label));
};

var css_248z$6 = ".button-component-main-style {\n  border: none;\n  outline: none;\n  padding: 0px;\n  cursor: pointer;\n}";
styleInject(css_248z$6);

var Button = function (_a) {
    var child = _a.child, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["child", "className"]);
    return (React__default.createElement("button", __assign({ className: "button-component-main-style ".concat(className) }, props), child));
};

var css_248z$5 = ".ai-assistant-list-item-main-container {\n  margin-bottom: 12px;\n}\n.ai-assistant-list-item-main-container .container {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n}\n.ai-assistant-list-item-main-container .text-container {\n  display: flex;\n  flex: 1 1;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.ai-assistant-list-item-main-container .title-text-style {\n  font-weight: 700;\n  font-size: 16px;\n  color: #232427;\n  margin-bottom: 8px;\n}\n.ai-assistant-list-item-main-container .subtitle-text-style {\n  font-weight: 400;\n  font-size: 16px;\n  color: #232427;\n}";
styleInject(css_248z$5);

var ArrowForwardIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#000000' : _b, props = __rest(_a, ["color"]);
    return (React__default.createElement("svg", __assign({ width: "9", height: "14", viewBox: "0 0 9 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("path", { d: "M1.35008 13.6667L0.166748 12.4833L5.65008 6.99999L0.166748 1.51666L1.35008 0.333328L8.01675 6.99999L1.35008 13.6667Z", fill: color === "#000000" ? "#000000" : color })));
};

var ListItem = function (_a) {
    var item = _a.item, onClickList = _a.onClickList, color = _a.color;
    return (React__default.createElement(Button, { onClick: onClickList, style: { backgroundColor: "".concat(color, "18") }, className: "ai-assistant-list-item-main-container", child: React__default.createElement("div", { className: "container" },
            React__default.createElement("div", { className: "text-container" },
                React__default.createElement(Text, { className: "title-text-style", label: item.title }),
                React__default.createElement(Text, { className: "subtitle-text-style", label: item.subtitle })),
            React__default.createElement(ArrowForwardIcon, { color: color })) }));
};

var css_248z$4 = ".title-text-style {\n  font-weight: 700;\n  font-size: 16px;\n  color: #232427;\n  margin-bottom: 8px;\n}\n\n.subtitle-text-style {\n  font-weight: 400;\n  font-size: 16px;\n  color: #232427;\n}\n\n.detail-text-style {\n  font-weight: 400;\n  font-size: 14px;\n  color: #232427;\n}";
styleInject(css_248z$4);

var css_248z$3 = ".ai-assistant-item-details-main-container {\n  background-color: #f3f1ff;\n  margin-bottom: 12px;\n  overflow: scroll;\n  overflow-x: hidden;\n  animation: animateOpen 0.5s;\n  transform-origin: top;\n  animation-timing-function: ease-in;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n@keyframes animateOpen {\n  from {\n    transform: scaleY(0);\n  }\n  to {\n    transform: scaleY(1);\n  }\n}\n.ai-assistant-item-details-main-container::-webkit-scrollbar {\n  display: none; /* Hide scrollbar for Chrome, Safari and Opera */\n}\n\n.ai-assistant-item-details-main-container-end-animation {\n  background-color: #f3f1ff;\n  margin-bottom: 12px;\n  overflow: scroll;\n  overflow-x: hidden;\n  animation: animateClose 0.5s;\n  transform-origin: top;\n  animation-timing-function: ease;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n@keyframes animateClose {\n  from {\n    transform: scaleY(1);\n  }\n  to {\n    transform: scaleY(0);\n  }\n}\n.ai-assistant-item-details-main-container-end-animation::-webkit-scrollbar {\n  display: none; /* Hide scrollbar for Chrome, Safari and Opera */\n}\n\n.ai-assistant-item-details-container {\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n}\n\n.ai-assistant-item-details-heading-text-container {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  border-bottom: 1px solid #7b6cf3;\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n}";
styleInject(css_248z$3);

var ItemDetail = forwardRef(function (_a, ref) {
    var color = _a.color; _a.id; var itemData = _a.itemData, onSetHeight = _a.onSetHeight, placeholder = _a.placeholder, updateItemData = _a.updateItemData;
    var refForDiv = useRef(null);
    var _b = useState({
        title: itemData.title,
        subtitle: itemData.subtitle,
        content: itemData.content || placeholder,
    }), item = _b[0], setItem = _b[1];
    useImperativeHandle(ref, function () { return ({
        log: function () {
            if (refForDiv.current) {
                refForDiv.current.className =
                    "ai-assistant-item-details-main-container-end-animation";
            }
        },
    }); });
    useEffect(function () {
        setItem(__assign(__assign({}, itemData), { content: itemData.content || placeholder }));
        if ((itemData === null || itemData === void 0 ? void 0 : itemData.content) && (itemData === null || itemData === void 0 ? void 0 : itemData.content.length) > 18) {
            if ((itemData === null || itemData === void 0 ? void 0 : itemData.content.length) > 550) {
                onSetHeight(400);
            }
            else if ((itemData === null || itemData === void 0 ? void 0 : itemData.content.length) > 300 &&
                (itemData === null || itemData === void 0 ? void 0 : itemData.content.length) < 550) {
                onSetHeight(320);
            }
            else if ((itemData === null || itemData === void 0 ? void 0 : itemData.content.length) > 150 &&
                (itemData === null || itemData === void 0 ? void 0 : itemData.content.length) < 300) {
                onSetHeight(270);
            }
            else {
                onSetHeight(200);
            }
        }
    }, [updateItemData]);
    return (React__default.createElement("div", { ref: refForDiv, style: { backgroundColor: "".concat(color, "18") }, className: "ai-assistant-item-details-main-container" },
        React__default.createElement("div", { className: "ai-assistant-item-details-container" },
            React__default.createElement("div", { style: { borderBottomColor: color }, className: "ai-assistant-item-details-heading-text-container " },
                React__default.createElement(Text, { className: "title-text-style", label: itemData.title }),
                React__default.createElement(Text, { className: "subtitle-text-style", label: itemData.subtitle })),
            React__default.createElement(Text, { className: "detail-text-style", label: item.content || 'getting insight...' }))));
});

var CrossIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#000000" : _b, props = __rest(_a, ["color"]);
    return (React__default.createElement("svg", __assign({ width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("path", { d: "M2.8 28L0 25.2L11.2 14L0 2.8L2.8 0L14 11.2L25.2 0L28 2.8L16.8 14L28 25.2L25.2 28L14 16.8L2.8 28Z", fill: color === "#000000" ? "#000000" : color })));
};

var ArrowRightIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#000000' : _b, props = __rest(_a, ["color"]);
    return (React__default.createElement("svg", __assign({ width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("path", { d: "M10.9997 21.6667L0.333008 11L10.9997 0.333328L12.8997 2.19999L5.43301 9.66666H21.6663V12.3333H5.43301L12.8997 19.8L10.9997 21.6667Z", fill: color === "#000000" ? "#000000" : color })));
};

var css_248z$2 = ".ai-assistant-main-container {\n  position: fixed;\n  bottom: 35px;\n  right: 30px;\n}\n.ai-assistant-main-container .main-popup-button {\n  height: 80px;\n  width: 80px;\n  border-radius: 360px;\n  outline: none;\n  border: none;\n  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);\n}\n.ai-assistant-main-container .main-popup-container, .ai-assistant-main-container .main-popup-container-animate-end, .ai-assistant-main-container .main-popup-container-animate-start {\n  position: absolute;\n  bottom: 95px;\n  width: 436px;\n  right: 0px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  overflow: hidden;\n}\n.ai-assistant-main-container .main-popup-container-animate-start {\n  height: auto;\n  max-height: 400px;\n}\n.ai-assistant-main-container .main-popup-container-animate-end {\n  height: 0px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.ai-assistant-main-container .popup-header-container {\n  display: flex;\n  border-bottom: 4px solid;\n  justify-content: flex-start;\n  align-items: center;\n  padding-bottom: 14px;\n}\n.ai-assistant-main-container .popup-header-container .header-back-button-style {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  height: 32px;\n  width: 32px;\n  margin-right: 16px;\n  overflow: hidden;\n}\n.ai-assistant-main-container .popup-header-container .header-text-container {\n  min-height: 32px;\n}\n.ai-assistant-main-container .popup-header-container .header-text-container .header-text-style {\n  font-weight: 700;\n  font-size: 24px;\n  color: #232427;\n}\n.ai-assistant-main-container .ai-assistant-main-popup-header-back-button-style-end {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  height: 32px;\n  width: 32px;\n  margin-right: 16px;\n  overflow: hidden;\n}\n.ai-assistant-main-container .main-item-list-container {\n  max-height: calc(100vh - 260px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  padding-top: 12px;\n  transition: transform 8s ease-out;\n  transform: scaleY(1);\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.ai-assistant-main-container .main-item-list-container::-webkit-scrollbar {\n  display: none; /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.ai-assistant-main-container .searchBox {\n  display: flex;\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 10px;\n}\n.ai-assistant-main-container .sendBtn {\n  margin-right: 10px;\n  padding: 8px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #7a6bf2;\n  color: #fff;\n}\n.ai-assistant-main-container .chat-field {\n  box-shadow: 0 -5px 5px -5px #333;\n  background: #fff;\n  margin-right: -30px;\n  margin-left: -30px;\n}\n.ai-assistant-main-container .powered-by {\n  text-align: right;\n  padding: 25px 15px 0px 15px;\n  font-size: 13px;\n}\n.ai-assistant-main-container .powered-by img {\n  width: 20px;\n  vertical-align: bottom;\n  margin: 0 5px;\n}\n@media (max-width: 530px) {\n  .ai-assistant-main-container .main-popup-container-animate-start {\n    width: 272px;\n    padding: 16px;\n    bottom: 58px;\n  }\n  .ai-assistant-main-container .main-popup-container-animate-end {\n    width: 272px;\n    padding: 16px;\n    bottom: 58px;\n  }\n  .ai-assistant-main-container .title-text-style, .ai-assistant-main-container .subtitle-text-style {\n    font-size: 14px;\n  }\n  .ai-assistant-main-container .main-popup-button {\n    height: 50px;\n    width: 50px;\n  }\n  .ai-assistant-main-container .main-popup-button svg {\n    width: 20px;\n    height: 20px;\n  }\n  .ai-assistant-main-container .environment-error-main-container-style .text-style {\n    font-size: 16px;\n  }\n  .ai-assistant-main-container .powered-by {\n    padding: 25px 25px 0px 15px;\n  }\n}";
styleInject(css_248z$2);

var css_248z$1 = ".environment-error-main-container-style {\n  position: absolute;\n  inset: 0px 0px 0px 0px;\n  background: rgba(0, 0, 0, 0.86);\n  padding: 24px;\n}\n.environment-error-main-container-style .top-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 20px;\n}\n.environment-error-main-container-style .heading-text-style {\n  font-weight: 700;\n  font-size: 26px;\n}\n.environment-error-main-container-style .bottom-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #1e1e1e;\n  padding: 16px;\n}\n.environment-error-main-container-style .text-style {\n  font-weight: 400;\n  font-size: 16px;\n  color: #969696;\n}";
styleInject(css_248z$1);

var EnvironmentError = function (_a) {
    _a.color;
    return (React__default.createElement("div", { className: "environment-error-main-container-style" },
        React__default.createElement("div", { className: "top-container" },
            React__default.createElement(Text, { className: "heading-text-style", label: "Message for Developer" })),
        React__default.createElement("div", { className: "bottom-container" },
            React__default.createElement(Text, { className: "text-style", label: "Your Application is missing the following API/SDK keys in your process file (usually .env):" }),
            React__default.createElement("br", null),
            React__default.createElement(Text, { className: "text-style", label: "1. OPEN_AI_API_KEY" }),
            React__default.createElement("br", null),
            React__default.createElement(Text, { className: "text-style", label: "2. LAYER_SDK_KEY" }),
            React__default.createElement("br", null),
            React__default.createElement(Text, { className: "text-style", label: "Please add these keys to your process file to correct the error" }))));
};

var css_248z = ".environment-error-main-container-style {\n  position: absolute;\n  inset: 0px 0px 0px 0px;\n  background: rgba(0, 0, 0, 0.86);\n  padding: 24px;\n}\n.environment-error-main-container-style .top-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 20px;\n}\n.environment-error-main-container-style .heading-text-style {\n  font-weight: 700;\n  font-size: 26px;\n  color: #fff;\n}\n.environment-error-main-container-style .bottom-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #1e1e1e;\n  padding: 16px;\n}\n.environment-error-main-container-style .text-style {\n  font-weight: 400;\n  font-size: 20px;\n  color: #fff;\n  line-height: 1.7;\n  text-align: center;\n}\n.environment-error-main-container-style .bottom-container-center {\n  height: 50%;\n  width: 78%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}";
styleInject(css_248z);

var InvalidApiKeyError = function (_a) {
    _a.color; var errorView = _a.errorView;
    return (React__default.createElement("div", { className: "environment-error-main-container-style" },
        React__default.createElement("div", { className: "top-container" },
            React__default.createElement(Text, { className: "heading-text-style", label: "".concat(errorView === null || errorView === void 0 ? void 0 : errorView.title) })),
        React__default.createElement("div", { className: "bottom-container-center" },
            React__default.createElement(Text, { className: "text-style", label: "".concat(errorView === null || errorView === void 0 ? void 0 : errorView.message) }))));
};

var MyDataListEngine = /** @class */ (function () {
    function MyDataListEngine() {
        this.cache = new Map();
        this.openAIKey = process.env.REACT_APP_OPEN_AI_API_KEY || "";
        this.layerKey = process.env.REACT_APP_LAYER_SDK_KEY || "";
    }
    MyDataListEngine.prototype.validateKeys = function () {
        // Your implementation here to validate the API keys
        return true;
    };
    MyDataListEngine.prototype.generateText = function (prompt) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.cache.has(prompt)) return [3 /*break*/, 1];
                        return [2 /*return*/, this.cache.get(prompt) || ""];
                    case 1: return [4 /*yield*/, fetch("https://api.openai.com/v1/chat/completions", {
                            method: "POST",
                            headers: {
                                Authorization: "Bearer ".concat(this.openAIKey),
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                model: "gpt-3.5-turbo",
                                messages: [
                                    { role: "user", content: prompt },
                                ],
                            }),
                        })];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    MyDataListEngine.prototype.generateTextList = function (prompts) {
        return __awaiter(this, void 0, void 0, function () {
            var responses, _i, prompts_1, prompt_1, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        responses = [];
                        _i = 0, prompts_1 = prompts;
                        _a.label = 1;
                    case 1:
                        if (!(_i < prompts_1.length)) return [3 /*break*/, 4];
                        prompt_1 = prompts_1[_i];
                        return [4 /*yield*/, this.generateText(prompt_1)];
                    case 2:
                        response = _a.sent();
                        responses.push(response);
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, responses];
                }
            });
        });
    };
    return MyDataListEngine;
}());

var f$1=r(),n=e=>c$3(e,f$1),m$1=r();n.write=e=>c$3(e,m$1);var d$2=r();n.onStart=e=>c$3(e,d$2);var h$3=r();n.onFrame=e=>c$3(e,h$3);var p$1=r();n.onFinish=e=>c$3(e,p$1);var i=[];n.setTimeout=(e,t)=>{let a=n.now()+t,o=()=>{let F=i.findIndex(z=>z.cancel==o);~F&&i.splice(F,1),u$2-=~F?1:0;},s={time:a,handler:e,cancel:o};return i.splice(w(a),0,s),u$2+=1,v$2(),s};var w=e=>~(~i.findIndex(t=>t.time>e)||~i.length);n.cancel=e=>{d$2.delete(e),h$3.delete(e),p$1.delete(e),f$1.delete(e),m$1.delete(e);};n.sync=e=>{T=!0,n.batchedUpdates(e),T=!1;};n.throttle=e=>{let t;function a(){try{e(...t);}finally{t=null;}}function o(...s){t=s,n.onStart(a);}return o.handler=e,o.cancel=()=>{d$2.delete(a),t=null;},o};var y$3=typeof window<"u"?window.requestAnimationFrame:()=>{};n.use=e=>y$3=e;n.now=typeof performance<"u"?()=>performance.now():Date.now;n.batchedUpdates=e=>e();n.catch=console.error;n.frameLoop="always";n.advance=()=>{n.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):x$2();};var l$2=-1,u$2=0,T=!1;function c$3(e,t){T?(t.delete(e),e(0)):(t.add(e),v$2());}function v$2(){l$2<0&&(l$2=0,n.frameLoop!=="demand"&&y$3(b$2));}function R(){l$2=-1;}function b$2(){~l$2&&(y$3(b$2),n.batchedUpdates(x$2));}function x$2(){let e=l$2;l$2=n.now();let t=w(l$2);if(t&&(Q$2(i.splice(0,t),a=>a.handler()),u$2-=t),!u$2){R();return}d$2.flush(),f$1.flush(e?Math.min(64,l$2-e):16.667),h$3.flush(),m$1.flush(),p$1.flush();}function r(){let e=new Set,t=e;return {add(a){u$2+=t==e&&!e.has(a)?1:0,e.add(a);},delete(a){return u$2-=t==e&&e.has(a)?1:0,e.delete(a)},flush(a){t.size&&(e=new Set,u$2-=t.size,Q$2(t,o=>o(a)&&e.add(o)),u$2+=e.size,t=e);}}}function Q$2(e,t){e.forEach(a=>{try{t(a);}catch(o){n.catch(o);}});}

var ze$1=Object.defineProperty;var Le$2=(e,t)=>{for(var r in t)ze$1(e,r,{get:t[r],enumerable:!0});};var p={};Le$2(p,{assign:()=>U,colors:()=>c$2,createStringInterpolator:()=>k$2,skipAnimation:()=>ee,to:()=>J$1,willAdvance:()=>S});function Y(){}var mt$1=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),l$1={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function bt$1(e,t){if(l$1.arr(e)){if(!l$1.arr(t)||e.length!==t.length)return !1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return !1;return !0}return e===t}var Ve=(e,t)=>e.forEach(t);function xt(e,t,r){if(l$1.arr(e)){for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);return}for(let n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n);}var ht$1=e=>l$1.und(e)?[]:l$1.arr(e)?e:[e];function Pe$1(e,t){if(e.size){let r=Array.from(e);e.clear(),Ve(r,t);}}var yt$1=(e,...t)=>Pe$1(e,r=>r(...t)),h$2=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);var k$2,J$1,c$2=null,ee=!1,S=Y,U=e=>{e.to&&(J$1=e.to),e.now&&(n.now=e.now),e.colors!==void 0&&(c$2=e.colors),e.skipAnimation!=null&&(ee=e.skipAnimation),e.createStringInterpolator&&(k$2=e.createStringInterpolator),e.requestAnimationFrame&&n.use(e.requestAnimationFrame),e.batchedUpdates&&(n.batchedUpdates=e.batchedUpdates),e.willAdvance&&(S=e.willAdvance),e.frameLoop&&(n.frameLoop=e.frameLoop);};var E$1=new Set,u$1=[],H$1=[],A=0,qe$1={get idle(){return !E$1.size&&!u$1.length},start(e){A>e.priority?(E$1.add(e),n.onStart($e)):(te$1(e),n(B));},advance:B,sort(e){if(A)n.onFrame(()=>qe$1.sort(e));else {let t=u$1.indexOf(e);~t&&(u$1.splice(t,1),re(e));}},clear(){u$1=[],E$1.clear();}};function $e(){E$1.forEach(te$1),E$1.clear(),n(B);}function te$1(e){u$1.includes(e)||re(e);}function re(e){u$1.splice(Ge$1(u$1,t=>t.priority>e.priority),0,e);}function B(e){let t=H$1;for(let r=0;r<u$1.length;r++){let n=u$1[r];A=n.priority,n.idle||(S(n),n.advance(e),n.idle||t.push(n));}return A=0,H$1=u$1,H$1.length=0,u$1=t,u$1.length>0}function Ge$1(e,t){let r=e.findIndex(t);return r<0?e.length:r}var ne$2=(e,t,r)=>Math.min(Math.max(r,e),t);var It={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199};var d$1="[-+]?\\d*\\.?\\d+",M=d$1+"%";function C$1(...e){return "\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var oe$1=new RegExp("rgb"+C$1(d$1,d$1,d$1)),fe$1=new RegExp("rgba"+C$1(d$1,d$1,d$1,d$1)),ae$1=new RegExp("hsl"+C$1(d$1,M,M)),ie=new RegExp("hsla"+C$1(d$1,M,M,d$1)),se$1=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ue$1=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,le$1=/^#([0-9a-fA-F]{6})$/,ce=/^#([0-9a-fA-F]{8})$/;function be$1(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=le$1.exec(e))?parseInt(t[1]+"ff",16)>>>0:c$2&&c$2[e]!==void 0?c$2[e]:(t=oe$1.exec(e))?(y$2(t[1])<<24|y$2(t[2])<<16|y$2(t[3])<<8|255)>>>0:(t=fe$1.exec(e))?(y$2(t[1])<<24|y$2(t[2])<<16|y$2(t[3])<<8|me$1(t[4]))>>>0:(t=se$1.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ce.exec(e))?parseInt(t[1],16)>>>0:(t=ue$1.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ae$1.exec(e))?(de$1(pe(t[1]),z$1(t[2]),z$1(t[3]))|255)>>>0:(t=ie.exec(e))?(de$1(pe(t[1]),z$1(t[2]),z$1(t[3]))|me$1(t[4]))>>>0:null}function j$1(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function de$1(e,t,r){let n=r<.5?r*(1+t):r+t-r*t,f=2*r-n,o=j$1(f,n,e+1/3),i=j$1(f,n,e),s=j$1(f,n,e-1/3);return Math.round(o*255)<<24|Math.round(i*255)<<16|Math.round(s*255)<<8}function y$2(e){let t=parseInt(e,10);return t<0?0:t>255?255:t}function pe(e){return (parseFloat(e)%360+360)%360/360}function me$1(e){let t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function z$1(e){let t=parseFloat(e);return t<0?0:t>100?1:t/100}function D$1(e){let t=be$1(e);if(t===null)return e;t=t||0;let r=(t&4278190080)>>>24,n=(t&16711680)>>>16,f=(t&65280)>>>8,o=(t&255)/255;return `rgba(${r}, ${n}, ${f}, ${o})`}var W$1=(e,t,r)=>{if(l$1.fun(e))return e;if(l$1.arr(e))return W$1({range:e,output:t,extrapolate:r});if(l$1.str(e.output[0]))return k$2(e);let n=e,f=n.output,o=n.range||[0,1],i=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",x=n.easing||(a=>a);return a=>{let F=He$1(a,o);return Ue$1(a,o[F],o[F+1],f[F],f[F+1],x,i,s,n.map)}};function Ue$1(e,t,r,n,f,o,i,s,x){let a=x?x(e):e;if(a<t){if(i==="identity")return a;i==="clamp"&&(a=t);}if(a>r){if(s==="identity")return a;s==="clamp"&&(a=r);}return n===f?n:t===r?e<=t?n:f:(t===-1/0?a=-a:r===1/0?a=a-t:a=(a-t)/(r-t),a=o(a),n===-1/0?a=-a:f===1/0?a=a+n:a=a*(f-n)+n,a)}function He$1(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}var Be=(e,t="end")=>r=>{r=t==="end"?Math.min(r,.999):Math.max(r,.001);let n=r*e,f=t==="end"?Math.floor(n):Math.ceil(n);return ne$2(0,1,f/e)},P=1.70158,L$1=P*1.525,xe$1=P+1,he$1=2*Math.PI/3,ye$1=2*Math.PI/4.5,V$1=e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,Lt$1={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e===0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>xe$1*e*e*e-P*e*e,easeOutBack:e=>1+xe$1*Math.pow(e-1,3)+P*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*((L$1+1)*2*e-L$1)/2:(Math.pow(2*e-2,2)*((L$1+1)*(e*2-2)+L$1)+2)/2,easeInElastic:e=>e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((e*10-10.75)*he$1),easeOutElastic:e=>e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*he$1)+1,easeInOutElastic:e=>e===0?0:e===1?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ye$1))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ye$1)/2+1,easeInBounce:e=>1-V$1(1-e),easeOutBounce:V$1,easeInOutBounce:e=>e<.5?(1-V$1(1-2*e))/2:(1+V$1(2*e-1))/2,steps:Be};var g$1=Symbol.for("FluidValue.get"),m=Symbol.for("FluidValue.observers");var Pt=e=>!!(e&&e[g$1]),ve=e=>e&&e[g$1]?e[g$1]():e,qt=e=>e[m]||null;function je(e,t){e.eventObserved?e.eventObserved(t):e(t);}function $t(e,t){let r=e[m];r&&r.forEach(n=>{je(n,t);});}var ge=class{[g$1];[m];constructor(t){if(!t&&!(t=this.get))throw Error("Unknown getter");De$1(this,t);}},De$1=(e,t)=>Ee$1(e,g$1,t);function Gt(e,t){if(e[g$1]){let r=e[m];r||Ee$1(e,m,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t));}return t}function Qt(e,t){let r=e[m];if(r&&r.has(t)){let n=r.size-1;n?r.delete(t):e[m]=null,e.observerRemoved&&e.observerRemoved(n,t);}}var Ee$1=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0});var O=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Oe=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,K=new RegExp(`(${O.source})(%|[a-z]+)`,"i"),we$1=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,b$1=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;var N=e=>{let[t,r]=We(e);if(!t||h$2())return e;let n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){let f=window.getComputedStyle(document.documentElement).getPropertyValue(r);return f||e}else {if(r&&b$1.test(r))return N(r);if(r)return r}return e},We=e=>{let t=b$1.exec(e);if(!t)return [,];let[,r,n]=t;return [r,n]};var _$1,Ke$1=(e,t,r,n,f)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${f})`,Xt=e=>{_$1||(_$1=c$2?new RegExp(`(${Object.keys(c$2).join("|")})(?!\\w)`,"g"):/^\b$/);let t=e.output.map(o=>ve(o).replace(b$1,N).replace(Oe,D$1).replace(_$1,D$1)),r=t.map(o=>o.match(O).map(Number)),f=r[0].map((o,i)=>r.map(s=>{if(!(i in s))throw Error('The arity of each "output" value must be equal');return s[i]})).map(o=>W$1({...e,output:o}));return o=>{let i=!K.test(t[0])&&t.find(x=>K.test(x))?.replace(O,""),s=0;return t[0].replace(O,()=>`${f[s++](o)}${i||""}`).replace(we$1,Ke$1)}};var Z="react-spring: ",Te=e=>{let t=e,r=!1;if(typeof t!="function")throw new TypeError(`${Z}once requires a function parameter`);return (...n)=>{r||(t(...n),r=!0);}},Ne$1=Te(console.warn);function Jt(){Ne$1(`${Z}The "interpolate" function is deprecated in v9 (use "to" instead)`);}var _e$1=Te(console.warn);function er(){_e$1(`${Z}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);}function or(e){return l$1.str(e)&&(e[0]=="#"||/\d/.test(e)||!h$2()&&b$1.test(e)||e in(c$2||{}))}var Q$1=h$2()?useEffect:useLayoutEffect;var Ce$1=()=>{let e=useRef(!1);return Q$1(()=>(e.current=!0,()=>{e.current=!1;}),[]),e};function Mr(){let e=useState()[1],t=Ce$1();return ()=>{t.current&&e(Math.random());}}function Lr(e,t){let[r]=useState(()=>({inputs:t,result:e()})),n=useRef(),f=n.current,o=f;return o?t&&o.inputs&&it$2(t,o.inputs)||(o={inputs:t,result:e()}):o=r,useEffect(()=>{n.current=o,f==r&&(r.inputs=r.result=void 0);},[o]),o.result}function it$2(e,t){if(e.length!==t.length)return !1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return !1;return !0}var $r=e=>useEffect(e,ut),ut=[];function Ur(e){let t=useRef();return useEffect(()=>{t.current=e;}),t.current}

var h$1=Symbol.for("Animated:node"),v$1=e=>!!e&&e[h$1]===e,k$1=e=>e&&e[h$1],D=(e,t)=>mt$1(e,h$1,t),F$1=e=>e&&e[h$1]&&e[h$1].getPayload(),c$1=class{payload;constructor(){D(this,this);}getPayload(){return this.payload||[]}};var l=class extends c$1{constructor(r){super();this._value=r;l$1.num(this._value)&&(this.lastPosition=this._value);}done=!0;elapsedTime;lastPosition;lastVelocity;v0;durationProgress=0;static create(r){return new l(r)}getPayload(){return [this]}getValue(){return this._value}setValue(r,n){return l$1.num(r)&&(this.lastPosition=r,n&&(r=Math.round(r/n)*n,this.done&&(this.lastPosition=r))),this._value===r?!1:(this._value=r,!0)}reset(){let{done:r}=this;this.done=!1,l$1.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,r&&(this.lastVelocity=null),this.v0=null);}};var d=class extends l{_string=null;_toString;constructor(t){super(0),this._toString=W$1({output:[t,t]});}static create(t){return new d(t)}getValue(){let t=this._string;return t??(this._string=this._toString(this._value))}setValue(t){if(l$1.str(t)){if(t==this._string)return !1;this._string=t,this._value=1;}else if(super.setValue(t))this._string=null;else return !1;return !0}reset(t){t&&(this._toString=W$1({output:[this.getValue(),t]})),this._value=0,super.reset();}};var f={dependencies:null};var u=class extends c$1{constructor(r){super();this.source=r;this.setValue(r);}getValue(r){let n={};return xt(this.source,(a,i)=>{v$1(a)?n[i]=a.getValue(r):Pt(a)?n[i]=ve(a):r||(n[i]=a);}),n}setValue(r){this.source=r,this.payload=this._makePayload(r);}reset(){this.payload&&Ve(this.payload,r=>r.reset());}_makePayload(r){if(r){let n=new Set;return xt(r,this._addToPayload,n),Array.from(n)}}_addToPayload(r){f.dependencies&&Pt(r)&&f.dependencies.add(r);let n=F$1(r);n&&Ve(n,a=>this.add(a));}};var y$1=class extends u{constructor(t){super(t);}static create(t){return new y$1(t)}getValue(){return this.source.map(t=>t.getValue())}setValue(t){let r=this.getPayload();return t.length==r.length?r.map((n,a)=>n.setValue(t[a])).some(Boolean):(super.setValue(t.map(z)),!0)}};function z(e){return (or(e)?d:l).create(e)}function Le$1(e){let t=k$1(e);return t?t.constructor:l$1.arr(e)?y$1:or(e)?d:l}var x$1=(e,t)=>{let r=!l$1.fun(e)||e.prototype&&e.prototype.isReactComponent;return forwardRef((n$1,a)=>{let i=useRef(null),o=r&&useCallback(s=>{i.current=ae(a,s);},[a]),[m,T]=ne$1(n$1,t),W=Mr(),P=()=>{let s=i.current;if(r&&!s)return;(s?t.applyAnimatedValues(s,m.getValue(!0)):!1)===!1&&W();},_=new b(P,T),p=useRef();Q$1(()=>(p.current=_,Ve(T,s=>Gt(s,_)),()=>{p.current&&(Ve(p.current.deps,s=>Qt(s,p.current)),n.cancel(p.current.update));})),useEffect(P,[]),$r(()=>()=>{let s=p.current;Ve(s.deps,S=>Qt(S,s));});let $=t.getComponentProps(m.getValue());return React.createElement(e,{...$,ref:o})})},b=class{constructor(t,r){this.update=t;this.deps=r;}eventObserved(t){t.type=="change"&&n.write(this.update);}};function ne$1(e,t){let r=new Set;return f.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new u(e),f.dependencies=null,[e,r]}function ae(e,t){return e&&(l$1.fun(e)?e(t):e.current=t),t}var j=Symbol.for("AnimatedComponent"),Ke=(e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=a=>new u(a),getComponentProps:n=a=>a}={})=>{let a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=o=>{let m=I$2(o)||"Anonymous";return l$1.str(o)?o=i[o]||(i[o]=x$1(o,a)):o=o[j]||(o[j]=x$1(o,a)),o.displayName=`Animated(${m})`,o};return xt(e,(o,m)=>{l$1.arr(e)&&(m=I$2(o)),i[m]=i(o);}),{animated:i}},I$2=e=>l$1.str(e)?e:e&&l$1.str(e.displayName)?e.displayName:l$1.fun(e)&&e.name||null;

function I$1(t,...e){return l$1.fun(t)?t(...e):t}var te=(t,e)=>t===!0||!!(e&&t&&(l$1.fun(t)?t(e):ht$1(t).includes(e))),et=(t,e)=>l$1.obj(t)?e&&t[e]:t;var ke=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,nn=t=>t,ne=(t,e=nn)=>{let n=rn;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));let r={};for(let o of n){let s=e(t[o],o);l$1.und(s)||(r[o]=s);}return r},rn=["config","onProps","onStart","onChange","onPause","onResume","onRest"],on={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function sn(t){let e={},n=0;if(xt(t,(r,o)=>{on[o]||(e[o]=r,n++);}),n)return e}function de(t){let e=sn(t);if(e){let n={to:e};return xt(t,(r,o)=>o in e||(n[o]=r)),n}return {...t}}function me(t){return t=ve(t),l$1.arr(t)?t.map(me):or(t)?p.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function Ue(t){for(let e in t)return !0;return !1}function Ee(t){return l$1.fun(t)||l$1.arr(t)&&l$1.obj(t[0])}function xe(t,e){t.ref?.delete(t),e?.delete(t);}function he(t,e){e&&t.ref!==e&&(t.ref?.delete(t),e.add(t),t.ref=e);}var mt={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}};var tt={...mt.default,mass:1,damping:1,easing:Lt$1.linear,clamp:!1},we=class{tension;friction;frequency;damping;mass;velocity=0;restVelocity;precision;progress;duration;easing;clamp;bounce;decay;round;constructor(){Object.assign(this,tt);}};function gt(t,e,n){n&&(n={...n},ht(n,e),e={...n,...e}),ht(t,e),Object.assign(t,e);for(let i in tt)t[i]==null&&(t[i]=tt[i]);let{frequency:r,damping:o}=t,{mass:s}=t;return l$1.und(r)||(r<.01&&(r=.01),o<0&&(o=0),t.tension=Math.pow(2*Math.PI/r,2)*s,t.friction=4*Math.PI*o*s/r),t}function ht(t,e){if(!l$1.und(e.decay))t.duration=void 0;else {let n=!l$1.und(e.tension)||!l$1.und(e.friction);(n||!l$1.und(e.frequency)||!l$1.und(e.damping)||!l$1.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0);}}var yt=[],Le=class{changed=!1;values=yt;toValues=null;fromValues=yt;to;from;config=new we;immediate=!1};function Me(t,{key:e,props:n$1,defaultProps:r,state:o,actions:s}){return new Promise((i,a)=>{let u,p$1,f=te(n$1.cancel??r?.cancel,e);if(f)b();else {l$1.und(n$1.pause)||(o.paused=te(n$1.pause,e));let c=r?.pause;c!==!0&&(c=o.paused||te(c,e)),u=I$1(n$1.delay||0,e),c?(o.resumeQueue.add(m),s.pause()):(s.resume(),m());}function d(){o.resumeQueue.add(m),o.timeouts.delete(p$1),p$1.cancel(),u=p$1.time-n.now();}function m(){u>0&&!p.skipAnimation?(o.delayed=!0,p$1=n.setTimeout(b,u),o.pauseQueue.add(d),o.timeouts.add(p$1)):b();}function b(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(d),o.timeouts.delete(p$1),t<=(o.cancelId||0)&&(f=!0);try{s.start({...n$1,callId:t,cancel:f},i);}catch(c){a(c);}}})}var be=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?q$1(t.get()):e.every(n=>n.noop)?nt(t.get()):E(t.get(),e.every(n=>n.finished)),nt=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),E=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),q$1=t=>({value:t,cancelled:!0,finished:!1});function De(t,e,n$1,r){let{callId:o,parentId:s,onRest:i}=e,{asyncTo:a,promise:u}=n$1;return !s&&t===a&&!e.reset?u:n$1.promise=(async()=>{n$1.asyncId=o,n$1.asyncTo=t;let p$1=ne(e,(l,h)=>h==="onRest"?void 0:l),f,d,m=new Promise((l,h)=>(f=l,d=h)),b=l=>{let h=o<=(n$1.cancelId||0)&&q$1(r)||o!==n$1.asyncId&&E(r,!1);if(h)throw l.result=h,d(l),l},c=(l,h)=>{let g=new Ae,x=new Ne;return (async()=>{if(p.skipAnimation)throw oe(n$1),x.result=E(r,!1),d(x),x;b(g);let S=l$1.obj(l)?{...l}:{...h,to:l};S.parentId=o,xt(p$1,(V,_)=>{l$1.und(S[_])&&(S[_]=V);});let A=await r.start(S);return b(g),n$1.paused&&await new Promise(V=>{n$1.resumeQueue.add(V);}),A})()},P;if(p.skipAnimation)return oe(n$1),E(r,!1);try{let l;l$1.arr(t)?l=(async h=>{for(let g of h)await c(g);})(t):l=Promise.resolve(t(c,r.stop.bind(r))),await Promise.all([l.then(f),m]),P=E(r.get(),!0,!1);}catch(l){if(l instanceof Ae)P=l.result;else if(l instanceof Ne)P=l.result;else throw l}finally{o==n$1.asyncId&&(n$1.asyncId=s,n$1.asyncTo=s?a:void 0,n$1.promise=s?u:void 0);}return l$1.fun(i)&&n.batchedUpdates(()=>{i(P,r,r.item);}),P})()}function oe(t,e){Pe$1(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e);}var Ae=class extends Error{result;constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");}},Ne=class extends Error{result;constructor(){super("SkipAnimationSignal");}};var Re=t=>t instanceof X,Sn=1,X=class extends ge{id=Sn++;_priority=0;get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e));}get(){let e=k$1(this);return e&&e.getValue()}to(...e){return p.to(this,e)}interpolate(...e){return Jt(),p.to(this,e)}toJSON(){return this.get()}observerAdded(e){e==1&&this._attach();}observerRemoved(e){e==0&&this._detach();}_attach(){}_detach(){}_onChange(e,n=!1){$t(this,{type:"change",parent:this,value:e,idle:n});}_onPriorityChange(e){this.idle||qe$1.sort(this),$t(this,{type:"priority",parent:this,priority:e});}};var se=Symbol.for("SpringPhase"),bt=1,rt=2,ot=4,qe=t=>(t[se]&bt)>0,Q=t=>(t[se]&rt)>0,ye=t=>(t[se]&ot)>0,st=(t,e)=>e?t[se]|=rt|bt:t[se]&=~rt,it$1=(t,e)=>e?t[se]|=ot:t[se]&=~ot;var ue=class extends X{key;animation=new Le;queue;defaultProps={};_state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set};_pendingCalls=new Set;_lastCallId=0;_lastToId=0;_memoizedDuration=0;constructor(e,n){if(super(),!l$1.und(e)||!l$1.und(n)){let r=l$1.obj(e)?{...e}:{...n,from:e};l$1.und(r.default)&&(r.default=!0),this.start(r);}}get idle(){return !(Q(this)||this._state.asyncTo)||ye(this)}get goal(){return ve(this.animation.to)}get velocity(){let e=k$1(this);return e instanceof l?e.lastVelocity||0:e.getPayload().map(n=>n.lastVelocity||0)}get hasAnimated(){return qe(this)}get isAnimating(){return Q(this)}get isPaused(){return ye(this)}get isDelayed(){return this._state.delayed}advance(e){let n=!0,r=!1,o=this.animation,{toValues:s}=o,{config:i}=o,a=F$1(o.to);!a&&Pt(o.to)&&(s=ht$1(ve(o.to))),o.values.forEach((f,d$1)=>{if(f.done)return;let m=f.constructor==d?1:a?a[d$1].lastPosition:s[d$1],b=o.immediate,c=m;if(!b){if(c=f.lastPosition,i.tension<=0){f.done=!0;return}let P=f.elapsedTime+=e,l=o.fromValues[d$1],h=f.v0!=null?f.v0:f.v0=l$1.arr(i.velocity)?i.velocity[d$1]:i.velocity,g,x=i.precision||(l==m?.005:Math.min(1,Math.abs(m-l)*.001));if(l$1.und(i.duration))if(i.decay){let S=i.decay===!0?.998:i.decay,A=Math.exp(-(1-S)*P);c=l+h/(1-S)*(1-A),b=Math.abs(f.lastPosition-c)<=x,g=h*A;}else {g=f.lastVelocity==null?h:f.lastVelocity;let S=i.restVelocity||x/10,A=i.clamp?0:i.bounce,V=!l$1.und(A),_=l==m?f.v0>0:l<m,v,w=!1,C=1,$=Math.ceil(e/C);for(let L=0;L<$&&(v=Math.abs(g)>S,!(!v&&(b=Math.abs(m-c)<=x,b)));++L){V&&(w=c==m||c>m==_,w&&(g=-g*A,c=m));let N=-i.tension*1e-6*(c-m),y=-i.friction*.001*g,T=(N+y)/i.mass;g=g+T*C,c=c+g*C;}}else {let S=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,f.durationProgress>0&&(f.elapsedTime=i.duration*f.durationProgress,P=f.elapsedTime+=e)),S=(i.progress||0)+P/this._memoizedDuration,S=S>1?1:S<0?0:S,f.durationProgress=S),c=l+i.easing(S)*(m-l),g=(c-f.lastPosition)/e,b=S==1;}f.lastVelocity=g,Number.isNaN(c)&&(console.warn("Got NaN while animating:",this),b=!0);}a&&!a[d$1].done&&(b=!1),b?f.done=!0:n=!1,f.setValue(c,i.round)&&(r=!0);});let u=k$1(this),p=u.getValue();if(n){let f=ve(o.to);(p!==f||r)&&!i.decay?(u.setValue(f),this._onChange(f)):r&&i.decay&&this._onChange(p),this._stop();}else r&&this._onChange(p);}set(e){return n.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e);}),this}pause(){this._update({pause:!0});}resume(){this._update({pause:!1});}finish(){if(Q(this)){let{to:e,config:n$1}=this.animation;n.batchedUpdates(()=>{this._onStart(),n$1.decay||this._set(e,!1),this._stop();});}return this}update(e){return (this.queue||(this.queue=[])).push(e),this}start(e,n){let r;return l$1.und(e)?(r=this.queue||[],this.queue=[]):r=[l$1.obj(e)?e:{...n,to:e}],Promise.all(r.map(o=>this._update(o))).then(o=>be(this,o))}stop(e){let{to:n$1}=this.animation;return this._focus(this.get()),oe(this._state,e&&this._lastCallId),n.batchedUpdates(()=>this._stop(n$1,e)),this}reset(){this._update({reset:!0});}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1);}_prepareNode(e){let n=this.key||"",{to:r,from:o}=e;r=l$1.obj(r)?r[n]:r,(r==null||Ee(r))&&(r=void 0),o=l$1.obj(o)?o[n]:o,o==null&&(o=void 0);let s={to:r,from:o};return qe(this)||(e.reverse&&([r,o]=[o,r]),o=ve(o),l$1.und(o)?k$1(this)||this._set(r):this._set(o)),s}_update({...e},n){let{key:r,defaultProps:o}=this;e.default&&Object.assign(o,ne(e,(a,u)=>/^on/.test(u)?et(a,r):a)),_t(this,e,"onProps"),Ie(this,"onProps",e,this);let s=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let i=this._state;return Me(++this._lastCallId,{key:r,props:e,defaultProps:o,state:i,actions:{pause:()=>{ye(this)||(it$1(this,!0),yt$1(i.pauseQueue),Ie(this,"onPause",E(this,Ce(this,this.animation.to)),this));},resume:()=>{ye(this)&&(it$1(this,!1),Q(this)&&this._resume(),yt$1(i.resumeQueue),Ie(this,"onResume",E(this,Ce(this,this.animation.to)),this));},start:this._merge.bind(this,s)}}).then(a=>{if(e.loop&&a.finished&&!(n&&a.noop)){let u=at(e);if(u)return this._update(u,!0)}return a})}_merge(e,n$1,r){if(n$1.cancel)return this.stop(!0),r(q$1(this));let o=!l$1.und(e.to),s=!l$1.und(e.from);if(o||s)if(n$1.callId>this._lastToId)this._lastToId=n$1.callId;else return r(q$1(this));let{key:i,defaultProps:a,animation:u}=this,{to:p,from:f}=u,{to:d$1=p,from:m=f}=e;s&&!o&&(!n$1.default||l$1.und(d$1))&&(d$1=m),n$1.reverse&&([d$1,m]=[m,d$1]);let b=!bt$1(m,f);b&&(u.from=m),m=ve(m);let c=!bt$1(d$1,p);c&&this._focus(d$1);let P=Ee(n$1.to),{config:l}=u,{decay:h,velocity:g}=l;(o||s)&&(l.velocity=0),n$1.config&&!P&&gt(l,I$1(n$1.config,i),n$1.config!==a.config?I$1(a.config,i):void 0);let x=k$1(this);if(!x||l$1.und(d$1))return r(E(this,!0));let S=l$1.und(n$1.reset)?s&&!n$1.default:!l$1.und(m)&&te(n$1.reset,i),A=S?m:this.get(),V=me(d$1),_=l$1.num(V)||l$1.arr(V)||or(V),v=!P&&(!_||te(a.immediate||n$1.immediate,i));if(c){let L=Le$1(d$1);if(L!==x.constructor)if(v)x=this._set(V);else throw Error(`Cannot animate between ${x.constructor.name} and ${L.name}, as the "to" prop suggests`)}let w=x.constructor,C=Pt(d$1),$=!1;if(!C){let L=S||!qe(this)&&b;(c||L)&&($=bt$1(me(A),V),C=!$),(!bt$1(u.immediate,v)&&!v||!bt$1(l.decay,h)||!bt$1(l.velocity,g))&&(C=!0);}if($&&Q(this)&&(u.changed&&!S?C=!0:C||this._stop(p)),!P&&((C||Pt(p))&&(u.values=x.getPayload(),u.toValues=Pt(d$1)?null:w==d?[1]:ht$1(V)),u.immediate!=v&&(u.immediate=v,!v&&!S&&this._set(p)),C)){let{onRest:L}=u;Ve(_n,y=>_t(this,n$1,y));let N=E(this,Ce(this,p));yt$1(this._pendingCalls,N),this._pendingCalls.add(r),u.changed&&n.batchedUpdates(()=>{u.changed=!S,L?.(N,this),S?I$1(a.onRest,N):u.onStart?.(N,this);});}S&&this._set(A),P?r(De(n$1.to,n$1,this._state,this)):C?this._start():Q(this)&&!c?this._pendingCalls.add(r):r(nt(A));}_focus(e){let n=this.animation;e!==n.to&&(qt(this)&&this._detach(),n.to=e,qt(this)&&this._attach());}_attach(){let e=0,{to:n}=this.animation;Pt(n)&&(Gt(n,this),Re(n)&&(e=n.priority+1)),this.priority=e;}_detach(){let{to:e}=this.animation;Pt(e)&&Qt(e,this);}_set(e,n$1=!0){let r=ve(e);if(!l$1.und(r)){let o=k$1(this);if(!o||!bt$1(r,o.getValue())){let s=Le$1(r);!o||o.constructor!=s?D(this,s.create(r)):o.setValue(r),o&&n.batchedUpdates(()=>{this._onChange(r,n$1);});}}return k$1(this)}_onStart(){let e=this.animation;e.changed||(e.changed=!0,Ie(this,"onStart",E(this,Ce(this,e.to)),this));}_onChange(e,n){n||(this._onStart(),I$1(this.animation.onChange,e,this)),I$1(this.defaultProps.onChange,e,this),super._onChange(e,n);}_start(){let e=this.animation;k$1(this).reset(ve(e.to)),e.immediate||(e.fromValues=e.values.map(n=>n.lastPosition)),Q(this)||(st(this,!0),ye(this)||this._resume());}_resume(){p.skipAnimation?this.finish():qe$1.start(this);}_stop(e,n){if(Q(this)){st(this,!1);let r=this.animation;Ve(r.values,s=>{s.done=!0;}),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),$t(this,{type:"idle",parent:this});let o=n?q$1(this.get()):E(this.get(),Ce(this,e??r.to));yt$1(this._pendingCalls,o),r.changed&&(r.changed=!1,Ie(this,"onRest",o,this));}}};function Ce(t,e){let n=me(e),r=me(t.get());return bt$1(r,n)}function at(t,e=t.loop,n=t.to){let r=I$1(e);if(r){let o=r!==!0&&de(r),s=(o||t).reverse,i=!o||o.reset;return Pe({...t,loop:e,default:!1,pause:void 0,to:!s||Ee(n)?n:void 0,from:i?t.from:void 0,reset:i,...o})}}function Pe(t){let{to:e,from:n}=t=de(t),r=new Set;return l$1.obj(e)&&Vt(e,r),l$1.obj(n)&&Vt(n,r),t.keys=r.size?Array.from(r):null,t}function Ot(t){let e=Pe(t);return l$1.und(e.default)&&(e.default=ne(e)),e}function Vt(t,e){xt(t,(n,r)=>n!=null&&e.add(r));}var _n=["onStart","onRest","onChange","onPause","onResume"];function _t(t,e,n){t.animation[n]=e[n]!==ke(e,n)?et(e[n],t.key):void 0;}function Ie(t,e,...n){t.animation[e]?.(...n),t.defaultProps[e]?.(...n);}var Fn=["onStart","onChange","onRest"],kn=1,le=class{id=kn++;springs={};queue=[];ref;_flush;_initialProps;_lastAsyncId=0;_active=new Set;_changed=new Set;_started=!1;_item;_state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set};_events={onStart:new Map,onChange:new Map,onRest:new Map};constructor(e,n){this._onFrame=this._onFrame.bind(this),n&&(this._flush=n),e&&this.start({default:!0,...e});}get idle(){return !this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e;}get(){let e={};return this.each((n,r)=>e[r]=n.get()),e}set(e){for(let n in e){let r=e[n];l$1.und(r)||this.springs[n].set(r);}}update(e){return e&&this.queue.push(Pe(e)),this}start(e){let{queue:n}=this;return e?n=ht$1(e).map(Pe):this.queue=[],this._flush?this._flush(this,n):(jt(this,n),ze(this,n))}stop(e,n){if(e!==!!e&&(n=e),n){let r=this.springs;Ve(ht$1(n),o=>r[o].stop(!!e));}else oe(this._state,this._lastAsyncId),this.each(r=>r.stop(!!e));return this}pause(e){if(l$1.und(e))this.start({pause:!0});else {let n=this.springs;Ve(ht$1(e),r=>n[r].pause());}return this}resume(e){if(l$1.und(e))this.start({pause:!1});else {let n=this.springs;Ve(ht$1(e),r=>n[r].resume());}return this}each(e){xt(this.springs,e);}_onFrame(){let{onStart:e,onChange:n,onRest:r}=this._events,o=this._active.size>0,s=this._changed.size>0;(o&&!this._started||s&&!this._started)&&(this._started=!0,Pe$1(e,([u,p])=>{p.value=this.get(),u(p,this,this._item);}));let i=!o&&this._started,a=s||i&&r.size?this.get():null;s&&n.size&&Pe$1(n,([u,p])=>{p.value=a,u(p,this,this._item);}),i&&(this._started=!1,Pe$1(r,([u,p])=>{p.value=a,u(p,this,this._item);}));}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;n.onFrame(this._onFrame);}};function ze(t,e){return Promise.all(e.map(n=>wt(t,n))).then(n=>be(t,n))}async function wt(t,e,n$1){let{keys:r,to:o,from:s,loop:i,onRest:a,onResolve:u}=e,p=l$1.obj(e.default)&&e.default;i&&(e.loop=!1),o===!1&&(e.to=null),s===!1&&(e.from=null);let f=l$1.arr(o)||l$1.fun(o)?o:void 0;f?(e.to=void 0,e.onRest=void 0,p&&(p.onRest=void 0)):Ve(Fn,P=>{let l=e[P];if(l$1.fun(l)){let h=t._events[P];e[P]=({finished:g,cancelled:x})=>{let S=h.get(l);S?(g||(S.finished=!1),x&&(S.cancelled=!0)):h.set(l,{value:null,finished:g||!1,cancelled:x||!1});},p&&(p[P]=e[P]);}});let d=t._state;e.pause===!d.paused?(d.paused=e.pause,yt$1(e.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(e.pause=!0);let m=(r||Object.keys(t.springs)).map(P=>t.springs[P].start(e)),b=e.cancel===!0||ke(e,"cancel")===!0;(f||b&&d.asyncId)&&m.push(Me(++t._lastAsyncId,{props:e,state:d,actions:{pause:Y,resume:Y,start(P,l){b?(oe(d,t._lastAsyncId),l(q$1(t))):(P.onRest=a,l(De(f,P,d,t)));}}})),d.paused&&await new Promise(P=>{d.resumeQueue.add(P);});let c=be(t,await Promise.all(m));if(i&&c.finished&&!(n$1&&c.noop)){let P=at(e,i,o);if(P)return jt(t,[P]),wt(t,P,!0)}return u&&n.batchedUpdates(()=>u(c,t,t.item)),c}function _e(t,e){let n={...t.springs};return e&&Ve(ht$1(e),r=>{l$1.und(r.keys)&&(r=Pe(r)),l$1.obj(r.to)||(r={...r,to:void 0}),Mt(n,r,o=>Lt(o));}),pt(t,n),n}function pt(t,e){xt(e,(n,r)=>{t.springs[r]||(t.springs[r]=n,Gt(n,t));});}function Lt(t,e){let n=new ue;return n.key=t,e&&Gt(n,e),n}function Mt(t,e,n){e.keys&&Ve(e.keys,r=>{(t[r]||(t[r]=n(r)))._prepareNode(e);});}function jt(t,e){Ve(e,n=>{Mt(t.springs,n,r=>Lt(r,t));});}var H=({children:t,...e})=>{let n=useContext(Ge),r=e.pause||!!n.pause,o=e.immediate||!!n.immediate;e=Lr(()=>({pause:r,immediate:o}),[r,o]);let{Provider:s}=Ge;return React.createElement(s,{value:e},t)},Ge=wn(H,{});H.Provider=Ge.Provider;H.Consumer=Ge.Consumer;function wn(t,e){return Object.assign(t,React.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var fe=()=>{let t=[],e=function(r){er();let o=[];return Ve(t,(s,i)=>{if(l$1.und(r))o.push(s.start());else {let a=n(r,s,i);a&&o.push(s.start(a));}}),o};e.current=t,e.add=function(r){t.includes(r)||t.push(r);},e.delete=function(r){let o=t.indexOf(r);~o&&t.splice(o,1);},e.pause=function(){return Ve(t,r=>r.pause(...arguments)),this},e.resume=function(){return Ve(t,r=>r.resume(...arguments)),this},e.set=function(r){Ve(t,(o,s)=>{let i=l$1.fun(r)?r(s,o):r;i&&o.set(i);});},e.start=function(r){let o=[];return Ve(t,(s,i)=>{if(l$1.und(r))o.push(s.start());else {let a=this._getProps(r,s,i);a&&o.push(s.start(a));}}),o},e.stop=function(){return Ve(t,r=>r.stop(...arguments)),this},e.update=function(r){return Ve(t,(o,s)=>o.update(this._getProps(r,o,s))),this};let n=function(r,o,s){return l$1.fun(r)?r(s,o):r};return e._getProps=n,e};function He(t,e,n){let r=l$1.fun(e)&&e;r&&!n&&(n=[]);let o=useMemo(()=>r||arguments.length==3?fe():void 0,[]),s=useRef(0),i=Mr(),a=useMemo(()=>({ctrls:[],queue:[],flush(h,g){let x=_e(h,g);return s.current>0&&!a.queue.length&&!Object.keys(x).some(A=>!h.springs[A])?ze(h,g):new Promise(A=>{pt(h,x),a.queue.push(()=>{A(ze(h,g));}),i();})}}),[]),u=useRef([...a.ctrls]),p=[],f=Ur(t)||0;useMemo(()=>{Ve(u.current.slice(t,f),h=>{xe(h,o),h.stop(!0);}),u.current.length=t,d(f,t);},[t]),useMemo(()=>{d(0,Math.min(f,t));},n);function d(h,g){for(let x=h;x<g;x++){let S=u.current[x]||(u.current[x]=new le(null,a.flush)),A=r?r(x,S):e[x];A&&(p[x]=Ot(A));}}let m=u.current.map((h,g)=>_e(h,p[g])),b=useContext(H),c=Ur(b),P=b!==c&&Ue(b);Q$1(()=>{s.current++,a.ctrls=u.current;let{queue:h}=a;h.length&&(a.queue=[],Ve(h,g=>g())),Ve(u.current,(g,x)=>{o?.add(g),P&&g.start({default:b});let S=p[x];S&&(he(g,S.ref),g.ref?g.queue.push(S):g.start(S));});}),$r(()=>()=>{Ve(a.ctrls,h=>h.stop(!0));});let l=m.map(h=>({...h}));return o?[l,o]:l}function J(t,e){let n=l$1.fun(t),[[r],o]=He(1,n?t:[t],n?e||[]:e);return n||arguments.length==2?[r,o]:r}var W=class extends X{constructor(n,r){super();this.source=n;this.calc=W$1(...r);let o=this._get(),s=Le$1(o);D(this,s.create(o));}key;idle=!0;calc;_active=new Set;advance(n){let r=this._get(),o=this.get();bt$1(r,o)||(k$1(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&Yt(this._active)&&ct(this);}_get(){let n=l$1.arr(this.source)?this.source.map(ve):ht$1(ve(this.source));return this.calc(...n)}_start(){this.idle&&!Yt(this._active)&&(this.idle=!1,Ve(F$1(this),n=>{n.done=!1;}),p.skipAnimation?(n.batchedUpdates(()=>this.advance()),ct(this)):qe$1.start(this));}_attach(){let n=1;Ve(ht$1(this.source),r=>{Pt(r)&&Gt(r,this),Re(r)&&(r.idle||this._active.add(r),n=Math.max(n,r.priority+1));}),this.priority=n,this._start();}_detach(){Ve(ht$1(this.source),n=>{Pt(n)&&Qt(n,this);}),this._active.clear(),ct(this);}eventObserved(n){n.type=="change"?n.idle?this.advance():(this._active.add(n.parent),this._start()):n.type=="idle"?this._active.delete(n.parent):n.type=="priority"&&(this.priority=ht$1(this.source).reduce((r,o)=>Math.max(r,(Re(o)?o.priority:0)+1),0));}};function vr(t){return t.idle!==!1}function Yt(t){return !t.size||Array.from(t).every(vr)}function ct(t){t.idle||(t.idle=!0,Ve(F$1(t),e=>{e.done=!0;}),$t(t,{type:"idle",parent:t}));}p.assign({createStringInterpolator:Xt,to:(t,e)=>new W(t,e)});

var k=/^--/;function I(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!k.test(t)&&!(c.hasOwnProperty(t)&&c[t])?e+"px":(""+e).trim()}var v={};function V(t,e){if(!t.nodeType||!t.setAttribute)return !1;let r=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",{style:i,children:s,scrollTop:u,scrollLeft:l,viewBox:a,...n}=e,d=Object.values(n),m=Object.keys(n).map(o=>r||t.hasAttribute(o)?o:v[o]||(v[o]=o.replace(/([A-Z])/g,p=>"-"+p.toLowerCase())));s!==void 0&&(t.textContent=s);for(let o in i)if(i.hasOwnProperty(o)){let p=I(o,i[o]);k.test(o)?t.style.setProperty(o,p):t.style[o]=p;}m.forEach((o,p)=>{t.setAttribute(o,d[p]);}),u!==void 0&&(t.scrollTop=u),l!==void 0&&(t.scrollLeft=l),a!==void 0&&t.setAttribute("viewBox",a);}var c={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),L=["Webkit","Ms","Moz","O"];c=Object.keys(c).reduce((t,e)=>(L.forEach(r=>t[F(r,e)]=t[e]),t),c);var _=/^(matrix|translate|scale|rotate|skew)/,$=/^(translate)/,G=/^(rotate|skew)/,y=(t,e)=>l$1.num(t)&&t!==0?t+e:t,h=(t,e)=>l$1.arr(t)?t.every(r=>h(r,e)):l$1.num(t)?t===e:parseFloat(t)===e,g=class extends u{constructor({x:e,y:r,z:i,...s}){let u=[],l=[];(e||r||i)&&(u.push([e||0,r||0,i||0]),l.push(a=>[`translate3d(${a.map(n=>y(n,"px")).join(",")})`,h(a,0)])),xt(s,(a,n)=>{if(n==="transform")u.push([a||""]),l.push(d=>[d,d===""]);else if(_.test(n)){if(delete s[n],l$1.und(a))return;let d=$.test(n)?"px":G.test(n)?"deg":"";u.push(ht$1(a)),l.push(n==="rotate3d"?([m,o,p,O])=>[`rotate3d(${m},${o},${p},${y(O,d)})`,h(O,0)]:m=>[`${n}(${m.map(o=>y(o,d)).join(",")})`,h(m,n.startsWith("scale")?1:0)]);}}),u.length&&(s.transform=new x(u,l)),super(s);}},x=class extends ge{constructor(r,i){super();this.inputs=r;this.transforms=i;}_value=null;get(){return this._value||(this._value=this._get())}_get(){let r="",i=!0;return Ve(this.inputs,(s,u)=>{let l=ve(s[0]),[a,n]=this.transforms[u](l$1.arr(l)?l:s.map(ve));r+=" "+a,i=i&&n;}),i?"none":r}observerAdded(r){r==1&&Ve(this.inputs,i=>Ve(i,s=>Pt(s)&&Gt(s,this)));}observerRemoved(r){r==0&&Ve(this.inputs,i=>Ve(i,s=>Pt(s)&&Qt(s,this)));}eventObserved(r){r.type=="change"&&(this._value=null),$t(this,r);}};var C=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];p.assign({batchedUpdates:unstable_batchedUpdates,createStringInterpolator:Xt,colors:It});var q=Ke(C,{applyAnimatedValues:V,createAnimatedStyle:t=>new g(t),getComponentProps:({scrollTop:t,scrollLeft:e,...r})=>r}),it=q.animated;

var errorView = {
    title: "401 Error",
    message: "This is likely a problem with your OpenAI API key. Check if your api key is still enabled.",
};
var AiAssistant = function (_a) {
    var title = _a.title, itemList = _a.itemList, color = _a.color, image = _a.image, showPopUp = _a.showPopUp, showButton = _a.showButton, placeholder = _a.placeholder, selectedTitle = _a.selectedTitle, receiveInsights = _a.receiveInsights; _a.receiveQueryResponse;
    var engine = new MyDataListEngine();
    if (!engine.validateKeys()) {
        return React__default.createElement(EnvironmentError, { color: "#FF0000" });
    }
    var _b = useState(selectedTitle), selectedTitleData = _b[0], setSelectedTitleData = _b[1];
    var _c = useState(""); _c[0]; _c[1];
    var _d = useState(false), showWidget = _d[0], setShowWidget = _d[1];
    var _e = useState(false), showDetails = _e[0], setShowDetails = _e[1];
    var _f = useState(false), showEnvError = _f[0]; _f[1];
    var _g = useState(false), showStatusError = _g[0], setShowStatusError = _g[1];
    var _h = useState(false), updateItemdata = _h[0], setUpdateItemData = _h[1];
    var _j = useState([]), itemDataList = _j[0], setItemDataList = _j[1];
    var _k = useState(0), selectedItem = _k[0], setSelectedItem = _k[1];
    var _l = useState(false), showDiv = _l[0], setShowDiv = _l[1];
    var _m = useState(false), showArrowButton = _m[0], setShowArrowButton = _m[1];
    var _o = useState(0), divHeight = _o[0], setDivHeight = _o[1];
    var _p = useState([]), insightList = _p[0], setInsightList = _p[1];
    var _q = useState([]), failedRequestIndexes = _q[0], setFailedRequestIndexes = _q[1];
    var _r = useState([]), errorPrompts = _r[0], setErrorPrompts = _r[1];
    var _s = useState(false), resendRequests = _s[0], setResendRequests = _s[1];
    var _t = useState([]), prompts = _t[0], setPrompts = _t[1];
    var ref = useRef();
    var refPopUp = useRef(null);
    var refBackButton = useRef(null);
    var DEAFULT_HEIGHT = 200;
    useEffect(function () {
        var once = (function () {
            return function () {
                getInsights(itemList.map(function (x) { return x.payload; }), 0);
            };
        })();
        once();
    }, [itemList]);
    // Create a useEffect hook that fills itemDataList wiht ItemData objects from the itemList
    useEffect(function () {
        var tempItemDataList = [];
        itemList.forEach(function (item) {
            tempItemDataList.push({
                title: item.title,
                subtitle: item.subtitle,
                prompt: item.prompt,
                payload: item.payload,
                content: "",
            });
        });
        setItemDataList(tempItemDataList);
        setUpdateItemData(!updateItemdata);
    }, [itemList, selectedTitle]);
    // Create a useEffect hook that fills insightList with insightList coming from api response
    useEffect(function () {
        if (insightList.length && itemDataList.length) {
            insightList.forEach(function (item, index) {
                var _a, _b, _c;
                if ((_a = Object.keys(itemDataList[item === null || item === void 0 ? void 0 : item.index])) === null || _a === void 0 ? void 0 : _a.length) {
                    itemDataList[item === null || item === void 0 ? void 0 : item.index].content = (_c = (_b = item === null || item === void 0 ? void 0 : item.choices[0]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.content;
                }
            });
            if (itemList.length === insightList.length) {
                var convertInsightsJson = Object.assign.apply(Object, __spreadArray([{}], insightList.map(function (x) {
                    var _a;
                    var _b, _c;
                    return (_a = {},
                        _a[x.id] = (_c = (_b = x.choices[0]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.content,
                        _a);
                }), false));
                receiveInsights(convertInsightsJson);
            }
            setItemDataList(itemDataList);
            setUpdateItemData(!updateItemdata);
        }
    }, [insightList]);
    // Create a useEffect hook that fills insightList with insightList coming from api response
    useEffect(function () {
        if (insightList.length && itemDataList.length) {
            insightList.forEach(function (item, index) {
                var _a, _b, _c;
                if ((_a = Object.keys(itemDataList[item === null || item === void 0 ? void 0 : item.index])) === null || _a === void 0 ? void 0 : _a.length) {
                    itemDataList[item === null || item === void 0 ? void 0 : item.index].content = (_c = (_b = item === null || item === void 0 ? void 0 : item.choices[0]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.content;
                }
            });
            if (itemList.length === insightList.length) {
                var convertInsightsJson = Object.assign.apply(Object, __spreadArray([{}], insightList.map(function (x) {
                    var _a;
                    var _b, _c;
                    return (_a = {},
                        _a[x.id] = (_c = (_b = x.choices[0]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.content,
                        _a);
                }), false));
                receiveInsights(convertInsightsJson);
            }
            setItemDataList(itemDataList);
            setUpdateItemData(!updateItemdata);
        }
    }, [insightList]);
    useEffect(function () {
        onClickPopupButton();
    }, [showWidget]);
    useEffect(function () {
        setShowWidget(showPopUp || false);
    }, [showPopUp]);
    useEffect(function () {
        if ((errorPrompts === null || errorPrompts === void 0 ? void 0 : errorPrompts.length) && showWidget) {
            setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getInsights(errorPrompts, selectedItem)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, 7000);
        }
    }, [resendRequests]);
    useEffect(function () {
        setSelectedTitleData(selectedTitle);
        if (selectedTitle) {
            setInsightList([]);
            var index_1 = itemList.findIndex(function (x) { return x.subtitle === selectedTitle; });
            if (showWidget) {
                (function () { return __awaiter(void 0, void 0, void 0, function () {
                    var questionPrompts;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, validateApiKey()];
                            case 1:
                                if (!_a.sent()) return [3 /*break*/, 3];
                                questionPrompts = [];
                                questionPrompts.push(selectedTitle);
                                return [4 /*yield*/, getInsights(questionPrompts, index_1)];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                setShowStatusError(true);
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); })();
            }
            else {
                setShowWidget(true);
            }
            setShowDetails(true);
            if (index_1 === -1) {
                setSelectedItem(0);
            }
            else {
                setSelectedItem(index_1);
            }
        }
    }, [selectedTitle]);
    useEffect(function () {
        var _a;
        if (!((_a = itemDataList[selectedItem]) === null || _a === void 0 ? void 0 : _a.content)) {
            setDivHeight(DEAFULT_HEIGHT);
        }
    }, [itemDataList[selectedItem]]);
    var springProps = J({
        height: showDiv ? "".concat(divHeight, "px") : "0",
        opacity: showDiv ? 1 : 0,
        overflow: "hidden",
        config: { tension: 60, friction: 10 },
    });
    var arrowButtonSpringProps = J({
        opacity: showArrowButton ? 1 : 0,
        display: showArrowButton ? "inline-block" : "none",
        marginRight: showArrowButton ? "0" : "-34px",
        trans: [0, 1, 2],
    });
    var onClickList = function (title) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            setShowDetails(true);
            setTimeout(function () {
                setShowArrowButton(true);
            }, 1700);
            try {
                setDivHeight(DEAFULT_HEIGHT);
                itemDataList[selectedItem].content =
                    (_c = (_b = (_a = insightList[selectedItem]) === null || _a === void 0 ? void 0 : _a.choices[0]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.content;
            }
            catch (error) {
                setDivHeight(DEAFULT_HEIGHT);
                console.log(error);
            }
            return [2 /*return*/];
        });
    }); };
    var onSetHeight = function (height) {
        setDivHeight(height);
    };
    var onClickPopupButton = function () { return __awaiter(void 0, void 0, void 0, function () {
        var timer_1, questionPrompts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!selectedTitleData && !showStatusError) {
                        setDivHeight(400);
                    }
                    if (!!showWidget) return [3 /*break*/, 1];
                    setShowDiv(false);
                    setInsightList([]);
                    if (refPopUp.current) {
                        refPopUp.current.className = "main-popup-container-animate-end";
                        timer_1 = setTimeout(function () {
                            if (!selectedTitleData) {
                                setShowDetails(false);
                            }
                            else {
                                setSelectedTitleData("");
                            }
                        }, 500);
                        return [2 /*return*/, function () { return clearTimeout(timer_1); }];
                    }
                    return [3 /*break*/, 5];
                case 1:
                    setShowDiv(true);
                    if (refPopUp.current) {
                        refPopUp.current.className = "main-popup-container-animate-start";
                    }
                    questionPrompts = [];
                    if (selectedTitleData) {
                        questionPrompts.push(selectedTitle);
                    }
                    else {
                        questionPrompts = itemList.map(function (x) { return x.payload; });
                    }
                    setPrompts(questionPrompts);
                    return [4 /*yield*/, validateApiKey()];
                case 2:
                    if (!_a.sent()) return [3 /*break*/, 4];
                    return [4 /*yield*/, getInsights(questionPrompts, selectedItem)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    setShowStatusError(true);
                    setDivHeight(DEAFULT_HEIGHT);
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // make a hook that makes sure getInsights is called only once
    var _u = useState(false), calledInsights = _u[0], setCalledInsights = _u[1];
    var getInsights = function (promptsData, selectedIndex) { return __awaiter(void 0, void 0, void 0, function () {
        var response, failedArrIndexes_1, filteredResponse_1, newPromptsData_1, newPromtData_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!calledInsights) return [3 /*break*/, 2];
                    console.log("getInsights");
                    response = void 0;
                    return [4 /*yield*/, engine.generateTextList(promptsData)];
                case 1:
                    response = _a.sent();
                    failedArrIndexes_1 = [];
                    filteredResponse_1 = [];
                    response.forEach(function (x, index) {
                        if (x.error) {
                            failedArrIndexes_1.push(failedRequestIndexes.length ? failedRequestIndexes[index] : index);
                        }
                    });
                    setFailedRequestIndexes(failedArrIndexes_1);
                    if (response.filter(function (x) { return !x.error; }).length) {
                        filteredResponse_1 = response.map(function (x, i) {
                            return __assign(__assign({}, x), { index: selectedTitleData ? selectedIndex : failedRequestIndexes[i] || i });
                        });
                    }
                    else {
                        filteredResponse_1 = response.map(function (x, i) {
                            return __assign(__assign({}, x), { index: selectedTitleData ? selectedIndex : i });
                        });
                    }
                    setInsightList(function (prev) { return __spreadArray(__spreadArray([], prev, true), filteredResponse_1.filter(function (x) { return !x.error; }), true); });
                    newPromptsData_1 = prompts.length ? prompts : promptsData;
                    newPromtData_1 = [];
                    filteredResponse_1.forEach(function (x, i) {
                        if (x.error && x.error.message.includes("Rate limit reached")) {
                            if (newPromptsData_1[i]) {
                                newPromtData_1.push(newPromptsData_1[i]);
                            }
                        }
                    });
                    setPrompts(newPromtData_1);
                    setErrorPrompts(newPromtData_1);
                    if (newPromtData_1.length) {
                        setResendRequests(!resendRequests);
                    }
                    setCalledInsights(true);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var validateApiKey = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.openai.com/v1/models", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(engine.openAIKey),
                        },
                    })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, (res === null || res === void 0 ? void 0 : res.status) === 401 ? false : true];
            }
        });
    }); };
    var onClickBackButton = function () {
        setShowDetails(true);
        setTimeout(function () {
            setDivHeight(400);
        }, 400);
        if (showDetails) {
            if (refBackButton.current) {
                refBackButton.current.className =
                    "ai-assistant-main-popup-header-back-button-style-end";
                ref.current.log();
                setShowArrowButton(false);
                var timer_2 = setTimeout(function () {
                    setShowDetails(false);
                }, 500);
                return function () { return clearTimeout(timer_2); };
            }
        }
        else {
            setShowArrowButton(false);
            setShowDetails(true);
        }
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: "ai-assistant-main-container" },
            showButton && (React__default.createElement(Button, { style: { backgroundColor: color }, className: "main-popup-button", onClick: function () {
                    setSelectedTitleData("");
                    setShowWidget(!showWidget);
                }, child: showWidget ? (React__default.createElement(CrossIcon, { color: "#ffffff" })) : (React__default.createElement("img", { src: image, alt: "img", width: "32px", height: "32px" })) })),
            React__default.createElement(it.div, { style: springProps, ref: refPopUp, id: "tunnel", className: "main-popup-container-animate-start" },
                showEnvError && React__default.createElement(EnvironmentError, { color: color }),
                showStatusError && (React__default.createElement(InvalidApiKeyError, { color: color, errorView: errorView })),
                !showEnvError && !showStatusError && (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("div", { className: "popup-header-container", style: { borderBottomColor: color } },
                        React__default.createElement(it.button, { style: arrowButtonSpringProps, ref: refBackButton, onClick: function () { return onClickBackButton(); }, className: "header-back-button-style" },
                            React__default.createElement(ArrowRightIcon, { color: color })),
                        React__default.createElement("div", { className: "header-text-container" },
                            React__default.createElement(Text, { className: "header-text-style", label: title.toLowerCase() }))),
                    React__default.createElement("div", { className: "main-item-list-container" }, showDetails ? (React__default.createElement(ItemDetail, { id: "detailif", ref: ref, color: color, itemData: itemDataList[selectedItem], updateItemData: updateItemdata, onSetHeight: onSetHeight, placeholder: placeholder })) : (itemList.map(function (item, index) { return (React__default.createElement(ListItem, { item: item, key: index, onClickList: function () {
                            onClickList(item.title);
                            setSelectedItem(index);
                        }, color: color })); })))))))));
};

export { AiAssistant };
