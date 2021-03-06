const templateCompAspectGrid = document.createElement("template");
templateCompAspectGrid.innerHTML = `
    <style>
        .Aspect-wrapper{
            box-sizing: border-box;
            width: 100%;
            background-color: #1a1a1a;
            padding: 4vh;
            display: grid;
            grid-template-columns: auto min(100%, 180vh) auto;
            grid-template-rows: 1fr auto;
        }
            .Aspect-grid{
                grid-area: 2 / 2;
                display: grid;
                grid-gap: min(2vw, 4vh);
            }
                .Aspect{
                    width: 100%;
                    filter: drop-shadow(0 0 1vh #000);
                    background: #0008;
                    background-size: cover;
                    border-radius: min(2vh, 1vw);
                }
                    #square{aspect-ratio: 1 / 1;}
                    #wide{aspect-ratio: 16 / 9;}
                    #slim{aspect-ratio: 9 / 16;}

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

    <div class="Aspect-wrapper">
        <div class="info-wrapper">
            <div id="info">&nbsp&nbspASPECT&nbspRATIOS&nbsp&nbsp</div>
        </div>
        <div class="Aspect-grid" style="grid-template-columns:144fr 256fr 81fr;">
            <div id="square" class="Aspect"></div>
            <div id="wide" class="Aspect"></div>
            <div id="slim" class="Aspect"></div>
        </div>
    </div>
`;

class CompAspectGrid extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompAspectGrid.content.cloneNode(true));

        /* Style */
        this.shadowRoot.getElementById("square").style.backgroundImage = "url('" + this.getAttribute("square") + "')";
        this.shadowRoot.getElementById("wide").style.backgroundImage = "url('" + this.getAttribute("wide") + "')";
        this.shadowRoot.getElementById("slim").style.backgroundImage = "url('" + this.getAttribute("slim") + "')";
    };
};

window.customElements.define("comp-aspect-grid", CompAspectGrid);
