function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

const overLay = document.querySelector(".popup");

overLay.addEventListener("click", () => {
  closePopup();
});
