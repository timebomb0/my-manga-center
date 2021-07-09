import styles from './AddSeriesModal.module.css';
import Modal from '../layout/Modal';
import { useState } from 'react';

function AddSeriesModal({ onClose }) {
	const [title, setTitle] = useState('');
	const [chapterReadNum, setChapterReadNum] = useState(1);
	const [chapterTotalNum, setChapterTotalNum] = useState(1);
	const [seriesLink, setSeriesLink] = useState('');

	const fieldSetters = {
		title: setTitle,
		chapterReadNum: setChapterReadNum,
		chapterTotalNum: setChapterTotalNum,
		seriesLink: setSeriesLink,
	};

	const handleChange = (name) => {
		return (event) => {
			fieldSetters[name](event.target.value);
		};
	};

	return (
		<Modal onClose={onClose}>
			<form className={styles.form}>
				<fieldset>
					<label htmlFor="title">Series Title:</label>
					<input
						type="text"
						name="title"
						className={styles.textInput}
						value={title}
						onChange={handleChange('title')}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="chapterReadNum">Chapter # You're Reading:</label>
					<input
						type="text"
						name="chapterReadNum"
						className={styles.textInput}
						value={chapterReadNum}
						onChange={handleChange('chapterReadNum')}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="chapterTotalNum">Total Chapters Released:</label>
					<input
						type="text"
						name="chapterTotalNum"
						className={styles.textInput}
						value={chapterTotalNum}
						onChange={handleChange('chapterTotalNum')}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="seriesLink">Series URL:</label>
					<input
						type="text"
						name="seriesLink"
						className={styles.textInput}
						value={seriesLink}
						onChange={handleChange('seriesLink')}
					/>
				</fieldset>
				<button className={styles.saveBtn} type="submit">
					Add
				</button>
			</form>
		</Modal>
	);
}

export default AddSeriesModal;
