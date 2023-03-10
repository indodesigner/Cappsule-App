class NavLinks extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#">Blog</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" aria-current="page" href="#">Policy</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" aria-current="page" href="about.html">About us</a>
      </li>
      <!-- <li class="nav-item">
      <a class="nav-link" aria-current="page" href="#">INIT Bake</a>
      </li> -->
      <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="news_blogs.html">News & Blogs</a></li>
          <li><a class="dropdown-item" href="#">About</a></li>
        </ul>
      </li> -->
      
    </ul>
    </div>`;
    }
  }
  
  customElements.define('nav-links', NavLinks);


