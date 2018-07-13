import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as authActions from 'actions/auth';

// components
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

// views
import LoginView from './loginView';

const styles = (theme) => ({
  card: {
    width: '100%',
    maxWidth: 360,
    padding: theme.spacing.unit * 4,
    boxSizing: 'border-box',
  },
  grid: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: theme.spacing.unit,
    backgroundColor: '#2196f3',
  },
});

class Login extends Component {
  state = {
    tabValue: 'login',
    showPassword: false,
    emailInput: '',
    passwordInput: '',
  };

  handleLogin = () => {
    this.props.authActions.login({});
  };

  handleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleInputChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
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
        <Card className={classes.card} elevation={12}>
          <Tabs
            fullWidth
            indicatorColor="primary"
            onChange={this.handleChange}
            textColor="primary"
            value={this.state.tabValue}
          >
            <Tab label="Login" value="login" />
            <Tab label="Register" value="register" />
          </Tabs>

          {this.state.tabValue === 'login' ? (
            <LoginView
              emailInput={this.state.emailInput}
              handleInputChange={this.handleInputChange}
              handleLogin={this.handleLogin}
              handleShowPassword={this.handleShowPassword}
              passwordInput={this.state.passwordInput}
              showPassword={this.state.showPassword}
            />
          ) : (
            <div />
          )}
        </Card>
      </Grid>
    );
  }
}

Login.propTypes = {};

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(withStyles(styles)(Login));
