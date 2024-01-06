/*------------------------------section Home game ------------------------------------*/
import Game from "./Games.js";
// call it  by default to show data in our page
let game = new Game("mmorpg");
game.getGames();
game.sendIdGame();

// take category form links and send it to our API
const category = document.querySelectorAll("#Home-Games nav ul li a");

for (let i = 0; i < category.length; i++) {
  const element = category[i];
  element.addEventListener("click", function (e) {
    const current = document.querySelector(".active");
    current.className = current.className.replace(" active", "");
    this.className += " active";
    let game = new Game(e.target.innerHTML.toLowerCase());
    game.getGames();
    game.sendIdGame();
    loadingScreenEveryCallApi();
  });
}
/*------------------------------section detalis -----------------------------------*/

const homeGameSection = document.getElementById("Home-Games");
const gameDetailsSection = document.getElementById("game-details");
const closeDetailsBtn = document.querySelector(
  "#game-details .title-details .close-details"
);

closeDetailsBtn.addEventListener("click", function () {
  gameDetailsSection.classList.add("d-none");
  homeGameSection.classList.replace("d-none", "d-block");
});

/*-----------------------------Loading Screen Spinner----------------------------------------------------- */

const loader = document.querySelector(".loading");

// self invoke function to loading spinner to our page first loading 
(function loadingScreen() {
  window.addEventListener("load", (e) => {
    loader.classList.add("loading-hidden");

    // loader.addEventListener("transitionend", (e) => {
    //   document.body.removeChild("loading");
    // });
  });
})();
// loadingScreen();

// loading every singe action 
function loadingScreenEveryCallApi() {
  loader.className = loader.className.replace("loading-hidden", "loading");
  setTimeout(() => {
    loader.className = loader.className.replace("loading", "loading-hidden");
  }, 400);
}

/*--------------------------------Export-------------------------------------------------- */

export {
  category,
  homeGameSection,
  gameDetailsSection,
  loadingScreenEveryCallApi,
};
