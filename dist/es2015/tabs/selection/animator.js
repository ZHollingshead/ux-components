var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DOM } from 'aurelia-pal';
let nextAnimationId = 1;
export class SelectionAnimator {
    constructor(container) {
        this.container = container;
        this.element = this.createElement();
        this.slidingPromise = null;
        this.container.appendChild(this.element);
        this.hide();
    }
    get coordinates() {
        return this.getCoordinates(this.element);
    }
    dispose() {
        this.element.remove();
    }
    createElement() {
        const element = DOM.createElement('div');
        element.classList.add('indicator');
        element.style.position = 'absolute';
        element.style.transformOrigin = 'left center';
        return element;
    }
    transition(from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.slidingPromise) {
                yield this.slidingPromise;
            }
            const { translation, scale } = this.getTransitionParameters(from, to);
            const animationName = `ux-tabs-indicator-slide-${nextAnimationId++}`;
            const keyFrames = `@keyframes ${animationName} {
      0% {
        transform: translateX(0) scaleX(1);
      }
      100% {
        transform: translateX(${translation}px) scaleX(${scale});
      }
    }`;
            const animationStyle = DOM.injectStyles(keyFrames);
            from.classList.add('transitioning');
            to.classList.add('transitioning');
            this.show();
            this.moveTo(from);
            this.element.style.animation = `${animationName} 0.3s ease-out`;
            yield (this.slidingPromise = listenOnce(this.element, 'animationend', () => {
                this.moveTo(to);
                this.hide();
                from.classList.remove('transitioning');
                to.classList.remove('transitioning');
                animationStyle.remove();
                this.slidingPromise = null;
            }));
        });
    }
    show() {
        this.element.style.display = 'block';
    }
    hide() {
        this.element.style.display = 'none';
    }
    moveTo(target) {
        this.element.style.animation = '';
        const targetCoordinates = this.getCoordinates(target);
        this.element.style.left = `${targetCoordinates.left}px`;
        this.element.style.width = `${targetCoordinates.width}px`;
    }
    getCoordinates(element) {
        const elementRect = element.getBoundingClientRect();
        const nearestPositionedAncestor = this.findNearestPositionedAncestor(element);
        const offset = nearestPositionedAncestor
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
    }
    findNearestPositionedAncestor(element) {
        if (!element.parentElement) {
            return null;
        }
        else if (DOM.getComputedStyle(element.parentElement).position !== 'static') {
            return element.parentElement;
        }
        else {
            return this.findNearestPositionedAncestor(element.parentElement);
        }
    }
    getTransitionParameters(from, to) {
        const fromCoordinates = this.getCoordinates(from);
        const toCoordinates = this.getCoordinates(to);
        const translation = toCoordinates.left - fromCoordinates.left;
        const scale = toCoordinates.width / fromCoordinates.width;
        return { translation, scale };
    }
}
function listenOnce(target, event, callback) {
    return new Promise(resolve => {
        const handler = () => {
            target.removeEventListener(event, handler);
            callback();
            resolve();
        };
        target.addEventListener(event, handler);
    });
}
