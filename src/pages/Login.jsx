import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

// components
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';

// icons
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class Login extends Component {
  state = {
    showPassword: false
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid>
        <Grid item xs={12}>
          <div>
            <TextField
              id="email-input"
              label="Email"
              type="text"
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {};
export default withStyles(styles)(Login);
