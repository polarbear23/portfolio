import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Programmer', 'Coder', 'Designer'],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="wrapper">
        <h2>Hi there, I am</h2>
        <h1>Haseeb Malik</h1>
        <h3>
          Full Stack and Game <span ref={textRef}></span>
        </h3>

        <a href="#portfolio">
          <img src="assets/down.png" alt="down chevron arrow" />
        </a>
      </div>
    </div>
  );
}
