import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Maska from "maska";
import DKToast from "vue-dk-toast";

const app = createApp(App);

app.use(Maska);
app.use(DKToast);
app.use(router);
app.mount("#app");
