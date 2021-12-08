// header
const header = document.querySelector('#header');

// banner
const bannerAddition = document.querySelector('#bannerBgAddition');
const banner = document.querySelector('#bannerBg');

const bannerTL = gsap.timeline();

// content
const h1Line = document.querySelectorAll('.line span');
const contentP = document.querySelector('.content-inner p');
const contentButton = document.querySelector('.content-inner .btn-row');
const playVideo = document.querySelector('.play-video span');
const playVideoCover = document.querySelector('.play-video .cover');

// image
const handImg = document.querySelector('.image-inner img');
const featureBanner = document.querySelector('#featureBanner');
const featureBannerGreen = document.querySelector('#featureBannerGreen');

// features
const featuresContentTitle = document.querySelector('.features-content h3');
const featuresContentP = document.querySelector('.features-content p');
const featuresContentButton = document.querySelector('.features-content .btn-row');
const featuresList = document.querySelectorAll('.features-list li');

bannerTL.from([bannerAddition, banner], {
    duration: 1.2,
    width: 0,
    skewX: 4,
    ease: 'power3.inOut',
    stagger: {
        amount: 0.2,
    },
});

gsap.from(header, {
    delay: 0.2,
    y: 16,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.inOut',
});

gsap.from(h1Line, {
    delay: 0.4,
    y: 80,
    duration: 0.8,
    ease: 'power3.inOut',
    stagger: {
        amount: 0.2,
    },
});

gsap.from([contentP, contentButton], {
    delay: 0.6,
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: {
        amount: 0.2,
    },
});

gsap.to([playVideo, playVideoCover], {
    delay: 1,
    opacity: 1,
    duration: 0,
});

gsap.to(playVideoCover, {
    delay: 1,
    height: 0,
    duration: 1,
    ease: 'power3.out',
});

gsap.from(handImg, {
    delay: 2.2,
    skewX: 2,
    duration: 0.8,
    x: -100,
    opacity: 0,
    ease: 'power3.out',
});

gsap.from([featureBanner, featureBannerGreen], {
    delay: 2.4,
    skewX: 6,
    duration: 0.8,
    x: -60,
    opacity: 0,
    ease: 'power3.out',
    stagger: {
        amount: 0.2,
    },
});

const featuresTL = gsap.timeline();

featuresTL.from([featuresContentTitle, featuresContentP, featuresContentButton], {
    delay: 2,
    duration: 0.8,
    y: 40,
    opacity: 0,
    ease: 'power3.out',
    stagger: {
        amount: 0.4,
    },
});

featuresTL.from(featuresList, {
    delay: 1,
    duration: 0.8,
    y: 40,
    opacity: 0,
    ease: 'power3.out',
    stagger: {
        amount: 0.4,
    },
});

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '#featureBannerGreen',
    triggerHook: 0,
    reverse: false,
})
    //.addIndicators()
    .setTween(featuresTL)
    .addTo(controller);
