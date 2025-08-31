import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);


//Loader

const tlLoader = gsap.timeline();
tlLoader
  .set('.loader__item', {yPercent: -100})
  .set('.loader__title', {opacity: 0})
  .to('.loader__item', {
    yPercent: 0,
    duration: 0.5,
    stagger: 0.25,
  })
  .to('.loader__item', {
    yPercent: 100,
    duration: 0.5,
    stagger: 0.25,
  })
  .to('.loader__title', {
    opacity: 1,
    duration: 1,
    scale: 1.2,
  })
  .set('.loader__item', {
    yPercent: -100,
  })
  .to('.loader__title', {
    opacity: 0,
    duration: 1,
  })
  .to('.loader', {
      yPercent: -100,
      opacity: 0,
      duration: 1,
    },
    '-=0.2',
  )


function delayJs() {
// Create a media query for screens that are 992 pixels wide or larger
  const mediaQuery992 = window.matchMedia('(min-width: 992px)');
// Check if the media query matches

 if (mediaQuery992.matches) {
// Section Studio

    const stStudio = document.querySelector('.section-studio');

    gsap.to(stStudio.querySelector('.title'),
      {
        scrollTrigger: {
          trigger: stStudio,
          start: '-100 0',
          scrub: true,
        },
        y: -100,
        opacity: 0.6,
      },
    );
    gsap.to(stStudio.querySelector('.studio-img'),
      {
        scrollTrigger: {
          trigger: stStudio,
          start: '-100 0',
          scrub: true,
        },
        scale: 1.1,
        duration: 0.5,
        y: -40,
      },
    );

    // Section Material
    const stMaterial = document.querySelector('.section-material');

    gsap.from(stMaterial.querySelector('.title'),
      {
        scrollTrigger: {
          trigger: stMaterial,
          start: '-200 top',
        },
        y: 100,
        duration: 1,
        opacity: 0,
      },
    );
    gsap.from(stMaterial.querySelector('.text'),
      {
        scrollTrigger: {
          trigger: stMaterial,
          start: '-200 top',
        },
        y: 80,
        duration: 0.5,
        opacity: 0,
      },
    );
    gsap.from(stMaterial.querySelector('.btn'),
      {
        scrollTrigger: {
          trigger: stMaterial,
          start: '-200 top',
        },
        delay: 1,
        duration: 0.2,
        opacity: 0,
      },
    );
    gsap.from(stMaterial.querySelector('.swiper'),
      {
        scrollTrigger: {
          trigger: stMaterial,
          start: '-200 top',
        },
        xPercent: 100,
        duration: 2,
        opacity: 0,
      },
    );

    // Section Choose
    const stChoose = document.querySelector('.section-choose');

    gsap.from(stChoose.querySelector('h2.title'),
      {
        scrollTrigger: {
          trigger: stChoose,
          start: '-100 center',
        },
        x: -100,
        duration: 0.5,
        opacity: 0,
      },
    )

    gsap.from(stChoose.querySelector('.choose-text'),
      {
        scrollTrigger: {
          trigger: stChoose,
          start: '-100 center',
        },
        y: 50,
        duration: 0.5,
        opacity: 0,
        delay: 0.4,
      },
    )
    gsap.from(stChoose.querySelectorAll('.item'),
      {
        scrollTrigger: {
          trigger: stChoose,
          start: '-100 center',
        },
        yPercent: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.25,
      }
    )
    gsap.from(stChoose.querySelector('._icon-Dot'),
      {
        scrollTrigger: {
          trigger: stChoose,
          start: '-100 center',
        },
        y: -150,
        scale: 0,
        opacity: 0,
        duration: 1,
      }
    )
    gsap.from(stChoose.querySelector('.img'),
      {
        scrollTrigger: {
          trigger: stChoose,
          start: '-100 center',
        },
        xPercent: 100,
        opacity: 0,
        duration: 0.8,
        delay: 0.25,
      }
    )

    const tlChoose = gsap.timeline();
    tlChoose
      .from(stChoose.querySelector('h2.title'),
        {
          scrollTrigger: {
            trigger: stChoose,
            start: '200 center',
            scrub: true,

          },
          y: 20,
          delay: 1,
        }
      )
      .from(stChoose.querySelector('.list'),
        {
          scrollTrigger: {
            trigger: stChoose,
            start: '-200 0',
            scrub: true,
          },
          yPercent: -7,
          autoAlpha: 0.8,
        }
      )


// Section Interior
    const stInterior = document.querySelector('.section-interior');
    const tlInterior = gsap.timeline();
    tlInterior
      .from(stInterior.querySelector('.interior-1'),
        {
          scrollTrigger: {
            trigger: stInterior,
            start: '-100 center',
            end: "+=150",
            scrub: true,
          },
          x: 15,
        }
      )
      .from(stInterior.querySelector('.interior-2'),
        {
          scrollTrigger: {
            trigger: stInterior,
            start: '-100 center',
            scrub: true,
          },
          y: -15,
        }
      )
      .from(stInterior.querySelector('.interior-3'),
        {
          scrollTrigger: {
            trigger: stInterior,
            start: '-100 center',
            scrub: true,
          },
          y: 15,
          x: -15,
        }
      )

    gsap.from(stInterior.querySelector('.right'),
      {
        scrollTrigger: {
          trigger: stInterior,
          start: '-100 center',
        },
        x: 150,
        opacity: 0,
        duration: 1,
      }
    )
    gsap.from(stInterior.querySelectorAll('.item'),
      {
        scrollTrigger: {
          trigger: stInterior,
          start: '-100 center',
        },
        y: 100,
        opacity: 0,
        delay: 1,
        duration: 1,
        stagger: 0.25,
      }
    )
    gsap.from(stInterior.querySelector('.btn'),
      {
        scrollTrigger: {
          trigger: stInterior,
          start: '-100 center',
        },
        y: 100,
        opacity: 0,
        delay: 1.5,
        duration: 0.75,
      }
    )
    // Section Read More
    const stRead = document.querySelector('.section-read-more');
    gsap.from(stRead.querySelectorAll('.item'),
      {
        scrollTrigger: {
          trigger: stRead,
          start: '-200 center',
        },
        opacity: 0,
        x: -100,
        duration: 1,
        stagger: 0.5,
      }
    )

    // Section Blog
    const stBlog = document.querySelector('.section-recentBlog');
    gsap.from(stBlog.querySelector('.blog'),
      {
        scrollTrigger: {
          trigger: stBlog,
          start: '-200 center',
        },
        x: -100,
        opacity: 0,
        duration: 1,
      }
    )
    gsap.from(stBlog.querySelectorAll('.item'),
      {
        scrollTrigger: {
          trigger: stBlog,
          start: '-200 center',
        },
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        delay: 0.5,
      }
    )

    // Section Footer
    const stFooter = document.querySelector('.footer');
    gsap.from(stFooter.querySelector('.right img'),
      {
        scrollTrigger: {
          trigger: stFooter,
          start: '-100 bottom',
          scrub: true,
          end: '300 bottom',
        },
        x: 80,
        y: -70,
        duration: 1,
        scale: 0.8,
      }
    )
  }
}

setTimeout(delayJs, 3000);



