import React, { Component } from 'react'
import { connect } from "react-redux";

export class Test extends Component {
  render() {
    return (
      <div>
        <table>
          <th> Prod ID</th>
          <th> Prod Name</th>
          <th> Prod Price</th>
          <th> Prod Qty</th>

           
          {/* {JSON.stringify(this.props)} */}

          <tbody>
            {this.props.cart.map(row => (
              <tr key={row.id}>
                {row.product_short_attr}
                
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => {
  return reduxState;
};

export default (
  connect(mapReduxStateToProps)(Test)
);

