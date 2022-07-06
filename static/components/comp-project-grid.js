const templateCompProjectGrid = document.createElement("template");
templateCompProjectGrid.innerHTML = `
    <style>
    a{
        text-decoration: none;
    }
    .projects{
        box-sizing: border-box;
        width: 100%;
        background-color: #1a1a1a;
        padding: 4vh;
        display: grid;
        grid-template-columns: auto min(100%, 180vh) auto;
        grid-template-rows: 1fr auto;
    }
        .project-grid{
            grid-area: 2 / 2;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax( 45vh, 1fr));
            gap: 4vh;
        }
        .info-wrapper{
            padding-bottom: 4vh;
            grid-area: 1 / 2;
            display: grid;
            justify-content: center;
        }
            #info{
                display: flex;
                align-items: center;
                width: min-content;
                font-size: 2vh;
                border: 0.3vh solid #fff;
                border-radius: 2.5vh;
                height: 5vh;
            }
    </style>
    <div class="projects">
        <div class="info-wrapper">
            <div id="info"></div>
        </div>
        <div class="project-grid">
            <slot></slot>
        </div>
    </div>
`;

class CompProjectGrid extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompProjectGrid.content.cloneNode(true));

        /* Style */
        this.shadowRoot.getElementById('info').innerHTML = this.getAttribute("info");
    };
};

window.customElements.define("comp-project-grid", CompProjectGrid);
