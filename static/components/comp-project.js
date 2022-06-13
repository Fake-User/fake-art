const templateCompProject = document.createElement("template");
templateCompProject.innerHTML = `
    <style>
    a{
        text-decoration: none;
    }
    #project{
        width: 100%;
        aspect-ratio: 1 / 1;
        filter: drop-shadow(0 0 1vh #000);
        border-radius: 2vh;
        background: #0008;
        background-size: cover;
        display: block;

    }
        #project-text-wrapper{
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-rows: 1fr 30% 1fr;
            align-items: center;
            filter: opacity(0%);
            transition-duration: 1s;
        }
        #project-text-wrapper:hover{
            filter: opacity(100%);
            transition-duration: 0s;
        }

            #project-text{
                grid-area: 2 / 1;
                padding: 10% 0;
                background: #000a;
                font-family: DugasPro;
                letter-spacing: 50%;
                text-align: center;
                line-height: calc(0.5vh + 1.5vw);
            }

                #client{
                    font-size: calc(1.5vh + 2vw);
                    color: #fff;
                }
                #title{
                    font-size: calc(0.5vh + 1vw);
                    color: #fffa;
                }
    </style>
    <a id="project" href="">
        <div id="project-text-wrapper">
            <div id="project-text">
                <span id="client"></span><br><span id="title"></span>
            </div>
        </div>
    </a>

`;

class CompProject extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompProject.content.cloneNode(true));

        /* Style */
        this.shadowRoot.getElementById("project").style.backgroundImage = "url('" + this.getAttribute("img") + "')";
        this.shadowRoot.getElementById("client").innerHTML = this.getAttribute("client");
        this.shadowRoot.getElementById("title").innerHTML = this.getAttribute("title");

        this.shadowRoot.getElementById("project").href = "url('" + this.getAttribute("link") + "')";
    }
};

window.customElements.define("comp-project", CompProject);
