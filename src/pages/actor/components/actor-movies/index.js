import React, { memo } from "react";
import {Movie} from "pages/actor/components/actor-movies/movie";
import {ArrowTop} from "components/arrow-top";

export const ActorMovies = memo(function({ cast }) {
  const identityId = [];
  const movies = cast.map((movie) => {
    if (identityId.find((el) => el === movie.id)) {
      return "";
    }
    identityId.push(movie.id);
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        img={movie.poster_path}
        title={movie.title}
      />
    );
  });
  return (
    <>
      <div className="section__content-container">{movies}</div>
      {movies.length > 12 ? <ArrowTop /> : ""}
    </>
  );
});