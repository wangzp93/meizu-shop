webpackJsonp([6],{I7ir:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7G9M"),a=e("3Az9"),n=e("jkm7"),r={components:{ProductTitle:s.a,ProductList:n.a,AdList:a.a},beforeMount:function(){var t=this;this.$axios({url:"category/audio.json"}).then(function(i){t.title=i.title,t.ad=i.ad,t.list=i.list})},data:function(){return{title:"",ad:[],list:[]}}},o={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"index-audio"},[i("product-title",{attrs:{title:this.title}}),this._v(" "),i("ad-list",{attrs:{adList:this.ad}}),this._v(" "),i("product-list",{attrs:{productList:this.list}})],1)},staticRenderFns:[]};var d=e("C7Lr")(r,o,!1,function(t){e("Wh5D")},"data-v-7015ae5e",null);i.default=d.exports},Wh5D:function(t,i){}});
//# sourceMappingURL=6.eef7a2b0f09a7c35818a.js.map