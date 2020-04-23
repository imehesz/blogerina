import * as riot from 'riot'
import App from './app.riot'
// import Woof from "./woof.riot"


// riot.register("woof", Woof)


const mountApp = riot.component(App)

const app = mountApp(
    document.getElementById('root'),
    { message: 'Blogerina :)' }
)