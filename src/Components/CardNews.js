class CardNews extends HTMLElement {

    minHeight = '200px';
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        shadow.appendChild(this.Build());
        shadow.appendChild(this.Styles());
    }

    Build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'root');

        const left = document.createElement('div');
        left.setAttribute('class', 'left');
        
        const right = document.createElement('div');
        right.setAttribute('class', 'right');

        const paragraph = document.createElement('p');
        paragraph.textContent = this.getAttribute('descr');

        const author = new CardAuthor(this.getAttribute('author'))
        
        const title = new CardTitle(this.getAttribute('card-title'))
        
        left.appendChild(author);
        left.appendChild(title);
        left.appendChild(paragraph);

        console.log(left);
        const image = new CardImage(this.getAttribute('img'), this.minHeight)
        console.log(image)
        right.appendChild(image);
        componentRoot.appendChild(left);
        componentRoot.appendChild(right);
        

        return componentRoot;
    }

    Styles() {
        const styles = document.createElement('style');
        styles.textContent = `
        * {
            margin: 0;
            padding: 0;
        }

        .root {
            max-width: 720px;
            width: 100%;
            background-color: white;
            transition: box-shadow 250ms linear;
            display: flex;
            justify-content: space-between;
        }

        .root:hover {
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
        }

        .right {
            position: relative;
            width: 320px;
            height: 100%;
            line-height: 0;
        }

        .left {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            row-gap: 1rem;
            justify-content: space-eveenly;
        }
        `
        return styles;
    }
}

customElements.define('card-news', CardNews);