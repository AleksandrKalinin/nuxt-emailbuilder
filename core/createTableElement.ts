export const createTableElement = (rows: number, cols: number) => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headRow = document.createElement("tr");
  const dataRow = document.createElement("tr");

  for (let i = 0; i < cols; i++) {
    const th = document.createElement("th");
    const td = document.createElement("td");
    headRow.appendChild(th);
    dataRow.appendChild(td);
  }

  for (let i = 0; i < rows; i++) {
    tbody.appendChild(dataRow);
  }

  thead.appendChild(headRow);
  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
};
