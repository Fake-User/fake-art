const templateCompFill = document.createElement("template");
templateCompFill.innerHTML = `
    <style>
        .fill-wrapper{
            width: 100vw;
            height: 100vh;
        }
            #fill-video{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
    </style>

    <div class="fill-wrapper">
        <video id="fill-video" src="" autoplay muted loop playsinline poster="/static/content/bg/paper.webp"></video>
    </div>
`;

class CompFill extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompFill.content.cloneNode(true));

        /* Style */
        this.shadowRoot.getElementById('fill-video').poster = this.getAttribute("poster");
        this.shadowRoot.getElementById('fill-video').src = this.getAttribute("vid");
    };
};

window.customElements.define("comp-fill", CompFill);
