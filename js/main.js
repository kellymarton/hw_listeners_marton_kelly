//Turn header title yellow on click
//event:click
//action:color change

document.getElementById('headerTitle').addEventListener('click', function () {
    document.getElementById('headerTitle').style.color = 'yellow';
});

//Turn background in main pink on mouseover
//event: mouseover
//action: background color change

document.getElementById('main').addEventListener('mouseover', function () {
    document.getElementById('main').style.backgroundColor = 'pink';
});

//Double click to make aside content larger
//event: double click
//action: make text larger
document.getElementById('aside').addEventListener('dblclick', function () {
    document.getElementById('aside').style.fontSize = 'x-large';
});
