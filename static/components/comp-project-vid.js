const templateCompProjectVid = document.createElement("template");
templateCompProjectVid.innerHTML = `
    <style>
    #vid-wrapper{
        width: 100%;
        box-sizing: border-box;
        background-image: url("/static/content/bg/paper.webp");
        background-position: center;
        background-size: cover;
        padding: 4vh;
        display: grid;
        grid-template-columns: 1fr auto 1fr;

    }
        #vid{
            grid-area: 1 / 2;
            filter: drop-shadow(0 0 1vh #000);
            box-sizing: border-box;
            border-radius: min(2vh, 1vw);
            aspect-ratio: 1 / 1;
            width: min(100%, 65vh);
            justify-self: center;
        }
    </style>

    <div id="vid-wrapper">
        <video autoplay muted loop playsinline type="video/mp4" id="vid" src="/static/content/hollo/bh/hollo-bh-1x1.webm">
    </div>

`;

class CompProjectVid extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompProjectVid.content.cloneNode(true));

        /* Style */
        this.shadowRoot.getElementById('vid').poster = this.getAttribute("poster");
        this.shadowRoot.getElementById('vid').src = this.getAttribute("src");
    };
};

window.customElements.define("comp-project-vid", CompProjectVid);
