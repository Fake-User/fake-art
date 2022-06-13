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
        background: #040404;
        background-size: cover;
    }
    </style>
    <div id="project"></div>

`;

class CompProject extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompProject.content.cloneNode(true));

        /* Style */
        this.shadowRoot.getElementById("project").style.backgroundImage = "url('/static/images/" + this.getAttribute("name") + ".jpg')";
        this.shadowRoot.getElementById("project").innerText = this.getAttribute("name");
    }
};

window.customElements.define("comp-project", CompProject);
