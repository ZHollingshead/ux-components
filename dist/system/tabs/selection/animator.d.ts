export declare class SelectionAnimator {
    private readonly container;
    private readonly element;
    private slidingPromise;
    constructor(container: Element);
    private readonly coordinates;
    dispose(): void;
    private createElement();
    transition(from: Element, to: Element): Promise<void>;
    private show();
    private hide();
    private moveTo(target);
    private getCoordinates(element);
    private findNearestPositionedAncestor(element);
    private getTransitionParameters(from, to);
}
