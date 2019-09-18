var maillist = [];

console.log(maillist);

document.getElementById("submitbutton").addEventListener("click", function () {
    var mail = document.getElementById("input").value;
    maillist.push(mail);
    console.log(maillist);
    document.getElementById("input").value = "";
});




