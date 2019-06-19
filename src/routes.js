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
	{path: "/home", component: Home, name: "homeLink"},
	{path: "/", redirect: "/home"},
	{path: "/category", component: Category, redirect: "/category/recommend", name: "categoryLink",
		children: [
			{path: "/category/recommend", component: Recommend, name: "recommendLink"},
			{path: "/category/phone", component: Phone, name: "phoneLink"},
			{path: "/category/audio", component: Audio, name: "audioLink"},
			{path: "/category/section", component: Section, name: "sectionLink"},
			{path: "/category/surround", component: Surround, name: "surroundLink"},
		]
	},
	{path: "/find", component: Find, name: "findLink"},
	{path: "/cart", component: Cart, name: "cartLink"},
	{path: "/me", component: Me, name: "meLink"},
];