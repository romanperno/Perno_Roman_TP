// Obtenir la fenêtre modale
var modal = document.getElementById("modal");

// Obtenir l'élément span qui ferme la fenêtre modale
var span = document.getElementsByClassName("close")[0];

// Obtenir les images de l'équipe
var equipeImages = document.querySelectorAll(".listeequipe .photo");

// Lorsque l'utilisateur clique sur une image de l'équipe, ouvrir la fenêtre modale
equipeImages.forEach(function(img) {
  img.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-img").src = this.src;
  }
});

// Lorsque l'utilisateur clique sur <span> (x), fermer la fenêtre modale
span.onclick = function() {
  modal.style.display = "none";
}

// Lorsque l'utilisateur clique n'importe où en dehors de la fenêtre modale, fermer la fenêtre modale
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}