import EditorComp from "./EditorComp";
import SidebarOptions from "./SidebarOptions";

const { Fragment } = wp.element;
const { __ } = wp.i18n;

function BlockEdit(props) {

	const onSelectMedia = (media) => {
		console.log(media);
		const images = [];
		media.forEach((m) => images.push({ mediaId: m.id, mediaUrl: m.url }));
		props.setAttributes({ gallery: images });
	};

	return (
		<Fragment>
			<SidebarOptions {...props} onSelectMedia={onSelectMedia}/>
			<EditorComp {...props} onSelectMedia={onSelectMedia}/>
		</Fragment>
	);
}

export default BlockEdit;
