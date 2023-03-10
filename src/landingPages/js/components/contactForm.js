
class ContactForm extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <form name="contact" id="contact" method="post" >
        <input type="text" class="form-control mb-3" id="name" name="name" placeholder="Your Name" required>
        <input type="email" class="form-control mb-3" id="email" name="email" placeholder="Your Email" required>
        <input type="tel" class="form-control mb-3" id="phone" name="phone" placeholder="Your Phone Number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required>
        <textarea name="message" id="message" class="form-control mb-3" placeholder="Your Message"></textarea>
        <button name="submit" type="submit" id="submit" value="send" class="btn btn-secondary"><i class="bi bi-send-fill mr-2"></i>SEND MESSAGE</button>
    </form>`;
    }
  }
  
  customElements.define('contact-form', ContactForm);







