const mapItems = (submenu) => {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = submenu.name;
    li.appendChild(anchor);
    if(submenu.submenu.length > 0) {
        const ul = document.createElement('ul');
        ul.className = "hidden";
        submenu.submenu.forEach(element => {
            ul.appendChild(mapItems(element));
        });
        li.appendChild(ul);
    }
    return li;
}

const getMenu = (data) => {
  const rootDiv = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = "Mostra menú";
  label.className = "show-menu";
  label.htmlFor = "show-menu";
  rootDiv.appendChild(label);

  const checkbox = document.createElement('input');
  checkbox.id = "show-menu";
  checkbox.type = "checkbox";
  checkbox.role = "button";
  rootDiv.appendChild(checkbox);

  const rootUl = document.createElement('ul');
  rootUl.id = "menu";
  const menuItems = data.map((item) => {
    return mapItems(item);
  });
  menuItems.forEach(element => {
    rootUl.appendChild(element);
  });
  rootDiv.appendChild(rootUl);
  return rootDiv;
}

export default getMenu;