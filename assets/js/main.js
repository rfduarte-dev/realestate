/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.querySelector('#header')
  //quando a pagina scollar mais do que 50px add a classe
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header')
  } else {
    header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper('.popular__container', {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

/*=============== VALUE ACCORDION ===============*/

const accordionItens = document.querySelectorAll('.value__accordion-item')

accordionItens.forEach((item) => {
  const accordionHeader = item.querySelector('.value__accordion-header')
  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if (openItem && openItem !== item) {
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.value__accordion-content')

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 58
    const sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scroolUp() {
  const scrollUp = document.querySelector('#scroll-up')

  if (this.scrollY >= 350) {
    scrollUp.classList.add('show-scroll')
  } else {
    scrollUp.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', scroolUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.querySelector('#theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topi (if user selected)
// Tópico previamente selecionado (se o usuário selecionar)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validation the dark-theme class
// Obtemos o tema atual que a interface possui validando a classe dark-theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previusly chose a topic
// Validamos se o usuário já escolheu um tópico
if (selectedTheme) {
  //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the darke-theme
  //Se a validação for cumprida, perguntamos qual foi o problema para saber se ativamos ou desativamos o darke-theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    'darkTheme'
  )
  themeButton.classList[selectedTheme === 'bx bx-moon' ? 'add' : 'remove'](
    'iconTheme'
  )
}

// Activate / deactivate the theme manually with the button
// Ative / desative o tema manualmente com o botão
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  // Adicione ou remova o tema escuro / ícone
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  // We save the theme and the current icon that the user chose
  // Salvamos o tema e o ícone atual que o usuário escolheu
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})
//home
sr.reveal(
  `.home__title, .popular__container, .subscribe__container, .footer__container`
)
sr.reveal(`.home__description`, { delay: 500 })
sr.reveal(`.home__search, .footer__info`, { delay: 600 })
sr.reveal(`.home__value`, { delay: 700 })
sr.reveal(`.home__images`, { delay: 800, origin: 'bottom' })

//logos
sr.reveal(`.logos__img`, { interval: 200 })

//value e contact
sr.reveal(`.value__images, .contact__content `, { origin: 'left' })
sr.reveal(`.value__content, .contact__images`, { origin: 'right' })
