/*var request = new XMLHttpRequest();

request.open('GET', 'https://insultgenerator.apiblueprint.org/insults');
console.log(request);
request.onreadystatechange = function () {
    if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};

request.send();
*/
window.onload=function() {
    const proxy = "https://git.heroku.com/safe-lowlands-88473.git/";
    const url = "https://insult.mattbas.org/api/insult";
    fetch(proxy + url)
    .then(response => response.json())
    .then(function (data) {
            console.log(data)
    });
};