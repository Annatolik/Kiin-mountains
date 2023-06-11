document.getElementById('footer-email-button').addEventListener('click', function() {
    var email = document.getElementById('footer-email-input').value;
  
    
    // Відправка запиту на сервер для надсилання електронної пошти
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(function(response) {
      if (response.ok) {
        alert('Subscription completed!');
        const emailInput = email;
        const email2 = emailInput.value;
        saveEmailToDatabase(email2);
      } else {
        alert('An error occurred. Please try again.');
      }
    })
  });