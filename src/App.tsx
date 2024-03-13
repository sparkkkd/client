import './App.sass'

import Search from './components/Search/Search'
import UserCardWrapper from './components/UserCardWrapper/UserCardWrapper'

import { useAppDispatch, useAppSelector } from './hooks/redux'
import { useEffect } from 'react'
import { fetchUsers } from './redux/userSlice'

function App() {
	const { isLoading } = useAppSelector((state) => state.usersReducer)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchUsers(''))
	}, [])

	return (
		<div className='container'>
			<Search />
			{isLoading ? <h1>Loading</h1> : <UserCardWrapper />}
		</div>
	)
}

export default App
