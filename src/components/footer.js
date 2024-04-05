export default class FooterComponent extends HTMLElement {
  // run some code to set HTML when the component is ready
  connectedCallback() {
    this.innerHTML = this.getTemplate();
  }

  // create templates that interpolate variables and HTML!
  getTemplate() {
    const year = new Date().getFullYear();

    return `
    <style>
      footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #192a27;
        min-height: 30px;
        padding-top: 10px;
      }
      footer a {
        color: #efefef;
        text-decoration: none;
      }
      footer h4 {
        width: 90%;
        margin: 0 auto;
        padding: 0;
        text-align: center;
        color: white;
      }
    </style>

      <footer>
        <h4>My Blog &copy;${year}</h4>
      </footer>
    `;
  }
}

customElements.define("app-footer", FooterComponent);
