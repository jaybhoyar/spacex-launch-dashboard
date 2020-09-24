import React, { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");
function Modal({ modalStatus, handleClose, launchDetails }) {
	return (
		<ReactModal
			style={{
				overlay: {
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: "rgba(255, 255, 255, 0.75)",
					zIndex: 1000,
				},
				content: {
					position: "absolute",
					top: "40px",
					left: "40px",
					right: "40px",
					bottom: "40px",
					border: "1px solid #ccc",
					background: "#fff",
					overflow: "auto",
					WebkitOverflowScrolling: "touch",
					borderRadius: "4px",
					outline: "none",
					padding: "20px",
					width: "500px",
					height: "250px",
					margin: "0 auto",
				},
			}}
			isOpen={modalStatus}
			onRequestClose={handleClose}
		>
			<h2>{launchDetails}</h2>
			<p>Modal Body</p>
			<button onClick={handleClose}>Close Modal</button>
		</ReactModal>
	);
}

export default Modal;
