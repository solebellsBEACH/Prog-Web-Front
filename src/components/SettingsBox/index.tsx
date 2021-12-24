import { Button, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

//ESSE ELEMENTO É AQUELE ESTA EM TODAS AS PAGINAS E É RESPONSAVEL POR DAR UM REDIRECT PARA AS PAGINAS

export const SettingBox: React.FC = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <FiSettings
        size={30}
        onClick={handleClick}
        style={{ color: "#4B0082" }}
      />

      <Menu
        //COMPONENTE DE MENU
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Home
        </MenuItem>
      </Menu>
    </div>
  );
};
