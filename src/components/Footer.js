import React, { Component } from 'react'
import '../style/components/Footer.css'
// import {
// Box,
// } from "../style/FooterStyles";

const Footer = () => {
	return (
	  <div class='footer-dark mt-5'>
		<footer>
		  <div class='container'>
			<div class='row'>
			  <div class='col-sm-6 col-md-3 item'>
				<h3>Types</h3>
				<ul>
				  <li>
					<a href='#'>Expenses</a>
				  </li>
				  <li>
					<a href='#'>R&R</a>
				  </li>
				  <li>
					<a href='#'>OPD</a>
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
				<h3>Persistent Systems Lanka (PVT) LTD</h3>
				<p>
				Persistent Systems is an Indian multinational technology services company which was incorporated on 16 May 1990 as Persistent Systems Private Limited. Persistent Systems is listed on the Bombay Stock Exchange and the National Stock Exchange.
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
			<p class='copyright'>Persistent Systems Lanka (PVT) LTD © 2022</p>
		  </div>
		</footer>
	  </div>
	)
  }
  export default Footer
