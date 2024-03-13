import { User } from '../../types/types'
import UserCard from '../UserCard/UserCard'
import styles from './UserCardWrapper.module.sass'

type PropTypes = {
	users: User[]
}

export default function UserCardWrapper({ users }: PropTypes) {
	return (
		<div className={styles.userCardWrapper}>
			{users.map((user) => (
				<UserCard key={user.phone} user={user} />
			))}
		</div>
	)
}
