import React from 'react';
import { Link } from 'react-router';


const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstragram</Link>
        </h1>
        {/* This will past props from Main to any sub children. */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;