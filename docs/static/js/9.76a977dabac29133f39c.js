webpackJsonp([9],{"9SYB":function(t,i){},pL53:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7G9M"),n=e("3Az9"),a=e("jkm7"),r={components:{ProductTitle:s.a,ProductList:a.a,AdList:n.a},beforeMount:function(){var t=this;this.$axios({url:"category/section.json"}).then(function(i){t.title=i.title,t.ad=i.ad,t.list=i.list})},data:function(){return{title:"",ad:[],list:[]}}},o={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"index-section"},[i("product-title",{attrs:{title:this.title}}),this._v(" "),i("ad-list",{attrs:{adList:this.ad}}),this._v(" "),i("product-list",{attrs:{productList:this.list}})],1)},staticRenderFns:[]};var c=e("C7Lr")(r,o,!1,function(t){e("9SYB")},"data-v-43e3c2f8",null);i.default=c.exports}});
//# sourceMappingURL=9.76a977dabac29133f39c.js.map