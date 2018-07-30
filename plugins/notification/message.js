import Notification from './index';

function notice (content = '') {
  if (Object.keys(content).length == 0) {
    return false
  }
  Notification.newInstance({
    content
  });

  if(document.getElementsByClassName('notification').length > 1) {
    document.body.removeChild(document.getElementsByClassName('notification')[0]); 
    return 
  }
  
  // 用于自动消除
  var timer = setTimeout(function() {
    clearTimeout(timer)
    document.body.removeChild(document.getElementsByClassName('notification')[0]);
  }, 200000);
}

export default {
  message(content) {
    notice(content)
  }
}