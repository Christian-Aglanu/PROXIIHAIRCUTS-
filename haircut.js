const logoEl = document.querySelector('.logo')
window.addEventListener('scroll', ()=>{
  if (window.pageYOffset > 150){
    logoEl.style.position = "fixed";
    logoEl.style.width = "100px";
    logoEl.style.height = "100px";
    }else if(window.pageYOffset < 70){
      logoEl.style.position = "absolute"
      logoEl.style.width = "200px";
      logoEl.style.height = "200px";
      logoEl.style.transition = "1s"
    }
})