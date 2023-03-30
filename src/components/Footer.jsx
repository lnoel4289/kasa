import React, { Component } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

// const Footer = () => {
//   return (
//     <footer>
//       <Logo className="logo" alt="Logo Kaza" />
//       <p>© 2020 Kasa. All rights reserved</p>
//     </footer>
//   );
// };

// test composant classe
class Footer extends Component {
  render() {
    return (
      <footer>
        <Logo className="logo" alt="Logo Kaza" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;
