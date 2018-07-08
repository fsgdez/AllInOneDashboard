import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

// components
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';

// icons
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = (theme) => ({
  card: {
    width: '100%',
    maxWidth: 360,
    padding: theme.spacing.unit * 2,
  },
  email: {
  },
  password: {
    marginTop: theme.spacing.unit * 2,
  },
  login: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  grid: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: theme.spacing.unit,
  },
});

class Login extends Component {
  state = {
    showPassword: false,
  };

  handleLogin = () => {
    console.log(this.props)
    this.props.history.push('/dashboard');
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        alignItems="center"
        className={classes.grid}
        container
        direction="row"
        justify="center"
        spacing={16}
      >
        <Card className={classes.card} elevation={1}>
          <div>
            <TextField
              fullWidth
              id="email-input"
              label="Email"
              type="text"
              // margin="normal"
            />
          </div>
          <div>
            <TextField
              autoComplete="current-password"
              className={classes.password}
              fullWidth
              id="password-input"
              label="Password"
              type="password"
              // margin="normal"
            />
          </div>
          <Button className={classes.login} fullWidth variant="contained" onClick={this.handleLogin}>
            Log-In
          </Button>
          <Button className={classes.signup} fullWidth variant="contained">
            Sign-Up
          </Button>
        </Card>
      </Grid>
    );
  }
}

Login.propTypes = {};
export default withStyles(styles)(Login);
