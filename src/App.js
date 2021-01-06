import logo from "./logo.svg";
import "./App.css";
import charactersArray from "./charactersArray";

function App() {
  const renderCharacters = () =>
    charactersArray.map(({ name, bio, avatar_url }) => (
      <>
        <hr style={{ color: "#fff", width: "98%", margin: "5rem" }} />
        <h2>{name}</h2>
        <p>{bio}</p>
        <img src={avatar_url} />
      </>
    ));

  return (
    <div className="App">
      <header className="App-header">{renderCharacters()}</header>
    </div>
  );
}

export default App;
