import React, { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");
function Modal() {
	const [ModalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div>
			<button onClick={() => setModalIsOpen(true)}>Open Modal</button>
			<ReactModal
				isOpen={ModalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
			>
				<h2>Modal Title</h2>
				<p>Modal Body</p>
				<button onClick={() => setModalIsOpen(false)}>
					Close Modal
				</button>
			</ReactModal>
		</div>
	);
}

export default Modal;
