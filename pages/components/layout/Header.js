import useToggle from '../../hooks/useToggle';
import styles from './Header.module.css';
import { AddSeriesModal } from '../AddSeriesModal';

function Header() {
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
			</div>
			{isAddSeriesModalVisible ? (
				<AddSeriesModal onClose={toggleAddSeriesModalVisible} />
			) : null}
		</div>
	);
}

export default Header;
