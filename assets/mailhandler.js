document.getElementById("submitbutton").addEventListener("click",function () {
    const url = "https://us4.api.mailchimp.com/3.0/lists/44203bd6db/";
    const userKey = "KevinDom:a582fbe725d00b3eaaf0042f4a41b01e-us4";
    fetch(url+userKey)
        .then(function (response) {
            console.log(response);

        });

});


