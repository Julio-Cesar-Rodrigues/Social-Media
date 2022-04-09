//sidebar
const menuItems = document.querySelectorAll('.menu-item')

//mensagens
const messagesNotification = document.querySelector('#messages-notification')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')

//customização
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')

const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')

const colorPalette = document.querySelectorAll('.choose-color span')

const Bg1 = document.querySelector('.bg-1')
const Bg2 = document.querySelector('.bg-2')
const Bg3 = document.querySelector('.bg-3')

//remove a classe active do sidebar
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active')
  })
}

//adicionando a classe active ao clicar
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem()
    item.classList.add('active')
    //adicionando o modal de notificaçoes
    if (item.id != 'notifications') {
      document.querySelector('.notifications-popup').style.display = 'none'
    } else {
      document.querySelector('.notifications-popup').style.display = 'block'
      //retira o numero de notificaçoes da sidebar
      document.querySelector(
        '#notifications .notification-count'
      ).style.display = 'none'
    }
  })
})

//search de mensagens
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase()
  message.forEach(user => {
    //procura todos os nomes (h5)
    let name = user.querySelector('h5').textContent.toLowerCase()
    //se o h5 não existir, colocar as mensagens com display none
    if (name.indexOf(val) != -1) {
      user.style.display = 'flex'
    } else {
      user.style.display = 'none'
    }
  })
}

messageSearch.addEventListener('keyup', searchMessage)

//estilizando o card de mensagens quando selecionado
messagesNotification.addEventListener('click', () => {
  messagesNotification.querySelector('.notification-count').style.display =
    'none'
  messages.style.boxShadow = '0 0 1rem var(--color-primary)'
  messages.style.transition = 'all 0.5s ease-in-out'
  setTimeout(() => {
    messages.style.boxShadow = 'none'
  }, 2000)
})

//customização da pagina
const openThemeModal = () => {
  themeModal.style.display = 'grid'
}

const closeThemeModal = e => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none'
  }
}

themeModal.addEventListener('click', closeThemeModal)
theme.addEventListener('click', openThemeModal)

//font sizes

//remove a classe active do span
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active')
  })
}

fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    removeSizeSelector()

    let fontSize
    size.classList.toggle('active')
    if (size.classList.contains('font-size-1')) {
      fontSize = '13px'
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-right', '5.4rem')
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '15px'
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-right', '-7rem')
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '17px'
      root.style.setProperty('----sticky-top-left', '-2rem')
      root.style.setProperty('----sticky-top-right', '-17rem')
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px'
      root.style.setProperty('----sticky-top-left', '-5rem')
      root.style.setProperty('----sticky-top-right', '-25rem')
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '21px'
      root.style.setProperty('----sticky-top-left', '-12rem')
      root.style.setProperty('----sticky-top-right', '-35rem')
    }
    document.querySelector('html').style.fontSize = fontSize
  })
})

//colors

const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active')
  })
}

colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primary
    changeActiveColorClass()
    if (color.classList.contains('color-1')) {
      primaryHue = 252
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152
    } else if (color.classList.contains('color-5')) {
      primaryHue = 202
    }
    color.classList.add('active')

    root.style.setProperty('--primary-color-hue', primaryHue)
  })
})

//background
let lightColorLightness
let whiteColorLightness
let darkColorLightness

const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness)
  root.style.setProperty('--white-color-lightness', whiteColorLightness)
  root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

Bg1.addEventListener('click', () => {
  Bg1.classList.add('active')
  Bg2.classList.remove('active')
  Bg3.classList.remove('active')
  window.location.reload()
})

Bg2.addEventListener('click', () => {
  darkColorLightness = '95%'
  whiteColorLightness = '20%'
  lightColorLightness = '15%'

  Bg2.classList.add('active')
  Bg1.classList.remove('active')
  Bg3.classList.remove('active')
  changeBG()
})

Bg3.addEventListener('click', () => {
  darkColorLightness = '95%'
  whiteColorLightness = '10%'
  lightColorLightness = '0%'

  Bg3.classList.add('active')
  Bg1.classList.remove('active')
  Bg2.classList.remove('active')
  changeBG()
})
