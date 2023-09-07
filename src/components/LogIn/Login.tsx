import styles from "./Login.module.css"
const Login = () => {
	return (
		<div className={[styles.login__wrapper, styles.center].join(" ")}>
			<div className={styles.login__container}>
				<div className={styles.title}>Log in</div>
				<div className={styles.form__container}>
					<div
						className={[styles.form__content__main, styles.form__wrapper].join(" ")}
					>
						<input type="email" placeholder="Enter email" />
					</div>
					<div
						className={[styles.form__content__main, styles.form__wrapper].join(" ")}
					>
						<input type="passworld" placeholder="Enter passworld" />
					</div>
					<div
						className={[styles.form__submit__button, styles.form__wrapper].join(" ")}
					>
						<button>Log in</button>
					</div>
				</div>
				<div className={styles.division__title}>OR</div>
				<div className={styles.form__container}>
					<div
						className={[styles.form__content__secondary, styles.form__wrapper].join(
							" "
						)}
					>
						<button>Continue with Google</button>
					</div>
					<div
						className={[styles.form__content__secondary, styles.form__wrapper].join(
							" "
						)}
					>
						<button>Continue with Microsoft</button>
					</div>
					<div
						className={[styles.form__content__secondary, styles.form__wrapper].join(
							" "
						)}
					>
						<button>Continue with Apple</button>
					</div>
				</div>
				<div className={styles.link__content__container}>
					<a href="#">Can't log in?</a>
					<a href="#">Already have an account?</a>
				</div>
			</div>
		</div>
	)
}

export default Login
