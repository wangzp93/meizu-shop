webpackJsonp([0],{"+oM9":function(t,e){},"0odi":function(t,e){},"3Az9":function(t,e,n){"use strict";var s={props:{adList:{type:Array,default:[]}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-ad"},t._l(t.adList,function(e){return n("div",{staticClass:"accessoary-ad"},[n("a",{attrs:{href:e.a_href}},[n("div",{staticClass:"accessoary-ad-detail"},[n("h4",{staticClass:"ad-name"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"ad-feature"},[t._v(t._s(e.feature))]),t._v(" "),n("p",{staticClass:"ad-price"},[n("i",[t._v(t._s(e.unit))]),t._v(t._s(e.price)+"\n                ")])]),t._v(" "),n("img",{staticClass:"lazy-img loaded-img",attrs:{"data-src":e.img_src,alt:"",actived:"actived",src:e.img_src}})])])}),0)},staticRenderFns:[]};var r=n("C7Lr")(s,i,!1,function(t){n("T+Hn")},"data-v-6aa00eef",null);e.a=r.exports},"49tS":function(t,e){},"5Z7Z":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cart"},[e("p",{staticClass:"title"},[e("span",{on:{click:this.back}},[e("svg-icon",{attrs:{iconName:"back"}})],1),this._v("\n        购物车\n    ")]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("p",[this._v("购物车内还没有商品，赶紧去选购吧～")]),this._v(" "),e("a",{staticClass:"btn",attrs:{href:"//mall.meizu.com/"}},[this._v("随便逛逛")])])}]};var i=n("C7Lr")({methods:{back:function(){this.$router.go(-1)}}},s,!1,function(t){n("49tS")},"data-v-72442bcf",null);e.default=i.exports},"7G9M":function(t,e,n){"use strict";var s={props:{title:{type:String,require:!0}}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("h3",{staticClass:"list-title"},[this._v(this._s(this.title))])},staticRenderFns:[]};var r=n("C7Lr")(s,i,!1,function(t){n("Zu78")},"data-v-8a74801e",null);e.a=r.exports},"8Oae":function(t,e){},"9SYB":function(t,e){},BWUd:function(t,e){},CpQ3:function(t,e,n){"use strict";var s=n("7G9M"),i=n("jkm7"),r={components:{ProductTitle:s.a,ProductList:i.a},beforeMount:function(){var t=this;this.$axios({url:"category/phone.json"}).then(function(e){t.title=e.title,t.ad=e.ad,t.list=e.list})},data:function(){return{title:"",ad:{},list:[]}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-phone"},[e("product-title",{attrs:{title:this.title}}),this._v(" "),e("div",{staticClass:"list-ad"},[e("a",{attrs:{href:this.ad.a_href}},[e("img",{attrs:{src:this.ad.img_src,"lazy-src":this.ad.img_src,alt:""}})])]),this._v(" "),e("product-list",{attrs:{productList:this.list}})],1)},staticRenderFns:[]};var o=n("C7Lr")(r,a,!1,function(t){n("Fk6I")},"data-v-7568ae13",null);e.a=o.exports},DrO4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-info"},[n("i",{staticClass:"icon-back",on:{click:t.back}},[n("svg-icon",{attrs:{iconName:"back"}})],1),t._v(" "),n("i",{staticClass:"icon-msg"},[n("svg-icon",{attrs:{iconName:"msg"}})],1),t._v(" "),n("div",{staticClass:"my-icon"},[n("img",{attrs:{src:t.img_src}})]),t._v(" "),n("p",{staticClass:"my-name"},[t._v(t._s(t.myName))])])},staticRenderFns:[]};var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"myorders"},[n("div",{staticClass:"top"},[n("span",[t._v("我的订单")]),t._v(" "),n("a",{staticClass:"goto-allorder",attrs:{href:"//ordercenter.mall.meizu.com/mall/order/init.html"}},[t._v("查看全部订单\n            "),n("svg-icon",{attrs:{iconName:"next"}})],1)]),t._v(" "),n("div",{staticClass:"order-status"},t._l(t.statusList,function(e){return n("a",{attrs:{href:e.a_href}},[n("svg-icon",{attrs:{iconName:e.enName}}),n("br"),t._v("\n            "+t._s(e.chName)+"\n        ")],1)}),0)])},staticRenderFns:[]};var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-item"},t._l(t.itemList,function(e){return n("a",{attrs:{href:e.a_href}},[n("img",{attrs:{src:e.img_src}}),n("br"),t._v("\n        "+t._s(e.text)+"\n    ")])}),0)},staticRenderFns:[]};var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-other"},t._l(t.otherList,function(e){return n("a",{attrs:{href:e.a_href}},[t._v("\n        "+t._s(e.text)+"\n        "),n("svg-icon",{attrs:{iconName:"next"}})],1)}),0)},staticRenderFns:[]};var o={components:{MyInfo:n("C7Lr")({beforeMount:function(){var t=this;this.$axios({url:"me/my-info.json"}).then(function(e){t.img_src=e.img_src,t.myName=e.myName})},data:function(){return{img_src:"",myName:""}},methods:{back:function(){this.$router.go(-1)}}},s,!1,function(t){n("sl3H")},"data-v-98550da6",null).exports,MyOrder:n("C7Lr")({beforeMount:function(){var t=this;this.$axios({url:"me/my-order.json"}).then(function(e){t.statusList=e.statusList})},data:function(){return{statusList:[]}}},i,!1,function(t){n("qPQV")},"data-v-1195b2bc",null).exports,MyItem:n("C7Lr")({beforeMount:function(){var t=this;this.$axios({url:"me/my-item.json"}).then(function(e){t.itemList=e.itemList})},data:function(){return{itemList:[]}}},r,!1,function(t){n("+oM9")},"data-v-6a748afa",null).exports,MyOther:n("C7Lr")({beforeMount:function(){var t=this;this.$axios({url:"me/my-other.json"}).then(function(e){t.otherList=e.otherList})},data:function(){return{otherList:[]}}},a,!1,function(t){n("8Oae")},"data-v-90f6d8e4",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"me-index"},[e("my-info"),this._v(" "),e("my-order"),this._v(" "),e("my-item"),this._v(" "),e("my-other")],1)},staticRenderFns:[]};var u=n("C7Lr")(o,c,!1,function(t){n("BWUd")},"data-v-02471be6",null);e.default=u.exports},Drwf:function(t,e){},Fk6I:function(t,e){},I7ir:function(t,e,n){"use strict";var s=n("7G9M"),i=n("3Az9"),r=n("jkm7"),a={components:{ProductTitle:s.a,ProductList:r.a,AdList:i.a},beforeMount:function(){var t=this;this.$axios({url:"category/audio.json"}).then(function(e){t.title=e.title,t.ad=e.ad,t.list=e.list})},data:function(){return{title:"",ad:[],list:[]}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-audio"},[e("product-title",{attrs:{title:this.title}}),this._v(" "),e("ad-list",{attrs:{adList:this.ad}}),this._v(" "),e("product-list",{attrs:{productList:this.list}})],1)},staticRenderFns:[]};var c=n("C7Lr")(a,o,!1,function(t){n("Wh5D")},"data-v-7015ae5e",null);e.a=c.exports},"Joj/":function(t,e){},Juy2:function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("发现")])},staticRenderFns:[]};e.a=s},K6UN:function(t,e){},N09n:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("xd7I"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main-router-view"},[n("router-view")],1),t._v(" "),n("nav",{staticClass:"main-router"},t._l(t.routerList,function(e,s){return n("router-link",{key:s,attrs:{to:t.formatRouterLink(e.eng_name)}},[n("svg-icon",{attrs:{iconName:e.eng_name}}),n("br"),t._v(" "),n("span",[t._v(t._s(e.text))])],1)}),1)])},staticRenderFns:[]};var r=n("C7Lr")({name:"App",data:function(){return{routerList:[{eng_name:"home",text:"首页"},{eng_name:"category",text:"分类"},{eng_name:"cart",text:"购物车"},{eng_name:"me",text:"我的"}]}},methods:{formatRouterLink:function(t){return{name:t}}}},i,!1,function(t){n("lz5N")},null,null).exports,a=n("3cXf"),o=n.n(a),c=n("Muz9"),u=n.n(c).a.create({method:"post",baseURL:"static/json/",headers:{"Content-type":"application/json;charset=UTF-8"},transformRequest:[function(t){return o()(t)}]});u.interceptors.response.use(function(t){return 200===t.status?t.data:t},function(t){var e=t.config;return e.url=e.url.replace(e.baseURL,"")+".json",e.method="get",u(e)}),Object.defineProperty(s.a.prototype,"$axios",{value:u});var l=n("2bvH");s.a.use(l.a);var d=new l.a.Store({state:{baseUrl:"https://easy-mock.com/mock/5d1b63a94e718016e83ba630/meizu-shop/"}}),f=n("e1F6");n("j7e0"),n("fXvj"),n("qWy3"),n("5Z7Z"),n("DrO4");s.a.use(f.a);var v=new f.a({base:"/meizu-shop/",routes:[{path:"/home",component:function(){return new Promise(function(t){t()}).then(n.bind(null,"j7e0"))},name:"home"},{path:"/category",component:function(){return new Promise(function(t){t()}).then(n.bind(null,"fXvj"))},name:"category"},{path:"/find",component:function(){return new Promise(function(t){t()}).then(n.bind(null,"qWy3"))},name:"find"},{path:"/cart",component:function(){return new Promise(function(t){t()}).then(n.bind(null,"5Z7Z"))},name:"cart"},{path:"/me",component:function(){return new Promise(function(t){t()}).then(n.bind(null,"DrO4"))},name:"me"},{path:"/",redirect:"/home"}]}),h={props:{iconName:{type:String,require:!0}},computed:{formatSvgHref:function(){return"#icon-"+this.iconName}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":this.formatSvgHref}})])},staticRenderFns:[]};var _=n("C7Lr")(h,m,!1,function(t){n("Nmuv")},null,null).exports;s.a.config.productionTip=!1,s.a.component("svg-icon",_),new s.a({el:"#app",router:v,store:d,components:{App:r},template:"<App/>"})},Nmuv:function(t,e){},OH8l:function(t,e){},QPP4:function(t,e){},R8dd:function(t,e){},"T+Hn":function(t,e){},Wh5D:function(t,e){},Zu78:function(t,e){},eGei:function(t,e){},fXvj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("CpQ3"),i=n("I7ir"),r=n("pL53"),a=n("fyYi"),o={components:{Phone:s.a,AudioP:i.a,SectionP:r.a,Surround:a.a},data:function(){return{tabId:"phone",navList:[{enName:"phone",chName:"手机"},{enName:"audio",chName:"声学"},{enName:"section",chName:"配件"},{enName:"surround",chName:"周边"}]}},methods:{changeTab:function(t){this.tabId=t}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("nav",{staticClass:"category-nav"},t._l(t.navList,function(e,s){return n("div",{key:s,class:{active:e.enName==t.tabId},on:{click:function(n){return t.changeTab(e.enName)}}},[n("span"),t._v(t._s(e.chName)+"\n        ")])}),0),t._v(" "),n("div",{staticClass:"category-content"},["phone"==t.tabId?n("phone"):"audio"==t.tabId?n("audio-p"):"section"==t.tabId?n("section-p"):"surround"==t.tabId?n("surround"):t._e()],1)])},staticRenderFns:[]};var u=n("C7Lr")(o,c,!1,function(t){n("K6UN")},"data-v-1ae6d8b3",null);e.default=u.exports},fyYi:function(t,e,n){"use strict";var s=n("7G9M"),i=n("jkm7"),r=n("3Az9"),a={components:{ProductTitle:s.a,ProductList:i.a,AdList:r.a},beforeMount:function(){var t=this;this.$axios({url:"category/surround.json"}).then(function(e){t.title=e.title,t.ad=e.ad,t.list=e.list})},data:function(){return{title:"",ad:[],list:[]}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-surround"},[e("product-title",{attrs:{title:this.title}}),this._v(" "),e("ad-list",{attrs:{adList:this.ad}}),this._v(" "),e("product-list",{attrs:{productList:this.list}})],1)},staticRenderFns:[]};var c=n("C7Lr")(a,o,!1,function(t){n("sh1R")},"data-v-47a65e32",null);e.a=c.exports},j7e0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("DMPO"),i=(n("Drwf"),{components:{swiper:s.swiper,swiperSlide:s.swiperSlide},beforeMount:function(){var t=this;this.$axios({url:"home/swiper.json"}).then(function(e){t.bannerList=e.bannerList})},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",clickable:!0},autoplay:!0,loop:!0},bannerList:[]}}}),r={render:function(){var t=this.$createElement,e=this._self._c||t;return this.bannerList.length>0?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.bannerList,function(t,n){return e("swiper-slide",{key:n},[e("a",{attrs:{href:t.a_href}},[e("img",{staticClass:"banner-wrapper-img",attrs:{src:t.img_src}})])])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()},staticRenderFns:[]};var a=n("C7Lr")(i,r,!1,function(t){n("0odi")},null,null).exports,o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-hot-site"},[n("div",{staticClass:"hot-tip-bar"},t._l(t.tipBarList,function(e){return n("span",[n("img",{attrs:{src:e.img_src}}),t._v(t._s(e.text)+"\n        ")])}),0),t._v(" "),n("div",{staticClass:"hot-site"},[n("ul",t._l(t.hotSideList,function(e){return n("li",[n("a",{attrs:{href:e.a_href}},[n("img",{attrs:{src:e.img_src,alt:""}}),t._v(" "),n("span",[t._v(t._s(e.text))])])])}),0)])])},staticRenderFns:[]};var c=n("C7Lr")({beforeMount:function(){var t=this;this.$axios({url:"home/hotSite.json"}).then(function(e){t.tipBarList=e.tipBarList,t.hotSideList=e.hotSideList})},data:function(){return{tipBarList:[],hotSideList:[]}}},o,!1,function(t){n("R8dd")},"data-v-11415407",null).exports,u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-banner",attrs:{id:"index-banner"}},t._l(t.rowList,function(e){return n("div",{staticClass:"row"},t._l(e.bannerList,function(t){return n("div",{staticClass:"banner-lg"},[n("a",{attrs:{href:t.a_href}},[n("img",{attrs:{src:t.img_src}})])])}),0)}),0)},staticRenderFns:[]};var l=n("C7Lr")({beforeMount:function(){var t=this;this.$axios({url:"home/banner.json"}).then(function(e){t.rowList=e.rowList})},data:function(){return{rowList:[]}}},u,!1,function(t){n("QPP4")},"data-v-1555e77f",null).exports,d=n("CpQ3"),f=n("I7ir"),v=n("pL53"),h=n("fyYi"),m={components:{Phone:d.a,AudioP:f.a,SectionP:v.a,Surround:h.a}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("phone"),this._v(" "),e("audio-p"),this._v(" "),e("section-p"),this._v(" "),e("surround")],1)},staticRenderFns:[]};var p={beforeMount:function(){var t=this;this.$axios({url:"home/h-footer.json"}).then(function(e){t.footerData=e.footerData})},data:function(){return{footerData:{}}},methods:{toTheTop:function(){var t=document.getElementsByClassName("main-router-view")[0],e=setInterval(function(){t.scrollTop<=0&&clearInterval(e),t.scrollBy(0,-100)},5)}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"main-footer"},[n("div",{staticClass:"back-to-top",on:{click:t.toTheTop}},[n("span",[t._v(t._s(t.footerData.text))])]),t._v(" "),n("div",{staticClass:"footer-contact"},t._l(t.footerData.contactList,function(e){return n("a",{attrs:{href:e.a_href}},[t._v(t._s(e.text))])}),0),t._v(" "),n("div",{staticClass:"footer-record"},t._l(t.footerData.recordList,function(e){return n("a",{attrs:{href:e.a_href,target:"_blank"}},[t._v(t._s(e.text)),n("br")])}),0)])},staticRenderFns:[]};var L={components:{Swiper:a,HotSite:c,Banner:l,Product:n("C7Lr")(m,_,!1,function(t){n("Joj/")},null,null).exports,HFooter:n("C7Lr")(p,C,!1,function(t){n("N09n")},"data-v-66ff98a0",null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("swiper"),this._v(" "),e("hot-site"),this._v(" "),e("banner"),this._v(" "),e("product"),this._v(" "),e("h-footer")],1)},staticRenderFns:[]};var b=n("C7Lr")(L,g,!1,function(t){n("jC17")},"data-v-2e8254c6",null);e.default=b.exports},jC17:function(t,e){},jkm7:function(t,e,n){"use strict";var s={props:{productList:{type:Array,default:[]}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-list"},t._l(t.productList,function(e){return n("div",{staticClass:"product-content"},[n("a",{attrs:{href:e.a_href}},[n("img",{attrs:{src:e.img_src,"lazy-src":e.img_src,alt:e.name}}),t._v(" "),n("div",{staticClass:"info"},[n("p",{staticClass:"products-name"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"slogan"},[n("span",{staticClass:"slogan-feature"},[n("span",{staticClass:"slogan-special"},[t._v(t._s(e.slogan))]),t._v(t._s(e.feature))])]),t._v(" "),n("p",{staticClass:"price"},[n("i",[t._v(t._s(e.unit))]),t._v(t._s(e.price))])])])])}),0)},staticRenderFns:[]};var r=n("C7Lr")(s,i,!1,function(t){n("eGei")},"data-v-53951c4e",null);e.a=r.exports},lz5N:function(t,e){},pL53:function(t,e,n){"use strict";var s=n("7G9M"),i=n("3Az9"),r=n("jkm7"),a={components:{ProductTitle:s.a,ProductList:r.a,AdList:i.a},beforeMount:function(){var t=this;this.$axios({url:"category/section.json"}).then(function(e){t.title=e.title,t.ad=e.ad,t.list=e.list})},data:function(){return{title:"",ad:[],list:[]}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-section"},[e("product-title",{attrs:{title:this.title}}),this._v(" "),e("ad-list",{attrs:{adList:this.ad}}),this._v(" "),e("product-list",{attrs:{productList:this.list}})],1)},staticRenderFns:[]};var c=n("C7Lr")(a,o,!1,function(t){n("9SYB")},"data-v-43e3c2f8",null);e.a=c.exports},qPQV:function(t,e){},qWy3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("w83t"),i=n.n(s);for(var r in s)"default"!==r&&function(t){n.d(e,t,function(){return s[t]})}(r);var a=n("Juy2");var o=function(t){n("OH8l")},c=n("C7Lr")(i.a,a.a,!1,o,null,null);e.default=c.exports},sh1R:function(t,e){},sl3H:function(t,e){},w83t:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a11976f36ed8e24e6cd1.js.map