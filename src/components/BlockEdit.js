import EditorComp from "./EditorComp";
import SidebarOptions from "./SidebarOptions";

const { Fragment } = wp.element;
const { __ } = wp.i18n;

function BlockEdit(props) {


	return (
		<Fragment>
			<SidebarOptions {...props}/>
			<EditorComp {...props} />
		</Fragment>
	);
}

export default BlockEdit;
