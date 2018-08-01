/**
 * 格式化秒
 * @param {*} seconds - 秒数
 * @returns {string}
 */
export function formatTime (seconds) {
  return [
    parseInt(seconds / 60 % 60),
    parseInt(seconds % 60)
  ]
    .join(" 分 ")
    .replace(/\b(\d)\b/g, "0$1") + ' 秒';
}

/**
 * 判断是否过期
 * @param {*} date - 日期
 * @returns {boolean}
 */
export function isOver (date) {
  let n = Date.now()
  let d = new Date(date)
  let t1 = d.getTime()
  return n > t1 ? true : false
}

/**
 * 判断机型
 * @param {null}
 * @returns {boolean}
 */
export function IsIOS() {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return true
  } else if (/(Android)/i.test(navigator.userAgent)) {
    return false
  }
}

/**
 * 调取原生方法
 * @param {*} def - 方法名
 * @param {*} payload - 传递的值
 * @returns {void}
 */
export function postMessage(def, payload) {
  let u = navigator.userAgent
  if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
    window.AndroidWebView[def](JSON.stringify(payload))
  } else {
    window.webkit.messageHandlers[def].postMessage(payload)
  }
}

/**
 * 去掉所有空格
 * @param {*} str 
 */
export function removeAllSpace (str) {
  return str.replace(/\s+/g, '')
}

/**
 * 手机号验证
 * @param {*}  
 */
export function isPoneAvailable($val) {
  var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test($val)) {
      return false;
  } else {
      return true;
  }
}
