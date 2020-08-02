function logic(id) {

    setTimeout(function(){ alert("Simulation has started"); }, 3000);

    var x = document.getElementById("btn1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}