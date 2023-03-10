class FooterLinks extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ul class="list-inline  text-center footer-menu">
        <li class="list-inline-item"><a href="#">About us</a></li>
        <li class="list-inline-item"><a href="#">Blogs</a></li>
        <li class="list-inline-item"><a href="#">Policy</a></li>
      </ul>`;
    }
  }
  
  customElements.define('footer-links', FooterLinks);


