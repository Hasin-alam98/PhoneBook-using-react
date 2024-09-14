import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../components/Header";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [data, setData] = useState([]);

  function addData(value) {
    setData((prev) => [...prev, value]);
    setName(``);
    setNumber(``);
  }
  function removeData(index) {
    let arr = data;
    console.log(arr);

    setData(arr.filter((row, i) => index !== i));
    setName(``);
    setNumber(``);
  }
  return (
    <>
      <Header />
      <Stack spacing={2} direction="row">
        <TextField
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
        />
        <TextField
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          value={number}
        />
        <Button
          variant="contained"
          onClick={() => {
            addData({ name, number });
          }}
        >
          <AddCircleIcon />
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Button</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.number}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <Button
                      variant="contained"
                      onClick={() => {
                        removeData(index);
                      }}
                    >
                      <RemoveCircleIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}

export default App;
