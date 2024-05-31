import {useState} from "react"
import getArticles from "./utilities/getArticles"
import Button from "./components/Button"
import Header from "./components/Header"
import './App.css'

export default function App() {
    const [numOfArticles, setNumOfArticles] = useState(7)
    const [currentArticles, setCurrentArticles] = useState(getArticles(numOfArticles))

    return (
        <div className="wrapper">
            <Header />
            <main>
                <ul>
                    {currentArticles.map((article, index) => (
                        <li className="article" key={index}>
                            <a href={article.link} target="_blank">
                                {article.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <Button
                    numOfArticles={numOfArticles}
                    setCurrentArticles={setCurrentArticles}
                />
            </main>
        </div>
    )
}
