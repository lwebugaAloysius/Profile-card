const gallaryOpenBtn = document.querySelector(".gallary-btn");
const galleryDialog = document.querySelector(".gallery-dialog");
const gallaryCloseBtn = document.querySelector(".modal-close-btn");

gallaryOpenBtn.addEventListener("click", () => {
  galleryDialog.showModal();
});

gallaryCloseBtn.addEventListener("click", () => {
  galleryDialog.close();
});
