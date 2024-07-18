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