import React from 'react';
import MediaQuery from 'react-responsive';
import g from '../global.js';
import '../.css/style.css';


export default class Content extends React.Component {

    render(){
    return(
        <div className='main'>
            <MediaQuery query={g.minWidth}>
            <div>
                <p className='SubTitle'>we are <b>invooke</b>!</p>
                <p className='SubTitle2'>coming soon</p>
            </div>
            </MediaQuery>
            <MediaQuery query={g.maxWidth}>
            <div>
                <p className='SubTitle' style={{fontSize:'3vh'}}>we are <b>invooke</b>!</p>
                <p className='SubTitle2' style={{fontSize:'3vh',fontWeight:'170',top:'35%',padding:'10%', margin:'2%'}}><b>invooke</b> is coming soon</p>
            </div>
            </MediaQuery>
        </div>
    );}
}