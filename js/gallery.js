

let gallery = [
    {
     file: "red.jpg",
     w: 300,
     title: "Красный костел",
     link: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/",
     description: "В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы."   
    },
    {
    file: "troi.jpg",
    w: 300,
    title: "Троицкое предместье",
    link: "https://www.belarus.by/ru/travel/belarus-life/trinity-suburb",
    description: "Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь."   
    },
    {
    file: "mir.jpg",
    w: 300,
    title: "Мирский замок",
    link: "https://mirzamak.by/",
    description: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Беларуси."   
    },


]

let s = "";

for (i=0; i<gallery.length; i++) {

    s += `<div id="id${i+1}">
    <img style="width: ${gallery[i].w}px" src="images/${gallery[i].file}" alt="">
    <p>${gallery[i].title}</p>
    </div>`


}

picturesHere.innerHTML = s;

let d = "";

id1.addEventListener("click",func1);

function func1() {
    d = `<img src="images/${gallery[0].file}" style="width: 1000px" alt="">
    <p>${gallery[0].description}</p>`;
    bigPicture.innerHTML = d;
}

id2.addEventListener("click",func2);

function func2() {
    d = `<img src="images/${gallery[1].file}" style="width: 1000px" alt="">
    <p>${gallery[1].description}</p>`;
    bigPicture.innerHTML = d;
}

id3.addEventListener("click",func3);

function func3() {
    d = `<img src="images/${gallery[2].file}" style="width: 1000px" alt="">
    <p>${gallery[2].description}</p>`;
    bigPicture.innerHTML = d;
}

bigPicture.addEventListener("click",funcClose);
function funcClose() {
    bigPicture.innerHTML = " ";
}



