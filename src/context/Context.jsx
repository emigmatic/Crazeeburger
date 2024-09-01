import { useContext } from "react"
import { OrderContext } from "./OrderContext"

export const useOrderContext = () => useContext(OrderContext)
