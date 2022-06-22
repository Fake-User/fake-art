const templateCompInfo = document.createElement("template");
templateCompInfo.innerHTML = `
    <style>
        .info{
            width: 100vw;
            height: 100%;
            background-color: #000;
            background-image: url("/static/content/bg/paper.webp");
            background-position: center;
            background-size: cover;
            padding: 8vh 0;
            text-align: center;
            display: grid;
            grid-template-columns: 1fr minmax(0%, 86vh) 1fr;
            grid-gap: 2vh;
        }
            .main{
                grid-area: 1 / 2;
            }
            .sub{
                grid-area: 2 / 2;
                color: #888;
                font-size: 2vh;
            }
            .tip{
                grid-area: 3 / 2;
                color: #888;
                width: min-content;
                font-size: 2vh;
                display: grid;
                border: 0.3vh solid #888;
                border-radius: 2.5vh;
                height: 5vh;
                align-items: center;
                mix-blend-mode: difference;
            }
    </style>

    <div class="info">
        <div class="main">
            <slot name="main"></slot>
        </div>
        <div class="sub">
            <slot name="sub"></slot>
        </div>
        <!--<div class="tip">
            <slot name="tip"></slot>
        </div>-->
    </div>

`;

class CompInfo extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompInfo.content.cloneNode(true));
    };
};

window.customElements.define("comp-info", CompInfo);
