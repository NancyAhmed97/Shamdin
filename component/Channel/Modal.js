import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Modal, Typography, Box } from '@mui/material';

const SimpleModal = ({ mainVideo, channelVedio, channelTitle, channels, channelId, channelImage, mainvideo }) => {

	
	function rand() {
		return Math.round(Math.random() * 20) - 10;
	}

	function getModalStyle() {
		const top = 50 + rand();
		const left = 50 + rand();

		return {
			//  top: `${top}%`,
			// left: `${left}%`,
			// transform: `translate(-${top}%, -${left}%)`,
		};
	}
	const [ modalStyle ] = useState(getModalStyle);
	const [ open, setOpen ] = useState(false);
	const [ openedVedio, setOpenedVedio ] = React.useState(false);

	const handleOpen = (e) => {
		e.target;
		setOpen(true);
		const found = channels.find((element) => element.id === parseInt(e.target.id));
		setOpenedVedio(found.video);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div style={modalStyle} className="papper">
			<iframe width="100%" height="100%" src={channelVedio} />
		</div>
	);
	return (
		<>
			<div onClick={handleOpen} >
				<Box style={{position: 'relative', height: mainVideo ? '320px' : '110px'}} >
					<img
						alt="img"
						style={{
							width: '100%',
							height: '100%',
							borderRadius: '10px',
							objectFit: 'cover'
						}}
						src={channelImage ? channelImage : '/logoo.svg'}
						id={channelId}
					/>
					<div class="btn play-icon-wave">
						<PlayArrowIcon class="fas fa-play" id={channelId} />
					</div>
				</Box>
				<Box mt={2}>{channelTitle}</Box>
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				className="h-10 w-75"
			>
				{body}
			</Modal>
		</>
	);
};
export default SimpleModal;
