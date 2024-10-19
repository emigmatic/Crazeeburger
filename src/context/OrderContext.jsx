/* eslint-disable react/prop-types */
import { createContext, useRef, useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { emptyProduct } from "../utils/emptyProduct"
import { deepClone, filterById } from "../utils/array"

export const OrderContext = createContext({
	isAdminMode: false,
	setIsAdminMode: () => {},
	isCollapsed: false,
	setIsCollapsed: () => {},
	currentTab: "",
	setCurrentTab: () => {},
	data: [],
	setData: () => {},
	newProduct: {},
	setNewProduct: () => {},
	productSelected: {},
	setProductSelected: () => {},
	basketProducts: {},
	setBasketProducts: () => {},
	deleteBasketProduct: () => {},
	totalPrice: 0,
	setTotalPrice: () => {},
	titleEditRef: {},
})

export default function OrderContextProvider({ children }) {
	const [isAdminMode, setIsAdminMode] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [currentTab, setCurrentTab] = useState("add")
	const [data, setData] = useState(fakeMenu.LARGE)
	const [newProduct, setNewProduct] = useState(emptyProduct)
	const [productSelected, setProductSelected] = useState(emptyProduct)
	const [basketProducts, setBasketProducts] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)
	const titleEditRef = useRef()

	const deleteBasketProduct = (id) => {
		const basketProductsCopy = deepClone(basketProducts)
		const basketProductsUpdate = filterById(id, basketProductsCopy)
		setBasketProducts(basketProductsUpdate)
	}

	const OrderContextValue = {
		isAdminMode,
		setIsAdminMode,
		isCollapsed,
		setIsCollapsed,
		currentTab,
		setCurrentTab,
		data,
		setData,
		newProduct,
		setNewProduct,
		productSelected,
		setProductSelected,
		basketProducts,
		setBasketProducts,
		deleteBasketProduct,
		totalPrice,
		setTotalPrice,
		titleEditRef,
	}

	return (
		<OrderContext.Provider value={OrderContextValue}>
			{children}
		</OrderContext.Provider>
	)
}
