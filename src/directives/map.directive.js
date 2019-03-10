/**
 * directive of map
 * by lzb
 */
import Map from '~utils/map';

export default function mapDirective() {
  return {
    restrict: 'A',
    link($scope) {
      const config = {
        pos: {
          lat: '116.526831',
          lng: '39.911978',
        },
        infoWindow: {
          address: '地址：北京市朝阳区高碑店西店村46号楼',
          opts: {
            width: 290, // 信息窗口宽度
            height: 100, // 信息窗口高度
            title: '圣捷集团', // 信息窗口标题
          },
        },
        isWheelZoom: true,
      };

      const map = new Map(document.querySelector('#map'), config);

      map.init();

      $scope.$on('$destory', () => {
        map.destory();
      });
    },
  };
}
