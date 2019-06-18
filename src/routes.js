import Home from './views/Home'
import Category from './views/Category'
import Find from './views/Find'
import Cart from './views/Cart'
import Me from './views/Me'

import Recommend from './components/category/recommend'
import Phone from './components/category/phone'
import Audio from './components/category/audio'
import Section from './components/category/section'
import Surround from './components/category/surround'

export const routes = [
	{path: "/", component: Home, name: "homeLink"},
	{path: "/category", component: Category, redirect: "/category/recommend", name: "categoryLink",
		children: [
			{path: "/category/recommend", component: Recommend},
			{path: "/category/phone", component: Phone},
			{path: "/category/audio", component: Audio},
			{path: "/category/section", component: Section},
			{path: "/category/surround", component: Surround}
		]
	},
	{path: "/find", component: Find, name: "findLink"},
	{path: "/cart", component: Cart, name: "cartLink"},
	{path: "/me", component: Me, name: "meLink"}
];