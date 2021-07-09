import ChapterCell from './ChapterCell';
import { EditSeriesModal } from '../EditSeriesModal';
import styles from './MangaTableItem.module.css';
import useToggle from '../../hooks/useToggle';

function MangaTableItem({ item }) {
	const [isViewSeriesModalVisible, toggleViewSeriesModalVisible] = useToggle();
	const {
		id,
		title,
		chapterReadNum,
		chapterTotalNum,
		latestReleaseDate,
		linkContinue,
		linkSeries,
	} = item;
	const handleViewSeries = () => {
		toggleViewSeriesModalVisible();
	};
	const latestReleaseDateStr =
		latestReleaseDate === 0 ? 'N/A' : new Date(latestReleaseDate).toDateString();
	return (
		<tr className={styles.row}>
			<td className={`${styles.cell} ${styles.title}`} onClick={handleViewSeries}>
				{title}
			</td>
			<ChapterCell
				itemId={id}
				chapterReadNum={chapterReadNum}
				chapterTotalNum={chapterTotalNum}
				className={styles.cell}
			/>
			<td className={styles.cell}>{latestReleaseDateStr}</td>
			<td className={styles.cell}>
				<a target="_blank" rel="noopener noreferrer" href={linkContinue}>
					Continue Reading
				</a>
				<span className={styles.linkBullet}>&bull;</span>
				<a target="_blank" rel="noopener noreferrer" href={linkSeries}>
					View Series
				</a>
			</td>
			{isViewSeriesModalVisible ? (
				<EditSeriesModal
					onClose={toggleViewSeriesModalVisible}
					item={item}
				></EditSeriesModal>
			) : null}
		</tr>
	);
}

export default MangaTableItem;
