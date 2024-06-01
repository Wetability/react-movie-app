// * Styles
import styles from './Header.module.css';

function Header(): JSX.Element {
	return (
		<header>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Title</h1>
			</div>
		</header>
	);
}

export default Header;
