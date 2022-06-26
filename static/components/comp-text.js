const templateCompText = document.createElement("template");
templateCompText.innerHTML = `
    <style>
        #text{
            text-align: center;
            font-size: min(20vh, 10vw);
            line-height: min(18vh, 9vw);
            letter-spacing: min(1.6vh, 0.8vw);
            font-family: night-devision;
            padding: calc(2vh + 4vw) 0 calc(50vh - calc(2vh + 4vw)) 0;
            mix-blend-mode: difference;
            font-kerning: none;
        }
    </style>

    <div id="text">
        FUCK OFFF
    </div>

`;

class CompText extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompText.content.cloneNode(true));

        this.shadowRoot.getElementById('text').innerHTML = this.getAttribute("text");
    };
};

window.customElements.define("comp-text", CompText);
