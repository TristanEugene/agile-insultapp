fetch("https://lakerolmaker-insult-generator-v1.p.rapidapi.com/?mode=random", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "lakerolmaker-insult-generator-v1.p.rapidapi.com",
        "x-rapidapi-key": "b1dcdd3f4emshdf12f6eaacebbd3p1e8e38jsnd8b135cf0b2b"
    }
})
    .then(function (response) {
        console.log(response);
        return response.text();

    })
    .then(function (data) {
        console.log(data);
        document.getElementById("insult").innerText = data;

    });




 /*let link = document.createElement('a');
 link.setAttribute('href', 'https://twitter.com/share');
 link.setAttribute('class', 'twitter-share-button');
 link.setAttribute("data-text", "'" + content + "'");
 link.setAttribute("data-size", "large");
 document.getElementById("buttonAdd").appendChild(link);
 twttr.widgets.load();*/

//window.onload=createTweet();
