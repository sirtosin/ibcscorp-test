"use client";
import { useState, memo, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import { useStateContext } from "../../context/context";
import { useRouter } from "next/navigation";

interface Props {
  title: string | JSX.Element;
  subtitle: string[];
  data: any;
  action?: string;
}

const Dropdown = ({ title, subtitle, data, action }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useRouter();
  const { setEdit, setEditData, deletePostModal, editPostModal } =
    useStateContext();
  const handleBtn = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleResult = () => {
    navigate.push(`/dashboard/posts/${data?.id}`);
    setEditData(data);
  };
  const handleClose = (item: string) => {
    setAnchorEl(null);
    if (item === "edit") {
      setEdit(true);
      setEditData(data);
      editPostModal();
    }
    if (item === "delete") {
      setEdit(true);
      setEditData(data);
      deletePostModal();
    }
  };

  return (
    <>
      {subtitle?.length > 0 ? (
        <>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleBtn}
            className="!bg-transparent !text-xs !text-secondary"
            // endIcon={<KeyboardArrowDownIcon />}
          >
            {title}
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {subtitle?.map((item) => (
              <MenuItem
                key={item}
                className="capitalize text-xs"
                onClick={() => handleClose(item)}
                disableRipple
              >
                {item}
              </MenuItem>
            ))}
          </StyledMenu>
        </>
      ) : (
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleResult}
          className="!bg-transparent !text-xs !text-secondary"
          // endIcon={<KeyboardArrowDownIcon />}
        >
          {title}
        </Button>
      )}
    </>
  );
};

export default memo(Dropdown);

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
