import { useOrderContext } from "../../../../context/Context"
import BasketCard from "./BasketCard"
import { formatPrice } from "../../../../utils/maths"
import { deepClone, findById } from "../../../../utils/array"

function BasketProducts() {
	const { data, basketProducts, setBasketProducts, deleteBasketProduct } =
		useOrderContext()

	const defaultImage = "/images/coming-soon.png"

	const handleIncrement = (id) => {
		const basketProductsCopy = deepClone(basketProducts)
		const basketProductToUpdate = findById(id, basketProductsCopy)
		basketProductToUpdate.quantity++
		setBasketProducts(basketProductsCopy)
	}

	const handleDecrement = (id) => {
		const basketProductsCopy = deepClone(basketProducts)
		const basketProductToUpdate = findById(id, basketProductsCopy)
		if (basketProductToUpdate.quantity > 1) {
			basketProductToUpdate.quantity--
			setBasketProducts(basketProductsCopy)
		} else {
			deleteBasketProduct(id)
		}
	}

	return basketProducts.map(({ id, quantity }) => {
		const product = findById(id, data)

		return (
			<BasketCard
				key={product.id}
				title={product.title}
				image={product.imageSource ? product.imageSource : defaultImage}
				price={formatPrice(product.price)}
				quantity={quantity}
				handleDelete={() => deleteBasketProduct(product.id)}
				handleIncrement={() => handleIncrement(product.id)}
				handleDecrement={() => handleDecrement(product.id)}
			/>
		)
	})
}

export default BasketProducts
