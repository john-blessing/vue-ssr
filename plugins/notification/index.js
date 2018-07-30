import Notification from './notification.vue'
import Vue from 'vue'

Notification.newInstance = properties => {
  const _props = properties || {};

  const Instance = new Vue({
      render (h) {
          return h(Notification, {
              props: _props
          });
      }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
};

export default Notification;