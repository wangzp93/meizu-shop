webpackJsonp([2],{AgzM:function(t,n){},BP13:function(t,n){},DrO4:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my-info"},[e("i",{staticClass:"icon-back",on:{click:t.back}},[e("svg-icon",{attrs:{iconName:"back"}})],1),t._v(" "),e("i",{staticClass:"icon-msg"},[e("svg-icon",{attrs:{iconName:"msg"}})],1),t._v(" "),e("div",{staticClass:"my-icon"},[e("img",{attrs:{src:t.img_src}})]),t._v(" "),e("p",{staticClass:"my-name"},[t._v(t._s(t.myName))])])},staticRenderFns:[]};var i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"myorders"},[e("div",{staticClass:"top"},[e("span",[t._v("我的订单")]),t._v(" "),e("a",{staticClass:"goto-allorder",attrs:{href:"//ordercenter.mall.meizu.com/mall/order/init.html"}},[t._v("查看全部订单\n            "),e("svg-icon",{attrs:{iconName:"next"}})],1)]),t._v(" "),e("div",{staticClass:"order-status"},t._l(t.statusList,function(n){return e("a",{attrs:{href:n.a_href}},[e("svg-icon",{attrs:{iconName:n.enName}}),e("br"),t._v("\n            "+t._s(n.chName)+"\n        ")],1)}),0)])},staticRenderFns:[]};var r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my-item"},t._l(t.itemList,function(n){return e("a",{attrs:{href:n.a_href}},[e("img",{attrs:{src:n.img_src}}),e("br"),t._v("\n        "+t._s(n.text)+"\n    ")])}),0)},staticRenderFns:[]};var a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my-other"},t._l(t.otherList,function(n){return e("a",{attrs:{href:n.a_href}},[t._v("\n        "+t._s(n.text)+"\n        "),e("svg-icon",{attrs:{iconName:"next"}})],1)}),0)},staticRenderFns:[]};var o={components:{MyInfo:e("VU/8")({beforeMount:function(){var t=this;this.$axios({url:"me/my-info.json"}).then(function(n){t.img_src=n.img_src,t.myName=n.myName})},data:function(){return{img_src:"",myName:""}},methods:{back:function(){this.$router.go(-1)}}},s,!1,function(t){e("FMDx")},"data-v-98550da6",null).exports,MyOrder:e("VU/8")({beforeMount:function(){var t=this;this.$axios({url:"me/my-order.json"}).then(function(n){t.statusList=n.statusList})},data:function(){return{statusList:[]}}},i,!1,function(t){e("ZfCk")},"data-v-1195b2bc",null).exports,MyItem:e("VU/8")({beforeMount:function(){var t=this;this.$axios({url:"me/my-item.json"}).then(function(n){t.itemList=n.itemList})},data:function(){return{itemList:[]}}},r,!1,function(t){e("QtQC")},"data-v-6a748afa",null).exports,MyOther:e("VU/8")({beforeMount:function(){var t=this;this.$axios({url:"me/my-other.json"}).then(function(n){t.otherList=n.otherList})},data:function(){return{otherList:[]}}},a,!1,function(t){e("BP13")},"data-v-90f6d8e4",null).exports}},c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"me-index"},[n("my-info"),this._v(" "),n("my-order"),this._v(" "),n("my-item"),this._v(" "),n("my-other")],1)},staticRenderFns:[]};var u=e("VU/8")(o,c,!1,function(t){e("AgzM")},"data-v-02471be6",null);n.default=u.exports},FMDx:function(t,n){},QtQC:function(t,n){},ZfCk:function(t,n){}});
//# sourceMappingURL=2.887d40f3f4320ee032fe.js.map