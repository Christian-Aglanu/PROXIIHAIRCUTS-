

const logo = document.querySelector('.logo');

function handleScrollSmall() {
    if (window.pageYOffset > 250) {
        logo.style.top = "0%";
        logo.style.left = "0%";
        logo.style.position = "fixed";
        logo.style.width = "50px";
        logo.style.height = "50px";
    } else if (window.pageYOffset < 50) {
        logo.style.top = "4%";
        logo.style.left = "38%";
        logo.style.position = "absolute";
        logo.style.width = "80px";
        logo.style.height = "80px";
    }
}

function handleScrollMedium() {
    if (window.pageYOffset > 250) {
        logo.style.top = "0%";
        logo.style.left = "0%";
        logo.style.position = "fixed";
        logo.style.width = "80px";
        logo.style.height = "80px";
    } else if (window.pageYOffset < 50) {
        logo.style.top = "4%";
        logo.style.left = "38%";
        logo.style.position = "absolute";
        logo.style.width = "100px";
        logo.style.height = "100px";
    }
}

function handleScrollLarge() {
    if (window.pageYOffset > 250) {
        logo.style.top = "0%";
        logo.style.left = "0%";
        logo.style.position = "fixed";
        logo.style.width = "100px";
        logo.style.height = "100px";
    } else if (window.pageYOffset < 50) {
        logo.style.top = "4%";
        logo.style.left = "38%";
        logo.style.position = "absolute";
        logo.style.width = "120px";
        logo.style.height = "120px";
    }
}

function handleScreenSizeChange() {
    const smallScreen = window.matchMedia('(max-width: 600px)');
    const mediumScreen = window.matchMedia('(min-width: 601px) and (max-width: 1200px)');
    const largeScreen = window.matchMedia('(min-width: 1201px)');

    if (smallScreen.matches) {
        window.removeEventListener('scroll', handleScrollMedium);
        window.removeEventListener('scroll', handleScrollLarge);
        window.addEventListener('scroll', handleScrollSmall);
        handleScrollSmall(); // Initial call to set the correct state
    } else if (mediumScreen.matches) {
        window.removeEventListener('scroll', handleScrollSmall);
        window.removeEventListener('scroll', handleScrollLarge);
        window.addEventListener('scroll', handleScrollMedium);
        handleScrollMedium(); // Initial call to set the correct state
    } else if (largeScreen.matches) {
        window.removeEventListener('scroll', handleScrollSmall);
        window.removeEventListener('scroll', handleScrollMedium);
        window.addEventListener('scroll', handleScrollLarge);
        handleScrollLarge(); // Initial call to set the correct state
    }
}

// Initial check
handleScreenSizeChange();

// Listen for resize events
window.addEventListener('resize', handleScreenSizeChange);


// const chart  = document.querySelector('.chart')
// const logo  = document.querySelector('.logo')
// const placeorder  = document.querySelector('.placeorder')

// window.addEventListener('scroll', ()=>{
//   if(window.pageYOffset > 250){
//     logo.style.top = "0%";
//     logo.style.left = "0%";
//     logo.style.position = "fixed"
//     logo.style.width = "80px"
//     logo.style.height = "80px"
//   }
//   else if(window.pageYOffset<50){
//     logo.style.top = "4%";
//     logo.style.left = "38%";
//     logo.style.position = "absolute"
//   }
// })


// const logoEl = document.querySelector('.logo')
// window.addEventListener('scroll', ()=>{
//   if (window.pageYOffset > 150){
//     logoEl.style.position = "fixed";
//     logoEl.style.width = "100px";
//     logoEl.style.height = "100px";
//     }else if(window.pageYOffset < 70){
//       logoEl.style.position = "absolute"
//       logoEl.style.width = "200px";
//       logoEl.style.height = "200px";
//       logoEl.style.transition = "1s"
//     }
// })
