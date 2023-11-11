// Details.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Details.css";

const Details = () => {
  const [movies, setMovies] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("https://hoblist.com/api/movieList", {
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting",
        });
        setMovies(response.data.result);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleWatchTrailer = (trailerUrl) => {
    window.open(trailerUrl, "_blank");
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`details-container d-flex flex-wrap justify-content-center align-items-start ${
        scrolled ? "scrolled" : ""
      }`}
    >
      {movies.map((movie) => (
        <MDBCard key={movie._id} className="m-3 mdb-card h-100">
          <div className="d-flex">
            <div className="poster-container">
              <MDBCardImage
                src={movie.poster}
                alt={movie.title}
                position="top"
                className="img-fluid poster-img"
              />
            </div>
            <div className="info-container">
              <MDBCardBody>
                <MDBCardTitle className="font-weight-bold">
                  {movie.title}
                </MDBCardTitle>
                <MDBCardText>
                  Genre: {movie.genre} <br />
                  Director: {movie.director} <br />
                  Starring: {movie.stars} <br />
                  {movie.language}
                  <br />
                  {movie.pageViews} views | Voted by {movie.voting} People
                </MDBCardText>

                <MDBBtn
                  color="primary"
                  onClick={() => handleWatchTrailer(movie.trailerLink)}
                  className="w-100"
                >
                  Watch Trailer
                </MDBBtn>
              </MDBCardBody>
            </div>
          </div>
        </MDBCard>
      ))}
    </div>
  );
};

export default Details;
