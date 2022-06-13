import React, { Component } from 'react';
import "./About.css";
// import {profile_pic_Nina} from "../assets/profile_pic_Nina";
import profile_pic_Nina from "../assets/profile_pic_Nina.jpg"
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p>YEEEEETs</p>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src= {profile_pic_Nina}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Nina Gaffney</div>
            <div className="brief_description">
              <p>I'm an IT major at Valencia College in Orlando. I love coffee, skating, and dogs!</p>
            </div>
          </div>
        </div>
      </div>
  
    )
  }
}