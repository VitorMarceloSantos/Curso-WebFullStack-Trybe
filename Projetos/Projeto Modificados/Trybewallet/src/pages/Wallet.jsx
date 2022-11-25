import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
// import wallet from '../redux/reducers/wallet';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    // const { userState } = this.props;
    return (
      <div>
        <Header />
        <WalletForm />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userState: state.user,
});

export default connect(mapStateToProps, null)(Wallet);

// Wallet.propTypes = {
//   userState: PropTypes.shape({
//     email: PropTypes.string.isRequired,
//   }).isRequired,
// };
