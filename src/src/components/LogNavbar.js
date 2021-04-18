import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import Modal from "@material-ui/core/Modal";
import { Link, Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { useAuth } from "../lib/auth";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    flexGrow: 1
  },
  customHeight: {
    minHeight: 200
  },
  button: {
    '&:hover': {
      backgroundColor: `#3f71b5`
    },
    color: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  joinButton: {
    marginTop: `4%`,
    padding: 10,
  },
  infoDiv: {
    marginTop: `3%`,
    fontSize: 12.5,
    opacity: 0.7
  },
  offset: theme.mixins.toolbar
}));

export default function LogNavbar() {
  const auth = useAuth();
  const classes = useStyles();
  const [example, setExample] = useState("primary");
  const [modalStyle] = React.useState(getModalStyle);
  const [openJoin, setOpenJoin] = React.useState(false);
  const [openCreate, setOpenCreate] = React.useState(false);
  const [groupName, setGroupName] = useState('');
  const [password, setPassword] = useState('');
  const [groupTitle, setGroupTitle] = useState('');

  const handleOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
  };

  const handleSubmitCreate = () => {
    setOpenCreate(false);
  };

  const signOut = () => {
    auth.signout();
  }

  const createBody = (
    <div style={modalStyle} className={classes.modal}>
      <h2 id="simple-modal-title" style={{ textAlign: "center", fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" }}>New Log</h2>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmitCreate}>
        <TextField
          id="log-message"
          label="Log Message"
          variant="outlined"
          onInput={e => setGroupTitle(e.target.value)}
          fullWidth={true}
          multiline={true}
          rowsMax={4}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.joinButton}
          type="submit"
        >
          Create Log
            </Button>
      </form>
    </div>
  );

  return (
    <React.Fragment>
      <AppBar
        color={"primary"}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Logzly
          </Typography>
          <Button type="button" color="inherit" className={classes.button} onClick={handleOpenCreate}>
            New Log
          </Button>
          <Link to="/groups" style={{ textDecoration: 'none' }}>
            <Button type="button" color="primary" className={classes.button}>
              View Groups
            </Button>
          </Link>
          <Button color="inherit" className={classes.button} onClick={signOut}>
            Sign Out
          </Button>
        </Toolbar>
        <Modal
          open={openCreate}
          onClose={handleCloseCreate}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {createBody}
        </Modal>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
