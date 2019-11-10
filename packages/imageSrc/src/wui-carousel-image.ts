import {LitElement, html, css, TemplateResult, customElement, property} from 'lit-element';

export type ListItem = {
    type: string
    src: string,
    altText: string,
    thumbnail ?: ImageInterface
}

export type ImageInterface = {
    src: string,
    altText: string   
}

@customElement('wui-carousel-image')
export class WuiCarouselImage extends LitElement {
    @property({type: Object}) imageItem: ImageInterface = {
        src: '',
        altText: ''
    };

    static get styles () {
        return css `
            :host {
                display: block;
            }
            img {
                width: 100%;
                max-width: 100%;
            }
        `
    }

    render(): TemplateResult {
        return html`
            <img src= "${this.imageItem.src}" alt="${this.imageItem.altText}"/>       
        `
    }
}