import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import CanvasJSReact from './../lib/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import '../styles/App.css';

class App extends Component {
    render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "Stats"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: 30, label: "c#, c++" },
					{ y: 14, label: "javascript" },
					{ y: 20, label: "PHP" },
					{ y: 14, label: "python" },
					{ y: 19, label: "SQL" },
					{ y: 2, label: "Rust" }	
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}


    // render() {
    //     return (
    //         <div>
    //             <h1>My React App!</h1>
    //                 <Button variant="primary">Primary</Button>
    //                 <Button variant="secondary">Secondary</Button>
    //                 <Button variant="success">Success</Button>
    //                 <Button variant="warning">Warning</Button>
    //                 <Button variant="danger">Danger</Button>
    //                 <Button variant="info">Info</Button>
    //                 <Button variant="light">Light</Button>
    //                 <Button variant="dark">Dark</Button>
    //                 <Button variant="link">Link</Button>
    //         </div>
            
    //     );
    // }
}

export default App;