import styles from './UserCard.module.sass'
import { User } from '../../types/types'

type PropTypes = {
	user: User
}

export default function UserCard({ user }: PropTypes) {
	return (
		<div className={styles.userCard}>
			<h5 className={styles.userCardTitle}>{user.name}</h5>
			<div>
				<img src='phone.svg' alt='' />
				<span className={styles.userCardPhone}>{user.phone}</span>
			</div>
			<div>
				<img src='mail.svg' alt='' />
				<span className={styles.userCardEmail}>{user.email}</span>
			</div>
		</div>
	)
}
