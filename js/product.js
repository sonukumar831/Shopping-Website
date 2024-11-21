// Product Page Change Phomto

let mainImage = document.getElementById("mainImage");

let smallImage = document.getElementsByClassName('smallImage');

smallImage[0].addEventListener("click", ()=> {
    let temp = mainImage.src;
    mainImage.src = smallImage[0].src;
    smallImage[0].src = temp;
});

smallImage[1].addEventListener("click", ()=> {
    let temp = mainImage.src;
    mainImage.src = smallImage[1].src;
    smallImage[1].src = temp;
});

smallImage[2].addEventListener("click", ()=> {
    let temp = mainImage.src;
    mainImage.src = smallImage[2].src;
    smallImage[2].src = temp;
});

smallImage[3].addEventListener("click", ()=> {
    let temp = mainImage.src;
    mainImage.src = smallImage[3].src;
    smallImage[3].src = temp;
});

smallImage[4].addEventListener("click", ()=> {
    let temp = mainImage.src;
    mainImage.src = smallImage[4].src;
    smallImage[4].src = temp;
});