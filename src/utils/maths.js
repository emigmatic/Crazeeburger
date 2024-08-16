export function formatPrice(priceToFormat) {
	let price = priceToFormat

	// @TODO: perhaps change this to if(!price) return 0
	if (!price) return "0,00 €"
	//price = replaceFrenchCommaWithDot(price)

	const eurFormattedPrice = new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "EUR",
		maximumFractionDigits: 2,
	}).format(price)
	return eurFormattedPrice
}

export function replaceFrenchCommaWithDot(price) {
	if (typeof price === "string") price = parseFloat(price.replace(",", "."))
	return price
}
