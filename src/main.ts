import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import MyComponent from "./MyComponent.vue";
import ForDrop from "./ForDrop.vue";
import MyForm from "./MyForm.vue";
import router from "./router";

// import './assets/main.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("my-component", MyComponent);
app.component("for-drop", ForDrop);
app.component("my-form", MyForm);
app.mount("#app");
