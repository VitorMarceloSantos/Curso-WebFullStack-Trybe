// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import SideBar from '../components/SideBar';
// import Loading from '../components/Loading';
// import { getUser, updateUser } from '../services/userAPI';

// class ProfileEdit extends Component {
//   constructor() {
//     super();
//     this.state = {
//       informationUser: {},
//       isLoading: false,
//       name: '',
//       email: '',
//       description: '',
//       image: '',
//       btnVerify: true,
//     };
//   }

//   componentDidMount() {
//     this.setState({ isLoading: true }, async () => {
//       const user = await getUser();
//       this.setState({
//         informationUser: user,
//       }, () => {
//         const { informationUser } = this.state;
//         const arrayKeys = Object.keys(informationUser);
//         for (let i = 0; i < arrayKeys.length; i += 1) { // preenchimento automático com as informações salvas
//           if (informationUser[arrayKeys[i]].length > 0) {
//             this.setState({ [arrayKeys[i]]: informationUser[arrayKeys[i]] });
//           }
//         }
//         this.setState({ isLoading: false });
//       });
//     });
//   }

//   handleUser = ({ target: { value, name } }) => {
//     this.setState({ [name]: value }, () => {
//       this.verifybutton();
//     });
//   }

//   verifybutton = () => {
//     const { name, email, description, image } = this.state;
//     const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if ((name.length > 0) && (regexEmail.test(email))
//       && (description.length > 0) && (image.length > 0)) {
//       this.setState({ btnVerify: false });
//     }
//   }

//   updateUser = () => {
//     const { name, email, description, image } = this.state;
//     updateUser({ name, email, image, description });
//     const { history } = this.props;
//     history.push('/profile'); // redirecionando para a pagina de perfil
//   }

//   render() {
//     const { isLoading, name, email, description, image, btnVerify } = this.state;
//     return (
//       <div data-testid="page-profile-edit">
//         <SideBar />
//         ProfileEdit
//         { isLoading ? <Loading /> : (
//           <form>
//             <label htmlFor="edit-input-name">
//               Nome:
//               <input
//                 type="text"
//                 name="name"
//                 id="edit-input-name"
//                 data-testid="edit-input-name"
//                 value={ name }
//                 onChange={ this.handleUser }
//               />
//             </label>
//             <label htmlFor="edit-input-email">
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 id="edit-input-email"
//                 data-testid="edit-input-email"
//                 value={ email }
//                 onChange={ this.handleUser }
//               />
//             </label>
//             <label htmlFor="edit-input-description">
//               Descrição:
//               <textarea
//                 name="description"
//                 id="edit-input-description"
//                 data-testid="edit-input-description"
//                 placeholder="Descrição"
//                 value={ description }
//                 onChange={ this.handleUser }
//               >
//                 {}
//               </textarea>
//             </label>
//             <label htmlFor="edit-input-image">
//               Imagem:
//               <input
//                 type="text"
//                 name="image"
//                 id="edit-input-image"
//                 data-testid="edit-input-image"
//                 value={ image }
//                 onChange={ this.handleUser }
//               />
//             </label>
//             <input
//               type="button"
//               value="Salvar"
//               data-testid="edit-button-save"
//               onClick={ this.updateUser }
//               disabled={ btnVerify }
//             />
//           </form>
//         )}
//       </div>
//     );
//   }
// }
// ProfileEdit.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired,
//   }).isRequired,
// };

// export default ProfileEdit;
