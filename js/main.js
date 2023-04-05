//плавный скрол по странице
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//Функция добавляет класс и удаляет тот же класс у остальных элементов
function addRemoteClass(el){
    for(let i = 0; i < el.length; i++){
        el[i].addEventListener("click", function(event){
            for (let j = 0; j < el.length; j++) {
                el[j].classList.remove("active");
            };
            this.classList.add("active")
        })
    }
}
let button = document.querySelectorAll('.menu ul li');
addRemoteClass(button)

let titleItem = document.getElementById('title__item1');
let titleItem2 = document.getElementById('title__item2');
titleItem2.addEventListener('click', function(){
    titleItem2.classList.add("active")
    titleItem.classList.remove("active")
    document.getElementById('wrap__item1').classList.remove("on")
    document.getElementById('wrap__item1').classList.add("off")
    document.getElementById('wrap__item2').classList.remove("off").classList.add("on")
})

titleItem.addEventListener('click', function(){
    titleItem.classList.add("active")
    titleItem2.classList.remove("active")
    document.getElementById('wrap__item2').classList.remove("on")
    document.getElementById('wrap__item2').classList.add("off")
    document.getElementById('wrap__item1').classList.remove("off").classList.add("on")
})



// document.querySelector('.title__item').addEventListener('click', function(e){ // Вешаем обработчик клика на UL, не LI
//     var id = e.target.id; // Получили ID, т.к. в e.target содержится элемент по которому кликнули
//     document.querySelector('#test strong').innerHTML = id; // For example
//   });







