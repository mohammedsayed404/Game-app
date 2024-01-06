// class to show all data inside our pages
export default class Ui {
  constructor(list) {
    this.list = list;
  }

  display() {
    let blackBox = "";
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      blackBox += `
          <div class="col-md-6 col-lg-4 col-xl-3">
                      <div class="card img-thumbnail h-100">
                        <img
                          src="${element.thumbnail}"
                          class="card-img-top p-2"
                          alt="..."
                        />
                        <div class="card-body p-2">
                          <div
                            class="card-title d-flex justify-content-between align-items-center"
                          >
                            <h5 class="fs-5">${element.title}</h5>
                            <a href="" class="badge badge-free fs-6">Free</a>
                          </div>
                          <p class="card-text">
                            ${element.short_description}
                          </p>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                          <span class="badge p-2">${element.genre}</span>
                          <span class="badge p-2">${element.platform}</span>
                        </div>
                      </div>
                    </div>
          `;
      document.querySelector(".row").innerHTML = blackBox;
    }
  }

  displayDetails() {
    const detailsphoto = `
                <figure>
                <img
                  src="${this.list.thumbnail}"
                  class="img-fluid shadow-lg"
                  alt=""
                />
                </figure>
                `;
    const detailsCaption = `
                <h3>Title: ${this.list.title}</h3>
                                <p class="fw-bold">
                                  Category: <span class="badge text-bg-info"> ${this.list.genre}</span>
                                </p>
                                <p class="fw-bold">
                                  Platform: <span class="badge text-bg-info">${this.list.platform}</span>
                                </p>
                                <p class="fw-bold">
                                  Status: <span class="badge text-bg-info">${this.list.status}</span>
                                </p>
                                <p class="small">
                                  ${this.list.description}
                                </p>
                                <a href="${this.list.game_url}" class="btn btn-outline-warning" target="_blank">Show Game</a>
                `;

    document.querySelector(".game-photo").innerHTML = detailsphoto;
    document.querySelector(".details-caption").innerHTML = detailsCaption;
  }
}
