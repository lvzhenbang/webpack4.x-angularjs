import loadImg from '@utils/load-img.js';

export default {
  service: {
    phone: '400-075-2005',
    worktime: '9:00-18:00&nsp;&nsp;周一至周五'
  },
  qrcode: {
    img: loadImg('index/sj-qr.png'),
    alt: '微信公众号二维码',
    text: '扫一扫关注圣捷投资'
  },
  nav: [
    {
      href: '',
      text: '走进圣捷',
      type: '',
      subMap: [
        { href: 'investment', text: '圣捷投资', type: 'zjsj' },
        { href: 'speech', text: '董事长致辞', type: 'zjsj' },
        { href: 'culture', text: '企业文化', type: 'zjsj' },
        { href: 'team', text: '管理团队', type: 'zjsj' },
        { href: 'event', text: '圣捷大事记', type: 'zjsj' },
        { href: 'strategy', text: '发展战略', type: 'zjsj' },      
      ]
    },
    {
      href: '',
      text: '业务板块',
      type: '',
      subMap: [
        { href: 'finance', text: '互联网金融', type: 'ywbk' },
        { href: 'allfinance', text: '全品类金融', type: 'ywbk' },
        { href: 'estate', text: '商业地产', type: 'ywbk' },
        { href: 'restaurant', text: '餐饮', type: 'ywbk' },
        { href: 'culture2', text: '文化', type: 'ywbk' },
        { href: 'health', text: '健康', type: 'ywbk' }    
      ]
    },
    {
      href: '',
      text: '新闻中心',
      type: '',
      subMap: [
        { href: 'dynamic', text: '圣捷动态', type: 'newscenter'},
        { href: 'focus', text: '新闻聚焦', type: 'newscenter' }      
      ]
    },
    {
      href: '',
      text: '社会责任',
      type: '',
      subMap: [
        { href: 'system', text: '责任体系', type: 'shzr' },
        { href: 'welfare', text: '社会公益', type: 'shzr' },
        { href: 'career', text: '光彩事业', type: 'shzr' }      
      ]
    },
    {
      href: '',
      text: '圣捷商学院',
      type: '',
      subMap: [
        { href: '.school', text: '商学院', type: 'sxy' },
        { href: '.celebrites', text: '商学院名人', type: 'sxy' },
        { href: '.classroom', text: '商学院1-4期', type: 'sxy' }      
      ]
    },
    {
      href: 'contactus',
      text: '联系我们',
      type: 'contactus'
    }
  ]
}
