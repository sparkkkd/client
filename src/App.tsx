import './App.sass'
import UserCardWrapper from './components/UserCardWrapper/UserCardWrapper'
import { useGetUsersQuery } from './redux/api/userApi'

function App() {
	const { data: users, isLoading } = useGetUsersQuery('')

	return (
		<div className='container'>
			{isLoading ? <h1>Loading</h1> : <UserCardWrapper users={users} />}
		</div>
	)
}

export default App
