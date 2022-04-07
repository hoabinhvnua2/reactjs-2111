import React, { Component, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Product = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShowInfo = (item) => {
    handleOpen();
    setInfo(item);
  };

  const handleGetUser = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1/users"
      ).then((data) => data.json());
      setRows(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return loading ? (
    <CircularProgress />
  ) : (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Full Name</TableCell>
              <TableCell align="right">User Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 &&
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => handleShowInfo(row)}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.firstName}</TableCell>
                  <TableCell align="right">{row.lastName}</TableCell>
                  <TableCell align="right">{`${row.firstName}  ${row.lastName}`}</TableCell>
                  <TableCell align="right">{row.userName}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <p>UserName: {info.userName}</p>
          <p>FirstName: {info.firstName}</p>
          <p>LastName: {info.lastName}</p>
          <p>FullName: {`${info.firstName} ${info.lastName}`}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Product;
