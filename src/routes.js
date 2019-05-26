import Home from './views/Home'
import Category from './views/Category'
import Find from './views/Find'
import Cart from './views/Cart'
import Me from './views/Me'

export const routes = [
	{path: "/", component: Home, name: "homeLink"},
	{path: "/category", component: Category, name: "categoryLink"},
	{path: "/find", component: Find, name: "findLink"},
	{path: "/cart", component: Cart, name: "cartLink"},
	{path: "/me", component: Me, name: "meLink"}
];