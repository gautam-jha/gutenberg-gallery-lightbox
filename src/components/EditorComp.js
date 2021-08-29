function EditorComp(props) {

	const { attributes } = props;
	
	return (
		<div className={props.className}>
			<em>Select or Remove Images from Sidebar</em>
			<div class="editor-gallery">
				{attributes.gallery  && attributes.gallery.map(media=><img key={media.mediaId} src={media.mediaUrl} />)}
			</div>
		</div>
	);
}

export default EditorComp;
