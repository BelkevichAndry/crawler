import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import request from './../services/request'
import {Pie, Doughnut} from 'react-chartjs-2'
import '../styles/App.css';

	
class App extends Component {
	
	constructor() {
		super();
		this.state = { data: [] };
	}	

	async componentDidMount() {

		let percent; 
		try {
			await request.getFullData()
				.then((res)=> {
					percent = this.prepeareDataForPie(res);
					this.setState({ data: res })
			})
		} catch (error) {
			console.log(error);
		}

		let techLables = [];
		let dataLables = [];
		let arrayOfColors = [];

		percent.map((elm) => {
			techLables.push(elm.tech); 
			dataLables.push(elm.percent);
			arrayOfColors.push(this.getRandomColor());
		});
	
		  this.setState({
			labels: techLables,
			datasets: [
			  {
				label: 'Work Situation',
				backgroundColor: arrayOfColors,
				hoverBackgroundColor: [
				'#501800',
				'#4B5000',
				'#175000',
				'#003350',
				'#35014F'
				],
				data: dataLables
			  }
			]
		  })
	}

	// Color randomizer 
	getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
		  color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	//Percent creator
	prepeareDataForPie(res) {
		let percent = [];
		let allPercent = 0;
		res.slice(0, 21).map(element =>{ 
			allPercent+= element.found;
		})
		res.slice(0, 21).map(element =>{ 
			percent.push({
				tech: element.tech,
				percent: element.found / allPercent * 100
			});
		})
		return percent
	}

    render() {
		return (
		<div>
		<Pie
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Vacancies by Tech',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        <Doughnut
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Vacancies by Tech',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

			<ol>
				{this.state.data.slice(0, 21).map(element => <li key={element._id}>{element.tech} {element.found} {element.date}</li>)}
    		</ol>
			
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