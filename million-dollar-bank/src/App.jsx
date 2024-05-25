import { useState } from "react";
import Message from "./components/Message";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const passCode = "1001";

  const [userInput, setUserInput] = useState({
    charOne: "",
    charTwo: "",
    charThree: "",
    charFour: "",
  });

  const [verified, setVerified] = useState(undefined);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // console.log(userInput)

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCode = `${userInput.charOne}${userInput.charTwo}${userInput.charThree}${userInput.charFour}`;
    setVerified(inputCode === passCode);
  };

  return (
    <div className="wrapper">
      <Header />

      <form onSubmit={handleSubmit}>
        <Message status={verified} />

        <div>
          <input
            required
            type="password"
            name="charOne"
            maxLength="1"
            value={userInput.charOne}
            onChange={handleChange}
          />

          <input
            required
            type="password"
            name="charTwo"
            maxLength="1"
            value={userInput.charTwo}
            onChange={handleChange}
          />

          <input
            required
            type="password"
            name="charThree"
            maxLength="1"
            value={userInput.charThree}
            onChange={handleChange}
          />

          <input
            required
            type="password"
            name="charFour"
            maxLength="1"
            value={userInput.charFour}
            onChange={handleChange}
          />
        </div>

        <button disabled={verified}>Submit</button>
      </form>

      <Footer />
    </div>
  );
}

export default App;
