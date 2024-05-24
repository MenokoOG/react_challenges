import React from "react"

function Enemy(props) {
	return (
		<div
			className="enemy"
			style={{
				top: `${props.position.top}px`,
				left: `${props.position.left}px`,
				transform: props.orientation === "left" ? "scaleX(-1)" : null,
			}}
		>
			<img src={props.currentImage} />
		</div>
	)
}

export default Enemy
