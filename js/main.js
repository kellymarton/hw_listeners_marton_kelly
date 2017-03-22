var clickMe = document.getElementById('heading');

clickMe.addEventListener('click', function () {
    console.log('clicked it');
    var myElement = document.createElement('article');
    myElement.innerHTML = '<p>This is click x<p>';
    document.body.appendChild(myElement);
});
