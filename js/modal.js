const buttons = document.getElementsByClassName('modal-button');
for(let button of buttons){
  button.addEventListener('click', openModal);
}
const modalContainer = document.getElementById('modal__container');
modalContainer.addEventListener('click', closeModal);

function openModal(){
  modalContainer.classList.add('active');
}

function closeModal(event){
  if(event.target.id == 'modal__container'){
      if(!modalContainer.classList.contains('active')) return;
      modalContainer.classList.remove('active');
  }
}
//регистрация
const buttons2 = document.getElementsByClassName('modal-button-reg');
for(let button2 of buttons2){
  button2.addEventListener('click', openModal2);
}
const modalContainer2 = document.getElementById('modal__container-reg');
modalContainer2.addEventListener('click', closeModal2);

function openModal2(){
  modalContainer2.classList.add('active');
}

function closeModal2(event){
  if(event.target.id == 'modal__container-reg'){
      if(!modalContainer2.classList.contains('active')) return;
      modalContainer2.classList.remove('active');
  }
}