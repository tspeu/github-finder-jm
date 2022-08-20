import React from 'react';
import UserItem from './UserItem';
// import Spinner from '../layouts/Spinner';
import PropTytes from 'prop-types';

const Users = ({users, loading}) => {
	if(loading) {
		// return <Spinner/>
		return <div className="loader">loading....</div>
	} else {
		return (
			<div  style={userStyle} >
			{users.map((user) => (
				<UserItem key={user.id} user={ user }/> 
				))}
			</div>
		);
	}
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns:  'repeat(3, 1fr)',
	gridGap: '1rem'
}
Users.propTypes = {
	users: PropTytes.array.isRequired,
	loading: PropTytes.bool.isRequired,
}

export default Users;