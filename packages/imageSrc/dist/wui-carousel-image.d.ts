import { LitElement, TemplateResult } from 'lit-element';
export declare type ListItem = {
    type: string;
    src: string;
    altText: string;
    thumbnail?: ImageInterface;
};
export declare type ImageInterface = {
    src: string;
    altText: string;
};
export declare class WuiCarouselImage extends LitElement {
    imageItem: ImageInterface;
    static get styles(): any;
    render(): TemplateResult;
}
