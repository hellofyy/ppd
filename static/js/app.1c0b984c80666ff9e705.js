webpackJsonp([1],{"1uuo":function(t,e){},"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.519f0c7.png"},"91Jj":function(t,e){},EOAM:function(t,e){},Fz3D:function(t,e){},"Jaq/":function(t,e,n){"use strict";var r=n("eSuQ"),a=n.n(r),s=n("LiYm");var o=function(t){n("EOAM")},i=n("VU/8")(a.a,s.a,!1,o,null,null);e.default=i.exports},LiYm:function(t,e,n){"use strict";var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body"},[e("img",{attrs:{src:n("hhg0"),alt:""}}),this._v(" "),e("audio",{attrs:{autoplay:"autoplay",loop:"loop",src:"/static/yang.mp3"}})])}]};e.a=r},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-head"},[r("div",{staticClass:"app-head-inner"},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:n("7Otq")}})]),t._v(" "),r("span",[t._v("pinpinduo.com")]),t._v(" "),r("div",{staticClass:"head-nav"},[r("ul",[r("router-link",{staticClass:"sign",attrs:{to:"/login"}},[r("li",[t._v("登录")])]),t._v(" "),r("li",{staticClass:"nav-pile"},[t._v("|")]),t._v(" "),r("li",[t._v("注册")]),t._v(" "),r("li",{staticClass:"nav-pile"},[t._v("|")]),t._v(" "),r("li",[t._v("关于")])],1)])],1)])},staticRenderFns:[]};var s={name:"App",components:{Header:n("VU/8")({name:"headers",data:function(){return{}}},a,!1,function(t){n("ykeZ")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:this.$route.meta.title,expression:"$route.meta.title"}],attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")(s,o,!1,function(t){n("nUO4")},null,null).exports,u=n("/ocq"),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},l,!1,function(t){n("1uuo")},"data-v-d8ec41bc",null).exports;var c=n("YqKu"),m=n.n(c),f=n("Xxa5"),p=n.n(f),d=n("exGp"),v=n.n(d),h={data:function(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,max:25,message:"长度在 5 到 25 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(t){var e=this;return v()(p.a.mark(function n(){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$axios("/login",{params:{username:e.form.username,password:e.form.password}}).then(function(t){var n=t.data;console.log(t.data),null!=n?(e.$router.push({path:"index"}),console.log(n.token),e.$store.state.token=n.token):e.$message.error("请输入正确的用户名和密码！！！")}).catch(function(t){console.log(t)})}),console.log("再次请求");case 2:case"end":return n.stop()}},n,e)}))()},redirectRong:function(){}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{ref:"form",staticClass:"form demo-ruleForm",attrs:{model:t.form,rules:t.rules,"label-position":"left","label-width":"0px"}},[n("h3",{staticStyle:{height:"50px","line-height":"50px",margin:"0px"}},[t._v("登录")]),t._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{staticStyle:{margin:"10px auto"},attrs:{type:"text","auto-complete":"off",placeholder:"请输入账号"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{staticStyle:{margin:"10px auto"},attrs:{"auto-complete":"off",placeholder:"请输入密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),n("el-form-item",{staticStyle:{width:"100%","text-align":"center"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("form")}}},[t._v("登录")])],1)],1)},staticRenderFns:[]};var _=n("VU/8")(h,g,!1,function(t){n("bAbl")},"data-v-2fb5a2b1",null).exports,x=n("xzpI"),b={data:function(){return{}},methods:{enterRong:function(){var t=this,e=this.$store.state.token;console.log("token"+e),this.$axios("/rong",{headers:{Authorization:e}}).then(function(e){console.log(e.data),1==e.data?t.$router.push({path:"rong"}):t.$message.error("蓉蓉只属于那个人！")}).catch(function(e){t.$message.error("蓉蓉只属于那个人！")})}}},w={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"body"},[r("img",{attrs:{src:n("mQLM"),alt:""}}),t._v(" "),r("div",{attrs:{sytle:"text-align:center;"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.enterRong()}}},[t._v("咱家蓉蓉的小屋")])],1)])},staticRenderFns:[]};var k=n("VU/8")(b,w,!1,function(t){n("Fz3D")},null,null).exports,y=n("Jaq/");r.default.use(u.a),r.default.use(m.a),r.default.use(_),r.default.use(x.default),r.default.use(k);var $=new u.a({routes:[{path:"/",name:"Video",component:x.default,meta:{title:"wdj->bitch"}},{path:"/login",name:"Login",component:_,meta:{title:"登录"}},{path:"/index",name:"Index",component:k,meta:{title:"主页",requireAuth:!0}},{path:"/rong",name:"Rong",component:y.default,meta:{title:"蓉蓉",requireAuth:!0}}]}),C=n("zL8q"),j=n.n(C),E=(n("tvR6"),n("mtWM")),R=n.n(E),F=n("NYxO");r.default.use(F.a);var q=new F.a.Store({state:{isLogin:0,token:""},mutations:{isLogin:function(t){t.isLogin=t},decrease:function(t){t.count--}},actions:{increment:function(t){setTimeout(function(){t.commit("increment")})},decrease:function(t){setTimeout(function(){t.commit("decrease")})}},getters:{getState:function(t){return t.count>0?t.count:0}}});r.default.use(F.a),r.default.use(j.a,{size:"small",zIndex:3e3}),r.default.prototype.$axios=R.a,R.a.defaults.baseURL="/api",r.default.config.productionTip=!1,new r.default({el:"#app",router:$,store:q,components:{App:i},template:"<App/>"})},bAbl:function(t,e){},dipd:function(t,e,n){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body"},[e("video",{staticClass:"shadow",attrs:{muted:"",src:"http://www.hellofyy.top:8888/springcloud/getVideo",controls:"controls",autoplay:""},domProps:{muted:!0}})])},staticRenderFns:[]};e.a=r},eSuQ:function(t,e){},hhg0:function(t,e,n){t.exports=n.p+"static/img/rongrong.cee6fe4.png"},mQLM:function(t,e,n){t.exports=n.p+"static/img/sevenyear.3043800.png"},nUO4:function(t,e){},tvR6:function(t,e){},xGCs:function(t,e){},xzpI:function(t,e,n){"use strict";var r=n("xGCs"),a=n.n(r),s=n("dipd");var o=function(t){n("91Jj")},i=n("VU/8")(a.a,s.a,!1,o,null,null);e.default=i.exports},ykeZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1c0b984c80666ff9e705.js.map