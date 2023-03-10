class NavLinksIntial extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `
      <ul class="navbar justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="#"><span class="rm-cursor-pointer">Need help :</span> <i class='bx bxs-phone-call px-2'></i>666-0788-994</a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link text-white rm-cursor-pointer" aria-current="page" >|</a>
          </li>
          <li class="nav-item text-white">
          <a class="nav-link" aria-current="page" href="">FAQ</a>
          </li>
        </ul>
    `;
    }
  }
  
  customElements.define('nav-links-initial', NavLinksIntial);


