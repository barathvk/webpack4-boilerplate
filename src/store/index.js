import { store } from 'react-easy-state'
import Keycloak from 'keycloak-js'
import config from '../config'
export default store({
  user: null,
  keycloak: new Keycloak(config.keycloak),
  connect() {
    // this.keycloak.init({ onLoad: 'login-required', checkLoginIframe: false }).success(async auth => {
    //   if (auth) {
    //     this.mqtt = new MqttClient(config.mqtt)
    //     this.mqtt
    //       .on('connect', async () => {
    //         this.login()
    //       })
    //       .on('disconnect', () => {
    //         console.log('Connection closed')
    //       })
    //     this.mqtt.connect()
    //   }
    // }).error(console.error)
    this.user = {
      preferredUsername: 'b.vrittamani',
      name: 'Barath Kumar Vrittamani'
    }
  },
  login() {
    this.kctoken = this.keycloak.idToken
    this.user = this.keycloak.idTokenParsed
  }
})
