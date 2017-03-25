  document.addEventListener('submit', function (event) {
      event.preventDefault();
      console.log(event);
      var firstname = document.getElementById('firstname').value;
      var lastname = document.getElementById('lastname').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
      console.log('The first name is: ' + firstname);
      console.log('The last name is: ' + lastname);
      console.log('The email is: ' + email);
      console.log('The message is: ' + message);
  });
