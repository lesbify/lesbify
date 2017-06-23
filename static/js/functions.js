function changeImage() {
    var number = Math.floor(Math.random() * (50));
    document.getElementById("generator").src = "static/img/" + number + ".jpg";
}
