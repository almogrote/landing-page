import AOS from "aos";
import emailjs from "emailjs-com";

window.addEventListener("load", function() { AOS.init({ initClassName: "aos-init" }); });

emailjs.init("user_7YPc1Yuylkz5sWQM1uWbB");
const myform = document.querySelector("form#contact_form");
const serviceId = "gmail2";
const templateId = "template_w2zrmji";

myform.addEventListener("submit", function(event) {
  event.preventDefault();
  emailjs.sendForm(serviceId, templateId, myform)
    .then(function() {
      alert("¡Enviado! Nos pondremos en contacto contigo lo antes posible");
    }, function(err) {
      alert("Upss! Hubo algún problema!\r\n Si persiste, comuníquenos este error:\n" + JSON.stringify(err));
    });
  return false;
});
