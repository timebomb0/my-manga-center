import MangaTableItem from './MangaTableItem';
import styles from './MangaTable.module.css';
import { useState } from 'react';

function MangaTable({ items }) {
	const [sortCol, setSortCol] = useState('releaseDate');
	const [sortType, setSortType] = useState('asc');

	const handleSortCol = (selectedSortCol) => {
		if (selectedSortCol !== sortCol) {
			setSortType('asc');
		} else {
			sortType === 'asc' ? setSortType('desc') : setSortType('asc');
		}

		setSortCol(selectedSortCol);
	};

	const sortedItems = items.sort((itemA, itemB) => {
		let sortResult = 0;
		if (sortCol === 'releaseDate') {
			if (itemA.latestReleaseDate > itemB.latestReleaseDate) sortResult = 1;
			else if (itemA.latestReleaseDate < itemB.latestReleaseDate) sortResult = -1;
		} else if (sortCol === 'title') {
			sortResult = itemA.title.localeCompare(itemB.title);
		} else if (sortCol === 'chapter') {
			const itemAChaptersRemaining = itemA.chapterTotalNum - itemA.chapterReadNum;
			const itemBChaptersRemaining = itemB.chapterTotalNum - itemB.chapterReadNum;
			if (itemAChaptersRemaining > itemBChaptersRemaining) sortResult = 1;
			else if (itemAChaptersRemaining < itemBChaptersRemaining) sortResult = -1;
		}

		if (sortType === 'asc') return sortResult;
		else return sortResult * -1;
	});

	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.headerRow}>
					<td
						className={`${styles.header} ${styles.sortable} ${
							sortCol === 'title' ? styles.sorted : ''
						}`}
						onClick={() => handleSortCol('title')}
					>
						Title {sortCol === 'title' && sortType === 'asc' ? '▲' : ''}
						{sortCol === 'title' && sortType === 'desc' ? '▼' : ''}
					</td>
					<td
						className={`${styles.header} ${styles.sortable} ${
							sortCol === 'chapter' ? styles.sorted : ''
						}`}
						onClick={() => handleSortCol('chapter')}
					>
						Chapter Status {sortCol === 'chapter' && sortType === 'asc' ? '▲' : ''}
						{sortCol === 'chapter' && sortType === 'desc' ? '▼' : ''}
					</td>
					<td
						className={`${styles.header} ${styles.sortable} ${
							sortCol === 'releaseDate' ? styles.sorted : ''
						}`}
						onClick={() => handleSortCol('releaseDate')}
					>
						Most Recent Release{' '}
						{sortCol === 'releaseDate' && sortType === 'asc' ? '▲' : ''}
						{sortCol === 'releaseDate' && sortType === 'desc' ? '▼' : ''}
					</td>
					<td className={styles.header}>Read</td>
				</tr>
			</thead>
			<tbody>
				{sortedItems?.map((item) => (
					<MangaTableItem item={item} key={item.id}></MangaTableItem>
				))}
			</tbody>
		</table>
	);
}

export default MangaTable;
