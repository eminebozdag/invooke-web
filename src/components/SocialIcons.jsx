import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faMedium, faLinkedin, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons';



export default class SocialIcons extends React.Component{
  render(){
    return(
  <div>
    <FontAwesomeIcon className='playicon' icon={faPlay} size='2x' color='white'/>
    <FontAwesomeIcon className='social' style={{left:'82.5%'}} icon={faFacebook} size='2x' color='white'/>
    <FontAwesomeIcon className='social' style={{left:'86%'}} icon={faInstagram} size='2x' color='white'/>
    <FontAwesomeIcon className='social' style={{left:'89.5%'}} icon={faTwitter} size='2x' color='white'/>
    <FontAwesomeIcon className='social' icon={faEnvelope} size='2x' color='white'/>
  </div>
);}
}