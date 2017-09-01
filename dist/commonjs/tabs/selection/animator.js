"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_pal_1 = require("aurelia-pal");
var nextAnimationId = 1;
var SelectionAnimator = /** @class */ (function () {
    function SelectionAnimator(container) {
        this.container = container;
        this.element = this.createElement();
        this.slidingPromise = null;
        this.container.appendChild(this.element);
        this.hide();
    }
    Object.defineProperty(SelectionAnimator.prototype, "coordinates", {
        get: function () {
            return this.getCoordinates(this.element);
        },
        enumerable: true,
        configurable: true
    });
    SelectionAnimator.prototype.dispose = function () {
        this.element.remove();
    };
    SelectionAnimator.prototype.createElement = function () {
        var element = aurelia_pal_1.DOM.createElement('div');
        element.classList.add('indicator');
        element.style.position = 'absolute';
        element.style.transformOrigin = 'left center';
        return element;
    };
    SelectionAnimator.prototype.transition = function (from, to) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, translation, scale, animationName, keyFrames, animationStyle;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.slidingPromise) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.slidingPromise];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _a = this.getTransitionParameters(from, to), translation = _a.translation, scale = _a.scale;
                        animationName = "ux-tabs-indicator-slide-" + nextAnimationId++;
                        keyFrames = "@keyframes " + animationName + " {\n      0% {\n        transform: translateX(0) scaleX(1);\n      }\n      100% {\n        transform: translateX(" + translation + "px) scaleX(" + scale + ");\n      }\n    }";
                        animationStyle = aurelia_pal_1.DOM.injectStyles(keyFrames);
                        from.classList.add('transitioning');
                        to.classList.add('transitioning');
                        this.show();
                        this.moveTo(from);
                        this.element.style.animation = animationName + " 0.3s ease-out";
                        return [4 /*yield*/, (this.slidingPromise = listenOnce(this.element, 'animationend', function () {
                                _this.moveTo(to);
                                _this.hide();
                                from.classList.remove('transitioning');
                                to.classList.remove('transitioning');
                                animationStyle.remove();
                                _this.slidingPromise = null;
                            }))];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectionAnimator.prototype.show = function () {
        this.element.style.display = 'block';
    };
    SelectionAnimator.prototype.hide = function () {
        this.element.style.display = 'none';
    };
    SelectionAnimator.prototype.moveTo = function (target) {
        this.element.style.animation = '';
        var targetCoordinates = this.getCoordinates(target);
        this.element.style.left = targetCoordinates.left + "px";
        this.element.style.width = targetCoordinates.width + "px";
    };
    SelectionAnimator.prototype.getCoordinates = function (element) {
        var elementRect = element.getBoundingClientRect();
        var nearestPositionedAncestor = this.findNearestPositionedAncestor(element);
        var offset = nearestPositionedAncestor
            ? nearestPositionedAncestor.getBoundingClientRect()
            : { left: 0, top: 0 };
        return {
            left: elementRect.left - offset.left,
            right: elementRect.right - offset.left,
            top: elementRect.top - offset.top,
            bottom: elementRect.bottom - offset.top,
            width: elementRect.right - elementRect.left,
            height: elementRect.bottom - elementRect.top
        };
    };
    SelectionAnimator.prototype.findNearestPositionedAncestor = function (element) {
        if (!element.parentElement) {
            return null;
        }
        else if (aurelia_pal_1.DOM.getComputedStyle(element.parentElement).position !== 'static') {
            return element.parentElement;
        }
        else {
            return this.findNearestPositionedAncestor(element.parentElement);
        }
    };
    SelectionAnimator.prototype.getTransitionParameters = function (from, to) {
        var fromCoordinates = this.getCoordinates(from);
        var toCoordinates = this.getCoordinates(to);
        var translation = toCoordinates.left - fromCoordinates.left;
        var scale = toCoordinates.width / fromCoordinates.width;
        return { translation: translation, scale: scale };
    };
    return SelectionAnimator;
}());
exports.SelectionAnimator = SelectionAnimator;
function listenOnce(target, event, callback) {
    return new Promise(function (resolve) {
        var handler = function () {
            target.removeEventListener(event, handler);
            callback();
            resolve();
        };
        target.addEventListener(event, handler);
    });
}
