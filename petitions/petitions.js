
const checkbox = document.getElementById("checkbox");
const menuOptions = document.querySelector(".menu-options");

checkbox.addEventListener("change", function(menu) {
    if (this.checked) {
        menuOptions.style.display = "block"; // Exibe as opções
    } else {
        menuOptions.style.display = "none"; // Oculta as opções
    }
});

const input = document.getElementById('searchInput');
    const table = document.getElementById('tituloinfo');

    input.addEventListener('keyup', function() {
        const filter = input.value.toLowerCase();
        const rows = table.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
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