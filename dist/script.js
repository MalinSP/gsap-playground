//https://www.freepik.com/free-photos-vectors/business">Business vector created by freepik - www.freepik.com

// let timeLine = gsap.timeline({ repeat: 1, yoyo: true })

let timeLine = gsap.timeline({ defaults: { opacity: 0, ease: 'back' } })
timeLine
  .from('#demo', { ease: 'linear' })
  .from('h1', { x: 80 })
  .from('h2', { x: -80 })
  .from('p', { y: 30 })
  .from('button', { y: 30 })
  .from('#items >g', {
    scale: 0,
    stagger: 0.4,
    transformOrigin: '50% 50%',
  })
