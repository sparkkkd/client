import { useAppSelector } from '../../hooks/redux'
import { User } from '../../types/types'
import UserCard from '../UserCard/UserCard'
import styles from './UserCardWrapper.module.sass'

export default function UserCardWrapper() {
	const users: User[] = useAppSelector((state) => state.usersReducer.users)

	return (
		<div className={styles.userCardWrapper}>
			{/* {users.map((user) => (
				<UserCard key={user.phone} user={user} />
			))} */}

			{users && users.map((user) => <UserCard key={user.phone} user={user} />)}
		</div>
	)
}
