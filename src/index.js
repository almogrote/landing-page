import AOS from 'aos';
import emailjs from 'emailjs-com';
window.addEventListener("load", function () { AOS.init({ initClassName: 'aos-init' }) });

emailjs.init("user_7YPc1Yuylkz5sWQM1uWbB");

let myform = document.querySelector("form#contact_form");
myform.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target);


  let service_id = "gmail2";
  let template_id = "template_w2zrmji";

  emailjs.sendForm(service_id, template_id, myform[0])
    .then(function () {
      alert("¡Enviado! Nos pondremos en contacto contigo lo antes posible");
    }, function (err) {
      alert("Upss! Hubo algún problema!\r\n Si persiste, comuníquenos este error:\n" + JASON.stringify(err));
    });
  return false;
});
