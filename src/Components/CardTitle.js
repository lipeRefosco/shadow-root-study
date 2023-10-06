class CardTitle extends HTMLElement {
    text;

    constructor(text) {
        super();

        this.text = text;
        
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.Build());
        shadow.appendChild(this.Styles());
    }

    Build() {
        const componentRoot = document.createElement('h2');
        componentRoot.textContent = this.text;
        return componentRoot;
    }

    Styles() {
        const styles = document.createElement('style');
        styles.textContent = `
        * {
            margin: 0;
            padding: 0;
        }

        h2 {
            font-size: 1.5rem;
            color:red;
        }`;
        return styles;
    }
}


customElements.define('card-title', CardTitle);