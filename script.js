
/* DOM (cliques) */
let count = 0;

function incrementCount() {
    count++;
    document.getElementById("count-display").textContent = count;
}
/* DOM (cliques) */

/*Boletim de noticias*/
  function showForm() {
    var formContainer = document.getElementById("formContainer");
    if (formContainer.style.display === "none") {
      formContainer.style.display = "block";
    } else {
      formContainer.style.display = "none";
    }
  }
/*Boletim de noticias*/