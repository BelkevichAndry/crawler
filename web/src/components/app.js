import React, { Component } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
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
			<Container fluid>
  			<Row>
    			<Col>
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
          }}/></Col>
    			<Col>
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
          		}}/></Col>
  			</Row>
			</Container>
				  <br></br>
				  <br></br>
			<ol>
				{this.state.data.slice(0, 21).map(element => <li key={element._id}> {element.tech} ------- Vacancies:{element.found} ------ Date of scaning {element.date}</li>)}
    		</ol>
		</div>
		);
	}

}

export default App;