import React from 'react';
import '../.css/style.css';
import MediaQuery from 'react-responsive';
import g from '../global.js';
import Title from './Title.jsx';
import SocialIcons from './SocialIcons.jsx';
import UpperTitle from './UpperTitle.jsx';



export default class MainPage extends React.Component {    
    render(){
    return(
        <div className='main'>
            <MediaQuery query={g.minWidth}></MediaQuery>
            <Title />
            <UpperTitle />
            <SocialIcons />
        </div>
    );}
}