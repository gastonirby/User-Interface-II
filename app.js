const title = document.querySelector('h1')
const nav = document.querySelector('nav')
const btn = document.querySelectorAll('a')

// gsap.from(nav, {x: -700, duration: 4})
// gsap.from(btn, {x: -200, duration: 2, })


gsap.from(nav, {
    autoAlpha: 0,
    y: -500,
    ease: 'bounce',
    duration: 3,
    scrub: true
    // stagger: {
    //   each: 1,
    //   from: 'center'
    // }
  })

  window.addEventListener('load', loader);

function loader() {
    const TLLOAD = gsap.timeline({
        default: {
             ease: 'power2'
        }
    })

    TLLOAD
    .to('.images-container', {height: 400, duration: 1.3, delay: 0.4})
    .to('.bloc-txt', {height: 'auto', duration: 0.6}, '-=0.8')
    .to('.bloc-txt h2', {y: 0, duration: 0.6}, '-=0.6 ')
    .to('.f2', {y: 0, duration: 0.6})
    .to('.flip-img1', {display: 'none', duration: 0})
    .to('.f2', {y: '-100%'})
    .to('.load-container', {autoAlpha: 0, duration: 0.8, delay: 0.7})
    .add(() => {
        document.querySelector('video').play()
    }, '-=0.8')
    .add(() => {
        document.querySelector('.load-container').getElementsByClassName.display = 'none'
    })

}