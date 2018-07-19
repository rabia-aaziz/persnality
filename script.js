let celebrites = [
    {
        name: "Abdul-Sattar-Edhi",
        imgURL: "edhi.jpg",

    },
    {
        name: "Allama-Iqbal",
        imgURL: "allama-iqbal.jpg",
    },
    {
        name: "Quaid-e-Azam",
        imgURL: "quaid-e-azam.jpg",
    }
]

function initilization() {
    let bodyEl = document.querySelector("body");
    for (let i = 0; i < celebrites.length; i++) {
        bodyEl.innerHTML += '<div class="div-img" style="background-image : url(images/'+celebrites[i].imgURL+')"></div>' +
         '<p>' + celebrites[i].name + '</p>' ;

    }
}