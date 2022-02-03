function faqController(id) {
    var faqText = document.getElementById(id);
    if (faqText.style.display == "none"){
        faqText.style.display = "block";
    } else {
        faqText.style.display = "none";
    }
  }
