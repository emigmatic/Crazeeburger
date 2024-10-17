import { useOrderContext } from "../../../../context/Context"
import BasketCard from "./BasketCard"
import { formatPrice } from "../../../../utils/maths"
import { deepClone, find } from "../../../../utils/array"

function BasketProducts() {
	const { basketProducts, setBasketProducts, deleteBasketProduct } =
		useOrderContext()

	const defaultImage = "/images/coming-soon.png"

	const handleIncrement = (id) => {
		const basketProductsCopy = deepClone(basketProducts)
		const basketProductToUpdate = find(id, basketProductsCopy)
		basketProductToUpdate.quantity++
		setBasketProducts(basketProductsCopy)
	}

	const handleDecrement = (id) => {
		const basketProductsCopy = deepClone(basketProducts)
		const basketProductToUpdate = find(id, basketProductsCopy)
		if (basketProductToUpdate.quantity > 1) {
			basketProductToUpdate.quantity--
			setBasketProducts(basketProductsCopy)
		} else {
			deleteBasketProduct(id)
		}
	}

	return basketProducts.map(({ id, title, imageSource, price, quantity }) => {
		return (
			<BasketCard
				key={id}
				title={title}
				image={imageSource ? imageSource : defaultImage}
				price={formatPrice(price)}
				quantity={quantity}
				handleDelete={() => deleteBasketProduct(id)}
				handleIncrement={() => handleIncrement(id)}
				handleDecrement={() => handleDecrement(id)}
			/>
		)
	})
}

export default BasketProducts
