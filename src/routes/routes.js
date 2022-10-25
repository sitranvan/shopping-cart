import Product from '~/features/Product'
import ClockApp from "../features/Clock"
import PostTitle from "../features/Post"
import ProductApi from "../features/ProductApi"
import TodoApp from "../features/Todo"
export const publicRoutes = [
    { path: '/', component: Product },
    { path: '/todo', component: TodoApp },
    { path: '/posts', component: PostTitle },
    { path: '/clock', component: ClockApp },
    { path: '/product-api', component: ProductApi },
]