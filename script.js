const links = document.querySelectorAll('.nav__link');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));

function onScroll(){
  const y = window.scrollY + 110;
  let current = sections[0];
  sections.forEach(sec => { if (sec && sec.offsetTop <= y) current = sec; });
  links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + current.id));
}
document.addEventListener('scroll', onScroll, {passive:true});
onScroll();
