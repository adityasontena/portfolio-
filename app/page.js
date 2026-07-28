'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const work = [
  {
    number: '01',
    title: 'Intelligent systems',
    description: 'Turning machine intelligence into products people can actually understand, use, and trust.',
    tags: ['systems thinking', 'AI', 'product logic']
  },
  {
    number: '02',
    title: 'Full-stack craft',
    description: 'Connecting dependable engineering with a front end that feels calm, fast, and intentional.',
    tags: ['architecture', 'interfaces', 'shipping']
  },
  {
    number: '03',
    title: 'Open-source contribution',
    description: 'Learning in public, sharing useful work, and making the next person’s starting point a little better.',
    tags: ['community', 'collaboration', 'curiosity']
  }
];

const notes = [
  ['01', 'Start with the why.', 'Good systems begin with a sharp question. I look for the real constraint before I reach for the obvious solution.'],
  ['02', 'Make the complex legible.', 'Architecture should create clarity, not ceremony. I care about clean structure and a clear path from input to outcome.'],
  ['03', 'Leave room for the human.', 'Performance matters. So does tone. The best digital products respect people’s attention and invite them to stay.']
];

const timeline = [
  ['now', 'Hydrilla AI', 'Technical Lead', 'building intelligent & scalable digital solutions'],
  ['recent', 'Yazh Creations', 'Intern', 'learning by contributing, iterating, and shipping'],
  ['also', 'Stoodive', 'Intern', 'exploring the full-stack surface area'],
  ['foundation', 'KL University', 'Vaddeswaram', 'the classroom, still in session']
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.width = `${pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0}%`;
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14 });

    document.querySelectorAll('[data-reveal]').forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      revealObserver.observe(item);
    });

    const handlePointerMove = (event) => {
      if (!portraitRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 700) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 7;
      const y = (event.clientY / window.innerHeight - 0.5) * 7;
      portraitRef.current.style.transform = `rotate(${4 + x * 0.35}deg) translate(${x}px, ${y}px)`;
    };

    const handlePointerOut = (event) => {
      if (!event.relatedTarget && portraitRef.current) portraitRef.current.style.transform = 'rotate(4deg)';
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerout', handlePointerOut);
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerout', handlePointerOut);
      revealObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><span ref={progressRef} /></div>
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">AS</span>
          <span className="brand-type">portfolio / 2026</span>
        </a>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>01 / about</a>
          <a href="#work" onClick={closeMenu}>02 / work</a>
          <a href="#approach" onClick={closeMenu}>03 / approach</a>
        </nav>
        <a className="header-contact" href="https://www.linkedin.com/in/aditya-sai-sontena-a90125334/" target="_blank" rel="noreferrer">
          <span className="live-dot" /> say hello <span aria-hidden="true">↗</span>
        </a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
      </header>

      <main id="top">
        <section className="hero section-frame" aria-labelledby="hero-title">
          <div className="hero-meta intro-reveal">
            <p className="eyebrow"><span className="eyebrow-index">001</span> field notes from a builder</p>
            <p className="hero-location">Vijayawada, Andhra Pradesh<br />India / IST</p>
          </div>

          <div className="hero-title-wrap">
            <p className="margin-note margin-note-left">a personal<br />research paper</p>
            <h1 id="hero-title" className="hero-title"><span>Aditya</span><span>Sai</span><span>Sontena</span></h1>
            <p className="margin-note margin-note-right">vol. 01<br />issue no. 04</p>
          </div>

          <div className="hero-bottom">
            <p className="hero-statement">I build intelligent, scalable digital solutions at the intersection of engineering, systems thinking, and a little bit of curiosity.</p>
            <div className="hero-figure-wrap">
              <div className="figure-orbit orbit-one" />
              <div className="figure-orbit orbit-two" />
              <div className="portrait-card" ref={portraitRef}>
                <Image src="/assets/aditya-sai-sontena.jpg" alt="Portrait of Aditya Sai Sontena" fill priority sizes="(max-width: 620px) 205px, 235px" />
                <span className="portrait-caption">fig. 01 / the person behind the systems</span>
              </div>
            </div>
            <div className="hero-index"><span>scroll to read</span><span className="scroll-arrow">↓</span></div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true"><div className="ticker-track"><span>technical lead</span><i>✳</i><span>full-stack developer</span><i>✳</i><span>open-source contributor</span><i>✳</i><span>technical lead</span><i>✳</i><span>full-stack developer</span><i>✳</i><span>open-source contributor</span><i>✳</i></div></div>

        <section id="about" className="section-frame about-section">
          <div className="section-label" data-reveal><span>01</span><span>about / abstract</span></div>
          <div className="about-grid">
            <div className="about-intro" data-reveal><p className="section-kicker">Abstract</p><h2>From an idea<br /><em>to a living system.</em></h2></div>
            <div className="abstract-copy" data-reveal><p className="lead-copy">Aditya is a technical lead and full-stack developer who likes the space where complex ideas become clear, useful products.</p><p>Currently working with Hydrilla AI, he is interested in building intelligent digital experiences that are robust under the hood and inviting on the surface. His practice moves between architecture, interface, and the small decisions that make software feel considered.</p><a className="text-link" href="https://www.linkedin.com/in/aditya-sai-sontena-a90125334/" target="_blank" rel="noreferrer">Read the full profile <span>↗</span></a></div>
          </div>
          <div className="fact-row" data-reveal>{[['01', 'technical lead'], ['02', 'full-stack builder'], ['03', 'open-source minded'], ['04', 'always learning']].map(([number, label]) => <div key={number}><span className="fact-number">{number}</span><span className="fact-label">{label}</span></div>)}</div>
        </section>

        <section id="work" className="section-frame work-section">
          <div className="section-label" data-reveal><span>02</span><span>work / selected directions</span></div>
          <div className="work-heading" data-reveal><p className="section-kicker">What I work on</p><h2>Making the invisible<br /><em>feel obvious.</em></h2><p className="work-heading-note">A small index of the problems I like to solve.</p></div>
          <div className="work-list">{work.map((item) => <article className="work-item" data-reveal key={item.number}><div className="work-number">{item.number}</div><div className="work-content"><h3>{item.title}</h3><p>{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="work-arrow">↗</span></article>)}</div>
        </section>

        <section id="approach" className="section-frame approach-section">
          <div className="section-label" data-reveal><span>03</span><span>approach / field notes</span></div>
          <div className="approach-grid"><div className="approach-title" data-reveal><p className="section-kicker">Method</p><h2>A practical<br /><em>kind of rigor.</em></h2><p className="margin-note">notes from the<br />working process</p></div><div className="notes-list">{notes.map(([number, title, body]) => <div className="note" data-reveal key={number}><span className="note-index">{number}</span><div><h3>{title}</h3><p>{body}</p></div></div>)}</div></div>
        </section>

        <section className="section-frame timeline-section" aria-labelledby="timeline-title">
          <div className="section-label" data-reveal><span>04</span><span>timeline / present tense</span></div>
          <div className="timeline-heading" data-reveal><p className="section-kicker">Where the work is happening</p><h2 id="timeline-title">A few places<br /><em>along the way.</em></h2></div>
          <div className="timeline">{timeline.map(([date, title, role, note]) => <div className={`timeline-item${date === 'now' ? ' current' : ''}`} data-reveal key={title}><span className="timeline-dot" /><div className="timeline-date">{date}</div><div><h3>{title}</h3><p>{role}</p><span className="timeline-note">{note}</span></div></div>)}</div>
        </section>

        <section className="contact-section section-frame" data-reveal><div className="contact-stamp">end of paper<br /><span>— / —</span></div><p className="section-kicker">Correspondence welcome</p><h2>Let’s build something<br /><em>worth reading.</em></h2><a className="contact-link" href="https://www.linkedin.com/in/aditya-sai-sontena-a90125334/" target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a></section>
      </main>

      <footer className="site-footer section-frame"><span>© 2026 Aditya Sai Sontena</span><span>made with intent / Vijayawada, IN</span><a href="#top">back to top ↑</a></footer>
    </>
  );
}
