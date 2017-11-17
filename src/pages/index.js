import React from "react"
import Link from "gatsby-link"

export default () => 
	<div style={{color: 'tomato'}}>
		<h1>Hello Gatsby!</h1>
   		<p>What a world.</p>
   		<img src="http://lorempixel.com/400/200/" alt="cliffs?" />
   		<br />
   		<div>
   			<Link to="/page-2/">Duece</Link>
   		</div>
   		//<div>
   			//<Link to="/counter/">counter</Link>
   		//</div>
	</div>
