import React from 'react';
import CartItem from '../CartItem/CartItem';
import slugify from 'slugify';



class CartList extends React.Component {

  render() {
    const list = Object.keys(this.props.summary).map((feature, idx) => {
      const featureHash = slugify(JSON.stringify(feature + '-cart-' + idx));
      const selectedOption = this.props.summary[feature];
      return <CartItem feature={feature} selectedOption={selectedOption} key={featureHash} />;
    })
    
      return (
        <>
          {list}
        </>
      );
    }  
}

export default CartList;



