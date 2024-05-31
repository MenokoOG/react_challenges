import React from "react"
import wikilogo from "../images/wikipedia-w.svg"

export default function Header() {
	return (
		<header>
			<img src={wikilogo} />
			<h1>Weird Wikipedia Articles</h1>
		</header>
	)
}