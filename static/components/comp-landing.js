const templateCompLanding = document.createElement("template");
templateCompLanding.innerHTML = `
    <style>
        .landing{
            width: 100%;
            height: 100vh;
        }
            .landing-video-wrapper{
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                left: 0;
                z-index: -9;
            }
                #landing-video{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            .landing-text-grid{
                width: 100%;
                height: 100%;
                display: grid;
                grid-template: auto calc(50vh - calc(1.5 * calc(4vh + 4vw))) / 1fr;
            }
                #landing-text{
                    grid-area: 1 / 1;
                    mix-blend-mode: difference;
                    font-family: too-many-cowboys;
                    font-size: calc(4vh + 7vw);
                    text-align: center;
                    line-height: calc(4.1vh + 7vw);
                }
    </style>

    <div class="landing">
        <div class="landing-video-wrapper"><!--fix for safari video position: fixed; bug-->
            <video id="landing-video" autoplay muted loop playsinline type="video/mp4"></video>
        </div>
    </div>
    <div class="landing-text-grid">
        <div id="landing-text"></div>
    </div>
`;

class CompLanding extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompLanding.content.cloneNode(true));

        /* Style */
        this.shadowRoot.getElementById('landing-video').src = this.getAttribute("src");
        this.shadowRoot.getElementById('landing-video').poster = this.getAttribute("poster");
        this.shadowRoot.getElementById('landing-text').innerHTML = this.getAttribute("text");

    };
};

window.customElements.define("comp-landing", CompLanding);
