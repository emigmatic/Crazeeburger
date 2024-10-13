import { FaPen, FaPlus } from "react-icons/fa"
import AddForm from "./AdminPanel/AddForm/AddForm"
import EditForm from "./AdminPanel/EditForm/EditForm"

export const tabs = [
	{
		index: "add",
		label: "Ajouter un produit",
		icon: <FaPlus />,
		panel: <AddForm />,
	},
	{
		index: "edit",
		label: "Modifier un produit",
		icon: <FaPen />,
		panel: <EditForm />,
	},
]
