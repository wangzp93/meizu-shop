webpackJsonp([1],{"3Az9":function(t,s,a){"use strict";var i={props:{adList:{type:Array,default:[]}}},e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-ad"},t._l(t.adList,function(s){return a("div",{staticClass:"accessoary-ad"},[a("a",{attrs:{href:s.a_href}},[a("div",{staticClass:"accessoary-ad-detail"},[a("h4",{staticClass:"ad-name"},[t._v(t._s(s.name))]),t._v(" "),a("p",{staticClass:"ad-feature"},[t._v(t._s(s.feature))]),t._v(" "),a("p",{staticClass:"ad-price"},[a("i",[t._v(t._s(s.unit))]),t._v(t._s(s.price)+"\n                ")])]),t._v(" "),a("img",{staticClass:"lazy-img loaded-img",attrs:{"data-src":s.img_src,alt:"",actived:"actived",src:s.img_src}})])])}),0)},staticRenderFns:[]};var n=a("C7Lr")(i,e,!1,function(t){a("T+Hn")},"data-v-6aa00eef",null);s.a=n.exports},"7G9M":function(t,s,a){"use strict";var i={props:{title:{type:String,require:!0}}},e={render:function(){var t=this.$createElement;return(this._self._c||t)("h3",{staticClass:"list-title"},[this._v(this._s(this.title))])},staticRenderFns:[]};var n=a("C7Lr")(i,e,!1,function(t){a("Zu78")},"data-v-8a74801e",null);s.a=n.exports},"9SYB":function(t,s){},CpQ3:function(t,s,a){"use strict";var i=a("7G9M"),e=a("jkm7"),n={components:{ProductTitle:i.a,ProductList:e.a},beforeMount:function(){var t=this;this.$axios({url:"category/phone.json"}).then(function(s){t.title=s.title,t.ad=s.ad,t.list=s.list})},data:function(){return{title:"",ad:{},list:[]}}},r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"index-phone"},[s("product-title",{attrs:{title:this.title}}),this._v(" "),s("div",{staticClass:"list-ad"},[s("a",{attrs:{href:this.ad.a_href}},[s("img",{attrs:{src:this.ad.img_src,"lazy-src":this.ad.img_src,alt:""}})])]),this._v(" "),s("product-list",{attrs:{productList:this.list}})],1)},staticRenderFns:[]};var c=a("C7Lr")(n,r,!1,function(t){a("Fk6I")},"data-v-7568ae13",null);s.a=c.exports},Fk6I:function(t,s){},I7ir:function(t,s,a){"use strict";var i=a("7G9M"),e=a("3Az9"),n=a("jkm7"),r={components:{ProductTitle:i.a,ProductList:n.a,AdList:e.a},beforeMount:function(){var t=this;this.$axios({url:"category/audio.json"}).then(function(s){t.title=s.title,t.ad=s.ad,t.list=s.list})},data:function(){return{title:"",ad:[],list:[]}}},c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"index-audio"},[s("product-title",{attrs:{title:this.title}}),this._v(" "),s("ad-list",{attrs:{adList:this.ad}}),this._v(" "),s("product-list",{attrs:{productList:this.list}})],1)},staticRenderFns:[]};var o=a("C7Lr")(r,c,!1,function(t){a("Wh5D")},"data-v-7015ae5e",null);s.a=o.exports},"T+Hn":function(t,s){},Wh5D:function(t,s){},Zu78:function(t,s){},eGei:function(t,s){},fXvj:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("CpQ3"),e=a("I7ir"),n=a("pL53"),r=a("fyYi"),c={components:{Phone:i.a,AudioP:e.a,SectionP:n.a,Surround:r.a},data:function(){return{tabId:"phone",navList:[{enName:"phone",chName:"手机"},{enName:"audio",chName:"声学"},{enName:"section",chName:"配件"},{enName:"surround",chName:"周边"}]}},methods:{changeTab:function(t){this.tabId=t}}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"category"},[a("nav",{staticClass:"category-nav"},t._l(t.navList,function(s,i){return a("div",{key:i,class:{active:s.enName==t.tabId},on:{click:function(a){return t.changeTab(s.enName)}}},[a("span"),t._v(t._s(s.chName)+"\n        ")])}),0),t._v(" "),a("div",{staticClass:"category-content"},[a("keep-alive",["phone"==t.tabId?a("phone"):"audio"==t.tabId?a("audio-p"):"section"==t.tabId?a("section-p"):"surround"==t.tabId?a("surround"):t._e()],1)],1)])},staticRenderFns:[]};var u=a("C7Lr")(c,o,!1,function(t){a("ualX")},"data-v-3b4780ec",null);s.default=u.exports},fyYi:function(t,s,a){"use strict";var i=a("7G9M"),e=a("jkm7"),n=a("3Az9"),r={components:{ProductTitle:i.a,ProductList:e.a,AdList:n.a},beforeMount:function(){var t=this;this.$axios({url:"category/surround.json"}).then(function(s){t.title=s.title,t.ad=s.ad,t.list=s.list})},data:function(){return{title:"",ad:[],list:[]}}},c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"index-surround"},[s("product-title",{attrs:{title:this.title}}),this._v(" "),s("ad-list",{attrs:{adList:this.ad}}),this._v(" "),s("product-list",{attrs:{productList:this.list}})],1)},staticRenderFns:[]};var o=a("C7Lr")(r,c,!1,function(t){a("sh1R")},"data-v-47a65e32",null);s.a=o.exports},jkm7:function(t,s,a){"use strict";var i={props:{productList:{type:Array,default:[]}}},e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"product-list"},t._l(t.productList,function(s){return a("div",{staticClass:"product-content"},[a("a",{attrs:{href:s.a_href}},[a("img",{attrs:{src:s.img_src,"lazy-src":s.img_src,alt:s.name}}),t._v(" "),a("div",{staticClass:"info"},[a("p",{staticClass:"products-name"},[t._v(t._s(s.name))]),t._v(" "),a("p",{staticClass:"slogan"},[a("span",{staticClass:"slogan-feature"},[a("span",{staticClass:"slogan-special"},[t._v(t._s(s.slogan))]),t._v(t._s(s.feature))])]),t._v(" "),a("p",{staticClass:"price"},[a("i",[t._v(t._s(s.unit))]),t._v(t._s(s.price))])])])])}),0)},staticRenderFns:[]};var n=a("C7Lr")(i,e,!1,function(t){a("eGei")},"data-v-53951c4e",null);s.a=n.exports},pL53:function(t,s,a){"use strict";var i=a("7G9M"),e=a("3Az9"),n=a("jkm7"),r={components:{ProductTitle:i.a,ProductList:n.a,AdList:e.a},beforeMount:function(){var t=this;this.$axios({url:"category/section.json"}).then(function(s){t.title=s.title,t.ad=s.ad,t.list=s.list})},data:function(){return{title:"",ad:[],list:[]}}},c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"index-section"},[s("product-title",{attrs:{title:this.title}}),this._v(" "),s("ad-list",{attrs:{adList:this.ad}}),this._v(" "),s("product-list",{attrs:{productList:this.list}})],1)},staticRenderFns:[]};var o=a("C7Lr")(r,c,!1,function(t){a("9SYB")},"data-v-43e3c2f8",null);s.a=o.exports},sh1R:function(t,s){},ualX:function(t,s){}});
//# sourceMappingURL=1.ad07afb347ffa68699ab.js.map