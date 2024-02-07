import React from "react";
import Origin from "../components/Origin";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Origin />
      <Row rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="TopRated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="NowPlaying" fetchURL={requests.requestNowPlaying} />
    </>
  );
};

export default Home;
