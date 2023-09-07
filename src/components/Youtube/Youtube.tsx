import styles from "./Youtube.module.css"
import { AiOutlineMenu } from "react-icons/ai"
const Youtube = () => {
	const logoUrl =
		"https://www.markgaler.com/wp-content/uploads/2015/07/YouTube.jpg"
	return (
		<div className={styles.page__wrapper}>
			<header className={styles.header__container}>
				<div className={styles.header}>
					<div className={[styles.left__content, styles.test__border].join(" ")}>
						<div className={styles.navbar}>
							<AiOutlineMenu size={19} />
						</div>
						<div className={styles.logo}>
							<img src={logoUrl} alt="" />
						</div>
					</div>
					<div className={[styles.main__content, styles.test__border].join(" ")}>
						<div className={styles.search__content__container}>
							<div className={styles.search__content}>
								<div className={styles.search__image}>
									<img src="" alt="" />
								</div>
								<div className={styles.search__name}>
									<input type="text" />
								</div>
								<div className={styles.keyboard__image}>
									<img src=" " alt="" />
								</div>
							</div>
							<div className={styles.search__element}>
								<div className={styles.search__icon}>
									<img src="" alt="" />
								</div>
							</div>
						</div>
						<div className={styles.audio__content__container}>
							<div className={styles.audio__content}>
								<img src="" alt="" />
							</div>
						</div>
					</div>
					<div className={[styles.test__border].join(" ")}></div>
				</div>
			</header>
		</div>
	)
}

export default Youtube
