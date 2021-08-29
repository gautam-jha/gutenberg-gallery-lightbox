const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { PanelBody, Button, ResponsiveWrapper } = wp.components;
const { __ } = wp.i18n; // Import __() from wp.i18n

function SidebarOptions(props) {
	const { attributes, setAttributes, media } = props;

	const removeMedia = () => {
		props.setAttributes({gallery:[]});
	};

	const onSelectMedia = (media) => {
		console.log(media);
		const images = [];
		media.forEach((m) => images.push({ mediaId: m.id, mediaUrl: m.url }));
		props.setAttributes({gallery:images});
	};

	return (
		<InspectorControls>
			<PanelBody
				title={__("Select block background image", "awp")}
				initialOpen={true}
			>
				<div className="editor-post-featured-image">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectMedia}
							value={attributes.mediaId}
							allowedTypes={["image"]}
							render={({ open }) => (
								<Button
									className={
										attributes.mediaId == 0
											? "editor-post-featured-image__toggle"
											: "editor-post-featured-image__preview"
									}
									onClick={open}
								>
									{!attributes && __("Choose an image", "awp")}
									{props.media != undefined && (
										<ResponsiveWrapper
											naturalWidth={props.media.media_details.width}
											naturalHeight={props.media.media_details.height}
										>
											<img src={props.media.source_url} />
										</ResponsiveWrapper>
									)}
								</Button>
							)}
							multiple={true}
						/>
					</MediaUploadCheck>
					{attributes.mediaId != 0 && (
						<MediaUploadCheck>
							<MediaUpload
								title={__("Replace image", "awp")}
								value={attributes.mediaId}
								onSelect={onSelectMedia}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button onClick={open} isDefault isLarge>
										{__("Replace image", "awp")}
									</Button>
								)}
								multiple={true}
							/>
						</MediaUploadCheck>
					)}
					{attributes.mediaId != 0 && (
						<MediaUploadCheck>
							<Button onClick={removeMedia} isLink isDestructive>
								{__("Remove image", "awp")}
							</Button>
						</MediaUploadCheck>
					)}
				</div>
			</PanelBody>
		</InspectorControls>
	);
}

export default SidebarOptions;
