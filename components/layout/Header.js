import { signIn, signOut, useSession } from 'next-auth/client';
import useToggle from '../../hooks/useToggle';
import styles from './Header.module.css';
import { AddSeriesModal } from '../AddSeriesModal';

function Header() {
	const [session, test] = useSession();

	const [isAddSeriesModalVisible, toggleAddSeriesModalVisible] = useToggle();
	return (
		<div className={styles.header}>
			<div className={styles.left}>
				<div className={styles.logo}>My Manga Center</div>
			</div>
			<div className={styles.right}>
				<button className={styles.addSeries} onClick={() => toggleAddSeriesModalVisible()}>
					Add Series
				</button>
				{!session && (
					<>
						Not signed in <br />
						<button onClick={() => signIn()}>Sign in</button>
					</>
				)}
				{session && (
					<>
						Signed in as {session.user.email} <br />
						<button onClick={() => signOut()}>Sign out</button>
					</>
				)}
			</div>
			{isAddSeriesModalVisible ? (
				<AddSeriesModal onClose={toggleAddSeriesModalVisible} />
			) : null}
		</div>
	);
}

export default Header;
