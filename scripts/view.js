view();
function view() {
    let html = '';
    html +=/*html*/`
<div class="transparent-filter">
<section class="main">
<nav>
    <img class="logo" src="scripts/images/Logo.png" alt="logo">
    <ul id="navList">
        <li><a href="#about-me" class="navList">About me</a></li>
        <li><a href="#projects" class="navList">Projects</a></li>
        <li><a href="#contact" class="navList">Contact me</a></li>
    </ul>
    <button class="hamburger" id="hamburger" onclick="toggleButton()">
        <i class="fa-solid fa-bars"></i>
    </button>
</nav>
<div class="main-area">
    <div class="main-text">
        <h1>Marius</h1>
        <h1>Henriksen</h1>
        <p>IT Student at</p>
        <a href="https://www.getacademy.no/" style="color: orange">GET Academy</a>
        <div class="button"><a href="#about-me">About me</a></div>
    </div>
    <div class="socials">
        <div class="reverse"><a href="https://www.buymeacoffee.com/mariushenrix" class="social">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50" viewBox="0 0 512 512"><path d="M400 192H32C14.25 192 0 206.3 0 224v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.75 0 112-50.25 112-112S461.8 192 400 192zM400 352H384V256h16C426.5 256 448 277.5 448 304S426.5 352 400 352zM107.9 100.7C120.3 107.1 128 121.4 128 136c0 13.25 10.75 23.89 24 23.89S176 148.1 176 135.7c0-31.34-16.83-60.64-43.91-76.45C119.7 52.03 112 38.63 112 24.28c0-13.25-10.75-24.14-24-24.14S64 11.03 64 24.28C64 55.63 80.83 84.92 107.9 100.7zM219.9 100.7C232.3 107.1 240 121.4 240 136c0 13.25 10.75 23.86 24 23.86S288 148.1 288 135.7c0-31.34-16.83-60.64-43.91-76.45C231.7 52.03 224 38.63 224 24.28c0-13.25-10.75-24.18-24-24.18S176 11.03 176 24.28C176 55.63 192.8 84.92 219.9 100.7z"/></svg>
            </a></div>
        <div><a href="https://github.com/Marshan88" class="social">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>
            </a></div>
    </div>
</div>
</section>
<section class="sub-section-alternative" id="about-me">
<div class="information">
    <h2>About Me</h2>
    <p>Hello world</p>
    <p>My name is Marius Henriksen</p>
    <p>I am a student at GET Academy</p>
</div>
</section>
<section class="sub-section-alternative" id="projects">
<h2>Projects</h2>
<div class="project-container">
    <div onclick="location.href='https://marshan88.github.io/Starling'" class="project-card">
        <img class="project-image" src="scripts/images/CSS.PNG" alt="Starling app image" />
        <h3>Starling</h3>
        <hr/>
        <p class="subtext">Team project with a deadline of 8 weeks.
            The goal of the application is to measure different
            groups development according to Tuckman's theory,
            using surveys.</p>
        <p class="subtext-hr"><hr/></p>
    </div>
    <div onclick="location.href='https://github.com/Marshan88/CSharpProjects'" class="project-card">
        <img class="project-image" src="scripts/images/CsharpGames.PNG" alt="C# Image" />
        <h3>C# projects</h3>
        <hr/>
        <p class="subtext">Here you can take a look at my C# projects.<br>
            This takes you to github.</p>
        <p class="subtext-hr2"><hr/></p>
    </div>
    <div onclick="location.href='https://marshan88.github.io/ClickerGame'" class="project-card">
        <img class="project-image" src="scripts/images/Clicker-game.PNG" alt="Clicker game Image" />
        <h3>Clicker game</h3>
        <hr/>
        <p class="subtext">One of my first projects,<br>it is
            what it is..</p>
        <p class="subtext-hr3"><hr/></p>
    </div>
    <div onclick="location.href='https://marshan88.github.io/Zelda/'" class="project-card">
        <img class="project-image" src="scripts/images/Zelda-MissingLinks.PNG" alt="Zelda Image" />
        <h3>Zelda - Missing Links</h3>
        <hr/>
        <p class="subtext">How to play:<br>-Arrows to move<br>-Space for bomb<br></p>
        <p class="subtext-hr4"><hr/></p>
    </div>
</div>
</section>
</div>
<footer id="contact">
<h2>Contact me</h2>
<p><a href="mailto:mariusshenriksen@gmail.com">mariusshenriksen@gmail.com</a></p>
</footer>
`
    document.getElementById('app').innerHTML = html;
}