const templateCompLanding = document.createElement("template");
templateCompLanding.innerHTML = `
    <style>
        .landing{
            width: 100%;
            height: 100vh;
        }
            .landing-video-wrapper{
                width: 100%;
                height: 91vh;
                position: fixed;
                top: 9vh;
                left: 0;
                z-index:-10;
                will-change: transform; /* Helps eliminate jank but cuases weird sizing jump */
            }
                #landing-video{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            #text{
                padding-top: 4.5vh;
                height: 100%;
                text-align: center;
                font-size: min(20vh, 10vw);
                line-height: min(18vh, 9vw);
                letter-spacing: min(1.6vh, 0.8vw);
                font-family: night-devision;
                mix-blend-mode: difference;
                font-kerning: none;
                display: flex;
                align-items: center;
                justify-content: center;
            }
    </style>

    <div class="landing">
        <div class="landing-video-wrapper"><!--fix for safari video position: fixed; bug-->
            <video id="landing-video" src="" autoplay muted loop playsinline poster="/static/content/bg/paper.webp"></video>
        </div>
        <div id="text"></div>
    </div>
`;

class CompLanding extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompLanding.content.cloneNode(true));

        /* Style */
        this.shadowRoot.getElementById('landing-video').poster = this.getAttribute("poster");
        this.shadowRoot.getElementById('landing-video').src = this.getAttribute("vid");
        this.shadowRoot.getElementById('text').innerHTML = this.getAttribute("text");
    };
};

window.customElements.define("comp-landing", CompLanding);
