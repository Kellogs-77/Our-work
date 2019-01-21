import React, {Component} from 'react';
import './Animation.css';
import './Animation.html'
import logo from './Logo.jpeg';
import { tween, styler } from 'popmotion';


class Animation extends Component{

componentDidMount () {
  const element = document.querySelector('.website-logo');
  const websitelogo = styler(element);
  tween({ to: 100, duration: 1000 })
  .start(v => websitelogo.set('x', v));
}


  render() {

    return (
      <div>
        <h1>Hey I am Animation component!!!</h1>
          <img src={logo} className="website-logo" alt="logo" id="logo" />
      </div>

    );

  }
}

export default Animation;

/*
const { easing, tween, styler } = window.popmotion;
const divStyler = styler(document.querySelector('.box'));

tween({
  from: 0,
  to: { x: 300, rotate: 0 },
  duration: 1000,
  ease: easing.backOut,
  flip: 2,
  // elapsed: 500,
  // loop: 5,
  // yoyo: 5
}).start(divStyler.set);



*/
