view();
function view() {
    let html = '';
    html +=/*html*/`
<section class="main">
<nav>
    <img class="logo" src="scripts/images/Logo.png" alt="logo">
    <ul id="navList">
        <li><a href="#about-me" class="hoverFade">About me</a></li>
        <li><a href="#projects" class="hoverFade">Projects</a></li>
        <li><a href="#contact" class="hoverFade">Contact me</a></li>
    </ul>
    <button class="hamburger" id="hamburger" onclick="toggleButton()">
        <i class="fa-solid fa-bars"></i>
    </button>
</nav>
<div class="main-area">
    <div class="main-text">
        <h1>Marius Henriksen</h1>
        <p>IT-Student at</p>
        <a href="https://www.getacademy.no/" style="color: orange">GET Academy</a>
        <div class="button"><a href="#about-me">About me</a></div>
    </div>
    <div class="socials">
        <div><a href="https://github.com/Marshan88" class="social">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>
            </a></div>
        <div><a href="https://discordapp.com/users/Lord Marshan#2921" class="social">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="55" height="55" viewBox="0 0 24 24"><path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" /></svg>
            </a></div>
    </div>
</div>
</section>
<section class="sub-section-alternative" id="about-me">
<div class="information">
    <h2>About Me</h2>
    <p>Hello world</p>
    <p>My name is Marius Henriksen</p>
    <p>I am a student at GET academy</p>
</div>
<!-- <div class="headshot-container">
    <img class="headshot" src="src/images/fillnamehere.jpg" alt="Marius Henriksen image"/>
</div> -->
</section>
<section class="sub-section-alternative" id="projects">
<h2>Projects</h2>
<div class="project-container">
    <div class="project-card">
        <img class="project-image" src="scripts/images/Zelda-MissingLinks.PNG" alt="Project image one" />
        <h3>Zelda - Missing Links</h3>
        <hr/>
        <p class="subtext">Arrows to move and space for bomb.</p>
        <hr/>
        <p class="subtext"><a class="project-link" href="https://marshan88.github.io/Zelda/">View</a></p>
    </div>
    <div class="project-card">
        <img class="project-image" src="scripts/images/Tetris.PNG" alt="Project image two" />
        <h3>Tetris</h3>
        <hr/>
        <p class="subtext">In progress</p>
        <hr/>
        <p class="subtext"><a class="project-link">View</a></p>
    </div>
    <div class="project-card">
        <img class="project-image" src="scripts/images/Clicker-game.PNG" alt="Project image three" />
        <h3>Clicker game</h3>
        <hr/>
        <p class="subtext">One of my first projects.<br>It is
            what it is..</p>
        <hr/>
        <p class="subtext"><a class="project-link" href="https://marshan88.github.io/Oblig/index">View</a></p>
    </div>
    <div class="project-card">
        <img class="project-image" src="scripts/images/CSS.PNG" alt="Project image four" />
        <h3>Starling</h3>
        <hr/>
        <p class="subtext">An app called Starling,<br>a team project that I worked on for 8 weeks.<br>
            Measures teams working on a project with Tuckman's Theory (invis devtool top left)</p>
        <hr/>
        <p class="subtext"><a class="project-link" href="https://marcus-bengtsson.github.io/GET-Modul-2-Oppgave/">View</a></p>
    </div>
</div>
</section>
<footer id="contact">
<h2>Contact me</h2>
<p>mariusshenriksen@gmail.com</p>
</footer>
`
document.getElementById('app').innerHTML = html;
}