class CardImage extends HTMLElement {
    src;
    minHeight;

    constructor(src, minHeight) {
        super();

        this.src = src;
        this.minHeight = minHeight;

        const shadow = this.attachShadow({mode: 'closed'});
        shadow.appendChild(this.Build());
        shadow.appendChild(this.Styles());
    }

    Build() {
        const componentRoot = document.createElement('img');
        componentRoot.src = this.src;
        return componentRoot;
    }

    Styles() {
        const styles = document.createElement('style');
        styles.textContent = `

        img {
            width: 100%;
            height: ${this.minHeight};
            object-fit: cover;
            object-position: top;
        }`;
        return styles;
    }
}

customElements.define('card-img', CardImage);