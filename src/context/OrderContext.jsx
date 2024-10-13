/* eslint-disable react/prop-types */
import { createContext, useRef, useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { emptyProduct } from "../utils/emptyProduct"

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
	titleEditRef: {},
})

export default function OrderContextProvider({ children }) {
	const [isAdminMode, setIsAdminMode] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [currentTab, setCurrentTab] = useState("add")
	const [data, setData] = useState(fakeMenu.LARGE)
	const [newProduct, setNewProduct] = useState(emptyProduct)
	const [productSelected, setProductSelected] = useState(emptyProduct)
	const titleEditRef = useRef()

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
		titleEditRef,
	}

	return (
		<OrderContext.Provider value={OrderContextValue}>
			{children}
		</OrderContext.Provider>
	)
}
