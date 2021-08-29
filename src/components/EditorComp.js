function EditorComp(props) {
	console.log('EditorComp',props);
	const { attributes } = props;
	
	return (
		<div className={props.className}>
			<p> Select Gallery options in Sidebar</p>
				
			<p>
				{attributes.gallery  && attributes.gallery.map(media=><img key={media.mediaId} src={media.mediaUrl} />)}
			</p>
		</div>
	);
}

export default EditorComp;
