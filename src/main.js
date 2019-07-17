import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import VueTailwind from "vue-tailwind";

Vue.use(VueTailwind);
Vue.config.productionTip = false;

import "vuesax/dist/vuesax.css"; //Vuesax styles
import "material-icons/iconfont/material-icons.css";
Vue.use(Vuesax);

new Vue({
  render: h => h(App)
}).$mount("#app");
