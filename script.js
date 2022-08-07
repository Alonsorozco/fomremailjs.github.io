const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviado...';

   const serviceID = 'default_service';
   const templateID = 'template_4ckejdb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'enviar mensaje';
      alert('mensaje enviado correctamente');
    }, (err) => {
      btn.value = 'enviar mensaje';
      alert(JSON.stringify(err));
    });
});