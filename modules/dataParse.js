const axios = require('axios');
const express = require('express');
const app = express();

const dataFetch = async (req, res, next) => {
  const searchValue = req.body;
  const searchConfig = { params: searchValue };
  console.log(searchConfig);
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows`,
    searchConfig
  );
  const Data = response.data;
  res.render('search', { Data });
};

// const displayShow = shows => {
//   for (let res of shows) {
//     const name = res.show.name;
//     const img = res.show.image;
//     const rating = res.show.rating;
//     // console.log(name, img.medium, rating.average);
//   }
// };

module.exports = ('ShowsData', dataFetch);
