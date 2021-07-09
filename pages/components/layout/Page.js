import Header from './Header';
import styles from './Page.module.css';

function Page({ children }) {
	return (
		<div className={styles.page}>
			<Header />
			{children}
		</div>
	);
}

export default Page;
