const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { PanelBody, Button, ResponsiveWrapper } = wp.components;
const { __ } = wp.i18n; // Import __() from wp.i18n

function SidebarOptions(props) {
	const { attributes, setAttributes, media } = props;

	const { layouts } = attributes.settings;

	const removeMedia = () => {
		props.setAttributes({gallery:[]});
	};

	const onSelectMedia = (media) => {
		console.log(media);
		const images = [];
		media.forEach((m) => images.push({ mediaId: m.id, mediaUrl: m.url }));
		props.setAttributes({ gallery:images });
	};

	const changeLayout = () =>{
		// in development
	}

	return (
		<InspectorControls>
			<PanelBody
				title={__("Select block background image", "GGL")}
				initialOpen={true}
			>
				<div className="editor-post-featured-image">
					<label>Choose Layouts</label>
					<select name="layouts" onChange={changeLayout}>
						{layouts.map(l=>(<option key={l} value={l}>{l}</option>))}
					</select>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectMedia}
							value={attributes.mediaId}
							allowedTypes={["image"]}
							render={({ open }) => (
								<Button
									className={
										attributes.gallery  == undefined 
											? "editor-post-featured-image__toggle"
											: "editor-post-featured-image__preview"
									}
									onClick={open}
								>
									{  attributes.gallery  == undefined && __("Choose an image", "GGL")}
								</Button>
							)}
							multiple={true}
						/>
					</MediaUploadCheck>
					{attributes.gallery !== undefined && (
						<MediaUploadCheck>
							<MediaUpload
								title={__("Choose Gallery", "GGL")}
								value={attributes.mediaId}
								onSelect={onSelectMedia}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button onClick={open} isDefault isLarge>
										{__("Change Gallery", "GGL")}
									</Button>
								)}
								multiple={true}
							/>
						</MediaUploadCheck>
					)}
					{attributes.gallery !== undefined && (
						<MediaUploadCheck>
							<Button onClick={removeMedia} isLink isDestructive>
								{__("Remove image", "GGL")}
							</Button>
						</MediaUploadCheck>
					)}
				</div>
			</PanelBody>
		</InspectorControls>
	);
}

export default SidebarOptions;
