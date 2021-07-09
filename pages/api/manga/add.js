import { getSession } from 'next-auth/client';
import { addManga } from '../../../services/mangaListService';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const session = await getSession({ req });
		if (!session?.user?.email) {
			return res.status(400).send();
		} else {
			await addManga({
				userId: session.user.email,
				item: JSON.parse(req.body),
			});
			res.status(200).send();
		}
	}
}
