import { FaPen, FaPlus } from "react-icons/fa"
import AddForm from "./AdminPanel/AddForm/AddForm"
import EditForm from "./AdminPanel/EditForm/EditForm"

export const tabs = [
	{
		index: "adding",
		label: "Ajouter un produit",
		icon: <FaPlus />,
		panel: <AddForm />,
	},
	{
		index: "editing",
		label: "Modifier un produit",
		icon: <FaPen />,
		panel: <EditForm />,
	},
]
