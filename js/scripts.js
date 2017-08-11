var url = "https://api.icndb.com/jokes/random";

getJoke()

var button = document.getElementById('get-joke'); 

button.addEventListener('click', function() { 
    getJoke(); 
});

var paragraph = document.getElementById('joke');

function getJoke() { 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function() { 
        var response = JSON.parse(xhr.response); 
    if (response.value && response.value.joke) {
        paragraph.innerHTML = response.value.joke; 
    } else {
        paragraph.innerHTML = 'Ups, there was an unexpected error';
    }
    }); 
    xhr.send(); 
}