import React, { Component, useState } from "react";
import { Redirect, Router } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import bgimg from "../../../../assets/carteira.jpg";
function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{
        fontWeight: "bolder",
        color: "#4F4F4F"
      }}
    >
      {"Copyright © "}
      DKR - Vagas {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Option({ history }) {
  const classes = useStyles();

  const handleSignupRecruiter = async () => {
    history.push("/signup/recruiter");
  };

  const handleSignupCandidate = async () => {
    history.push("/signup/candidate");
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundSize: "cover",
        backgroundImage: `url(${bgimg})`
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        style={{
          boxShadow: "0px 0px 3px #AAA",
          padding: 15,
          borderRadius: 5,
          backgroundColor: "#FFF"
        }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Cadastro de usuários
          </Typography>
          <form className={classes.form} noValidate>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleSignupRecruiter()}
            >
              Recrutador
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleSignupCandidate()}
            >
              Candidato
            </Button>
          </form>
        </div>
      </Container>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}