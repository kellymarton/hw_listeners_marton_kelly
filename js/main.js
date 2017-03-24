var clickMe = document.getElementById('heading');
var x = 1;
clickMe.addEventListener('click', function (eventinfo) {
    console.log(eventinfo);
    var myElement = document.createElement('p');
    myElement.innerHTML = 'This is click ' + x;
    document.body.appendChild(myElement);
    x = ++x;
});
