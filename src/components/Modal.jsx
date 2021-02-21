import React from "react";
import ReactModal from "react-modal";
import { Icon } from "semantic-ui-react";

import { getStatusLabel, getFormattedDate } from "../utils/index";

ReactModal.setAppElement("#root");
function Modal({ modalStatus, handleClose, launch }) {
	return (
		<ReactModal
			style={{
				overlay: {
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: "rgba(192,192,192,0.6)",
					zIndex: 1000,
				},
				content: {
					position: "absolute",
					left: "50%",
					transform: "translateX(-50%)",
					border: "1px solid #ccc",
					background: "#fff",
					overflow: "auto",
					WebkitOverflowScrolling: "touch",
					borderRadius: "6px",
					outline: "none",
					width: "800px",
					maxHeight: "600px",
					padding: "0px !important",
					margin: "0 auto",
				},
			}}
			isOpen={modalStatus}
			onRequestClose={handleClose}
		>
			<div className="modal-container">
				<div className="modal-header">
					<p className="mission-heading">
						Flight No. {launch.flight_number}
					</p>
					<button onClick={handleClose}>X</button>
				</div>
				<div className="row">
					<div className="col-1">
						<img
							src={launch.links.mission_patch}
							alt={launch.mission_name}
						/>
					</div>
					<div className="col">
						<h2>
							<span className="field-name">Mission</span>
							{launch.mission_name}
						</h2>
						<h3>
							<span className="field-name">Orbit</span>
							{launch.rocket.second_stage.payloads[0].orbit}
						</h3>
					</div>
					<div className="col">
						<h2>
							<span className="field-name">Date </span>
							{getFormattedDate(launch.launch_date_utc)}
						</h2>
						<h3>
							<span className="field-name">Status </span>
							{getStatusLabel(launch.launch_success)}
						</h3>
					</div>
				</div>
				<p className="launch-description">{launch.details}</p>
				<div className="details-row">
					<div>
						<h3>
							<span className="field-name">Rocket Used </span>
							{launch.rocket.rocket_name}
						</h3>
						<h3>
							<span className="field-name">Payload</span>
							{launch.rocket.second_stage.payloads[0].payload_id}
						</h3>
						<h3>
							<span className="field-name">Location</span>
							{launch.launch_site.site_name}
						</h3>
					</div>
					<div>
						<h3>
							<span className="field-name">Rocket Type</span>
							{launch.rocket.rocket_type}
						</h3>
						<h3>
							<span className="field-name">Nation</span>
							{launch.rocket.second_stage.payloads[0].nationality}
						</h3>
						<h3>
							<span className="field-name">Regime</span>
							{
								launch.rocket.second_stage.payloads[0]
									.orbit_params.regime
							}
						</h3>
					</div>
					<div>
						<h3>
							<span className="field-name">Manufacturer</span>
							{
								launch.rocket.second_stage.payloads[0]
									.manufacturer
							}
						</h3>
						<h3>
							<span className="field-name">Payload Type</span>
							{
								launch.rocket.second_stage.payloads[0]
									.payload_type
							}
						</h3>
						<h3>
							<span className="field-name">Payload Mass</span>
							{
								launch.rocket.second_stage.payloads[0]
									.payload_mass_kg
							}{" "}
							kgs
						</h3>
					</div>
				</div>
				<div className="social-links">
					{launch.links.article_link ? (
						<a href={launch.links.article_link}>
							<Icon name="medium m" size="big" color="black" />
						</a>
					) : null}
					{launch.links.wikipedia ? (
						<a href={launch.links.wikipedia}>
							<Icon name="wikipedia w" size="big" color="grey" />
						</a>
					) : null}

					{launch.links.video_link ? (
						<a href={launch.links.video_link}>
							<Icon name="youtube play" color="red" size="big" />
						</a>
					) : null}
				</div>
			</div>
		</ReactModal>
	);
}

export default Modal;
