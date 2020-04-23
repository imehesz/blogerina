import * as riot from 'riot'
import App from './app.riot'
// import Woof from "./woof.riot"
import BlogEntries from "./blog-entries.riot"


// riot.register("woof", Woof)
riot.register("blog-entries", BlogEntries)

const mountApp = riot.component(App)

const app = mountApp(
    document.getElementById('root'),
    { message: 'Blogerina :)' }
)