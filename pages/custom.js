class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

    <header>

        <div class="scriptlay">

            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>

            <div id="overlay"></div>
            <div class="headmiddle">
                <div class="headlogomob"> <a href="index.html"><img src="/Images/logo.svg" alt=""></a><span>Moder Auto Agency</span></div>
            </div>
        </div>

        <div class="tophead">
            <div class="headfirst">
                <a href="#">NEWLAUNCH</a>
                <a href="#">MOTERCYCLE</a>

                <a href="#">SCOOTERS</a>
            </div>
            <div class="headmiddle">
             <a href="/index.html">
                <div class="headlogo"><img src="/Images/logo.svg" alt=""></div>
                <div class="headtext"><span>MODERN AUTO AGENCY</span></div>
                </a>
            </div>
            <div class="headlast">
                <a href="/pages/about.html">ABOUT</a>
                <a href="#">TESTRIDE</a>
                <a href="#">EXCHANGE</a>
                <a class="headphone" href="tel:+91 9431466219">
                    <svg fill="red" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 342.514 342.514" xml:space="preserve"
                        transform="rotate(270)matrix(1, 0, 0, 1, 0, 0)">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path
                                    d="M171.254,0C76.826,0,0,76.825,0,171.26c0,94.434,76.819,171.254,171.254,171.254c94.434,0,171.26-76.82,171.26-171.254 C342.514,76.825,265.682,0,171.254,0z M241.225,137.474l-18.76,18.777c-4.383,4.377-11.444,4.377-15.816,0l-6.737-6.731 c-0.606-0.609-1.351-0.937-2.132-1.147c-6.209-4.603-14.994-4.155-20.614,1.459l-27.322,27.322 c-5.632,5.62-6.083,14.417-1.465,20.614c0.21,0.781,0.544,1.52,1.138,2.132l6.752,6.737c4.359,4.371,4.371,11.445,0,15.805 l-18.771,18.783c-4.387,4.371-11.445,4.371-15.817,0l-13.478-13.487c-16.727-16.705-16.714-43.907,0-60.621l58.925-58.919 c16.715-16.708,43.91-16.708,60.622,0l13.475,13.472C245.596,126.046,245.596,133.111,241.225,137.474z">
                                </path>
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </header>
        `
    }
    }

    // Define a custom section element (footer)
class CustomSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="footbottom">
            <div class="footmen ">
                <div class="page-width foone">
                    <span><a href="/index.html">HOME</a></span>
                    <span><a href="/pages/about.html">ABOUT</a></span>
                    <span><a href="/pages/contact.html">CONTACT</a></span>
                </div>
            </div>
            <div class="footmen  footmenborsty">
                <div class="page-width fotwo">
                    <div class="centerinfo address"><span>Modern Hero Bike Dealer, Lal Bazar,Bettiah-845,Bihar, India
                        </span>
                        <span><a href="mailto: maabth@gmail.com">Email:maabth@gmail.com</a></span>
                        <span>Modern Hero Bike Dealer, Lal Bazar,Bettiah-845,Bihar, India </span>
                    </div>
                    <div class="centerinfo"><span>Contact Person - Raj<br>9431466219 / 9771641111</span></div>
                    <div class="centerinfo">
                        <span>GSTN - 10AAEFM6429M1Z9</span>
                        <div class="sociallink">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                    fill="none">
                                    <path
                                        d="M11.8712 25.0361C20.2759 25.0361 24.8786 18.0685 24.8786 12.0287C24.8786 11.8286 24.8786 11.6285 24.8604 11.4466C25.7518 10.8099 26.534 9.99122 27.1344 9.08161C26.3157 9.44545 25.4243 9.68195 24.5147 9.80929C25.4607 9.24534 26.1884 8.35392 26.534 7.28058C25.6426 7.80816 24.6784 8.19019 23.6233 8.39031C22.7865 7.49889 21.604 6.95312 20.2941 6.95312C17.7654 6.95312 15.7279 9.00884 15.7279 11.5194C15.7279 11.8832 15.7643 12.2289 15.8371 12.5563C12.0349 12.3562 8.66935 10.537 6.41352 7.77177C6.01329 8.44488 5.79499 9.22714 5.79499 10.064C5.79499 11.6467 6.59544 13.0475 7.83251 13.8661C7.08663 13.848 6.37714 13.6296 5.7586 13.3022C5.7586 13.3204 5.7586 13.3386 5.7586 13.3568C5.7586 15.5762 7.34132 17.4136 9.43342 17.832C9.05138 17.9412 8.65115 17.9958 8.23274 17.9958C7.94166 17.9958 7.65059 17.9594 7.3777 17.9048C7.95985 19.724 9.65172 21.052 11.6529 21.0884C10.0701 22.3255 8.10539 23.0532 5.95872 23.0532C5.59487 23.0532 5.23103 23.035 4.86719 22.9804C6.88652 24.2902 9.28788 25.0361 11.8712 25.0361Z"
                                        fill="white" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                    fill="none">
                                    <path
                                        d="M20.3435 6.73557H23.2907V2.07838H19.6159H18.8518C18.8518 2.07838 16.0684 2.00561 14.3037 4.31602C14.3037 4.31602 13.1031 5.46212 13.0849 8.79129V12.266H8.71875V17.1961H13.0849V29.9306H18.1241V17.1961H22.472L23.0724 12.266H18.1241V8.79129C18.1423 8.40925 18.306 6.69919 20.3435 6.73557Z"
                                        fill="white" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                    fill="none">
                                    <path
                                        d="M20.6301 3.92969H11.3703C7.25885 3.92969 3.92969 7.25885 3.92969 11.3703V20.6301C3.92969 24.7415 7.25885 28.0707 11.3703 28.0707H20.6301C24.7415 28.0707 28.0707 24.7415 28.0707 20.6301V11.3703C28.0707 7.25885 24.7415 3.92969 20.6301 3.92969ZM25.7603 19.7387C25.7603 23.0496 23.0678 25.7421 19.7569 25.7421H12.2617C8.95072 25.7421 6.25828 23.0496 6.25828 19.7387V12.2617C6.25828 8.95072 8.95072 6.25828 12.2617 6.25828H19.7387C23.0496 6.25828 25.7421 8.95072 25.7421 12.2617V19.7387H25.7603Z"
                                        fill="white" />
                                    <path
                                        d="M16.3204 9.67969C12.8093 9.67969 9.95312 12.5177 9.95312 16.0287C9.95312 19.5398 12.7911 22.3778 16.3204 22.3778C19.8315 22.3778 22.6694 19.5216 22.6694 16.0287C22.6876 12.5359 19.8315 9.67969 16.3204 9.67969ZM16.3204 19.8673C14.2101 19.8673 12.5 18.1572 12.5 16.0469C12.5 13.9367 14.2101 12.2266 16.3204 12.2266C18.4307 12.2266 20.1407 13.9367 20.1407 16.0469C20.1589 18.1572 18.4307 19.8673 16.3204 19.8673Z"
                                        fill="white" />
                                    <path
                                        d="M23.871 9.58785C23.871 10.4793 23.1433 11.207 22.2519 11.207C21.3605 11.207 20.6328 10.4793 20.6328 9.58785C20.6328 8.69644 21.3605 7.96875 22.2519 7.96875C23.1433 7.96875 23.871 8.69644 23.871 9.58785Z"
                                        fill="white" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footmen ">
                <div class="page-width fothre">
                    <div class="botfoot">
                        <span>Privacy Policy</span>
                        <span>Desclaimer</span>
                        <span>Terms of Use</span>
                        <span>Rules & Regulations</span>
                        <span>Data Colletion Contract</span>
                        <span>Sitemap</span>
                    </div>
                    <div class="lastspan">
                    <span class="righttxt">Cpoyright Modern Auto Agency 2024. All Right Reserved</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>`
    }
}


    customElements.define('custom-header', CustomHeader);
customElements.define('custom-section', CustomSection);

function myFunction() {
    var x = document.querySelector(".tophead");
    if (x.style.display === "flex") {
        x.style.display = "none";
        document.getElementById("overlay").style.display = "none";
    } else {
        x.style.display = "flex";
        document.getElementById("overlay").style.display = "block";
    }
}
