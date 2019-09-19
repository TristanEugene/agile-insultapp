fetch("https://lakerolmaker-insult-generator-v1.p.rapidapi.com/?mode=random", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "lakerolmaker-insult-generator-v1.p.rapidapi.com",
        "x-rapidapi-key": "b1dcdd3f4emshdf12f6eaacebbd3p1e8e38jsnd8b135cf0b2b"
    }
})
    .then(function (response) {
        return response.text();

    })
    .then(function (data) {
        document.getElementById("insult").innerText = data;

    });
