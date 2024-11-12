import './assets/main.css'

import { createApp } from 'vue'
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import Notifications from '@kyvg/vue3-notification'
import 'maz-ui/styles'
import MazBtn from 'maz-ui/components/MazBtn'
import MazInput from 'maz-ui/components/MazInput'
import MazSelect from 'maz-ui/components/MazSelect'
import MazAvatar from 'maz-ui/components/MazAvatar'
import MazTextarea from 'maz-ui/components/MazTextarea'
import MazSwitch from 'maz-ui/components/MazSwitch'
 import MazDropdown from 'maz-ui/components/MazDropdown'
 import MazInputPrice from 'maz-ui/components/MazInputPrice'
 import MazInputTags from 'maz-ui/components/MazInputTags'
 import MazCheckbox from 'maz-ui/components/MazCheckbox'
 import MazAccordion from 'maz-ui/components/MazAccordion'
 import MazInputCode from 'maz-ui/components/MazInputCode'
 import MazRadioButtons from 'maz-ui/components/MazRadioButtons'
 import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";



const app = createApp(App)

app.component('MazBtn', MazBtn)
app.component('MazInput', MazInput)
//app.component('MazPhoneNumberInput', MazPhoneNumberInput)
app.component('MazSelect', MazSelect)
app.component('MazAvatar', MazAvatar)
app.component('MazTextarea', MazTextarea)
app.component('MazSwitch', MazSwitch)
app.component('MazDropdown', MazDropdown)
app.component('MazInputPrice', MazInputPrice)
app.component('MazInputTags', MazInputTags)
app.component('MazCheckbox', MazCheckbox)
app.component('MazAccordion', MazAccordion)
app.component('MazInputCode', MazInputCode)
app.component('MazRadioButtons', MazRadioButtons)
const options = {
  // You can set your default options here
};



app.use(VueLazyload, {
    preLoad: 1,
    error: "../src/assets/gif/error.gif",
    loading: "../src/assets/gif/loader.gif",
    attempt: 1
  })
app.use(Notifications);
app.use(i18n)
app.use(router)
app.use(store)
app.use(Toast, options);

app.mount('#app')
