import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import bgimg from "../../../assets/carteira.jpg";
import { Card } from "../../../components/Card";

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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  FormControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(3)
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginTop: theme.spacing(3),
    width: "100%"
  }
}));

export default function SignUp() {
  const classes = useStyles();

  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };
  const [setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleDateChange = date => {
    setSelectedDate(date);
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
      <Container component="main" maxWidth="lg">
        <Grid
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Grid item xs={12} sm={9} md={8} lg={7}>
            <Card>
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Cadastro de Vagas
                </Typography>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={8}>
                      <TextField
                        autoComplete="title"
                        name="title"
                        variant="outlined"
                        required
                        fullWidth
                        id="title"
                        label="Título da vaga"
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <TextField
                        autoComplete="company"
                        name="company"
                        variant="outlined"
                        required
                        fullWidth
                        id="company"
                        label="Empresa"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="benefits"
                        label="Benefícios"
                        name="benefits"
                        autoComplete="benefits"
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="salary"
                        label="Salário"
                        name="salary"
                        autoComplete="salary"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="workSchedule"
                        label="Horário de trabalho"
                        name="workSchedule"
                        autoComplete="workSchedule"
                      />
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="City"
                        label="Cidade"
                        name="City"
                        autoComplete="City"
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="State"
                        label="Estado"
                        name="State"
                        autoComplete="State"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="description"
                        label="Descrição"
                        multiline
                        rowsMax="4"
                        value={value}
                        onChange={handleChange}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Cadastrar
                  </Button>
                </form>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
}
