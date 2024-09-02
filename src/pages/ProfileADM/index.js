import { useState, useEffect, useContext } from "react";
import { FiUsers, FiX, FiCheck, FiLock } from "react-icons/fi";
import { toast } from "react-toastify";

import { AuthContext } from "../../contexts/auth";
import firebase from "../../services/firebaseConnection";
import Title from "../../components/Title";
import Header from "../../components/Header";

import "./profileAdm.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const listRef = firebase.firestore().collection("users");

export default function ProfileADM() {
  const { user, logSistem } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  });

  async function loadUsers() {
    let query = listRef;

    query = query.orderBy("nome", "asc");

    query =
      user.area === "cabos" ? query.where("area", "==", user.area) : query;

    await query
      .get()
      .then((snapshot) => {
        let usuarios = [];
        snapshot.forEach((doc) => {
          usuarios.push({
            id_user: doc.id,
            nome: doc.data().nome,
            nivel: doc.data().nivel,
            status: doc.data().status,
            area: doc.data().area,
            email: doc.data().email,
            regional: doc.data().regional,
          });
        });
        setUsers(usuarios);
      })
      .catch((err) => {
        console.log("Deu algum erro: ", err);
      });
  }

  async function updateNivel(id_user, nivel) {
    await firebase
      .firestore()
      .collection("users")
      .doc(id_user)
      .update({
        nivel: nivel,
      })
      .then(() => {
        toast.info("Usuario foi alterado !");
        logSistem(`NIVEL-USUARIO-ALTERADO ${nivel.toUpperCase()}`, id_user);
        loadUsers();
      })
      .catch((err) => {
        console.log("Deu algum erro: ", err);
      });
  }

  async function updateStatus(id_user, status) {
    await firebase
      .firestore()
      .collection("users")
      .doc(id_user)
      .update({
        status: status,
      })
      .then(() => {
        toast.info("Usuario foi alterado !");
        logSistem(
          `STATUS-USUARIO-ALTERADO ${status === true ? "ATIVO" : "INATIVO"}`,
          id_user
        );
        loadUsers();
      })
      .catch((err) => {
        console.log("Deu algum erro: ", err);
      });
  }

  async function updateRegional(id_user, regional) {
    await firebase
      .firestore()
      .collection("users")
      .doc(id_user)
      .update({
        regional: regional,
      })
      .then(() => {
        toast.info("Usuario foi alterado !");
        logSistem(`REGIONAL-ALTERADA ${regional}`, id_user);
        loadUsers();
      })
      .catch((err) => {
        console.log("Deu algum erro: ", err);
      });
  }

  function contUsers(status) {
    var quantidadeElementos = users.filter((x) => x.status === status).length;
    return quantidadeElementos;
  }

  function trocaSenha(id) {
    const requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(
      `https://us-central1-seguranca-patrimonial-385514.cloudfunctions.net/alterarSenhaUsuario?userId=${id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        logSistem("SENHA-USUARIO-TROCADA", id);
        alert(result);
        return result;
      })
      .catch((error) => console.error(error));
  }

  const isDisabled = user.uid !== "wQzKfmkPgsV8PULa9t5JLg9Ta6j2";

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="ADM Usuarios">
          <FiUsers size={25} />
        </Title>

        <div className="container indicadores">
          <span>
            Usuarios Ativos:<b>{contUsers(true)}</b>
          </span>
          <span>
            Usuarios Inativos:<b>{contUsers(false)}</b>
          </span>
        </div>

        <div className="container table-usuarios">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Trocar Senha</TableCell>
                  <TableCell align="center">Usuario</TableCell>
                  <TableCell align="center">Nível de Usuário</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell data-label="Usuario">{item.nome}</TableCell>
                      <TableCell data-label="Status">
                        {item.status === true ? (
                          <i onClick={() => updateStatus(item.id_user, false)}>
                            <FiCheck
                              size={20}
                              style={{ backgroundColor: "#0deb0d" }}
                            />
                          </i>
                        ) : (
                          <i onClick={() => updateStatus(item.id_user, true)}>
                            <FiX
                              size={20}
                              style={{ backgroundColor: "#f52a2a" }}
                            />
                          </i>
                        )}
                      </TableCell>
                      <TableCell data-label="Email">{item.email}</TableCell>
                      <TableCell data-label="Area">
                        {item.area === "patrimonial"
                          ? "empresarial"
                          : item.area}
                      </TableCell>
                      {user.uid === "wQzKfmkPgsV8PULa9t5JLg9Ta6j2" && (
                        <TableCell data-label="Trocar Senha">
                          <i onClick={() => trocaSenha(item.id_user)}>
                            <FiLock style={{ backgroundColor: "#716c6c" }} />
                          </i>
                        </TableCell>
                      )}
                      <TableCell className="level-users">
                        <FormControl sx={{ minWidth: 120 }} size="small">
                          <InputLabel id="demo-select-small-label">
                            Nível de Usuário
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Nível de Usuário"
                            key={"nivel-" + index}
                            value={item.nivel}
                            onChange={(e) =>
                              updateNivel(item.id_user, e.target.value)
                            }
                          >
                            <MenuItem
                              disabled={isDisabled}
                              value={"administrador"}
                            >
                              Administrador
                            </MenuItem>
                            <MenuItem value={"supervisor"}>Supervisor</MenuItem>
                            <MenuItem value={"aplicador"}>Aplicador</MenuItem>
                            <MenuItem value={"revisor"}>Revisor</MenuItem>
                            <MenuItem value={"auditor"}>Auditor</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                          <InputLabel id="demo-select-small-label">
                            Região
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="UF"
                            key={"regional-" + index}
                            value={
                              item.regional !== undefined ? item.regional : ""
                            }
                            onChange={(e) =>
                              updateRegional(item.id_user, e.target.value)
                            }
                            className="select-uf"
                          >
                            <MenuItem value={"SP"}>SP</MenuItem>
                            <MenuItem value={"SUL"}>SUL</MenuItem>
                            <MenuItem value={"NE"}>NE</MenuItem>
                            <MenuItem value={"CO_N"}>CO_N</MenuItem>
                            <MenuItem value={"RJ_ES_MG"}>RJ_ES_MG</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
