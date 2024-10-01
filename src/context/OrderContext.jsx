/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
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
})

export default function OrderContextProvider({ children }) {
	const [isAdminMode, setIsAdminMode] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [currentTab, setCurrentTab] = useState("adding")
	const [data, setData] = useState(fakeMenu.LARGE)
	const [newProduct, setNewProduct] = useState(emptyProduct)

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
	}

	return (
		<OrderContext.Provider value={OrderContextValue}>
			{children}
		</OrderContext.Provider>
	)
}
