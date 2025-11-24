import React, { Component } from 'react'

export default class CardWidget extends Component {

  render() {

    

    const {title, counter, description} = this.props;
    
    return (
      <div className=''>
        
        <h3><span className='text-warning' aria-description='element counter'>{counter}</span>{title}</h3>
        <p className='lead'>
            {description}
        </p>
        
      </div>
    )
  }
}
