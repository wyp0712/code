webpackJsonp([1],[,,function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var i=n(56),s=(n.n(i),n(55)),a=n.n(s),r=function(t,e){t&&("string"!=typeof e&&(e=a()(e)),window.localStorage.setItem(t,e))},o=function(t){if(t)return window.localStorage.getItem(t)}},,,,,,,,,,,,,,,,,,function(t,e,n){function i(t){n(93)}var s=n(1)(n(48),n(112),i,"data-v-5649a1a8",null);t.exports=s.exports},,function(t,e,n){"use strict";var i=n(10),s=n(115),a=n(100),r=n.n(a),o=n(104),c=n.n(o),l=n(103),u=n.n(l),p=n(20),d=n.n(p),f=n(102),v=n.n(f),_=n(101),h=n.n(_),m=n(2);i.a.use(s.a);var w=new s.a({routes:[{path:"/",name:"index",component:r.a,children:[{path:"/",name:"waimai",component:v.a},{path:"/waimai",name:"waimai",component:v.a},{path:"/dingdan",name:"dingdan",component:d.a},{path:"/faxian",name:"faxian",component:d.a},{path:"/wode",name:"wode",component:h.a}]},{path:"/search",name:"search",component:c.a},{path:"/choose_addr",name:"choose_addr",component:u.a}]});w.beforeEach(function(t,e,i){n.i(m.a)("from",e.path),i()}),e.a=w},function(t,e){!function(t,e){var n=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",s=function(){var t=n.clientWidth;t&&(n.style.fontSize=t/320*20+"px")};t.addEventListener&&(e.addEventListener(i,s,!1),t.addEventListener("DOMContentLoaded",s,!1))}(document,window)},,function(t,e,n){function i(t){n(90)}var s=n(1)(n(46),n(109),i,null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=n(19),n(84)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(86),s=(n.n(i),n(85));n.n(s);e.default={name:"app",mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"bottom",data:function(){return{info:[{font:"waimai",title:"外卖"},{font:"faxian",title:"发现"},{font:"dingdan",title:"订单"},{font:"wode",title:"我的"}]}},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Scroll",data:function(){return{shop:[]}},mounted:function(){var t=this;this.$http.get("./static/service/scroll/scroll.json").then(function(e){var n=e.data;t.shop=n.shop})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(99),s=n.n(i);e.default={name:"hello",components:{Bottom:s.a},data:function(){return{}},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default={name:"hello",components:{},data:function(){return{back1:""}},methods:{back:function(){this.$router.push({path:n.i(i.b)("from"),query:{back1:!0}})}},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),s=(n.n(i),n(20)),a=n.n(s);e.default={name:"waimai",components:{swiper:i.swiper,swiperSlide:i.swiperSlide,Scroll:a.a},data:function(){return{msg:"Welcome to Your Vue.js App",swiper_info:[],pos:"太原工业学院东区",swiperOption:{notNextTick:!0,autoplay:3e3,direction:"horizontal",pagination:".swiper-pagination",paginationClickable:!0,mousewheelControl:!0,observeParents:!0,loop:!0,debugger:!0,onTransitionStart:function(t){}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper},real_pos:function(){return this.pos.slice(0,6)+"..."}},mounted:function(){var t=this;this.$http.get("./static/service/swiper/swiper.json").then(function(e){var n=e.data;t.swiper_info=n.swiper})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default={name:"search",data:function(){return{back1:""}},methods:{back:function(){this.$router.push({path:n.i(i.b)("from"),query:{back1:!0}})}},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default={name:"search",data:function(){return{back1:""}},methods:{back:function(){this.$router.push({path:n.i(i.b)("from"),query:{back1:!0}})}},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),s=n(25),a=n.n(s),r=n(22),o=n(21),c=n.n(o),l=(n(26),n(9)),u=n.n(l),p=n(24),d=n.n(p),f=n(23);n.n(f);i.a.use(u.a),i.a.prototype.$http=c.a,i.a.use(d.a,{preLoad:1.3,error:"../static/img/error.png",attempt:1}),i.a.config.productionTip=!1,i.a.prototype.back=function(){console.log(this)},new i.a({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){var i=n(1)(n(44),n(114),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(1)(n(45),n(107),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(94)}var s=n(1)(n(47),n(113),i,"data-v-6c9e038a",null);t.exports=s.exports},function(t,e,n){function i(t){n(91)}var s=n(1)(n(49),n(110),i,"data-v-41faaafc",null);t.exports=s.exports},function(t,e,n){function i(t){n(89)}var s=n(1)(n(50),n(108),i,"data-v-372b684f",null);t.exports=s.exports},function(t,e,n){function i(t){n(87)}var s=n(1)(n(51),n(105),i,"data-v-01ffdb8e",null);t.exports=s.exports},function(t,e,n){function i(t){n(88)}var s=n(1)(n(52),n(106),i,"data-v-1986d978",null);t.exports=s.exports},function(t,e,n){function i(t){n(92)}var s=n(1)(n(53),n(111),i,"data-v-4358ad99",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("header",[n("div",{staticClass:"container header_top"},[n("router-link",{staticClass:"left",attrs:{to:{path:"choose_addr",query:{back1:!1}},tag:"div"}},[n("img",{staticClass:"i_b",attrs:{src:"./static/img/pos.svg",alt:"",id:"pos_img"}}),t._v(" "),n("div",{staticClass:"i_b",attrs:{id:"real_pos"}},[t._v(t._s(t.real_pos))])]),t._v(" "),t._m(0)],1),t._v(" "),n("router-link",{staticClass:"header_md",attrs:{to:{path:"search",query:{back1:!1}},tag:"div"}},[t._v("\n      搜索商家、商品\n    ")])],1),t._v(" "),n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[n("swiper-slide",[n("div",{staticClass:"container"},t._l(t.swiper_info.slice(0,8),function(e,i){return n("router-link",{staticClass:"swiper_item",attrs:{to:{path:"swiper",query:{type:e.title}},tag:"div"}},[n("img",{attrs:{src:e.src,alt:""}}),t._v(" "),n("p",[t._v(t._s(e.title))])])}))]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"container"},t._l(t.swiper_info.slice(8,12),function(e,i){return n("router-link",{staticClass:"swiper_item",attrs:{to:{path:"swiper",query:{type:e.title}},tag:"div"}},[n("img",{attrs:{src:e.src,alt:""}}),t._v(" "),n("p",[t._v(t._s(e.title))])])}))]),t._v(" "),n("div",{staticClass:"swiper-pagination",slot:"pagination"})],1),t._v(" "),n("div",{staticClass:"space"}),t._v(" "),n("Scroll")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right container weather_info"},[n("div",{staticClass:"T_left right"},[n("p",{staticClass:"T"},[n("span",{attrs:{id:"T"}},[t._v("29")]),t._v(" "),n("sup",[t._v("。")])]),t._v(" "),n("p",{staticClass:"weather"},[t._v("\n            晴天\n          ")])]),t._v(" "),n("div",{staticClass:"T_right"},[n("i",{staticClass:"iconfont icon-taiyang"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("div",{staticClass:"top"},[n("img",{attrs:{src:"./static/img/back.svg",alt:""},on:{click:t.back}}),t._v(" "),n("span",{staticClass:"addr"},[t._v("选择地址")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input"},[n("input",{staticClass:"cir i_b",attrs:{type:"search",placeholder:"请输入地址"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my"},[n("header",{staticClass:"blue"},[n("div",{staticClass:"top_info"},[n("img",{attrs:{src:"./static/img/back.svg",alt:""},on:{click:t.back}}),t._v(" "),n("span",{staticClass:"addr"},[t._v("我的")])]),t._v(" "),n("div",{staticClass:"login container"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"./static/img/login.png",alt:""}})]),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("h2",[t._v("登录/注册")]),t._v(" "),n("p",{staticClass:"tip"},[t._v("\n          登陆后享受更多特权\n        ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:1==this.$route.query.back1?"slide_right":"slide_left",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("transition",{staticClass:"top_view",attrs:{name:1==this.$route.query.back1?"slide_right":"slide_left",mode:"out-in"}},[n("router-view")],1),t._v(" "),n("Bottom")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("div",{staticClass:"top"},[n("svg",{staticClass:"icon",attrs:{t:"1498233133667",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2381","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"20",height:"20"},on:{click:t.back}},[n("path",{attrs:{d:"M239.780953 512.051164c0-9.004897 3.376836-18.009793 10.232837-24.865794l474.291996-474.291996c13.712002-13.712002 35.917258-13.712002 49.62926 0s13.712002 35.917258 0 49.62926l-449.426202 449.52853 449.426202 449.426202c13.712002 13.712002 13.712002 35.917258 0 49.62926s-35.917258 13.712002-49.62926 0l-474.291996-474.291996C243.15779 529.958629 239.780953 520.953732 239.780953 512.051164z","p-id":"2382",fill:"#606060"}})]),t._v(" "),n("input",{staticClass:"cir i_b",attrs:{type:"search",placeholder:"请输入商品名称"}})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom"},[n("h1",[t._v("热门搜索")]),t._v(" "),n("p",{staticClass:"gray"},[t._v("\n      正在加载中...\n    ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroll"},[n("h2",[t._v("推荐商家")]),t._v(" "),t._l(t.shop,function(e){return n("section",{staticClass:"container shop_info"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:e.src,alt:""}})]),t._v(" "),n("div",{staticClass:"index_main"},[n("div",{staticClass:"shop_name"},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),n("div",{staticClass:"info"},[n("span",[t._v(t._s(e.score+"星评分"))]),t._v(" "),n("span",[t._v(t._s(e.sale_num))])]),t._v(" "),n("div",{staticClass:"dispatch container"},[n("div",{staticClass:"dispatch1 left"},[t._v("\n          "+t._s(e.dispatch)+"\n        ")]),t._v(" "),n("div",{staticClass:"time right"},[n("span",{staticClass:"distance"},[t._v(t._s(e.distance))]),t._v(" "),e.time?n("span",[t._v("/")]):t._e(),t._v(" "),e.time?n("span",{staticClass:"times"},[t._v(t._s(e.time))]):t._e()])])])])})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom"},[n("footer",{staticClass:"container"},t._l(t.info,function(e){return n("router-link",{staticClass:"bot_item",class:(i={},i.active=t.$route.name==e.font,i),attrs:{to:{path:e.font},tag:"div"}},[n("i",{staticClass:"iconfont",class:"icon-"+e.font}),t._v(" "),n("p",[t._v(t._s(e.title))])]);var i}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}}],[54]);
//# sourceMappingURL=app.7288af82430b9dadc5a0.js.map