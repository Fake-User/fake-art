const templateCompInfo = document.createElement("template");
templateCompInfo.innerHTML = `
    <style>
        .info{
            width: 100vw;
            height: 100%;
            background-color: #000;
            background-image: url("/static/content/paper-1.jpg");
            background-position: center;
            background-size: cover;
            padding: 8vh 0;
            text-align: center;
            display: grid;
            grid-template-columns: 1fr minmax(0%, 86vh) 1fr;
            grid-gap: 2vh;
        }
            .main{
            }
            .sub{
                color: #888;
                font-size: 2vh;
            }
    </style>

    <div class="info">
        <div><!-- Spacer --></div>
        <div class="main">
            <slot name="main"></slot>
        </div>
        <div><!-- Spacer --></div>
        <div><!-- Spacer --></div>
        <div class="sub">
            <slot name="sub"></slot>
        </div>
        <div><!-- Spacer --></div>
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
