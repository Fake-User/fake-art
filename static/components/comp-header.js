const templateCompHeader = document.createElement("template");
templateCompHeader.innerHTML = `
    <style>
        a{
            color: #fff;
            text-decoration: none;
        }
        .header{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 9vh;
            background-color: #000e;
            display: grid;
            grid-template-columns: 0 auto 1fr auto auto auto auto 0;
            gap: 2.5vh;
            z-index: 9;
        }
            .logo{
                height: 5vh;
                width: auto;
                padding: 2vh 0;
                animation-duration: 0.5s;
            }
            .icon{
                height: 4vh;
                width: auto;
                padding: 2.5vh 0;
                animation-duration: 0.5s;
            }
            .button{
                display: grid;
                color: #000;
                background-color: #fff;
                border-radius: 2.5vh;
                height: 5vh;
                margin: 2vh 0;
                align-items: center;
            }
        .head-spacer{
            width: 100%;
            height: 9vh;
            background-color: #000;
        }
    </style>

    <div class="header shadow">
        <div><!--Spacer--></div>
        <a href="/index.html">
            <img class="logo highlight" src="/static/content/svg/svg-lettermark.svg">
        </a>
        <div><!--Spacer--></div>
        <a href="/index.html">
            <!--<img class="icon highlight" src="/static/content/svg/svg-projects.svg">-->
        </a>
        <a href="/index.html">
            <!--<img class="icon highlight" src="/static/content/svg/svg-opensource.svg">-->
        </a>
        <a href="https://github.com/Fake-User" target="_blank">
            <img class="icon highlight" src="/static/content/svg/svg-github.svg">
        </a>
        <a href="mailto:russellboswell@fakeart.online" target="_blank">
            <div class="button"><div>&nbsp&nbspWHATS&nbspUP&nbsp&nbsp</div></div>
        </a>
    </div>
    <div class="header-spacer"></div>
`;

class CompHeader extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(templateCompHeader.content.cloneNode(true));
    };
};

window.customElements.define("comp-header", CompHeader);
