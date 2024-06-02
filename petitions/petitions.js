
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
      td = tr[i].getElementsByTagName("td");
      var found = false;
      for (var j = 0; j < td.length; j++) {
          txtValue = td[j].textContent || td[j].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              found = true;
              break;
          }
      }
      tr[i].style.display = found ? "" : "none";
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
   
  //filtro por assuntos


  var tds = document.querySelectorAll('table td[data-id],[data-categoria]');
  var botoesMenu = document.querySelectorAll('.menu-options a');

  botoesMenu.forEach(function(botao) {
      botao.addEventListener('click', function(e) {
          var categoria = e.target.id;
          for (var i = 0; i < tds.length; i++) {
              var tr = tds[i].closest('tr');
              tr.style.display = categoria == tds[i].dataset.categoria || !categoria ? '' : 'none';
          }
      });
  });

  var tds = document.querySelectorAll('table td[data-id],[data-categoria]');
  var botoesMenu = document.querySelectorAll('.menu-options a');
  var botaoMostrarTodas = document.getElementById('mostrarTodas');

  botaoMostrarTodas.addEventListener('click', function() {
      for (var i = 0; i < tds.length; i++) {
          var tr = tds[i].closest('tr');
          tr.style.display = ''; // Exibir todas as linhas
      }
  });

   var tds = document.querySelectorAll('table td[data-id],[data-categoria]');
    var botoesMenu = document.querySelectorAll('.menu-options a');
    var botaoVoltarInicio = document.getElementById('voltarInicio');

    botaoVoltarInicio.addEventListener('click', function() {
        // Remova o filtro para exibir todas as linhas
        for (var i = 0; i < tds.length; i++) {
            var tr = tds[i].closest('tr');
            tr.style.display = '';
        }
    });

    var tds = document.querySelectorAll('table td[data-id],[data-categoria]');
    var botoesMenu = document.querySelectorAll('.menu-options a');
    var botaoVoltarInicio = document.getElementById('CriaraSua');

    botaoVoltarInicio.addEventListener('click', function() {
        // Remova o filtro para exibir todas as linhas
        for (var i = 0; i < tds.length; i++) {
            var tr = tds[i].closest('tr');
            tr.style.display = '';
        }
    });
