// BOOTSTRAP TABLE
// https://getbootstrap.com/docs/5.1/content/tables/

export const tableRow = (object) => {
  return `<tr>
    <td>${object.title}</td>
    <td>${object.type}</td>
    <td>$${object.price.toFixed(2)}</td>
  </tr>`
}
