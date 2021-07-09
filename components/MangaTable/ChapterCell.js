import { useRef, useState } from 'react';
import useToggle from '../../hooks/useToggle';
import styles from './ChapterCell.module.css';

function ChapterCell({ className, itemId, chapterReadNum, chapterTotalNum }) {
	const [isEditingChapter, toggleIsEditingChapter] = useToggle();
	const [editedChapterReadNum, setEditedChapterReadNum] = useState(chapterReadNum);
	const [editedChapterTotalNum, setEditedChapterTotalNum] = useState(chapterTotalNum);
	const inputChapterReadRef = useRef();
	const inputChapterTotalRef = useRef();

	const handleEditChapter = () => {
		toggleIsEditingChapter();
		setTimeout(() => inputChapterReadRef?.current?.focus(), 0);
	};
	const handleIncrementChapter = () => {
		//TODO
	};
	const handleSaveChapter = () => {
		//TODO
		toggleIsEditingChapter();
	};
	const handleSaveOnEnter = (event) => {
		if (event.keyCode === 13) handleSaveChapter();
	};

	return (
		<td className={`${className} ${styles.cell}`}>
			{isEditingChapter ? (
				<>
					<input
						type="number"
						min="0"
						max="99999"
						tabIndex="1"
						className={styles.editingInput}
						value={editedChapterReadNum}
						onChange={(event) => setEditedChapterReadNum(event.target.value)}
						ref={inputChapterReadRef}
						onKeyUp={handleSaveOnEnter}
					></input>{' '}
					/{' '}
					<input
						type="number"
						min="0"
						max="99999"
						tabIndex="2"
						className={styles.editingInput}
						value={editedChapterTotalNum}
						onChange={(event) => setEditedChapterTotalNum(event.target.value)}
						ref={inputChapterTotalRef}
						onKeyUp={handleSaveOnEnter}
					></input>
					<button className={styles.btn} onClick={handleSaveChapter}>
						Save
					</button>
				</>
			) : (
				<>
					<span className={styles.clickable} onClick={handleEditChapter}>
						{chapterReadNum} / {chapterTotalNum}
					</span>
					<button className={styles.btn} onClick={handleIncrementChapter}>
						+
					</button>
				</>
			)}{' '}
		</td>
	);
}

export default ChapterCell;
