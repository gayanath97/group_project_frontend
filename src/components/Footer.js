// import React from "react";
// // import {
// // Box,
// // } from "../style/FooterStyles";

// const Footer = () => {
// return (
// 	// <Box>
// 	<div>
// 	<h1 style={{ color: "green",
// 				textAlign: "center",
// 				marginTop: "-50px" }}>
// 		Persistent Systems Lanka (PVT) LTD<br />
		
// 	</h1>

// 	<h3 style={{
// 		color:"red",
// 		textAlign:"center"
// 	}}>© 2022 Persistent Systems</h3>

// 	{/* </Box> */}
// 	</div>
// );
// };
// export default Footer;
import React, { Component } from 'react'
import '../style/components/Footer.css'

const Footer = () => {
  return (
    <div class='footer-dark mt-5'>
      <footer>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-6 col-md-3 item'>
              <h3>Services</h3>
              <ul>
                <li>
                  <a href='#'>Hotel Bookings</a>
                </li>
                <li>
                  <a href='#'>Events</a>
                </li>
                <li>
                  <a href='#'>Parties</a>
                </li>
              </ul>
            </div>
            <div class='col-sm-6 col-md-3 item'>
              <h3>About</h3>
              <ul>
                <li>
                  <a href='#'>Company</a>
                </li>
                <li>
                  <a href='#'>Team</a>
                </li>
                <li>
                  <a href='#'>Careers</a>
                </li>
              </ul>
            </div>
            <div class='col-md-6 item text'>
              <h3>BOOKNOW.LK</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                odit iure distinctio rem alias aliquam voluptas quaerat velit
                reiciendis repellat perferendis soluta itaque, illo quibusdam
                eius voluptatem quo ullam officiis.
              </p>
            </div>
            <div class='col item social'>
              <a href='#'>
                <i class='icon ion-social-facebook'></i>
              </a>
              <a href='#'>
                <i class='icon ion-social-twitter'></i>
              </a>
              <a href='#'>
                <i class='icon ion-social-snapchat'></i>
              </a>
              <a href='#'>
                <i class='icon ion-social-instagram'></i>
              </a>
            </div>
          </div>
          <p class='copyright'>BOOKNOW.LK © 2022</p>
        </div>
      </footer>
    </div>
  )
}
export default Footer