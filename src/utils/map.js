const defaults = {
  pos: {
    lat: '116.576025',
    lng: '39.905692',
  },
  infoWindow: {
    address: '地址：北京市朝阳区双桥地铁站.',
    opts: {
      width: '200',
      height: '200',
      title: 'this is a demo of baidu-map.',
    },
  },
  isWheelZoom: false,
  ranks: '15',
};

class Map {
  constructor(element, config = {}) {
    this.element = element;
    this.options = {
      ...defaults,
      ...config,
    };
    this.map = new window.BMap.Map('map'); // 创建Map实例
    this.point = new window.BMap.Point(this.options.pos.lat, this.options.pos.lng); // 创建点坐标
    this.marker = new window.BMap.Marker(this.point); // 创建标注
  }

  createMap() {
    // 设置地图层级
    this.map.centerAndZoom(this.point, this.options.ranks);

    // 将标注添加到地图中
    this.map.addOverlay(this.marker);

    // 启用滚轮放大缩小
    if (this.options.isWheelZoom) this.map.enableScrollWheelZoom();

    // 信息窗口
    const content = `<div>${this.options.infoWindow.address}</div>`;
    const infoWindow = new window.BMap.InfoWindow(
      content,
      this.options.infoWindow.opts,
    );
    setTimeout(() => {
      this.map.openInfoWindow(infoWindow, this.point);
    }, 1500);
  }

  init() {
    let observer = {};

    if ('IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            observer.unobserve(entry.target);
            this.createMap();
          }
        });
      }),
      {
        root: null,
        rootMargin: '0px',
        threshold: [0],
      });

      observer.observe(this.element);
    }
  }

  destory() {
    this.map = null;
  }
}

export default Map;
