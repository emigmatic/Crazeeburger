import { useOrderContext } from "../../../../context/Context"

function EditForm() {
	const { currentTab } = useOrderContext()

	return <div className="edit">{currentTab}</div>
}

export default EditForm
