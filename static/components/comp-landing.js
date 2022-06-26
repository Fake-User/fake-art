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
            .look-here{
                height: 100vh; /* Use dvh when supported by chrome */
                display: flex;
                justify-content: center;
                align-items: flex-end;
            }
                .read-me{
                    display: grid;
                    border: 0.3vh solid #fff;
                    border-radius: 2.5vh;
                    height: 5vh;
                    margin: 3vh 0;
                    align-items: center;
                    mix-blend-mode: difference;
                }

    </style>

    <div class="landing">
        <div class="landing-video-wrapper"><!--fix for safari video position: fixed; bug-->
            <video id="landing-video" src="" autoplay muted loop playsinline poster="/static/content/bg/paper.webp"></video>
        </div>
        <div class="look-here">
            <div class="read-me">&nbsp&nbspWHATS&nbspDOWN&nbspHERE?&nbsp&nbsp</div>
        </div>
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
    };
};

window.customElements.define("comp-landing", CompLanding);
