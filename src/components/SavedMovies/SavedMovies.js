import "./SavedMovies.css";
import { useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = (props) => {
  const { handleLoggidIn} = props;
  const [isSaved, setIsSaved] = useState(false);

  const savedCards = [{ id: "1" }, { id: "2" }, { id: "3" }];

  useEffect(() => {
    handleLoggidIn();
  }, [handleLoggidIn]);

  useEffect(() => {
    setIsSaved(true);
  }, [setIsSaved]);

  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList cards={savedCards} isSaved={isSaved} />
    </section>
  );
};

export default SavedMovies;
