import { v4 as uuid } from 'uuid';
import db from './mongodb';

const COLLECTION = 'mangaList';
const client = async () => (await db)(COLLECTION);

export async function getAllManga({ userId }) {
	if (!userId) throw new Error('getMangaList: no userId provided');

	return (await client()).find({ userId });
}

export async function addManga({ userId, item }) {
	if (!userId) throw new Error('addManga: no userId provided');
	if (!item) throw new Error('addManga: no item provided');
	const mangaId = uuid();

	return (await client()).insertOne({
		...item,
		id: mangaId,
		userId,
	});
}

export async function updateManga({ userId, item }) {
	if (!userId) throw new Error('updateManga: no userId provided');
	if (!item) throw new Error('updateManga: no item provided');
	if (!item.id) throw new Error('updateManga: provided item does not have id');

	return (await client()).updateOne(
		{ id: item.id, userId },
		{
			$set: item,
		},
	);
}
