// BOOTSTRAP CARD & MODAL
// https://getbootstrap.com/docs/5.1/components/card/#example
// https://getbootstrap.com/docs/5.1/components/modal/#live-demo

import { youTubeVid } from "./youTubeVid.js";

export const card = (object) => {
  return `
  <div class="card m-1" style="width: 18rem;">
    <div class="card-image" style="background-image: url(${object.image});"></div>
    <div 
      class="card-body text-center" 
      style="background:black; color:white"
    >
      <h5 class="card-title">${object.title}</h5>
      <b>${object.price <= 0 ? 'FREE' : `$${object.price}`}</b><br />
      ${object.inCart ? `<button type="button" class="btn">
      <i id="fav-btn--${object.id}" class="fa fa-shopping-cart" style="color:gray;font-size:35px;"></i>
    </button>` : 
      `<button type="button" class="btn">
        <i id="fav-btn--${object.id}" class="fa fa-cart-plus" style="color:plum;font-size:35px;"></i>
      </button>`}
      <p class="card-text">${object.author}<br />
      <small class="text-muted">${object.type.toUpperCase()}</small>
      </p>

      <!-- Button trigger modal -->
      <button 
        type="button" 
        class="btn btn-light" 
        data-bs-toggle="modal" 
        data-bs-target="#modal-${object.id}"
      >
        More Info <i class="fa ${object.youTubeId ? `fa-play-circle` : 
        `fa-book`}" 
        style="color:black"></i>
      </button>
    </div>
  </div>

  
  <!-- Modal -->
  <div class="modal fade" id="modal-${object.id}" tabindex="-1" aria-labelledby="${object.id}" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${object.title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        ${object.youTubeId ? youTubeVid(object.youTubeId) : ''}
        <div class="modal-body">
          ${object.description}

        <h6 class="mt-3 externalLink">${object.externalLink ? `Reference: <a target="_blank" href="${object.externalLink}">${object.externalLink}</a>` : ''}</h6>
        </div>
      </div>
    </div>
  </div>
  `
}
