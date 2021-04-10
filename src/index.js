import AOS from 'aos';
import { EmailJSResponseStatus } from 'emailjs-com';
window.addEventListener("load", function() { AOS.init({initClassName: 'aos-init'}) });

let myform = $("form#contact_form");
myform.submit(function(event){
  event.preventDefault();


let service_id = "gmail";
let template_id = "cursos_inscripcion";

myform.find("button").text("Enviando...");
emailjs.sendForm(service_id,template_id,myform[0])
  .then(function() {
      alert("¡Enviado! Nos pondremos en contacto contigo lo antes posible");
    myform.find("button").text("Enviar");
  }, function(err) {
     alert("Upss! Hubo algún problema!\r\n Si persiste, comuníquenos este error:\n" +JASON.stringify(err));
     myform.find("button").text("Enviar");
    });
  return false;
  });

