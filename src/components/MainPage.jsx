import React from 'react';
import '../.css/style.css';
import MediaQuery from 'react-responsive';
import g from '../global.js';
import Title from './Title.jsx';
import Content from './Content.jsx';



export default class MainPage extends React.Component {    
    render(){
    return(
        <div className='main'>
            <MediaQuery query={g.minWidth}></MediaQuery>
            <Title />
            <Content />
        </div>
    );}
}