
const checkbox = document.getElementById("checkbox");
const menuOptions = document.querySelector(".menu-options");

checkbox.addEventListener("change", function() {
    if (this.checked) {
        menuOptions.style.display = "block"; // Exibe as opções
    } else {
        menuOptions.style.display = "none"; // Oculta as opções
    }
});

const input = document.getElementById('infopeti');
const table = document.getElementById('tabelapeti');

input.addEventListener('keyup', function() {
    const filter = input.value.toLowerCase();
    const rows = table.getElementsByTagName('td');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('tr');
        let found = false;

        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].textContent || cells[j].innerText;
            if (cellText.toLowerCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }

        rows[i].style.display = found ? '' : 'none';
    }
});



    //Ajax petitions.html

    function changepetition(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
           document.getElementById("infopeti").innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "petitions.txt", true);
        xhttp.send();
      }
    