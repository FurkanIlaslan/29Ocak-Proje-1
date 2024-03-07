const searchInput = document.querySelector("#searchInput");
const btnEkle = document.querySelector("#btnEkle");
const ul = document.querySelector("#todoListesi");

// ! Önyüze Eklemek İçin;

const önYüzeEkle = () => {
    let searchText = searchInput.value;
    console.log(searchText);

    ul.innerHTML += `<li class="list-item list-unstyled border border-bottom p-2 mb-2">${searchText}
    <i class="fa-regular fa-circle-xmark float-end mt-1"></i>
</li>`

    searchInput.value = "";
}


btnEkle.addEventListener("click", önYüzeEkle);

searchInput.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        önYüzeEkle();
    }
})


// ! Tıklanan elemanı silmek için;

const önYüzdenSil = (e) => {
    console.log(e.target.parentElement)
    const li = e.target.parentElement;
    if(e.target.className.includes("fa-regular")){
        li.style.display = "none";
    }
}

ul.addEventListener("click", önYüzdenSil);


// ! Tüm Görevleri bir kerede temizlemek için;
const btnTemizle = document.querySelector("#btnTemizle");

btnTemizle.addEventListener("click", function(){
    ul.innerHTML = "";
    // ul.style.display = "none";
})



// ! Görevleri Filtrelemek İçin;
const searchFilter = document.querySelector("#searchFilter");

const filtrele = () => {
    let filtreliDurum = searchFilter.value;
    // console.log(filtreliDurum);

    let görevler = document.querySelectorAll(".list-item");
    // console.log(görevler);
    görevler.forEach(function(görev){
        if(görev.innerHTML.includes(filtreliDurum)){
            görev.style.display = "block";
        }else{
            görev.style.display = "none";
        }
    })
}


searchFilter.addEventListener("input", filtrele);





