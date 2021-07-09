import styles from './MangaListFilters.module.css';

function MangaListFilters({ onFilterChange }) {
	return (
		<div className={styles.filtersContainer}>
			<div className={styles.filters}>
				<span className={styles.filtersText}>Filters:</span>{' '}
				<input
					onChange={(event) =>
						onFilterChange({ name: event.target.name, isEnabled: event.target.checked })
					}
					type="checkbox"
					id="hideUpToDate"
					name="hideUpToDate"
					value="hideUpToDate"
				/>
				<label htmlFor="hideUpToDate"> Hide series I'm up-to-date with</label>
			</div>
		</div>
	);
}

export default MangaListFilters;
