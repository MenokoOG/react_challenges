import { nanoid } from "nanoid"
import enemy1A from "../assets/images/enemy1A.png"
import enemy1B from "../assets/images/enemy1B.png"
import enemy2A from "../assets/images/enemy2A.png"
import enemy2B from "../assets/images/enemy2B.png"
import enemy3A from "../assets/images/enemy3A.png"
import enemy3B from "../assets/images/enemy3B.png"

export default [
	{
		id: nanoid(),
		currentImage: {enemy1A},
		altImage: {enemy1B},
		orientation: "left",
		position: {
			top: 210,
			left: 157,
		}
	},{
		id: nanoid(),
		currentImage:{enemy2A} ,
		altImage: {enemy2B},
		orientation: "right",
		position: {
			top: 105,
			left: 187,
		}
	},{
		id: nanoid(),
		currentImage: {enemy3A},
		altImage: {enemy3B},
		orientation: "right",
		position: {
			top: 165,
			left: 165,
		}
	},
]
