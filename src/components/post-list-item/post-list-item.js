import React, { Component } from 'react';
import './post-list-item.css'



export default class PostListItem extends Component {
	constructor (props) {
		super(props);
		this.state = {
			important: props.important,
			like: props.like
		}
		this.onImportant = this.onImportant.bind(this);
		this.onLike = this.onLike.bind(this);
	}

// 	onImportant() {
// 		this.setState(({important}) => ({
// 				important: !important
// 		}))
// }
	onImportant() {
		let imp = this.state.important;
		this.setState({
			important: !imp
		})
	}
	onLike() {
		let like = this.state.like;
		this.setState({
			like: !like
		})
	}

	render () {
		const {postText} = this.props;
		// const {important} = this.state;
		let iconHeart = 'icon-heart';
		let iconImp = 'icon-star-full';
		let activImpText = 'post_text';
		if (this.state.like) {
			iconHeart += ' activ_heart_btn';
		}
		if (this.state.important) {
			iconImp += ' activ_imp_btn';
			activImpText += ' activ_imp';
		}

		return (
			<>
				<div className='wrap_text_post d_flex'>
					<div className={activImpText}>
						{postText}
					</div>
				</div>
				<div className='post_list_btn d_flex'>
					<div className="d_flex">
						<button onClick={this.onImportant}>
							<span className={iconImp} title='important post'></span>
						</button>
						<button onClick={this.onLike}>
							<span className={iconHeart} title='like it'></span>
						</button>
						<button onClick={this.props.onDelete}>
							<span className='icon-garbage' title='trash it'></span>
						</button>
					</div>
				</div>
			</>
		)
	}
};

// const PostListItem = ({postText, like}) => {
// 	// console.log(like);
// 	let classNameIcon = 'icon-heart';
// 	if (like) {
// 		classNameIcon += ' activ_btn'
// 	}
// 	return (
// 		<>
// 			<div className='wrap_text_post d_flex'>
// 				<div>
// 					{postText}
// 				</div>
// 			</div>
// 			<div className='post_list_btn d_flex'>
// 				<div className="d_flex">
// 					{/* <button>
// 						<span className='icon-star-empty'></span>
// 					</button> */}
// 					<button>
// 						<span className={classNameIcon}></span>
// 					</button>
// 					<button>
// 						<span className='icon-garbage'></span>
// 					</button>
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default PostListItem;