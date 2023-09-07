import styles from "../components/ShoppingCart.module.css"

const ShoppingCart = () => {
	const imageUrl = "https://cdn1.ozone.ru/s3/multimedia-6/6192070266.jpg"
	const imageAlt = "no image"
	return (
		<div className={[styles.shopping__cart_wrapper, styles.center].join(" ")}>
			<div className={`${styles.wrapper}`}>
				<div className="header__container">
					<h3 className="title__name font__wight__main font__size__main">
						Your shopping cart
					</h3>
					<p className="id__number font__size__secondary font__wight__secondary ">
						ID:5424595
					</p>
				</div>
				<div className="main__container">
					<div className="product__info__container">
						<div className="image__container">
							<div>
								<img className="image" src={`${imageUrl}`} alt={`${imageAlt}`} />
							</div>
						</div>
						<div className="product__info__right">
							<div className="product__name font__size__th font__wight__th">
								Robot Dream f9 + robot vacuum cleaner
							</div>
							<button className="button__primary font__size__secondary font__wight__th center">
								in stock
							</button>
							<div className="calculator__container">
								<button className="button__secondary center">-</button>
								<div className="count__product font__size__secondary">1</div>
								<button className="button__secondary center">+</button>
							</div>
						</div>
					</div>
					<div className="liner"></div>
					<div className="all__information__container">
						<div className="all__information">
							<div className="primary__title font__size__th">Standard package</div>
							<div className="primary__price font__size__th font__wight__th">FREE</div>
						</div>
						<div className="all__information">
							<div className="primary__title font__size__th">Total VAT</div>
							<div className="primary__price font__size__th font__wight__th">
								879,-
							</div>
						</div>
						<div className="all__information">
							<div className="primary__title font__size__th font__wight__th">
								Total NOK
							</div>
							<div className="primary__price font__size__th font__wight__th">
								435,-
							</div>
						</div>
						<div className="link__container">
							<a href="#" className="link font__size__secondary">
								Robot Dream f9 robot vacuum cleaner
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShoppingCart
