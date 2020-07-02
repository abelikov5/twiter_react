import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

// console.log(data);
const PostList = ({posts, onDelete}) => {
	let elements = posts.map((item) => {
		return (
			<li className='post_list_item d_flex s_between' key={item.id}>
				<PostListItem
					postText={item.postText}
					like={item.like}
					important={item.important}
					onDelete={() => onDelete(item.id)}
					/>
			</li>
		)
	})
	// console.log(posts);
	return (
		<ul className='post_list'>
			{elements}
		</ul>
	)
}

export default PostList;