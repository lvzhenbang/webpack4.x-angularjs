import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import mapComponent from './baidu.map.component';

let mapModule = angular.module('app.map', [])
.directive('baiduMap', function() {
  return {
    restrict: 'A',
    link: function($scope, tElement) {
      function loadMap() {
        init()
      }
      
      function init() {
        var map = new BMap.Map('map'); // 创建Map实例
        var point = new BMap.Point('116.526831', '39.911978'); // 创建点坐标
        map.centerAndZoom(point, 15);
      
        var marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        map.enableScrollWheelZoom(); // 启用滚轮放大缩小
        var opts = {
          width: 200, // 信息窗口宽度
          height: 100, // 信息窗口高度
          title: "圣捷集团", // 信息窗口标题
        }
        var infoWindow = new BMap.InfoWindow("地址：北京市朝阳区高碑店西店村46号楼", opts); // 创建信息窗口对象
        var timer = setTimeout(function () {
          map.openInfoWindow(infoWindow, point); // 信息窗口
        }, 1000);
      }
      
      function mapShow() {
        let observer = {}
        
        if ('IntersectionObserver' in window) {
          observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if(entry.intersectionRatio > 0) {
                observer.unobserve(entry.target)
                loadMap()
              }
            })
          }, {
            root: null,
            rootMargin: "0px",
            threshold: [0]
          })
          
          observer.observe(document.querySelector('#map'));
        }
      }

      mapShow()
    }
  }
})
.component('baiduMap', mapComponent)
.name;

export default mapModule;