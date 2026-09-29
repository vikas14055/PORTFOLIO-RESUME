document.getElementById('year').textContent=new Date().getFullYear();
function demoAlert(msg){alert(msg);return false;}
const links=[...document.querySelectorAll('nav a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.style.color='');const x=links.find(a=>a.getAttribute('href')==='#'+e.target.id);if(x)x.style.color='#35d6ff'}}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>obs.observe(s));
