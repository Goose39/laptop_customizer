import React from 'react';
import SpecBox from '../SpecBox/SpecBox';


class SpecList extends React.Component {
  
  render() {

    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
       return <SpecBox selected={this.props.selected} key={featureHash} feature={feature} features={this.props.features} updateFeature={this.props.updateFeature}/>
      })
    return (
      <div>
        {features}
      </div>
    );
  }   
}

export default SpecList;