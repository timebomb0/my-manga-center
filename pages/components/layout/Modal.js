import styles from './Modal.module.css';

function Modal({ children, onClose }) {
	return (
		<>
			<div className={styles.overlay} onClick={onClose}></div>
			<div className={styles.modal}>
				<div onClick={onClose} className={styles.closeBtn}>
					X
				</div>
				{children}
			</div>
		</>
	);
}

export default Modal;
