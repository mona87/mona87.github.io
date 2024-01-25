(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();function r(i){i.addEventListener("click",()=>{i.innerHTML==='<i class="fas fa-moon"></i>'?(i.innerHTML='<i class="fas fa-sun"></i>',i.style.color="orange",i.style.backgroundColor="rgb(43, 43, 43)",document.body.classList.add("darkmode")):(i.innerHTML='<i class="fas fa-moon"></i>',i.style.color="black",i.style.backgroundColor="white",document.body.classList.remove("darkmode"))})}document.querySelector("#app").innerHTML=`
<div class='wrapper'>
  <div class="container">
    <header id="home">
      <nav class="navbar">
        <h2 class='name'>Ramona Bellamy</h2>
        <ul class="navbar__ul">
          <li class='link'><a href="#home">Home</a></li>
          <li class='link'><a href="#portfolio">Projects</a></li>
          <li class='link'><a href="#skills">Skills</a></li>
          <li class='link'><a href="#contact">Contact</a></li>
        
        </ul>
      </nav>
      <div class="header__container">
        <img src="woman_laptop2.svg" alt="profile-image">
        <div class="header__text__container">
          <p class="header__text">Hey there! I'm an enthusiastic front-end developer and I bring a fresh perspective to crafting engaging and user-friendly experiences. I'm on a mission to create visually stunning and functional digital solutions. My skills revolve around using React, JavaScript, and CSS to breathe life into web applications.</p>
        </div>
      </div>
    </header>
  </div>

  <main class="portfolio" id='portfolio'>
    <h2 class='portfolio__header'>Portfolio</h2>
    <div class="portfolio__container">
    <a  target="_blank" class="link" aria-label="Movie App Allows user to filter a JSON list of movies by category" href="https://jqrj7j.csb.app/">
      <article class='card' >
        <img src='movie.svg' alt="page">
        <div class="text-container">

          <h2>Movie App</h2>
          <p>  Allows user to filter a JSON list of movies by category</p>
          <a class="view-link" target="_blank" aria-label="View Code" href="https://codesandbox.io/p/sandbox/movie-app-jqrj7j?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clrlaw0ko00063b6hxatu831f%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clrlaw0ko00023b6h4mm89emx%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clrlaw0ko00033b6hfgx6kd1b%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clrlaw0ko00053b6hqfbvo6ry%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%252C0%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clrlaw0ko00023b6h4mm89emx%2522%253A%257B%2522id%2522%253A%2522clrlaw0ko00023b6h4mm89emx%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clrlaw0ko00053b6hqfbvo6ry%2522%253A%257B%2522id%2522%253A%2522clrlaw0ko00053b6hqfbvo6ry%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clrlaw0ko00033b6hfgx6kd1b%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clrlaw0ko00033b6hfgx6kd1b%2522%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D">View Code</a>
        </div>
      </article>
      </a>
 

      <a target="_blank" aria-label="Trivia Game App Quiz game that uses json for questions and stores scores in local storage"   class="link" href="https://qipvv5.csb.app/">
      <article class='card'>
        <img src='test.svg' alt="page">
        <div class="text-container">

          <h2>Trivia Game App</h2>
             <p> Quiz game that uses json for questions and stores scores in local storage </p>
       
          <a class="view-link" target="_blank" aria-label="View Code" href="https://codesandbox.io/p/sandbox/trivia-game-qipvv5?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clpvioz7800063b6iqdnfszt6%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clpvioz7800023b6ii2fxw8gj%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clpvioz7800033b6i6veg4o9a%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clpvioz7800053b6ibkhwlyny%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%252C0%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clpvioz7800023b6ii2fxw8gj%2522%253A%257B%2522id%2522%253A%2522clpvioz7800023b6ii2fxw8gj%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clpvioz7800053b6ibkhwlyny%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpvioz7800043b6i0xgwz21x%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clpvioz7800053b6ibkhwlyny%2522%252C%2522activeTabId%2522%253A%2522clpvioz7800043b6i0xgwz21x%2522%257D%252C%2522clpvioz7800033b6i6veg4o9a%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clpvioz7800033b6i6veg4o9a%2522%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D">View Code</a>

        </div>
      </article>
      </a>

      <a target="_blank" aria-label="Table Component Example component design for a table that allows for selection of files"  class="link" href="https://7cmcdj.csb.app/">

      <article class='card'>
        <img src='data.svg' alt="app">
        <div class="text-container">
          <h2>Table Component</h2>
          <p>Example component design for a table that allows for selection of files</p>
          <a class="view-link" target="_blank" aria-label="View Code" href="https://codesandbox.io/p/sandbox/table-7cmcdj?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clrlcfz7z00063b6h06hh4cln%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clrlcfz7z00023b6hu3px80v3%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clrlcfz7z00033b6hzvshdcz1%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clrlcfz7z00053b6h2g188q1u%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%252C0%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clrlcfz7z00023b6hu3px80v3%2522%253A%257B%2522id%2522%253A%2522clrlcfz7z00023b6hu3px80v3%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clrlcfz7z00013b6h495c7lcl%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpublic%252Findex.html%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clrlcl0rr00023b6hetcgxuwm%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A15%252C%2522startColumn%2522%253A22%252C%2522endLineNumber%2522%253A15%252C%2522endColumn%2522%253A22%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clrlcl0rr00023b6hetcgxuwm%2522%257D%252C%2522clrlcfz7z00053b6h2g188q1u%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clrlcfz7z00043b6hfxwpcyfv%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clrlcfz7z00053b6h2g188q1u%2522%252C%2522activeTabId%2522%253A%2522clrlcfz7z00043b6hfxwpcyfv%2522%257D%252C%2522clrlcfz7z00033b6hzvshdcz1%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clrlcfz7z00033b6hzvshdcz1%2522%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A13.250139780983602%257D">View Code</a>
        </div>
      </article>
      </a>


    </div>

    <section class='skills' id='skills'>
      <h2>Skills</h2>
      <article class="skills-container">

        <div class="skills__item" data-aos='fade-up'>
          <img title="CSS" src="css.svg" alt="css">
        </div>
        <div class="skills__item" data-aos='fade-up'>
        <img title="Javascript" src="js.svg" alt="javascript" />
      </div>

        <div class="skills__item" data-aos='fade-up'>
        <img title="React" src="react.svg" alt="react">
     
      </div>
      <div class="skills__item" data-aos='fade-up'>
      <img title="Typescript" src="ts.svg" alt="typescript">
     
    </div>
      <div class="skills__item" data-aos='fade-up'>
      <img  title="Angular" src="angular.svg" alt="angular">
     
    </div>
   

        </div>
      </article>
    </section>

    <footer>
      <div class="wrapper">
        <div class="footer__text-container" id='contact'>
          <h2>Contact</h2>
          <p>Open to collaboration? Let's connect and make things happen together!
          </p>
  
        </div>
        <div class="footer__text-container1">
        <p><span>Email:</span> <strong><a class="email" aria-label="bellamy2727@gmail.com" href="mailto:bellamy2727@gmail.com">bellamy2727@gmail.com</strong></a></p>
        <p><span>Linkedin:</span> <strong><a class="email" aria-label="https://www.linkedin.com/in/ramona-bellamy" href="https://www.linkedin.com/in/ramona-bellamy"> Ramona Bellamy </a></strong></p>
        </div>
      </div>
      <hr class='footer__nav-hr'>
      <nav class="footer__nav">
        <ul class='footer__nav-links'>
          <li><a aria-label="Home"  href="#home">Home</a></li>
          <li><a aria-label="Projects" href="#portfolio">Projects</a></li>
          <li><a aria-label="Skills" href="#skills">Skills</a></li>
          <li><a aria-label="Contact" href="#contact">Contact</a></li>
        </ul>
        <p class='to-top'><a href="#top"><strong>BACK TO TOP</strong></a></p>
      </nav>
    </footer>
  </main>
</div>
`;r(document.querySelector(".darkmode"));
