import MainContent from "./MainContent"
import styles from "./One.module.css"
import { BsSearch } from "react-icons/bs"
import { BiLogoBitcoin } from "react-icons/bi"
import {
	RxGithubLogo,
	RxInstagramLogo,
	RxLinkedinLogo,
	RxTwitterLogo,
	RxDiscordLogo,
} from "react-icons/rx"
import { ReactNode, useState } from "react"

export type MainContentObjType = {
	id: number
	icon: ReactNode
	title: MainContentObjTitleType
	isLike: boolean
	categories: "OTHERS" | "BTS"
}
// categories: Omit<ButtonCategories,"OTHERS" | "BTS">

type ButtonCategories = "All" | "BTS" | "OTHER" | "LIKE"

type MainDataType = {
	current: ButtonCategories
	data: MainContentObjType[]
}

type MainContentObjTitleType =
	| "BTS"
	| "GIT"
	| "INSTAGRAM"
	| "LINKEDIN"
	| "TWITTER"
	| "DISCORD"

const mainContentObj: MainContentObjType[] = [
	{
		id: 1,
		icon: <BiLogoBitcoin size={25} />,
		title: "BTS",
		isLike: false,
		categories: "BTS",
	},
	{
		id: 2,
		icon: <RxGithubLogo size={20} />,
		title: "GIT",
		isLike: false,
		categories: "OTHERS",
	},
	{
		id: 3,
		icon: <RxInstagramLogo size={19} />,
		title: "INSTAGRAM",
		isLike: true,
		categories: "OTHERS",
	},
	{
		id: 4,
		icon: <RxLinkedinLogo size={19} />,
		title: "LINKEDIN",
		isLike: true,
		categories: "OTHERS",
	},
	{
		id: 5,
		icon: <RxTwitterLogo size={19} />,
		title: "TWITTER",
		isLike: false,
		categories: "OTHERS",
	},
	{
		id: 6,
		icon: <RxDiscordLogo size={19} />,
		title: "DISCORD",
		isLike: false,
		categories: "OTHERS",
	},
]

const initialState: MainDataType = {
	current: "All",
	data: mainContentObj,
}

const One = () => {
	const [data, setData] = useState<MainDataType>(initialState)
	const [inputValue, setInputValue] = useState<string>("")

	const handleClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		categories: ButtonCategories
	) => {
		e.preventDefault()
		e.stopPropagation()
		if (categories === "All") {
			setData(initialState)
		} else if (categories === "BTS") {
			const filterBts = mainContentObj.filter((elem) => elem.categories === "BTS")
			setData({
				data: filterBts,
				current: categories,
			})
		} else if (categories === "OTHER") {
			const filterOther = mainContentObj.filter((el) => el.categories === "OTHERS")
			setData({
				data: filterOther,
				current: categories,
			})
		} else if (categories === "LIKE") {
			const filterLike = mainContentObj.filter((el) => el.isLike)
			setData({
				data: filterLike,
				current: categories,
			})
		} else {
			throw new Error("Error")
		}
	}

	const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
		setInputValue(e.target.value)
		
	}

	const addFavorite=(event:React.MouseEvent<HTMLDivElement, MouseEvent>,clickedData:MainContentObjType)=>{
		event.preventDefault()
		event.stopPropagation()
		console.log(clickedData);
	}
	return (
		<div className={styles.one__wrapper}>
			<div className={styles.one__warpper__container}>
				<header className={styles.header}>
					<div className={styles.button__wrapper}>
						<button
							onClick={(e) => handleClick(e, "All")}
							className={[
								data.current === "All" ? styles.button__active : "",
								styles.button__first,
								styles.button__ui,
							].join(" ")}
						>
							All
						</button>
						<button
							onClick={(e) => handleClick(e, "BTS")}
							className={[
								data.current === "BTS" ? styles.button__active : "",
								styles.button__ui,
							].join(" ")}
						>
							BTS
						</button>
						<button
							onClick={(e) => handleClick(e, "OTHER")}
							className={[
								data.current === "OTHER" ? styles.button__active : "",
								styles.button__ui,
							].join(" ")}
						>
							OTHER
						</button>
						<button
							onClick={(e) => handleClick(e, "LIKE")}
							className={[
								data.current === "LIKE" ? styles.button__active : "",
								styles.button__fourth,
								styles.button__ui,
							].join(" ")}
						>
							❤️
						</button>
					</div>
					<div className={styles.search__wrapper}>
						<div className={styles.search__icon}>
							<BsSearch size={11} />
						</div>
						<div className={styles.search__input}>
							<input
								value={inputValue}
								onChange={(e)=>handleChange(e)}
								type="text"
								placeholder="Search BTC, OTHER,..."
							/>
						</div>
					</div>
				</header>
				<main className={styles.main__maping}>
					{data.data.filter(el=>el.title.toLowerCase().includes(inputValue.toLowerCase())).map((item) => (
						<MainContent key={item.id} data={item} addFavorite={addFavorite}/>
					))}
				</main>
			</div>
		</div>
	)
}

export default One
