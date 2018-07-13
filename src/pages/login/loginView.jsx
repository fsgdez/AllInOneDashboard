import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

// Icons
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = (theme) => ({
  email: {
    marginTop: theme.spacing.unit * 4,
  },
  password: {
    marginTop: theme.spacing.unit * 2,
  },
  login: {
    marginTop: theme.spacing.unit * 8,
  },
  eyeIcon: {
    height: 32,
    width: 32,
  },
});

const LoginView = ({
  classes,
  emailInput,
  handleInputChange,
  handleLogin,
  handleShowPassword,
  passwordInput,
  showPassword,
}) => {
  return (
    <React.Fragment>
      <div>
        <TextField
          className={classes.email}
          fullWidth
          id="email-input"
          label="Email"
          onChange={handleInputChange('emailInput')}
          type="text"
          // margin="normal"
          value={emailInput}
        />
      </div>
      <div>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  className={classes.eyeIcon}
                  onClick={handleShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          autoComplete="current-password"
          className={classes.password}
          fullWidth
          id="password-input"
          // margin="normal"
          label="Password"
          onChange={handleInputChange('passwordInput')}
          type={showPassword ? 'text' : 'password'}
          value={passwordInput}
        />
      </div>
      <Button
        className={classes.login}
        color="primary"
        fullWidth
        onClick={handleLogin}
        variant="contained"
      >
        Log-In
      </Button>
    </React.Fragment>
  );
};

export default withStyles(styles)(LoginView);
