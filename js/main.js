const cartButton = document.querySelector(".cart-button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

cartButton.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);


function toggleModal() {
  modal.classList.toggle('is-open');
}

