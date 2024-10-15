import { useState } from "react"

export const useSuccessMsg = (delay = 2000) => {
	const [isSuccess, setIsSuccess] = useState(false)

	const displaySuccessMsg = () => {
		setIsSuccess(true)
		setTimeout(() => {
			setIsSuccess(false)
		}, delay)
	}

	return { isSuccess, displaySuccessMsg }
}
