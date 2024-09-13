function openModal() {
    const dialog = document.getElementsByClassName('myDialog')[0];
    console.log(dialog.showModal())
    dialog.showModal();
  }
  
  function closeModal() {
    const dialog = document.getElementsByClassName('myDialog')[0];
    dialog.close();
  }

  const addProduct = document.querySelector(".add-product-card");
  const closeButton = document.querySelector('.contain-close-dialog');
  addProduct.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);