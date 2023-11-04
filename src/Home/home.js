import React from 'react'
import HomeHeader from './HomeHeader/HomeHeader.js'
import ListRepositories from './ListRepositories/ListRepositories.js'

const Home = () => {
	return (
		<div className="homeWrapper">
			<HomeHeader />
			<ListRepositories />
		</div>
	)
}

export default Home