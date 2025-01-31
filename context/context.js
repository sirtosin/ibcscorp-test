import { createContext, useContext, useState } from "react";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const handleToggle = () => setOpenMenu((prev) => !prev);
  const [post, setPosts] = useState([]);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const deletePostModal = () => setModal3((prev) => !prev);
  const editPostModal = () => setModal2((prev) => !prev);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        deletePostModal,
        editPostModal,
        modal2,
        modal3,
        open,
        post,
        setPosts,
        handleClick,
        openMenu,
        setOpenMenu,
        handleToggle,
        setOpen,
        editData,
        edit,
        setEditData,
        setEdit,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
