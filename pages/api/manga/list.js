const DUMMY_DATA = [
	{
		id: 1,
		title: 'Return of the 8th Class Magician',
		chapterReadNum: 2,
		chapterTotalNum: 100,
		latestReleaseDate: Date.now(),
		linkContinue: 'https://www.asurascans.com/return-of-the-8th-class-magician-ch-2/',
		linkSeries: 'https://www.asurascans.com/comics/return-of-the-8th-class-magician/',
	},
	{
		id: 2,
		title: "Player Who Can't Level Up",
		chapterReadNum: 14,
		chapterTotalNum: 54,
		latestReleaseDate: Date.now() - 999999999,
		linkContinue: 'https://www.asurascans.com/player-who-cant-level-up-chapter-37/',
		linkSeries: 'https://www.asurascans.com/comics/player-who-cant-level-up/',
	},
	{
		id: 3,
		title: 'Test Series',
		chapterReadNum: 33,
		chapterTotalNum: 33,
		latestReleaseDate: Date.now() - 99999999,
		linkContinue: 'https://www.asurascans.com/player-who-cant-level-up-chapter-37/',
		linkSeries: 'https://www.asurascans.com/comics/player-who-cant-level-up/',
	},
];
export default function handler(req, res) {
	res.status(200).json({ items: DUMMY_DATA });
}
