var sliderIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("myslides");
    var radio = document.getElementsByClassName("radio")
    for (i = 0; i < slides.length; i++) {
        slides[i].getElementsByClassName.display = "none";
    }
    sliderIndex++;
    if (sliderIndex > slides.lenght) {
        sliderIndex = 1;
    }
    for (i = 0; i < radio.length; i++) {
        radio[i].idname = radio[i].Classname.replace("active,");
    }
    slides[sliderIndex - 1].getElementsByClassName.display = "block";
    radio[sliderIndex - 1].Classname += "active";
    setTimeout(showSlides, 2000);
}