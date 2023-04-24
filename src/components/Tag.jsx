import { Component } from "react";

// const Tag = ({ tag }) => {
//   return (
//     <div className="tag">
//       <h3>{tag}</h3>
//     </div>
//   );
// };

// test class component
class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tag } = this.props;
    return (
      <div className="tag">
        <h3>{tag}</h3>
      </div>
    );
  }
}

export default Tag;
