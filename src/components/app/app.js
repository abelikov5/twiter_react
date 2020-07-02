import React, { Component } from 'react';
import Header from '../header';
import Search from '../search';
import PostFilter from '../post-filter';
import PostList from '../post-list';
import PostAdd from '../post-add';
import './app.css';

export default class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			data: [{postText: 'I want to learn JS React, to write amazing platform for online learning, what about you? Hey man, how are you?', like: true, id: 'uniqQUjjlj', important: true},
			{postText: 'I like React', like: false, id: 'slfjljd', important: false},
			{postText: 'I like still water', like: false, id: 'dldjfl', important: false}]
		}
		this.onDelete = this.onDelete.bind(this);
	}
	onDelete(id) {
		let index = this.state.data.findIndex(element => element.id === id);
		let after = this.state.data.slice(index + 1);
		let before = this.state.data.slice(0, index);
		let newData = [...before, ...after];
		this.setState ({
			data: newData
		})
	}
	render () {
		return (
			<div className='my_app'>
				<div className='container'>
				<Header/>
				<div className='d_flex s_between'>
					<Search/>
					<PostFilter/>
				</div>
				<PostList
					posts={this.state.data}
					onDelete={(id)=>this.onDelete(id)}
					/>
				<PostAdd/>
				</div>
			</div>
		)
	};
};
