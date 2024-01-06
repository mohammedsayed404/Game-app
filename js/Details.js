"use strict";
import Ui from "./Ui.js";

// class to fetch spicifi game data
export default class Details {
  constructor(id) {
    this.id = id;
  }
  async getGamesDetails() {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`; //452
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f99047650amsh2ae84a9b2610ff5p1df47djsn43a6912c5852",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      const API = await fetch(url, options);
      const response = await API.json();
      let ui = new Ui(response);
      ui.displayDetails();
    } catch (error) {
      console.error(error);
    }
  }
}
