import React from 'react';
import MediaQuery from 'react-responsive';
import g from '../global.js';
import '../.css/style.css';

export default class Tittle extends React.Component{
    render(){

    return(
        <div>
            <MediaQuery query={g.minWidth}>
                <div className='BigTitle'>
                    <p>coming soon</p>
                </div>
            </MediaQuery>

            <MediaQuery query={g.maxWidth}>
            <div className='BigTitle'style={{fontSize:'11vh',paddingLeft:'11.5%',top:'18%'}}>
                    <p>coming soon</p>
            </div>
            </MediaQuery>
        </div>
    );}
    }