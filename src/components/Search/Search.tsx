import styles from './Search.module.sass'

import { useAppDispatch } from '../../hooks/redux'
import { fetchUsers } from '../../redux/userSlice'
import { useDebouncedCallback } from 'use-debounce'

export default function Search() {
	const dispatch = useAppDispatch()

	const debouncedOnSearch = useDebouncedCallback((value) => {
		dispatch(fetchUsers(value))
	}, 1000)

	return (
		<div className={styles.searchWrapper}>
			<input
				type='search'
				className={styles.search}
				onChange={(e) => debouncedOnSearch(e.target.value)}
			/>
			<img className={styles.searchImg} src='search.svg' alt='' />
		</div>
	)
}
