class Carousel {
  constructor(selector, config = {}) {
    let defaults = {
      direction: 'left',
      timer: 2000,
      hasIndicators: true,
      autoplay: true
    }

    this.carousel = document.querySelector(selector)
    this.items = this.carousel.querySelectorAll('.carousel-item')
    this.btnPrev = document.querySelector('.btn-prev')
    this.btnNext = document.querySelector('.btn-next')
    this.interval = null
    this.activeIndex = 0

    this.options = {
      ...defaults,
      ...config
    }

    this.init()
  }
  
  getIndex(items, element) {
    return [...items].indexOf(element)
  }

  reflow(element) {
    return element.offsetHeight
  }

  slide(direction, element) {
    let activeElement = this.carousel.querySelector('.carousel-item.active')

    this.activeIndex = this.getIndex(this.items, activeElement)

    let nextIndex = element ? this.getIndex(this.items, element) : direction === 'left' ? (this.activeIndex + 1) % this.items.length : (this.activeIndex - 1) === -1 ? this.items.length - 1 : this.activeIndex - 1

    let nextElement = element || this.items[nextIndex],          
        orderClass = direction === 'left' ? 'next' : 'prev',
        directionClass = direction === 'left' ? 'left' : 'right'

    nextElement.classList.add(orderClass)
    
    this.reflow(activeElement)
    
    activeElement.classList.add(directionClass)
    nextElement.classList.add(directionClass)
    
    function animate() {
      nextElement.classList.remove(directionClass)
      nextElement.classList.remove(orderClass)
      nextElement.classList.add('active')

      activeElement.classList.remove('active')
      activeElement.classList.remove(orderClass)
      activeElement.classList.remove(directionClass)
      
      activeElement.removeEventListener('transitionend', animate)
    }
    
    activeElement.addEventListener('transitionend', animate)

    if(this.options.hasIndicators) {
      let indicators = this.carousel.querySelector('.carousel-indicators').children
      indicators[this.activeIndex].classList.remove('active')
      indicators[nextIndex].classList.add('active')
    }
    
    this.activeIndex = nextIndex
  }

  checkDirection (className) {
    if (className.indexOf('next') > -1) {
      return 'left'
    } 

    if (className.indexOf('prev') > -1) {
      return 'right'
    }

    return 'left'
  }

  autoplay() {
    this.interval = setInterval(() => {
      this.slide(this.options.direction)
    }, this.options.timer)
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  }

  addIndicators() {
    let indicators = document.createElement('ol')

    indicators.className = 'carousel-indicators'

    for(let i = 0; i < this.items.length; i++) {
      let indicatorItem = document.createElement('li')
      
      indicatorItem.setAttribute('data-index', i)
      indicators.appendChild(indicatorItem)
    }
    (indicators.children)[this.activeIndex].classList.add('active')
    this.carousel.appendChild(indicators)
  }

  init() {
    if (this.options.hasIndicators) this.addIndicators()
    
    if (this.options.autoplay) this.autoplay()

    this.carousel.addEventListener('mouseenter', () => {
      this.pause()
    }, false)

    this.carousel.addEventListener('mouseleave', () => {
      if (this.options.autoplay) this.autoplay()
    }, false)
    
    this.carousel.addEventListener('click', (e) => {
      let dataIndex = parseInt(e.target.getAttribute('data-index'), 10)

      if (dataIndex >= 0 ) {
        if (dataIndex < 0 && dataIndex > this.items.length) return

        if (this.activeIndex === dataIndex) return

        this.slide(dataIndex > this.activeIndex ? 'left' : 'right', this.items[dataIndex])
      }
      
      if (e.target.className.indexOf('btn') > -1) {
        this.slide(this.checkDirection(e.target.className))
      }
    }, false)
  }
}

export default Carousel