import styles from "./FlexLayout.module.css"
const FlexLayout = () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	return (
		<div className={styles.page__wrapper}>
			<div className={styles.item__wrapper}>
				{arr.map((item, index) => (
					<div
						key={index}
						className={[styles.item, styles[`item${item}`]].join(" ")}
					>
						{item}
					</div>
				))}
			</div>
		</div>
	)
}

export default FlexLayout
