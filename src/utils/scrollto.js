// 获取页面卷起的高度
function scrollHeight() {
  if (document.documentElement && document.documentElement.scrollTop) {
    return document.documentElement.scrollTop
  }
  if (document.body.scrollTop) {
    return document.body.scrollTop
  }
  return 0
}


function scrollto(h, callback) {
  let speed = Math.round(300 / 100)
  h = h || 0
  let startY = scrollHeight(),
      step = Math.round(startY / 30),
      leapY = startY < 150 ? h : startY

  let scrollInterval = setInterval(function() {    
    if(leapY - step < h) {
      clearInterval(scrollInterval)
      leapY = h
      window.addEventListener("scroll", callback)
    }
    
    window.scrollTo(0, leapY)
    leapY -= step
  }, speed)
}

export default scrollto