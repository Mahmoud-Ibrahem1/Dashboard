var modal = document.getElementById("addUserModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.onclick = function() {
  modal.style.display = "block";
}

closeModalBtn.onclick = function() {
  var confirmClose = confirm("Are you sure you want to close the modal?");
  if (confirmClose) {
  modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    var confirmClose = confirm("Are you sure you want to close the modal?");
    if (confirmClose) {
    modal.style.display = "none";
    }
  }
}


