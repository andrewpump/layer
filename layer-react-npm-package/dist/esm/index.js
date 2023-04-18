import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react';
import axios from 'axios';

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

var css_248z$6 = ".text-main-style {\n  display: block;\n  margin-block-start: 0em;\n  margin-block-end: 0em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  font-family: Helvetica, Arial, sans-serif;\n  line-height: 1.15;\n}";
styleInject(css_248z$6);

var Text = function (_a) {
    var label = _a.label, className = _a.className, props = __rest(_a, ["label", "className"]);
    return (React.createElement("p", __assign({ className: "text-main-style ".concat(className) }, props), label));
};

var css_248z$5 = ".button-component-main-style {\n  border: none;\n  outline: none;\n  padding: 0px;\n  cursor: pointer;\n}";
styleInject(css_248z$5);

var Button = function (_a) {
    var child = _a.child, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["child", "className"]);
    return (React.createElement("button", __assign({ className: "button-component-main-style ".concat(className) }, props), child));
};

var css_248z$4 = ".ai-assistant-list-item-main-container {\n  margin-bottom: 12px;\n}\n.ai-assistant-list-item-main-container .container {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n}\n.ai-assistant-list-item-main-container .text-container {\n  display: flex;\n  flex: 1 1;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.ai-assistant-list-item-main-container .title-text-style {\n  font-weight: 700;\n  font-size: 16px;\n  color: #232427;\n  margin-bottom: 8px;\n}\n.ai-assistant-list-item-main-container .subtitle-text-style {\n  font-weight: 400;\n  font-size: 16px;\n  color: #232427;\n}";
styleInject(css_248z$4);

var ArrowForwardIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#000000' : _b, props = __rest(_a, ["color"]);
    return (React.createElement("svg", __assign({ width: "9", height: "14", viewBox: "0 0 9 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M1.35008 13.6667L0.166748 12.4833L5.65008 6.99999L0.166748 1.51666L1.35008 0.333328L8.01675 6.99999L1.35008 13.6667Z", fill: color === "#000000" ? "#000000" : color })));
};

var ListItem = function (_a) {
    var item = _a.item, onClickList = _a.onClickList, color = _a.color;
    return (React.createElement(Button, { onClick: onClickList, style: { backgroundColor: "".concat(color, "18") }, className: "ai-assistant-list-item-main-container", child: React.createElement("div", { className: "container" },
            React.createElement("div", { className: "text-container" },
                React.createElement(Text, { className: "title-text-style", label: item.title }),
                React.createElement(Text, { className: "subtitle-text-style", label: item.subtitle })),
            React.createElement(ArrowForwardIcon, { color: color })) }));
};

var css_248z$3 = ".title-text-style {\n  font-weight: 700;\n  font-size: 16px;\n  color: #232427;\n  margin-bottom: 8px;\n}\n\n.subtitle-text-style {\n  font-weight: 400;\n  font-size: 16px;\n  color: #232427;\n}\n\n.detail-text-style {\n  font-weight: 400;\n  font-size: 14px;\n  color: #232427;\n}";
styleInject(css_248z$3);

var css_248z$2 = ".ai-assistant-item-details-main-container {\n  background-color: #f3f1ff;\n  margin-bottom: 12px;\n  overflow: scroll;\n  overflow-x: hidden;\n  animation: animateOpen 0.5s;\n  transform-origin: top;\n  animation-timing-function: ease-in;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n@keyframes animateOpen {\n  from {\n    transform: scaleY(0);\n  }\n  to {\n    transform: scaleY(1);\n  }\n}\n.ai-assistant-item-details-main-container::-webkit-scrollbar {\n  display: none; /* Hide scrollbar for Chrome, Safari and Opera */\n}\n\n.ai-assistant-item-details-main-container-end-animation {\n  background-color: #f3f1ff;\n  margin-bottom: 12px;\n  overflow: scroll;\n  overflow-x: hidden;\n  animation: animateClose 0.5s;\n  transform-origin: top;\n  animation-timing-function: ease;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n@keyframes animateClose {\n  from {\n    transform: scaleY(1);\n  }\n  to {\n    transform: scaleY(0);\n  }\n}\n.ai-assistant-item-details-main-container-end-animation::-webkit-scrollbar {\n  display: none; /* Hide scrollbar for Chrome, Safari and Opera */\n}\n\n.ai-assistant-item-details-container {\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n}\n\n.ai-assistant-item-details-heading-text-container {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  border-bottom: 1px solid #7b6cf3;\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n}";
styleInject(css_248z$2);

var ItemDetail = forwardRef(function (_a, ref) {
    var color = _a.color; _a.id;
    var refForDiv = useRef(null);
    useImperativeHandle(ref, function () { return ({
        log: function () {
            if (refForDiv.current) {
                refForDiv.current.className =
                    "ai-assistant-item-details-main-container-end-animation";
            }
        },
    }); });
    return (React.createElement("div", { ref: refForDiv, style: { backgroundColor: "".concat(color, "18") }, className: "ai-assistant-item-details-main-container" },
        React.createElement("div", { className: "ai-assistant-item-details-container" },
            React.createElement("div", { style: { borderBottomColor: color }, className: "ai-assistant-item-details-heading-text-container " },
                React.createElement(Text, { className: "title-text-style", label: "Purchase More:" }),
                React.createElement(Text, { className: "subtitle-text-style", label: "PRINGLES SOUR CREAM & ONION PO" })),
            React.createElement(Text, { className: "detail-text-style", label: 'The policy action recommended for the product "PRINGLES SOUR CREAM & ONION PO" is to "Purchase more product" due to low inventory levels. The target inventory for the product is 4,982, but the current inventory available is only 4 units which is significantly low. The available weekly inventory on hand is estimated to be 4,929.6 units, with a monthly demand estimated to be 1,190 units. In the last 4 weeks, the product has had a demand of 5,057 units, an amount which is greater than the available inventory. Furthermore, based on the ABC classification, this product is classified as "A", which means high consumption and therefore requires adequate stocking.Based on this information, purchasing more product should be done to prevent understocking and ensure that the available inventory meets demand.' }))));
});

var CrossIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#000000" : _b, props = __rest(_a, ["color"]);
    return (React.createElement("svg", __assign({ width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M2.8 28L0 25.2L11.2 14L0 2.8L2.8 0L14 11.2L25.2 0L28 2.8L16.8 14L28 25.2L25.2 28L14 16.8L2.8 28Z", fill: color === "#000000" ? "#000000" : color })));
};

var ArrowRightIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#000000' : _b, props = __rest(_a, ["color"]);
    return (React.createElement("svg", __assign({ width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M10.9997 21.6667L0.333008 11L10.9997 0.333328L12.8997 2.19999L5.43301 9.66666H21.6663V12.3333H5.43301L12.8997 19.8L10.9997 21.6667Z", fill: color === "#000000" ? "#000000" : color })));
};

var css_248z$1 = ".ai-assistant-main-container {\n  position: fixed;\n  bottom: 35px;\n  right: 30px;\n}\n.ai-assistant-main-container .main-popup-button {\n  height: 80px;\n  width: 80px;\n  border-radius: 360px;\n  outline: none;\n  border: none;\n  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);\n}\n.ai-assistant-main-container .main-popup-container, .ai-assistant-main-container .main-popup-container-animate-end, .ai-assistant-main-container .main-popup-container-animate-start {\n  position: absolute;\n  bottom: 95px;\n  width: 436px;\n  right: 0px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  overflow: hidden;\n  animation: mymove 0.7s;\n  transition: transform 3s ease-out;\n  transform: scaleY(1);\n}\n.ai-assistant-main-container .main-popup-container-animate-start {\n  height: auto;\n  max-height: 400px;\n  animation: mymove 0.8s;\n  transform-origin: bottom;\n  animation-timing-function: ease;\n}\n.ai-assistant-main-container .main-popup-container-animate-end {\n  height: 0px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  animation: mymove2 0.8s;\n  transform-origin: bottom;\n  animation-timing-function: ease-out;\n}\n@keyframes mymove {\n  from {\n    height: 0px;\n    transform: scaleY(0);\n  }\n  to {\n    height: auto;\n    transform: scaleY(1);\n  }\n}\n@keyframes mymove2 {\n  from {\n    height: auto;\n    transform: scaleY(1);\n  }\n  to {\n    height: 0px;\n    transform: scaleY(0);\n  }\n}\n.ai-assistant-main-container .popup-header-container {\n  display: flex;\n  border-bottom: 4px solid;\n  justify-content: flex-start;\n  align-items: center;\n  padding-bottom: 14px;\n}\n.ai-assistant-main-container .popup-header-container .header-back-button-style {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  height: 32px;\n  width: 32px;\n  margin-right: 16px;\n  animation: mymove3 0.8s;\n  overflow: hidden;\n}\n.ai-assistant-main-container .popup-header-container .header-text-container {\n  min-height: 32px;\n}\n.ai-assistant-main-container .popup-header-container .header-text-container .header-text-style {\n  font-weight: 700;\n  font-size: 24px;\n  color: #232427;\n}\n.ai-assistant-main-container .ai-assistant-main-popup-header-back-button-style-end {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  height: 32px;\n  width: 32px;\n  margin-right: 16px;\n  animation: mymove4 0.8s;\n  overflow: hidden;\n}\n@keyframes mymove3 {\n  from {\n    width: 0px;\n    margin-right: 0px;\n  }\n  to {\n    width: 32px;\n    margin-right: 16px;\n  }\n}\n@keyframes mymove4 {\n  from {\n    width: 32px;\n    margin-right: 16px;\n  }\n  to {\n    width: 0px;\n    margin-right: 0px;\n  }\n}\n.ai-assistant-main-container .main-item-list-container {\n  max-height: calc(100vh - 260px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  padding-top: 12px;\n  transition: transform 8s ease-out;\n  transform: scaleY(1);\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.ai-assistant-main-container .main-item-list-container::-webkit-scrollbar {\n  display: none; /* Hide scrollbar for Chrome, Safari and Opera */\n}";
styleInject(css_248z$1);

var css_248z = ".environment-error-main-container-style {\n  position: absolute;\n  inset: 0px 0px 0px 0px;\n  background: rgba(0, 0, 0, 0.86);\n  padding: 24px;\n}\n.environment-error-main-container-style .top-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 20px;\n}\n.environment-error-main-container-style .heading-text-style {\n  font-weight: 700;\n  font-size: 26px;\n}\n.environment-error-main-container-style .bottom-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #1e1e1e;\n  padding: 16px;\n}\n.environment-error-main-container-style .text-style {\n  font-weight: 400;\n  font-size: 16px;\n  color: #969696;\n}";
styleInject(css_248z);

var EnvironmentError = function (_a) {
    _a.color;
    return (React.createElement("div", { className: "environment-error-main-container-style" },
        React.createElement("div", { className: "top-container" },
            React.createElement(Text, { className: "heading-text-style", label: "Message for Developer" })),
        React.createElement("div", { className: "bottom-container" },
            React.createElement(Text, { className: "text-style", label: "Your Application is missing the following API/SDK keys in your process file (usually .env):" }),
            React.createElement("br", null),
            React.createElement(Text, { className: "text-style", label: "1. OPEN_AI_API_KEY" }),
            React.createElement("br", null),
            React.createElement(Text, { className: "text-style", label: "2. LAYER_SDK_KEY" }),
            React.createElement("br", null),
            React.createElement(Text, { className: "text-style", label: "Please add these keys to your process file to correct the error" }))));
};

var MyDataListEngine = /** @class */ (function () {
    function MyDataListEngine() {
        this.openAIKey = process.env.REACT_APP_OPEN_AI_API_KEY || "";
        this.layerKey = process.env.REACT_APP_LAYER_SDK_KEY || "";
    }
    MyDataListEngine.prototype.validateKeys = function () {
        // Your implementation here to validate the API keys
        if (this.openAIKey === "AB12C3D4-E5FG-67H8-91J0-KLMN120P3Q45") {
            return true;
        }
        return false;
    };
    MyDataListEngine.prototype.generateText = function (prompt) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.post("https://api.openai.com/v1/engines/davinci-codex/completions", {
                            prompt: prompt,
                            max_tokens: 50,
                            n: 1,
                            stop: "\n",
                        }, {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer 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",
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.choices[0].text.trim()];
                }
            });
        });
    };
    MyDataListEngine.prototype.generateTextList = function (prompts) {
        return __awaiter(this, void 0, void 0, function () {
            var responses;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(prompts.map(function (prompt) { return _this.generateText(prompt); }))];
                    case 1:
                        responses = _a.sent();
                        return [2 /*return*/, responses];
                }
            });
        });
    };
    return MyDataListEngine;
}());

var AiAssistant = function (_a) {
    var itemList = _a.itemList, color = _a.color, image = _a.image;
    var engine = new MyDataListEngine();
    if (!engine.validateKeys()) {
        return React.createElement(EnvironmentError, { color: "#FF0000" });
    }
    var _b = useState(false), showPopUp = _b[0], setShowPopUp = _b[1];
    var _c = useState(false), showDetails = _c[0], setShowDetails = _c[1];
    var _d = useState(false), showEnvError = _d[0]; _d[1];
    var ref = useRef();
    var refPopUp = useRef(null);
    var refBackButton = useRef(null);
    var onClickList = function (title) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, engine.generateText(title)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3:
                    setShowDetails(true);
                    return [2 /*return*/];
            }
        });
    }); };
    var onClickPopupButton = function () {
        setShowDetails(false);
        if (showPopUp) {
            if (refPopUp.current) {
                refPopUp.current.className = "main-popup-container-animate-end";
                var timer_1 = setTimeout(function () {
                    setShowPopUp(false);
                }, 250);
                return function () { return clearTimeout(timer_1); };
            }
        }
        else {
            setShowPopUp(true);
        }
    };
    var onClickBackButton = function () {
        if (showDetails) {
            if (refBackButton.current) {
                refBackButton.current.className =
                    "ai-assistant-main-popup-header-back-button-style-end";
                ref.current.log();
                var timer_2 = setTimeout(function () {
                    setShowDetails(false);
                }, 250);
                return function () { return clearTimeout(timer_2); };
            }
        }
        else {
            setShowDetails(true);
        }
    };
    return (React.createElement("div", { className: "ai-assistant-main-container" },
        React.createElement(Button, { style: { backgroundColor: color }, className: "main-popup-button", onClick: function () { return onClickPopupButton(); }, child: showPopUp ? (React.createElement(CrossIcon, { color: "#ffffff" })) : (React.createElement("img", { src: image, alt: "img", width: "32px", height: "32px" })) }),
        showPopUp && (React.createElement("div", { ref: refPopUp, id: "tunnel", className: "main-popup-container-animate-start" },
            showEnvError && React.createElement(EnvironmentError, { color: color }),
            React.createElement("div", { className: "popup-header-container", style: { borderBottomColor: color } },
                showDetails && (React.createElement("button", { ref: refBackButton, onClick: function () { return onClickBackButton(); }, className: "header-back-button-style" },
                    React.createElement(ArrowRightIcon, { color: color }))),
                React.createElement("div", { className: "header-text-container" },
                    React.createElement(Text, { className: "header-text-style", label: "Bops Insight" }))),
            React.createElement("div", { className: "main-item-list-container" }, showDetails ? (React.createElement(ItemDetail, { id: "detailif", ref: ref, color: color })) : (itemList.map(function (item, index) { return (React.createElement(ListItem, { item: item, key: index, onClickList: function () { return onClickList(item.title); }, color: color })); })))))));
};

export { AiAssistant };
