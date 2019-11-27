import React from 'react';
import SpecItem from '../SpecItem/SpecItem';
import slugify from 'slugify';


class SpecBox extends React.Component {

  render() {
    
      const options = this.props.features[this.props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item.name));
       return <SpecItem selected={this.props.selected} key={itemHash} itemHash={itemHash} feature={this.props.feature} item={item} updateFeature={this.props.updateFeature}/>
       })

    return (
      <fieldset className="feature">
        <legend className="feature__name">
          {this.props.feature}
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default SpecBox;

