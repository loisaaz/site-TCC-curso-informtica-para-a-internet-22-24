function toggleDetails(id) {
    var details = document.getElementById(id);
    var icon = details.previousElementSibling.querySelector('.icon');
    
    if (details.style.display === "none") {
        details.style.display = "block";
        icon.classList.add('expanded');
    } else {
        details.style.display = "none";
        icon.classList.remove('expanded');
    }
}