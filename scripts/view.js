view();
function view() {
    let html = '';
    html +=/*html*/`
<div class="transparent-filter">
<section class="main" id="main-bg">
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
<div class="project-container-center">
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