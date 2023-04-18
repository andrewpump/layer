'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

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

var css_248z$2 = ".ai-assistant-main-container {\n  position: fixed;\n  bottom: 35px;\n  right: 30px;\n}\n.ai-assistant-main-container .main-popup-button {\n  height: 80px;\n  width: 80px;\n  border-radius: 360px;\n  outline: none;\n  border: none;\n  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);\n}\n.ai-assistant-main-container .main-popup-container, .ai-assistant-main-container .main-popup-container-animate-end, .ai-assistant-main-container .main-popup-container-animate-start {\n  position: absolute;\n  bottom: 95px;\n  width: 436px;\n  right: 0px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  overflow: hidden;\n  animation: mymove 0.7s;\n  transition: transform 3s ease-out;\n  transform: scaleY(1);\n}\n.ai-assistant-main-container .main-popup-container-animate-start {\n  height: auto;\n  max-height: 400px;\n  animation: mymove 0.8s;\n  transform-origin: bottom;\n  animation-timing-function: ease;\n}\n.ai-assistant-main-container .main-popup-container-animate-end {\n  height: 0px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  animation: mymove2 0.8s;\n  transform-origin: bottom;\n  animation-timing-function: ease-out;\n}\n@keyframes mymove {\n  from {\n    height: 0px;\n    transform: scaleY(0);\n  }\n  to {\n    height: auto;\n    transform: scaleY(1);\n  }\n}\n@keyframes mymove2 {\n  from {\n    height: auto;\n    transform: scaleY(1);\n  }\n  to {\n    height: 0px;\n    transform: scaleY(0);\n  }\n}\n.ai-assistant-main-container .popup-header-container {\n  display: flex;\n  border-bottom: 4px solid;\n  justify-content: flex-start;\n  align-items: center;\n  padding-bottom: 14px;\n}\n.ai-assistant-main-container .popup-header-container .header-back-button-style {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  height: 32px;\n  width: 32px;\n  margin-right: 16px;\n  animation: mymove3 0.8s;\n  overflow: hidden;\n}\n.ai-assistant-main-container .popup-header-container .header-text-container {\n  min-height: 32px;\n}\n.ai-assistant-main-container .popup-header-container .header-text-container .header-text-style {\n  font-weight: 700;\n  font-size: 24px;\n  color: #232427;\n}\n.ai-assistant-main-container .ai-assistant-main-popup-header-back-button-style-end {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  height: 32px;\n  width: 32px;\n  margin-right: 16px;\n  animation: mymove4 0.8s;\n  overflow: hidden;\n}\n@keyframes mymove3 {\n  from {\n    width: 0px;\n    margin-right: 0px;\n  }\n  to {\n    width: 32px;\n    margin-right: 16px;\n  }\n}\n@keyframes mymove4 {\n  from {\n    width: 32px;\n    margin-right: 16px;\n  }\n  to {\n    width: 0px;\n    margin-right: 0px;\n  }\n}\n.ai-assistant-main-container .main-item-list-container {\n  max-height: calc(100vh - 260px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  padding-top: 12px;\n  transition: transform 8s ease-out;\n  transform: scaleY(1);\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.ai-assistant-main-container .main-item-list-container::-webkit-scrollbar {\n  display: none; /* Hide scrollbar for Chrome, Safari and Opera */\n}";
styleInject(css_248z$2);

var css_248z$1 = ".environment-error-main-container-style {\n  position: absolute;\n  inset: 0px 0px 0px 0px;\n  background: rgba(0, 0, 0, 0.86);\n  padding: 24px;\n}\n.environment-error-main-container-style .top-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 20px;\n}\n.environment-error-main-container-style .heading-text-style {\n  font-weight: 700;\n  font-size: 26px;\n}\n.environment-error-main-container-style .bottom-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #1e1e1e;\n  padding: 16px;\n}\n.environment-error-main-container-style .text-style {\n  font-weight: 400;\n  font-size: 16px;\n  color: #969696;\n}";
styleInject(css_248z$1);

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

var css_248z = ".text-main-style {\n  display: block;\n  margin-block-start: 0em;\n  margin-block-end: 0em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  font-family: Helvetica, Arial, sans-serif;\n  line-height: 1.15;\n}";
styleInject(css_248z);

var Text = function (_a) {
    var label = _a.label, className = _a.className, props = __rest(_a, ["label", "className"]);
    return (React__default["default"].createElement("p", __assign({ className: "text-main-style ".concat(className) }, props), label));
};

var EnvironmentError = function (_a) {
    _a.color;
    return (React__default["default"].createElement("div", { className: "environment-error-main-container-style" },
        React__default["default"].createElement("div", { className: "top-container" },
            React__default["default"].createElement(Text, { className: "heading-text-style", label: "Message for Developer" })),
        React__default["default"].createElement("div", { className: "bottom-container" },
            React__default["default"].createElement(Text, { className: "text-style", label: "Your Application is missing the following API/SDK keys in your process file (usually .env):" }),
            React__default["default"].createElement("br", null),
            React__default["default"].createElement(Text, { className: "text-style", label: "1. OPEN_AI_API_KEY" }),
            React__default["default"].createElement("br", null),
            React__default["default"].createElement(Text, { className: "text-style", label: "2. LAYER_SDK_KEY" }),
            React__default["default"].createElement("br", null),
            React__default["default"].createElement(Text, { className: "text-style", label: "Please add these keys to your process file to correct the error" }))));
};

var MyDataListEngine = /** @class */ (function () {
    function MyDataListEngine() {
        this.openAIKey = process.env.REACT_APP_OPEN_AI_API_KEY || "";
        this.layerKey = process.env.REACT_APP_LAYER_SDK_KEY || "";
    }
    MyDataListEngine.prototype.validateKeys = function () {
        // Your implementation here to validate the API keys
        return true;
    };
    MyDataListEngine.prototype.generateText = function (prompt) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Open AI Key:", this.openAIKey);
                        return [4 /*yield*/, axios__default["default"].post("https://api.openai.com/v1/engines/davinci-codex/completions", {
                                prompt: prompt,
                                max_tokens: 50,
                                n: 1,
                                stop: "\n",
                            }, {
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer ".concat(this.openAIKey),
                                },
                            })];
                    case 1:
                        response = _a.sent();
                        console.log(response);
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
    _a.itemList; _a.color; _a.image;
    var engine = new MyDataListEngine();
    if (!engine.validateKeys()) {
        return React__default["default"].createElement(EnvironmentError, { color: "#FF0000" });
    }
    var _b = React.useState(false); _b[0]; _b[1];
    // const [showDetails, setShowDetails] = useState(false);
    // const [showEnvError, setShowEnvError] = useState(false);
    // const ref = useRef<any>();
    // const refPopUp = useRef<HTMLDivElement>(null);
    // const refBackButton = useRef<HTMLButtonElement>(null);
    // const onClickList = async(title:string) => {
    //   try {
    //     const res = await engine.generateText(title);
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   setShowDetails(true);
    // };
    // const onClickPopupButton = () => {
    //   setShowDetails(false);
    //   if (showPopUp) {
    //     if (refPopUp.current) {
    //       refPopUp.current.className = "main-popup-container-animate-end";
    //       const timer = setTimeout(() => {
    //         setShowPopUp(false);
    //       }, 250);
    //       return () => clearTimeout(timer);
    //     }
    //   } else {
    //     setShowPopUp(true);
    //   }
    // };
    // const onClickBackButton = () => {
    //   if (showDetails) {
    //     if (refBackButton.current) {
    //       refBackButton.current.className =
    //         "ai-assistant-main-popup-header-back-button-style-end";
    //       ref.current.log();
    //       const timer = setTimeout(() => {
    //         setShowDetails(false);
    //       }, 250);
    //       return () => clearTimeout(timer);
    //     }
    //   } else {
    //     setShowDetails(true);
    //   }
    // };
    return (React__default["default"].createElement("div", { className: "ai-assistant-main-container" }));
};

exports.AiAssistant = AiAssistant;
