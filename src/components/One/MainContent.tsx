import { FC } from "react"
import styles from "./One.module.css"
import { AiOutlineHeart } from "react-icons/ai"
import { MainContentObjType } from "./One"

type MainContentType = {
	data:MainContentObjType
    addFavorite:(event:React.MouseEvent<HTMLDivElement, MouseEvent>,clickedData:MainContentObjType)=>void
}

const MainContent: FC<MainContentType> = ({ data, addFavorite}) => {
	return (
		<div className={styles.main__wrapper}>
			<div className={styles.main__wrapper__container}>
				<div className={styles.left__content}>
					<div className={styles.left__content__logo}>
						{data.icon}
					</div>
					<div className={styles.left__content__text}>
						<span>{data.title}</span>
					</div>
				</div>
				<div className={styles.right__content__icon} onClick={(e)=>addFavorite(e, data)}>
					<AiOutlineHeart size={12} className={ data.isLike ? styles.icon__red : "" } />
				</div>
			</div>
		</div>
	)
}

export default MainContent
