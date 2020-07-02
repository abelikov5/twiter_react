import React from 'react';
import './header.css';

const Header = () => {
	return (
		<div className="header_app d_flex s_between">
			<div className='account_owner'>
				Alexander Belikov
			</div>
			<div className="num_posts">
				Всего 3 записи, из них понравилось 2 записи
			</div>
		</div>
	)
}
export default Header;