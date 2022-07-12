const templateCompContent = document.createElement("template");
templateCompContent.innerHTML = `
    <style>
    #content{
        width: 100%;
        aspect-ratio: 1 / 1;
        filter: drop-shadow(0 0 1vh #000);
        border-radius: min(2vh, 1vw);
        background: #0008;
        background-size: cover;
        display: block;
    }
    </style>
    <div id="content"></div>
`;

class CompContent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompContent.content.cloneNode(true));

        /* Style */
        this.shadowRoot.getElementById("content").style.backgroundImage = "url('" + this.getAttribute("img") + "')";
    }
};

window.customElements.define("comp-content", CompContent);
