import { Typography } from "@mui/material";
import { ListsItems } from "../../data/SidebarData";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "react-pro-sidebar";

const SidebarList = () => {
  const activeStyle = {
    background: "#182238",
  };

  const navLinkStyle = {
    marginBottom: "20px",
  };

  return (
    <Menu
      menuItemStyles={{
        button: { ":hover": { background: "#182238" } },
      }}
    >
      {ListsItems.map((item, index) => (
        <MenuItem
          key={index}
          icon={<Typography color="#4B90F8">{item.icon}</Typography>}
          component={
            <NavLink
              to={item.link}
              style={({ isActive }) => ({
                ...navLinkStyle,
                ...(isActive ? activeStyle : {}), // Apply activeStyle if active
              })}
            />
          }
        >
          <Typography color="#F6F9FF">{item.label}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default SidebarList;
