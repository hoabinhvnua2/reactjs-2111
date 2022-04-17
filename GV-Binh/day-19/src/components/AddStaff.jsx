import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  Grid,
  Paper,
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { AppContext } from "../context";
import { useForm } from "react-hook-form";
import { schema } from "../Schema/staffSchema.ts";
import { yupResolver } from "@hookform/resolvers/yup";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddStaff = () => {
  const { state, dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [phongBan, setPhongBan] = useState("");
  const [chucVu, setChucVu] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePhongBan = (e) => {
    setPhongBan(e.target.value);
  };

  const handleChangeChucVu = (e) => {
    setChucVu(e.target.value);
  };

  const submitStaff = (data) => {
    dispatch({ type: "ADD_NEW_STAFF", payload: data });
    handleClose();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button variant="contained" onClick={handleClickOpen}>
        Them
      </Button>
      <Grid container spacing={2}>
        {state.staff.length > 0 &&
          state.staff.map((s) => (
            <Grid item xs={4}>
              <Paper elevation={3}>{s.name}</Paper>
            </Grid>
          ))}
      </Grid>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        size="sm"
      >
        <DialogTitle>Add New Staff</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(submitStaff)}>
            <Grid item xs={12}>
              <TextField
                label="Ten"
                id="outlined-size-small"
                size="small"
                error={!!errors?.name?.message}
                helperText={errors?.name?.message}
                {...register("name")}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <TextField
                label="Phong ban"
                id="outlined-size-small"
                size="small"
                error={!!errors?.phongBan?.message}
                helperText={errors?.phongBan?.message}
                {...register("phongBan")}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <TextField
                label="Chuc vu"
                id="outlined-size-small"
                size="small"
                error={!!errors?.chucVu?.message}
                helperText={errors?.chucVu?.message}
                {...register("chucVu")}
              />
            </Grid>
            <Button type="submit">Add</Button>
            <Button type="button" onClick={handleClose}>
              Cancel
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AddStaff;
