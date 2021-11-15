function openNavlinks() {
    document.getElementById("navMenu").style.width = "100%";
    document.getElementById("navxid").style.marginLeft = "250px";
}

function closeNavMenu() {
    document.getElementById("navMenu").style.width = "0";
    document.getElementById("navxid").style.marginLeft = "0";
}

function hidenavblock() {
    var x = document.getElementById("navMenu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
