import {Component, STATE, ATTRIBUTE} from './framework.js'
import {enableGesture} from './gesture.js'

export {STATE, ATTRIBUTE, createElement} from './framework.js';

export class Button extends Component {
  constructor () {
    super();
  }

  render () {
    this.childContainer = <span />;
    this.root = (<div>this.childContainer</div>).render();
    return this.root;
  }

  appendChild (child) {
    if(!this.root) {
      this.render();
    }
    this.childContainer.appendChild(child);
  }
}