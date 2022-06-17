const templateCompAltGrid = document.createElement("template");
templateCompAltGrid.innerHTML = `
    <style>
        .Alt-wrapper{
            box-sizing: border-box;
            width: 100%;
            background-color: #1a1a1a;
            padding: min(2vw, 4vh);
            filter: drop-shadow(0 0 2vh #000);
            display: grid;
            grid-template-columns: auto min(100%, 180vh) auto;
        }
            .Alt-grid{
                grid-area: 2 / 2;
                display: grid;
                grid-gap: min(2vw, 4vh);
            }
                .Alt{
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    filter: drop-shadow(0 0 1vh #000);
                    background: #0008;
                    background-size: cover;
                }
    </style>

    <div class="Alt-wrapper">
        <div class="Alt-grid" style="grid-template-columns:1fr 1fr 1fr;">
            <div id="1" class="Alt"></div>
            <div id="2" class="Alt"></div>
            <div id="3" class="Alt"></div>
        </div>
    </div>
`;

class CompAltGrid extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompAltGrid.content.cloneNode(true));

        /* Style */
        this.shadowRoot.getElementById("1").style.backgroundImage = "url('" + this.getAttribute("1") + "')";
        this.shadowRoot.getElementById("2").style.backgroundImage = "url('" + this.getAttribute("2") + "')";
        this.shadowRoot.getElementById("3").style.backgroundImage = "url('" + this.getAttribute("3") + "')";
    };
};

window.customElements.define("comp-alt-grid", CompAltGrid);
