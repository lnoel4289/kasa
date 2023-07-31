import { /*Component,*/ useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import PictureCounter from "./PictureCounter";
import { useLocation } from "react-router-dom";

const Carousel = ({ pictures, title }) => {
  const [picture, setPicture] = useState(0);
  const params = useLocation();
  console.log(params);
  return (
    <section className="carousel">
      {<img src={`${pictures[picture]}`} alt={`${title} ${picture + 1}`} />}
      <PictureCounter pictures={pictures} picture={picture} />
      {pictures.length > 1 && (
        <div>
          <div
            className="arrow-container arrow-container__left"
            onClick={() => {
              picture === 0
                ? setPicture(pictures.length - 1)
                : setPicture(picture - 1);
            }}
          >
            <MdArrowForwardIos className="arrow" />
          </div>
          <div
            className="arrow-container arrow-container__right"
            onClick={() =>
              picture === pictures.length - 1
                ? setPicture(0)
                : setPicture(picture + 1)
            }
          >
            <MdArrowForwardIos className="arrow" />
          </div>
        </div>
      )}
    </section>
  );
};


// test class component
// class Carousel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       picture: 0,
//     };
//   }

//   render() {
//     const { pictures, title } = this.props;
//     return (
//       <section className="carousel">
//         {
//           <img
//             src={`${pictures[this.state.picture]}`}
//             alt={`${title} ${this.state.picture + 1}`}
//           />
//         }
//         <PictureCounter pictures={pictures} picture={this.state.picture} />
//         {pictures.length > 1 && (
//           <div>
//             <div
//               className="arrow-container arrow-container__left"
//               onClick={() => {
//                 this.state.picture === 0
//                   ? this.setState({ picture: pictures.length - 1 })
//                   : this.setState({ picture: this.state.picture - 1 });
//               }}
//             >
//               <MdArrowForwardIos className="arrow" />
//             </div>
//             <div
//               className="arrow-container arrow-container__right"
//               onClick={() =>
//                 this.state.picture === pictures.length - 1
//                   ? this.setState({ picture: 0 })
//                   : this.setState({ picture: this.state.picture + 1 })
//               }
//             >
//               <MdArrowForwardIos className="arrow" />
//             </div>
//           </div>
//         )}
//       </section>
//     );
//   }
// }

export default Carousel;
