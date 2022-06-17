const templateCompLanding = document.createElement("template");
templateCompLanding.innerHTML = `
    <style>
        .landing{
            width: 100%;
            height: 91vh;
        }
            .landing-video-wrapper{
                width: 100%;
                height: 91vh;
                position: fixed;
                top: 9vh;
                left: 0;
                z-index:-10;
            }
                #landing-video{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
    </style>

    <div class="landing">
        <div class="landing-video-wrapper"><!--fix for safari video position: fixed; bug-->
            <video id="landing-video" autoplay muted loop playsinline type="video/mp4"></video>
        </div>
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
    };
};

window.customElements.define("comp-landing", CompLanding);
