import {
  Avatar,
  Box,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { api } from "../../utils/api/api";
import { apiMock } from "../../utils/mock/apiMock";
import { Container, ContainerModal, GridUsers } from "./styles";

interface UsersModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UserItemProps {
  id: number;
  username: string;
  email: string;
}

const UserItem = ({ id, username, email }: UserItemProps) => {
  return (
    <>
      <Paper sx={{ width: 500, my: 1, mx: "auto", p: 2, height: 100 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar sx={{ width: 80, height: 80 }}>{username[0]}</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <TextField
              id="outlined-basic"
              label="Username"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              defaultValue={username}
            />
          </Grid>
          <Grid item xs zeroMinWidth>
            <TextField
              id="outlined-basic"
              label="Email"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              defaultValue={email}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

const UsersModal = ({ open, setOpen }: UsersModalProps) => {
  const [users, setUsers] =
    useState<{ id: number; username: string; email: string }[]>();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await api.get("user");
    setUsers(res.data);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <>
        <h1
          onClick={() => {
            setOpen(false);
          }}
          style={{ backgroundColor: "white", marginBottom: "20px" }}
        >
          Usuários
        </h1>
        <ContainerModal>
          <GridUsers>
            {apiMock().users != undefined ? (
              apiMock().users.map((item) => (
                <UserItem id={1} username={item.username} email={item.email} />
              ))
            ) : (
              <></>
            )}
          </GridUsers>
        </ContainerModal>
      </>
    </Modal>
  );
};

export const ButtonConsult = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container
        style={{ backgroundColor: "#4B0082" }}
        onClick={() => {
          console.log("ddddd");
          setOpen(true);
        }}
        variant="contained"
      >
        Consultar
        <UsersModal open={open} setOpen={setOpen} />
      </Container>
    </>
  );
};
