import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("")`,
        backgroundPosition: "center center",
      }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>Movie Namedddddd</h1>

        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Rem, est? Impedit distinctio adipisci ratione nisi quas? 
            Vitae, tenetur mollitia. 
            Eaque fugit a illum autem odit vitae id dicta rem consectetur!`,
            150,
          )}
        </h1>
      </div>

      <div className='banner--fadeBottom' />
    </header>
  );
};

export default Banner;
