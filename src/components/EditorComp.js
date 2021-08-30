const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { Button } = wp.components;
const { __ } = wp.i18n;

function EditorComp(props) {
	const { attributes, onSelectMedia, setAttributes } = props;
	const removeImage = (id) => {
		const updatedGallery = attributes.gallery.filter((image) => image.mediaId !== id);
		setAttributes({ gallery: updatedGallery });
	};

	return (
		<div className={props.className}>
			<ul className="thumbnails">
				{attributes.gallery &&
					attributes.gallery.map((media) => (
						media && <li key={media.mediaId}>
							<div
								className="remove"
								onClick={() => removeImage(media.mediaId)}
							>
								X
							</div>
							<img src={media.mediaUrl} alt="Logo" />
						</li>
						
					))}
			</ul>

			{attributes.gallery && <hr />}

			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectMedia}
					allowedTypes={["image"]}
					value={
						attributes.gallery
							? attributes.gallery.map((image) => image.mediaId)
							: []
					}
					render={({ open }) => (
						<Button onClick={open} isDefault isLarge className="centered">
							{__("Add more photos", "GGL")}
						</Button>
					)}
					multiple={true}
				/>
			</MediaUploadCheck>
		</div>
	);
}

export default EditorComp;
