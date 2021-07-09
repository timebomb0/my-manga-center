import Modal from '../layout/Modal';

function EditSeriesModal({
	onClose,
	item: {
		id,
		title,
		chapterReadNum,
		chapterTotalNum,
		latestReleaseDate,
		linkContinue,
		linkSeries,
	},
}) {
	return <Modal onClose={onClose}>Editing Series {title}</Modal>;
}

export default EditSeriesModal;
