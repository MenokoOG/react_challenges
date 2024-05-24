import { useState } from "react";
import wordsDataOne from "./data/wordsDataOne";
import Header from "./components/Header";
import Word from "./components/Word";
import NavButtons from "./components/NavButtons";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [wordsDataArray, setWordsDataArray] = useState(wordsDataOne);
  const [currentWord, setCurrentWord] = useState(wordsDataArray[0]);

  const navButtonsProps = {
    wordsDataArray,
    currentWord,
    setCurrentWord,
  };

  const wordProps = {
    ...currentWord,
    array: wordsDataArray,
  };

  return (
    <div className="wrapper">
      <Header />

      <NavButtons {...navButtonsProps} position="top" />

      <Word {...wordProps} />

      <NavButtons {...navButtonsProps} position="bottom" />

      <Footer />
    </div>
  );
}

export default App;
