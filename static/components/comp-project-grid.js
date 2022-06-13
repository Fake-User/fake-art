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
            grid-area: 1 / 2;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax( 45vh, 1fr));
            gap: 4vh;
        }
            .project{
                width: 100%;
                aspect-ratio: 1 / 1;
                filter: drop-shadow(0 0 1vh #000);
            }
        .projects-link-wrapper{
            padding-top: 2vh;
            grid-area: 2 / 2;
            display: grid;
            justify-content: center;
        }
            .projects-link{

                display: grid;
                color: #000;
                background-color: #fff;
                border-radius: 2.5vh;
                height: 5vh;
                width: min-content;
                margin: 2vh 0 0 0;
                align-items: center;
            }

    </style>

    <div class="projects">
        <div class="project-grid">
            <img class="project" src="./static/images/poster-lumberjvck-nightmare.jpg"/>
            <img class="project" src="./static/images/poster-hg.jpg"/>
            <img class="project" src="./static/images/poster-dood.jpg"/>
            <img class="project" src="./static/images/poster-wavhart-taor.jpg"/>
            <img class="project" src="./static/images/poster-jackflora-tadow.jpg"/>
            <img class="project" src="./static/images/poster-fervor-mutate.jpg"/>
        </div>
        <div class="projects-link-wrapper">
            <a href="/index.html" class="projects-link">
                <div>&nbsp&nbspVIEW&nbspMORE&nbsp&nbsp</div>
            </a>
        </div>
    </div>
`;

class CompProjectGrid extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompProjectGrid.content.cloneNode(true));
    };
};

window.customElements.define("comp-project-grid", CompProjectGrid);