
(function(){
  const root=document.documentElement;
  const prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(prefersDark)root.classList.remove('light'); else root.classList.add('light');
  const themeBtn=document.querySelector('[data-toggle-theme]');
  const hcBtn=document.querySelector('[data-toggle-contrast]');
  const drawerBtn=document.querySelector('[data-toggle-drawer]');
  const drawer=document.getElementById('drawer');
  const openModalBtns=document.querySelectorAll('[data-open-trial]');
  const modal=document.getElementById('trial-modal');
  const backdrop=document.getElementById('trial-backdrop');
  const closeModalBtns=document.querySelectorAll('[data-close-modal]');
  const emailField=document.getElementById('trial-email');
  function toggleTheme(){root.classList.toggle('light');}
  function toggleContrast(){root.classList.toggle('high-contrast');}
  function toggleDrawer(){drawer.classList.toggle('open');}
  function openModal(){modal.classList.add('open');backdrop.classList.add('open');setTimeout(()=>{emailField&&emailField.focus();},50);}
  function closeModal(){modal.classList.remove('open');backdrop.classList.remove('open');}
  themeBtn&&themeBtn.addEventListener('click',toggleTheme);
  hcBtn&&hcBtn.addEventListener('click',toggleContrast);
  drawerBtn&&drawerBtn.addEventListener('click',toggleDrawer);
  openModalBtns.forEach(b=>b.addEventListener('click',openModal));
  closeModalBtns.forEach(b=>b.addEventListener('click',closeModal));
  backdrop&&backdrop.addEventListener('click',closeModal);
  window.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
  const form=document.getElementById('trial-form');
  form&&form.addEventListener('submit',e=>{
    e.preventDefault();
    const email=(document.getElementById('trial-email')||{}).value||'';
    const date=(document.getElementById('trial-date')||{}).value||'';
    const slot=(document.getElementById('trial-slot')||{}).value||'';
    const body=encodeURIComponent(`Free trial request:\nEmail: ${email}\nDate: ${date}\nTime: ${slot}`);
    window.location.href=`mailto:hello@innokea.com?subject=Free%20Trial%20Request&body=${body}`;
    closeModal();
    alert('Thanks! Your email client should open with the request. If not, email hello@innokea.com.');
  });
})();
