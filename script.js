fetch("https://api-gateway-becode.herokuapp.com/?goto=https://insult.mattbas.org/api/insult")
    .then(function (response) {
        return response.text();

    })
    .then(function (data) {
        console.log(data);
        document.getElementById("insult").innerText = data;

    });
