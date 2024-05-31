import { useState } from "react";
import Fire from "./components/Fire";
import Torch from "./components/Torch";
import runBackgroundEffects from "./utilities/runBackgroundEffects";
import './App.css';

export default function App() {
	const [torchEquipped, setTorchEquipped] = useState(false);
	const [woodKindling, setWoodKindling] = useState(false);
	const [woodOnFire, setWoodOnFire] = useState(false);
	const [cursorPosition, setCursorPosition] = useState({ x: null, y: null });
	const kindleClass = woodKindling && !woodOnFire && "kindle";

	runBackgroundEffects(
		torchEquipped,
		woodOnFire,
		setWoodKindling,
		setWoodOnFire,
		setCursorPosition
	);

	let torchStyle = {
		position: "absolute",
		left: cursorPosition.x - 10,
		top: cursorPosition.y - 60,
	};

	const handleTorchMouseDown = () => {
		setTorchEquipped(true);
	};

	const handleWrapperMouseUp = () => {
		setTorchEquipped(false);
	};

	const handleWoodMouseEnter = () => {
		if (torchEquipped) {
			setWoodKindling(true);
		}
	};

	const handleWoodMouseLeave = () => {
		if (torchEquipped && woodKindling) {
			setWoodOnFire(true);
		}
	};

	return (
		<div
			className={`wrapper ${torchEquipped && "relative no-cursor"}`}
			onMouseUp={handleWrapperMouseUp}
		>
			<div className={`game-area ${!torchEquipped && "relative"}`}>

				<div
					className={`torch-container ${torchEquipped && "torch-equipped"}`}
					style={torchEquipped ? torchStyle : null}
					onMouseDown={handleTorchMouseDown}
				>
					<Torch />
				</div>

				<div
					className={`wood-container ${kindleClass}`}
					onMouseEnter={handleWoodMouseEnter}
					onMouseLeave={handleWoodMouseLeave}
				>
					🪵
					<Fire woodOnFire={woodOnFire} />
				</div>

			</div>
		</div>
	);
}
