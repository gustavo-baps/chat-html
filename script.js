document.addEventListener("DOMContentLoaded", function(){
    var mensagens = document.getElementById('mensagens');
mensagens.scrollTop = mensagens.scrollHeight;
});
var popupVisible = false;
function mostrarPopup(){
    var popup = document.getElementById("popup");
    popupVisible = !popupVisible;
    popup.style.display = popupVisible ? "block" : "none";
}

function esconderPopup(){
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}