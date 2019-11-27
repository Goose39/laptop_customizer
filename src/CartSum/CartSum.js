import React from 'react';
// import USCurrencyFormat from '../App';

class CartSum extends React.Component {

  render() {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    const total = Object.keys(this.props.summary).reduce(
      (acc, curr) => acc + this.props.summary[curr].cost,
      0
    );

      return (
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      );

  }
}

export default CartSum;
