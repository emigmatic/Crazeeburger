const inputsConfig = [
	{
		name: "title",
		type: "text",
		label: "Nom",
		placeholder: "Product's name (e.g. Super Burger)",
		cssClass: "fa fa-burger product-name",
		required: true,
	},
	{
		name: "imageSource",
		type: "text",
		label: "Image URL link",
		placeholder: "Image URL (e.g. https://my-product-photo.png)",
		cssClass: "fa fa-camera image-source",
		required: false,
	},
	{
		name: "price",
		type: "number",
		label: "Price",
		placeholder: "Price",
		cssClass: "fa fa-euro price",
		required: true,
	},
]

export default inputsConfig
