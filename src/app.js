import getMenu from "./components/menu";
import { getMenuData } from "./services/menuService";

const menuContainer = document.getElementById("menuContainer");
const menuData = getMenuData((response)=> {
    const menuComponent = getMenu(response);
    menuContainer.appendChild(menuComponent);
});