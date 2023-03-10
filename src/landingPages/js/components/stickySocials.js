
class StickySocials extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <a href="#" class="facebook-sticky" target="_blank"><i class="bi bi-facebook"></i></a> 
      <a href="#" class="instagram-sticky" target="_blank"><i class="bi bi-instagram"></i></a> 
      <a href="#" class="youtube-sticky" target="_blank"><i class="bi bi-youtube"></i></a> 
      <a href="#" class="whatsapp-sticky" target="_blank"><i class="bi bi-whatsapp"></i></a> `;
    }
  }
  
  customElements.define('sticky-socials', StickySocials);