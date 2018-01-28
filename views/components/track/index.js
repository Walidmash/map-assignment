import React, { Component } from 'react';

import Divider from 'antd/lib/divider';
import Steps from 'antd/lib/steps';
import Button from 'antd/lib/button';
import Popconfirm from 'antd/lib/popconfirm' ;
import Rate from 'antd/lib/rate';
import Navbar from '../navbar';
import TrackMap from './trackMap';
import './index.css'

class Track extends Component {
  constructor(){
    super();
    this.confirm = this.confirm.bind(this);
  }
  confirm(e) {
    this.props.history.push('/');
  }


  render() {
    const Step = Steps.Step;
    const value = 3; //rate value
    return (
      <div className='track'>
        <Navbar title='Track Service' />
        <ul className='track__steps'>
          <Steps progressDot current={1}>
            <Step title="Pending" />
            <Step title="In Progress" />
            <Step title="Finished" />
          </Steps>
        </ul>
        <Divider />
        <section className='track__details'>
          <img className='track__logo' src='images/logo-design-kerala.png' />
          <div className='track__more'>
            <h2> Mostafa Mostafa</h2>
            <span>
             <Rate disabled value={value} />
             {value && <span className="ant-rate-text">{value} stars</span>}
           </span>
           <div className='track__actions'>
             <Button className='track__call' type="primary">Call worker</Button>
               <Popconfirm title="Are you sure cancel this task?" onConfirm={this.confirm} okText="Yes" cancelText="No">
                 <Button className='track__cancel' type="primary">
                   Cancel
                 </Button>
               </Popconfirm>
           </div>
          </div>
        </section>
        <Divider />
        <section className='track__map'>
          <TrackMap coords={{lat: 31.50170 ,lng: 34.46684}}/>
        </section>
      </div>
    );
  }
}

export default Track;
