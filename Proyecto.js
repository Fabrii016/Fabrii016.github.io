const FotoGrande = document.getElementById("FotoGrande"),
FGrande = document.getElementById("FGrande");

function openFulImg(reference){
    FotoGrande.style.display = "flex";
    FGrande.src = reference
}
function Cerrar(){
    FotoGrande.style.display = "none";
}
