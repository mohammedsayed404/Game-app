import { homeGameSection, gameDetailsSection } from "./index.js";
import Details from "./Details.js";
import Ui from "./Ui.js";
import { category, loadingScreenEveryCallApi as loadSpinner } from "./index.js";

// class to call api to fetch game data
let myData = [];
export default class Game {
  constructor(category) {
    this.category = category;
  }

  async getGames() {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`;
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
      myData = response;
      let ui = new Ui(myData);
      ui.display();
    } catch (error) {
      console.error(error);
    }
  }

  sendIdGame() {
    setTimeout(function () {
      const card = document.querySelectorAll(".card");
      for (let i = 0; i < myData.length; i++) {
        const element = card[i];
        element.addEventListener("click", function () {
          homeGameSection.classList.add("d-none");
          gameDetailsSection.classList.replace("d-none", "d-block");
          loadSpinner();
          // console.log(myData[i].id);
          let gameDetails = new Details(myData[i].id);
          gameDetails.getGamesDetails();
        });
      }
    }, 1000);
  }
}
