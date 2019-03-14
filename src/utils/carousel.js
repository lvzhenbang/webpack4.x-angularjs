class Carousel {
  constructor(selector, config = {}) {
    const defaults = {
      direction: 'left',
      timer: 2000,
      hasIndicators: true,
      autoplay: true,
    };

    this.carousel = document.querySelector(selector);
    this.items = this.carousel.querySelectorAll('.carousel-item');
    this.btnPrev = document.querySelector('.btn-prev');
    this.btnNext = document.querySelector('.btn-next');
    this.interval = null;
    this.activeIndex = 0;

    this.options = {
      ...defaults,
      ...config,
    };

    this.getIndex = (items, element) => [...items].indexOf(element);
    this.getNextIndex = (items, element, direction, activeIndex) => {
      if (element) {
        return this.getIndex(items, element);
      }

      if (direction === 'left') {
        return (activeIndex + 1) % items.length;
      }

      if (items.length - 1 === -1) {
        return this.items.length - 1;
      }

      return this.activeIndex - 1;
    };

    this.reflow = element => element.offsetHeight;

    this.checkDirection = (className) => {
      if (className.indexOf('next') > -1) return 'left';
      if (className.indexOf('prev') > -1) return 'right';
      return 'left';
    };
  }

  slide(direction, element) {
    const activeElement = this.carousel.querySelector('.carousel-item.active');

    this.activeIndex = this.getIndex(this.items, activeElement);

    const nextIndex = this.getNextIndex(this.items, element, direction, this.activeIndex);

    const nextElement = element || this.items[nextIndex];
    const orderClass = direction === 'left' ? 'next' : 'prev';
    const directionClass = direction === 'left' ? 'left' : 'right';

    nextElement.classList.add(orderClass);

    this.reflow(activeElement);

    activeElement.classList.add(directionClass);
    nextElement.classList.add(directionClass);

    function animate() {
      nextElement.classList.remove(directionClass);
      nextElement.classList.remove(orderClass);
      nextElement.classList.add('active');

      activeElement.classList.remove('active');
      activeElement.classList.remove(orderClass);
      activeElement.classList.remove(directionClass);

      activeElement.removeEventListener('transitionend', animate);
    }

    activeElement.addEventListener('transitionend', animate);

    if (this.options.hasIndicators) {
      const indicators = this.carousel.querySelector('.carousel-indicators').children;
      indicators[this.activeIndex].classList.remove('active');
      indicators[nextIndex].classList.add('active');
    }

    this.activeIndex = nextIndex;
  }

  autoplay() {
    this.interval = setInterval(() => {
      this.slide(this.options.direction);
    }, this.options.timer);
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  addIndicators() {
    const indicators = document.createElement('ol');

    indicators.className = 'carousel-indicators';

    for (let i = 0; i < this.items.length; i += 1) {
      const indicatorItem = document.createElement('li');

      indicatorItem.setAttribute('data-index', i);
      indicators.appendChild(indicatorItem);
    }
    (indicators.children)[this.activeIndex].classList.add('active');
    this.carousel.appendChild(indicators);
  }

  destory() {
    this.pause();
    this.carousel.removeChild(this.carousel.querySelector('ol'));
  }

  init() {
    if (this.options.hasIndicators) this.addIndicators();

    if (this.options.autoplay) this.autoplay();

    this.carousel.addEventListener('mouseenter', () => {
      this.pause();
    }, false);

    this.carousel.addEventListener('mouseleave', () => {
      if (this.options.autoplay) this.autoplay();
    }, false);

    this.carousel.addEventListener('click', (e) => {
      const dataIndex = parseInt(e.target.getAttribute('data-index'), 10);

      if (dataIndex >= 0) {
        if (dataIndex < 0 && dataIndex > this.items.length) return;

        if (this.activeIndex === dataIndex) return;

        this.slide(dataIndex > this.activeIndex ? 'left' : 'right', this.items[dataIndex]);
      }

      if (e.target.className.indexOf('btn') > -1) {
        this.slide(this.checkDirection(e.target.className));
      }
    }, false);
  }
}

export default Carousel;
