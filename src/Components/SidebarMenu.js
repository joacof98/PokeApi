import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function SidebarMenu() {
  const pathname = window.location.pathname;
  const path = pathname === '/' ? "pokemon" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <Menu pointing id="menuBar" inverted size='huge'>
      <Menu.Item
        name="pokemon"
        active={activeItem === "pokemon"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="eggs"
        active={activeItem === "eggs"}
        onClick={handleItemClick}
        as={Link}
        to="/eggs"
      />
      <Menu.Item
        name="types"
        active={activeItem === "types"}
        onClick={handleItemClick}
        as={Link}
        to="/types"
      />
    </Menu>
  );
}

export default SidebarMenu;
