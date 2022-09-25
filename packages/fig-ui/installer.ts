import {App} from 'vue'
// import { VcTable } from './components/table'
// import { VcMenu } from './components/menu'
import { DeleteButtonV1 } from './components/button'

const elmPlusComponents = [
  // VcTable,
  DeleteButtonV1
  // VcMenu
]

export const installer = (app: App) => {
  elmPlusComponents.forEach((comp) => app.use(comp))
}
