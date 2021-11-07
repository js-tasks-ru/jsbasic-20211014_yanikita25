function highlight(table) {
  let tBody = table.querySelector('tbody');
    for (let row of tBody.rows) {
        let isAvailable = row.cells[3].getAttribute('data-available');
        let gender = row.cells[2].innerHTML;
        let age = row.cells[1].innerHTML;
        switch (isAvailable) {
            case 'true':
                row.classList.toggle("available");
                break;
            case 'false':
                row.classList.toggle("unavailable");
                break;
            case null:
                row.setAttribute('hidden', '');
                break;
        }
        gender === "m" ? row.classList.add('male') : row.classList.add('female');
        if (age <= 18) {
            row.style.textDecoration = 'line-through';
        }
    }
}
