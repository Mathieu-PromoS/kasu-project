/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Icon, Button, Form, Image,
} from 'semantic-ui-react';

import './style.scss';

import alternativeBanner from 'src/assets/alternativeBanner.png';
import { Redirect } from 'react-router-dom';

const LoginForm = ({
  email,
  password,
  changeEmail,
  changePassword,
  handleLogin,
  isLogged,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  const handleChangeEmail = (evt) => {
    changeEmail(evt.target.value);
  };
  const handleChangePassword = (evt) => {
    changePassword(evt.target.value);
  };

  if (isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <div className="loginform">
      <Image className="loginform-banner" src={alternativeBanner} />
      <Card className="loginform-card" centered>
        <Card.Content className="loginform-cardContent">
          <Card.Header className="loginform-cardHeader" text-align="center">Connexion</Card.Header>
          <Form className="loginform-form" onSubmit={handleSubmit}>
            <Form.Field>
              <label htmlFor="email" className="loginform-fieldLabel">Email</label>
              <Form.Input className="loginform-field" type="text" id="email" name="email" onChange={handleChangeEmail} value={email} />

            </Form.Field>
            <Form.Field>
              <label htmlFor="password" className="loginform-fieldLabel">Mot de passe</label>
              <Form.Input className="loginform-field" id="password" name="password" onChange={handleChangePassword} value={password} />

            </Form.Field>
            <Form.Field>
              <Icon name="question" /> Mot de passe oublié
            </Form.Field>
            <Button className="login-button" type="submit">Se connecter</Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default LoginForm;
