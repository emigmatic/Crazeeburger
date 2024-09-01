/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const OrderContext = createContext({
	isModeAdmin: false,
	setIsModeAdmin: () => {},
	isCollapsed: false,
	setIsCollapsed: () => {},
	currentTab: "",
	setCurrentTab: () => {},
})

export default function OrderContextProvider({ children }) {
	const [isModeAdmin, setIsModeAdmin] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [currentTab, setCurrentTab] = useState("adding")

	const OrderContextValue = {
		isModeAdmin,
		setIsModeAdmin,
		isCollapsed,
		setIsCollapsed,
		currentTab,
		setCurrentTab,
	}

	return (
		<OrderContext.Provider value={OrderContextValue}>
			{children}
		</OrderContext.Provider>
	)
}
