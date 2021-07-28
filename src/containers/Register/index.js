import { connect } from 'react-redux';
import Register from 'src/components/Register';
import {
  changePseudo,
  changePassword,
  changeCity,
  changeZipCode,
  changeAddress,
  changeFirstName,
  changeLastName,
  changeEmail,
  RegisterUser,
} from '../../actions/user';

const mapStateToProps = (state, ownProps) => ({
  zipCode: state.user.zipCode,
  email: state.user.email,
  address: state.user.address,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  pseudo: state.user.pseudo,
  city: state.user.city,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changePseudo: function (pseudo) {
    dispatch(changePseudo(pseudo));
  },
  changePassword: function (password) {
    dispatch(changePassword(password));
  },
  changeEmail: function (email) {
    dispatch(changeEmail(email));
  },
  changeZipCode: function (zipCode) {
    dispatch(changeZipCode(zipCode));
  },
  changeAddress: function (address) {
    dispatch(changeAddress(address));
  },
  changeCity: function (city) {
    dispatch(changeCity(city));
  },
  changeFirstName: function (firstName) {
    dispatch(changeFirstName(firstName));
  },
  changeLastName: function (lastName) {
    dispatch(changeLastName(lastName));
  },
  handleRegistering: function () {
    dispatch(RegisterUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);