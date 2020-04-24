import * as riot from 'riot'
import App from './app.riot'
// import Woof from "./woof.riot"
import BlogPosts from "./blog-posts.riot"
import BlogPostShortUnformatted from "./blog-post-short-unformatted.riot"


// riot.register("woof", Woof)
riot.register("blog-posts", BlogPosts)
riot.register("blog-post-short-unformatted", BlogPostShortUnformatted)

const mountApp = riot.component(App)

const app = mountApp(
    document.getElementById('root'),
    { message: 'Blogerina :)' }
)