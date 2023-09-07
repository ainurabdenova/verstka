import styles from "./Two.module.css"
import profile1 from "../../assets/profile1.png"
import { TbLock } from "react-icons/tb"
import { LuEyeOff } from "react-icons/lu"
import { BsEye } from 'react-icons/bs';
import { useState } from "react"
const Two = () => {

	const [password,setPassword] = useState("")
	const [showaPss,setShowPass] = useState(false)

	const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
		setPassword(e.target.value);		
	}
	const handleClick=()=>{
		setShowPass((showaPss)=>!showaPss)
	}
	const handleReset=()=>{
		setPassword("")
	}
	return (
		<div className={styles.two__wrapper}>
			<div className={styles.two__wrapper__container}>
				<div className={styles.main__content__wrapper}>
					<div className={styles.main__title__wrapper}>
						<h2 className={styles.main__title}>Enter your password</h2>
					</div>
					<div className={styles.main__profile__wrapper}>
						<div className={styles.main__profile__img}>
							<img src={profile1} alt="" />
						</div>
						<div className={styles.main__profile__info__wrapper}>
							<p>Business Account</p>
							<h4>Sarah Bills</h4>
						</div>
					</div>
					<div className={styles.main__login__wrapper}>
						<div className={styles.main__login__title}>
							<p>Password</p>
						</div>
						<div className={styles.main__login__content__wrapper}>
							<div className={styles.main__login__input__wrapper}>
								<div className={styles.main__login__input__icon}>
									<TbLock size={18} />
								</div>
								<div className={styles.main__login__input}>
									<input type={showaPss?"text":"password"} placeholder="*******"  value={password} onChange={(e)=>handleChange(e)}/>
								</div>
							</div>
							
							<div className={styles.main__login__hide__icon} onClick={handleClick}>
								{showaPss? <BsEye />:<LuEyeOff />}
							</div>
						</div>
					</div>
					<div className={styles.main__sign__content__wrapper}>
						<div className={styles.main__sign__content}>
							<input className={styles.main__sign__icon} type="checkbox" />
							<div className={styles.main__sign__title}>Stay signed in</div>
						</div>
						<div className={styles.main__sign__button__content}>
							<button>Continue</button>
						</div>
					</div>
				</div>
				<div className={styles.last__content} onClick={handleReset}>
					<p>Reset password</p>
				</div>
			</div>
		</div>
	)
}

export default Two
