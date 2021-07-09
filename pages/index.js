import Link from 'next/link';
import { Page } from '../components/layout';

export default function Home() {
	return (
		<Page>
			<Link href="/mangaList">Go To Manga List</Link>
		</Page>
	);
}
