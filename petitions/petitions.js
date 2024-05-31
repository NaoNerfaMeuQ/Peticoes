
const checkbox = document.getElementById("checkbox");
const menuOptions = document.querySelector(".menu-options");

checkbox.addEventListener("change", function() {
    if (this.checked) {
        menuOptions.style.display = "block"; // Exibe as opções
    } else {
        menuOptions.style.display = "none"; // Oculta as opções
    }
});

function pesquisar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelapeti");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }



    //Ajax petitions.html

    /*function changepetition(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
           document.getElementById("infopeti").innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "petitions.txt", true);
        xhttp.send();
      }
    */
   