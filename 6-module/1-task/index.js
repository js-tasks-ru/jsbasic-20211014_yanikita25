/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.render();
    this.addTableRow();
  }
  addTableRow() {
    this.tBody = this.elem.querySelector('tbody');
    for (let row of this.rows) {
      let tableRow = document.createElement('tr');
      tableRow.innerHTML = `<td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.salary}</td>
      <td>${row.city}</td>
      <td><button>X</button></td>`;
      this.tBody.append(tableRow);
    }
    this.tBody.onclick = this.removeRow;
  }
  removeRow(event) {
    if (event.target.tagName == 'BUTTON') {
      event.target.parentNode.parentNode.remove();
    }
  }
  render() {
    this.elem = document.createElement('table');
    this.elem.innerHTML = `<thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  </tbody>`;
  }
}
