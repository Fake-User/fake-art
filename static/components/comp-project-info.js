const templateCompProjectInfo = document.createElement("template");
templateCompProjectInfo.innerHTML = `
    <style>
        .branding-wrapper{
            box-sizing: border-box;
            width: 100%;
            background-image: url("/static/content/paper-1.jpg");
            background-size: cover;
            padding: 4vh;
            display: grid;
            grid-template-columns: auto min(100%, 180vh) auto;
            grid-template-rows: 1fr auto;
        }
            .branding-grid{
                grid-area: 1 / 2;
                display: flex;
                flex-wrap: wrap;
            }
                .info{
                    text-align: center;
                    flex: 1 1 min(100vw, 55vh);
                    align-self: center;
                }
                #banner{
                    flex: 1 1 60%;
                    background-size: cover;
                    aspect-ratio: 2480 / 520;
                }
    </style>

    <div class="branding-wrapper">
        <div class="branding-grid">
            <div class="info"><slot></slot></div>
            <div id="banner"></div>
        </div>
    </div>
`;

class CompProjectInfo extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompProjectInfo.content.cloneNode(true));

        /* Style */
        this.shadowRoot.getElementById('banner').style.backgroundImage = "url('" + this.getAttribute("banner") + "')";
    };
};

window.customElements.define("comp-project-info", CompProjectInfo);
