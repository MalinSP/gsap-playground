//https://www.freepik.com/free-photos-vectors/business">Business vector created by freepik - www.freepik.com

// let timeLine = gsap.timeline({ repeat: 1, yoyo: true })

let timeLine = gsap.timeline({ defaults: { opacity: 0, ease: 'back(3)' } })

function init() {
  timeLine
    .from('#demo', { ease: 'linear', autoAlpha: 0 })
    .from('h1', { x: 80, duration: 1 })
    .from('h2', { x: -80, duration: 1 }, '<')
    .from('p', { y: 30 }, '-=0.2')
    .from('button', { y: 30 }, '-=0.4')
    .from(
      '#items >g',
      {
        scale: 0,
        stagger: 0.4,
        transformOrigin: '50% 50%',
      },
      '-=0.2'
    )
}

window.addEventListener('load', function () {
  init()
})

//Dynamic Text
gsap.to('h3', {
  text: 'typewriter effects with GSAP 3',
  duration: 3,
  ease: 'power1.in',
  repeat: 10,
  yoyo: true,
  repeatDelay: 0.4,
})

//Gradient
//cssgradient.io

const tween = gsap.to('li', {
  backgroundImage:
    'linear-gradient(90deg, var(--left) 0%, var(--left) 100%, var(--right) 100%)',
  stagger: {
    each: 0.1,
    ease: 'power2.out',
  },
})

// Slider sections
gsap.to('.sections', {
  x: '-=100vw',
  repeat: 3,
  repeatDelay: 0.8,
  delay: 1,
  repeatRefresh: true,
})
// gsap.to(".sections", {x:"-=100vw", repeat:document.querySelectorAll(".section").length-2, repeatDelay:0.5, delay:1, repeatRefresh:true})
