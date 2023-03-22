import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  //Variable w/ API key
  const apiKey = YOUR_API_KEY;

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );

    const data = await response.json();

    setMovie(data);
  };
  //Default Movie When Page loads
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
