// 获取页面卷起的高度
function scrollHeight() {
  if (document.documentElement && document.documentElement.scrollTop) {
    return document.documentElement.scrollTop;
  }
  if (document.body.scrollTop) {
    return document.body.scrollTop;
  }
  return 0;
}

function scrollto(h = 0, callback) {
  const speed = Math.round(300 / 100);
  const startY = scrollHeight();
  const step = Math.round(startY / 30);
  let leapY = startY < 150 ? h : startY;

  const scrollInterval = setInterval(() => {
    if (leapY - step < h) {
      clearInterval(scrollInterval);
      leapY = h;
      window.addEventListener('scroll', callback);
    }

    window.scrollTo(0, leapY);
    leapY -= step;
  }, speed);
}

export default scrollto;
