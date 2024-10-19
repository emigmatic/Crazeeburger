export const convertStrToBool = (input) => {
	if (typeof input === "boolean") return input
	return input === "true"
}
