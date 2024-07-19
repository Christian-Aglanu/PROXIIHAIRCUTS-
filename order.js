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




function whatsapp(){
  let name = document.getElementById('name').valeu;
  let age = document.getElementById('age').valeu;
  let gender = document.getElementById('gender').valeu;
  let serviceType = document.getElementById('service-type').valeu;
  let lcoction = document.getElementById('location').valeu;
  let contact = document.getElementById('contact').valeu;
  let baberGender = document.getElementById('baber-gebder').valeu;
  let status = document.getElementById('status').valeu;
  let message = document.getElementById('message').valeu;

let whatsappurl = "https://wa.me/0500163070?text=" + 
"customer name: " + name + "%0a" 
+"customer age: " + age + "%0a" 
+"customer contact: " + contact + "%0a" 
+"customer gender: " + gender + "%0a" 
+"customer serviceType: " + serviceType + "%0a" 
+"customer location: " + location + "%0a" 
+"customer baber gender: " + baberGender + "%0a" 
+"customer status: " + status + "%0a" 
+"customer messager: " + message + "%0a" ;


  window.open(whatsappurl, '_blank').focus();

}
const placeOrder =document.querySelector('.placeorder')

placeOrder.addEventListener('click', ()=>{
  whatsapp()
})
