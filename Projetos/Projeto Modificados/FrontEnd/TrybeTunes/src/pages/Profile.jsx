// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import SideBar from '../components/SideBar';
// import Loading from '../components/Loading';
// import { getUser } from '../services/userAPI';

// class Profile extends Component {
//   constructor() {
//     super();
//     this.state = {
//       // check: false,
//       isLoading: false,
//       perfilUser: {},
//     };
//   }

//   componentDidMount() {
//     this.setState({ isLoading: true }, async () => {
//       const perfil = await getUser();
//       // console.log(perfil)
//       this.setState({
//         perfilUser: perfil,
//         isLoading: false,
//       });
//     });
//   }

//   render() {
//     const { isLoading, perfilUser } = this.state;
//     return (
//       <div data-testid="page-profile">
//         <SideBar />
//         Profile
//         {isLoading ? <Loading /> : (
//           <div className="container-profile">
//             <h3>{perfilUser.name}</h3>
//             <h3>{perfilUser.email}</h3>
//             <img
//               data-testid="profile-image"
//               src={ perfilUser.image }
//               alt={ perfilUser.name }
//             />
//             <h3>{perfilUser.description}</h3>
//             <Link
//               to="/profile/edit"
//               key={ perfilUser.name }
//             >
//               <p>Editar perfil</p>
//             </Link>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Profile;
