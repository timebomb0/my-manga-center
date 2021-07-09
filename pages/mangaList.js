import { useState } from 'react';
import { Page } from '../components/layout';
import { MangaTable, MangaListFilters } from '../components/MangaTable';
import useMangaList from '../hooks/useMangaList';

function MangaList() {
	const { items, isLoading, isError } = useMangaList();
	const [filters, setFilters] = useState([]);
	const handleFilterChange = ({ name, isEnabled }) => {
		if (isEnabled && !filters.includes(name)) {
			setFilters([...filters, name]);
		} else if (!isEnabled && filters.includes(name)) {
			setFilters(filters.filter((val) => val !== name));
		}
	};
	const filteredItems = items?.filter((item) => {
		let isAllowed = true;
		if (filters.includes('hideUpToDate') && item.chapterTotalNum - item.chapterReadNum === 0)
			isAllowed = false;

		return isAllowed;
	});

	return (
		<Page>
			<MangaListFilters onFilterChange={handleFilterChange} />
			{isLoading ? (
				'Loading'
			) : isError ? (
				'Error'
			) : (
				<MangaTable items={filteredItems}></MangaTable>
			)}{' '}
		</Page>
	);
}

export default MangaList;
