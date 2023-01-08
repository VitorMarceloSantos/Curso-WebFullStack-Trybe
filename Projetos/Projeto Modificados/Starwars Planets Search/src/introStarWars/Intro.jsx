/* eslint-disable max-len */
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/introStarWars.css';
import logo from '../images/star-wars-4.svg';
import music from '../audio/star-wars-intro-edit.mp3';

export default function Intro() {
  const intro = useRef();
  const title = useRef();
  const background = useRef();
  const content = useRef();
  // const audio = useRef();
  const song = new Audio(music);

  useEffect(() => {
    // song.play();
    // eslint-disable-next-line new-cap
    const tl = new gsap.timeline();
    tl
      .to(intro.current, { opacity: 1, delay: 1, duration: 4.5 })
      .to(intro.current, {
        opacity: 0,
        duration: 1.5,
        onComplete: () => {
          song.play();
        },
      })
      .set(title.current, { opacity: 1, delay: 0.5, scale: 1.75 })
      .to(title.current, { scale: 0.05, ease: 'power2', duration: 14 })
      .to(title.current, { opacity: 0, duration: 1.5 }, '-=6.5')
      .to(content.current, { top: '-170%', duration: 130 }, '-=7.5')
      .to(background.current, { opacity: 1 }, '-=130');
  }, []);

  return (
    <div className="container-starWars">
      <section className="intro" ref={ intro }>
        <p>A Long Time Ago, in a galaxy far, </p>
        <p>far away ...</p>
      </section>
      <section className="title" ref={ title }>
        <img src={ logo } alt="Code Wars title" />
      </section>
      <section className="container-background" ref={ background }> </section>
      <section className="crawl">
        <div className="content" ref={ content }>
          <h1 className="episode-number">Projeto XV</h1>
          <h2 className="episode-title">STAR WARS</h2>
          <h2 className="episode-title">PLANETS SEARCH</h2>
          <p>The Development Team Lead has vanished. In her absence, the sinister FUNCTIONAL BUG has risen from the ashes of the CI Tool and will not rest until the last developer has been destroyed.</p>
          <p>With the support of the QA TEAM, the Software Developer leads a brave RESISTANCE. He is desperate to find his Lead and gain her help in restoring peace and justice to the repository.</p>
          <p>The Developer has sent his most daring editor theme on a secret mission to the production branch, where an old ally has discovered a clue to the Lead’s whereabouts....</p>
          <p>The Developer has sent his most daring editor theme on a secret mission to the production branch, where an old ally has discovered a clue to the Lead’s whereabouts....</p>
          <p>The Developer has sent his most daring editor theme on a secret mission to the production branch, where an old ally has discovered a clue to the Lead’s whereabouts....</p>
          <p>The Developer has sent his most daring editor theme on a secret mission to the production branch, where an old ally has discovered a clue to the Lead’s whereabouts....</p>
          <p>The Developer has sent his most daring editor theme on a secret mission to the production branch, where an old ally has discovered a clue to the Lead’s whereabouts....</p>
          <p>The Developer has sent his most daring editor theme on a secret mission to the production branch, where an old ally has discovered a clue to the Lead’s whereabouts....</p>
          <p>The Developer has sent his most daring editor theme on a secret mission to the production branch, where an old ally has discovered a clue to the Lead’s whereabouts....</p>
          <p>The Developer has sent his most daring editor theme on a secret mission to the production branch, where an old ally has discovered a clue to the Lead’s whereabouts....</p>
          <p>The Developer has sent his most daring editor theme on a secret mission to the production branch, where an old ally has discovered a clue to the Lead’s whereabouts....</p>
        </div>
      </section>
      {/* <audio id="music-audio" autoPlay>
        <source
          type="audio/mpeg"
          src="https://ia801501.us.archive.org/23/items/StarWars_20180709/Star%20Wars.mp3"
        />
      </audio> */}
    </div>
  );
}