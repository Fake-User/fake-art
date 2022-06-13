const templateCompLandingText = document.createElement("template");
templateCompLandingText.innerHTML = `
    <style>
        #landing-text-grid{
            width: 100%;
            height: 100%;
            display: grid;
            grid-template: auto calc(50vh - calc(1.5 * calc(4vh + 4vw))) / 1fr;
        }
            #landing-text{
                grid-area: 1 / 1;
                mix-blend-mode: difference;
                font-family: too-many-cowboys;
                font-size: calc(4vh + 7vw);
                text-align: center;
                line-height: calc(4.1vh + 7vw);
            }
    </style>

    <div id="landing-text-grid">
        <div id="landing-text"></div>
    </div>
`;

class CompLandingText extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompLandingText.content.cloneNode(true));

        /* Style */
        this.shadowRoot.getElementById('landing-text').innerHTML = this.getAttribute("text");
    };
};

window.customElements.define("comp-landing-text", CompLandingText);
