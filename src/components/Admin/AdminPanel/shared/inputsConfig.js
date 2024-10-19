export const textInputsConfig = [
	{
		name: "title",
		type: "text",
		label: "Nom",
		placeholder: "Nom du produit (ex: Super Burger)",
		cssClass: "fa fa-burger product-name",
		required: true,
	},
	{
		name: "imageSource",
		type: "text",
		label: "Image URL",
		placeholder: "Image URL (ex: https://my-product-photo.png)",
		cssClass: "fa fa-camera image-source",
		required: false,
	},
	{
		name: "price",
		type: "number",
		label: "Prix",
		placeholder: "Prix",
		cssClass: "fa fa-euro price",
		required: true,
	},
]

export const selectInputsConfig = [
	{
		name: "isAvailable",
		options: [
			{ value: true, label: "En stock" },
			{ value: false, label: "En rupture" },
		],
		label: "Disponibilité",
		cssClass: "fa fa-box avaibility",
	},
	{
		name: "isAdvertised",
		options: [
			{ value: false, label: "Sans pub" },
			{ value: true, label: "Avec pub" },
		],
		label: "Publicité",
		cssClass: "fa fa-bullhorn advertising",
	},
]
