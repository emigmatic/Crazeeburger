import { useOrderContext } from "../../../../context/Context"
import BasketCard from "./BasketCard"
import { formatPrice } from "../../../../utils/maths"

function BasketProducts() {
	const { basketProducts } = useOrderContext()

	const defaultImage = "/images/coming-soon.png"

	return basketProducts.map(({ id, title, imageSource, price, quantity }) => {
		return (
			<BasketCard
				key={id}
				title={title}
				image={imageSource ? imageSource : defaultImage}
				price={formatPrice(price)}
				quantity={quantity}
			/>
		)
	})
}

export default BasketProducts
