import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);


// class MyApp extends React.Component {
// 	state = {
// 		years: 20
// 	}
// 	nextYears = () => {
// 		let tmp = this.state.years;
// 		tmp++;
// 		this.setState({years: tmp});
// 	}
// 	render () {
// 		const {name, lastname, link} = this.props;
// 		const {years} = this.state;
// 	return (
// 			<div className='container'>
// 				<button onClick={this.nextYears}>++</button>
// 				<h1>My name is {name}, my last name is {lastname}, age {years} </h1>
// 				<a href={link}>This is my profile</a>
// 			</div>
// 		)
// 	}
// }


// const All = () => {
// 	return (
// 		<>
// 			<MyApp name = 'Alexander' lastname = 'Belikov' link = 'https://abelikov5.ru/tickets'/>
// 			<MyApp name = 'Olga' lastname = 'Vasilyeva' link = 'https://abelikov5.ru/tickets'/>
// 			<MyApp name = 'Alexandera' lastname = 'Alena' link = 'https://abelikov5.ru/tickets'/>
// 		</>

// 	)
// }