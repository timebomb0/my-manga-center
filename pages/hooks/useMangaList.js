import useSWR from 'swr';

const fetcher = (endpoint) => fetch(`/api/manga/${endpoint}`).then((res) => res.json());

function useMangaList() {
	const { data, error } = useSWR('list', fetcher);

	return {
		items: data?.items,
		isLoading: !error && !data,
		isError: error,
	};
}

export default useMangaList;
