class CardAuthor extends HTMLElement {
    name;

    constructor(name) {
        super();

        this.name = name;
        
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.Build());
        shadow.appendChild(this.Styles());
    }

    Build() {
        const componentRoot = document.createElement('span');
        componentRoot.textContent = 'by ' + this.name;
        console.log(this.name);

        return componentRoot;
    }

    Styles() {
        const styles = document.createElement('style');
        styles.textContent = `
        * {
            margin: 0;
            padding: 0;
        }
        span {
            padding: .2rem .3rem;
            background-color: grey;
            color: white;
            border-radius: 1rem;
        }`;

        return styles;
    }
}

customElements.define('card-author', CardAuthor);