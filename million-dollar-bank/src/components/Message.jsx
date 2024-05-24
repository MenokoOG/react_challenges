import React from "react";
import correctCheck from '../assets/images/correct-check.svg';
import incorrectCheck from '../assets/images/incorrect-check.svg';
import neutralCheck from '../assets/images/neutral-check.svg';

function Message({ status }) {
	let checkType;
	let message;
	let imagePath;

	if (status === undefined) {
		checkType = "neutral";
		message = "Enter verification code to continue.";
		imagePath = neutralCheck;
	} else if (status) {
		checkType = "correct";
		message = "Verified!";
		imagePath = correctCheck;
	} else {
		checkType = "incorrect";
		message = "Incorrect code.";
		imagePath = incorrectCheck;
	}

	return (
		<div className="message-container">
			<p className="message">{message}</p>
			<img src={imagePath} className="check" alt={`${checkType} check`} />
		</div>
	);
}

export default Message;
