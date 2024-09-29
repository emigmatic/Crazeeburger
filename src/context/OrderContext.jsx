/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"

export const OrderContext = createContext({
	isModeAdmin: false,
	setIsModeAdmin: () => {},
	isCollapsed: false,
	setIsCollapsed: () => {},
	currentTab: "",
	setCurrentTab: () => {},
	data: [],
	setData: () => {},
})

export default function OrderContextProvider({ children }) {
	const [isModeAdmin, setIsModeAdmin] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [currentTab, setCurrentTab] = useState("adding")
	const [data, setData] = useState(fakeMenu.LARGE)

	const OrderContextValue = {
		isModeAdmin,
		setIsModeAdmin,
		isCollapsed,
		setIsCollapsed,
		currentTab,
		setCurrentTab,
		data,
		setData,
	}

	return (
		<OrderContext.Provider value={OrderContextValue}>
			{children}
		</OrderContext.Provider>
	)
}
