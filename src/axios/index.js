import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = function(obj, successCallback, failCallback) {
  axios({
      ...obj
  }).then( response => {
      if (typeof successCallback === 'function') {
          if (response.status === 200) {
              successCallback(response.data);
          }
      }
      
  }).catch( error => {
      if (typeof failCallback === 'function') {
          failCallback(error);
      }
  });
}

axios.defaults.baseURL = 'https://easy-mock.com/mock/5d1b63a94e718016e83ba630/meizu-shop'
