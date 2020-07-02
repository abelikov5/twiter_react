import React from 'react';

const PostAdd = () => {
	return (
		<form className='post_add_form d_flex s_between'>
			<input type="text" placeholder='Напишите, о чем Вы думаете прямо сейчас?' className='search_panel'/>
			<button type='submit'>
				Добавить
			</button>
		</form>
	)
}
export default PostAdd;