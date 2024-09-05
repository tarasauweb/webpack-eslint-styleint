import * as style from './Title.module.scss';

class CreateTitle {
  body: HTMLElement;
  textTitle: string;
  constructor(body: HTMLElement, textTitle: string) {
    this.body = body;
    this.textTitle = textTitle;
    this.createTitle();
  }
  private createTitle(): HTMLElement {
    const title = document.createElement('h1');
    title.textContent = this.textTitle;
    this.body.insertAdjacentElement('afterend', title);
    title.classList.add(`${style.title}`);
    return title;
  }
}

export default CreateTitle;
