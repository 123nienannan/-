webpackJsonp([2],{0:function(t,e,n){n("briU"),t.exports=n("NHnr")},"32GC":function(t,e){},"991W":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("PVEY"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:this.$route.meta.title,expression:"$route.meta.title"}]})],1)},staticRenderFns:[]};var i=n("C7Lr")({name:"App"},r,!1,function(t){n("SgJg")},null,null).exports,s=n("YaEn"),o=(n("briU"),n("R2wu")),u=n.n(o),c=(n("991W"),n("XEXE"),n("/Xo2")),l=n.n(c);a.default.use(l.a),a.default.use(u.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:s.a,components:{App:i},template:"<App/>"})},SgJg:function(t,e){},UsXE:function(t,e){},Vo7i:function(t,e,n){"use strict";var a=n("rVsN"),r=n.n(a),i=n("aozt"),s=n.n(i),o=n("R2wu"),u=(n.n(o),n("YaEn"));s.a.defaults.timeout=5e3,s.a.defaults.withCredentials=!0,s.a.interceptors.request.use(function(t){return t}),s.a.interceptors.response.use(function(t){return t},function(t){return r.a.reject(t)});e.a=function(t,e){var n={method:t.method,url:t.url,timeout:1e5,params:e,data:e,headers:"get"===t.method?{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json; charset=UTF-8"}};return"get"===t.method?delete n.data:delete n.params,new r.a(function(t,e){s()(n).then(function(e){console.log(e),-1==e.data.errcode&&(u.a.push({name:"Login"}),Object(o.Message)({type:"error",message:e.data.message})),e.data.success?t(e):Object(o.Message)({type:"error",message:e.data.message})}).catch(function(t){console.log("err"+t)})})}},VsUZ:function(t,e,n){"use strict";n.d(e,"o",function(){return i}),n.d(e,"l",function(){return r}),n.d(e,"k",function(){return s}),n.d(e,"j",function(){return o}),n.d(e,"i",function(){return u}),n.d(e,"h",function(){return c}),n.d(e,"f",function(){return l}),n.d(e,"a",function(){return d}),n.d(e,"c",function(){return m}),n.d(e,"u",function(){return h}),n.d(e,"e",function(){return p}),n.d(e,"b",function(){return f}),n.d(e,"d",function(){return g}),n.d(e,"m",function(){return v}),n.d(e,"v",function(){return A}),n.d(e,"w",function(){return w}),n.d(e,"q",function(){return b}),n.d(e,"x",function(){return M}),n.d(e,"r",function(){return k}),n.d(e,"s",function(){return C}),n.d(e,"p",function(){return B}),n.d(e,"g",function(){return E}),n.d(e,"t",function(){return x}),n.d(e,"n",function(){return U});var a="https://twc.digirogar.com/itochuweb",r=a+"/getAllCompany?time="+Math.random(),i=a+"/user/login?time="+Math.random(),s=a+"/getAllDepartMent?time="+Math.random(),o=a+"/getAllInnerPerson?time="+Math.random(),u=a+"/getAllAttendanceList?time="+Math.random(),c=a+"/getAllAccessList?time="+Math.random(),l=a+"/getAdminList?time="+Math.random(),d=(Math.random(),Math.random(),a+"/addAdmin?time="+Math.random()),m=a+"/deleteAdmin?time="+Math.random(),h=a+"/updateAdmin?time="+Math.random(),p=a+"/getAdminDetail?time="+Math.random(),f=a+"/addSpecialPerson?time="+Math.random(),g=a+"/deletePerson?time="+Math.random(),v=a+"/getPersonDetail?time="+Math.random(),A=a+"/updateSpecialPerson?time="+Math.random(),w=a+"/upload/base64?time="+Math.random(),b=(Math.random(),a+"/sendLink?time="+Math.random()),M=a+"/uploadBase64ByPersonId?time="+Math.random(),k=a+"/staffAuditStatus?time="+Math.random(),C=a+"/staffAuditStatusList?time="+Math.random(),B=a+"/user/loginOut?time="+Math.random(),E=a+"/getAdminType?time="+Math.random(),x=a+"/staffBindPhoto?time="+Math.random(),U=a+"/getPersonDetailBase64?time="+Math.random()},XEXE:function(t,e){},YaEn:function(t,e,n){"use strict";var a=n("PVEY"),r=n("KGCO"),i=(n("R2wu"),n("Vo7i")),s=n("VsUZ"),o={data:function(){return{loginForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login:function(){var t=this;this.$refs.loginForm.validate(function(e){if(!e)return!1;Object(i.a)({method:"post",url:s.o},t.loginForm).then(function(e){t.$router.push({name:"UserList"})})})}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"login_box"},[t._m(0),t._v(" "),a("h2",{staticClass:"title"},[t._v("登录")]),t._v(" "),a("el-form",{ref:"loginForm",staticClass:"demo-ruleForm",attrs:{model:t.loginForm,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{"label-width":"0",prop:"username"}},[a("img",{staticClass:"usernamepng",attrs:{src:n("zHXv")}}),t._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"用户名"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),a("el-form-item",{attrs:{"label-width":"0",prop:"password"}},[a("img",{staticClass:"passwordpng",attrs:{src:n("r/bG")}}),t._v(" "),a("el-input",{staticClass:"input",attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),t._v(" "),a("el-form-item",[a("div",{staticClass:"btn-wrap"},[a("button",{staticClass:"btn-login",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("登录"),a("i",{staticClass:"icon-arrow-right"})])])])],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login_pic"},[e("img",{attrs:{src:n("iQH9")}}),this._v(" "),e("p",[this._v("伊藤忠后台管理系统")])])}]};var c=n("C7Lr")(o,u,!1,function(t){n("UsXE"),n("t68y")},"data-v-0ad2d18d",null).exports,l=n("lC5x"),d=n.n(l),m=n("J0Oq"),h=n.n(m),p=n("vvLd"),f=n.n(p),g={name:"link",data:function(){return{personId:"",linkName:"",linkNumber:"",picValue:"",pictureUpload:"",visibleMask:!1,showText:""}},mounted:function(){var t=this.$route.query.personId;this.personId=t,this.getPersonDetailBase64({code:this.personId})},methods:{uploadPicture:function(t){var e=this,n=t.target.files||t.dataTransfer.files;this.picValue=n[0],this.imgPreview(this.picValue),f.a.getData(this.picValue,function(){e.Orientation=f.a.getTag(this,"Orientation")})},imgPreview:function(t){var e=this;if(t&&window.FileReader&&/^image/.test(t.type)){var n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){var t=new Image;t.src=this.result,t.onload=function(){var n=this.naturalWidth,a=this.naturalHeight,r=0,i=0,s=1280,o=1280,u=.5;if(n>s||a>o){var c=Math.max(n/s,a/o);r=n/c,i=a/c}else r=n,i=a;var l=document.createElement("canvas"),d=l.getContext("2d");3===e.Orientation?(l.width=r,l.height=i,d.rotate(Math.PI),d.drawImage(t,0,0,-r,-i)):8===e.Orientation?(l.width=i,l.height=r,d.rotate(3*Math.PI/2),d.drawImage(t,0,0,-r,i)):6===e.Orientation?(l.width=i,l.height=r,d.rotate(Math.PI/2),d.drawImage(t,0,0,r,-i)):(l.width=r,l.height=i,d.drawImage(t,0,0,r,i)),e.base64=l.toDataURL("image/jpeg",u),e.postImg(e.base64)}}}},postImg:function(t){var e=this;return h()(d.a.mark(function n(){var a;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.a)({url:s.w,method:"post"},{file:t});case 2:a=n.sent,e.pictureUpload=a.data.data,e.visibleMask=!0,e.showText="待审核...";case 6:case"end":return n.stop()}},n,e)}))()},getPersonDetailBase64:function(t){var e=this;return h()(d.a.mark(function n(){var a,r;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),n.next=3,Object(i.a)({method:"get",url:s.n},t);case 3:a=n.sent,console.log(a),r=a.data.data,console.log(r),e.pictureUpload=r.photoUrl,1==r.status&&(e.visibleMask=!0,e.showText="待审核..."),3==r.status&&(e.visibleMask=!0,e.showText="已驳回..."),e.linkName=r.personName,e.linkNumber=r.staffNumber;case 12:case"end":return n.stop()}},n,e)}))()},confirm:function(){var t=this;return h()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)({method:"post",url:s.t},{personId:t.personId,photoUrl:t.pictureUpload});case 2:e.sent,t.$message({message:"信息完成",type:"success"});case 4:case"end":return e.stop()}},e,t)}))()}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link_main"},[n("div",{staticClass:"wapper_link"},[n("div",{staticClass:"saveWaterPic"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"link_name"},[t._v("\r\n    "+t._s(t.linkName)+"\r\n  ")]),t._v(" "),n("div",{staticClass:"link_title"},[n("span",[t._v("NO. "+t._s(t.linkNumber))])]),t._v(" "),n("div",{staticClass:"link_content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleMask,expression:"visibleMask"}],staticClass:"mask"},[t._v(t._s(t.showText))]),t._v(" "),n("div",{staticClass:"savePic"},[n("img",{attrs:{src:t.pictureUpload}})])]),t._v(" "),n("div",{staticClass:"link_button"},[n("span",[t._v("\r\n       上传头像\r\n       "),n("input",{attrs:{accept:"image/*",type:"file"},on:{change:t.uploadPicture}})])]),t._v(" "),n("div",{staticClass:"link_tip"},[t._v("\r\n    请上传正面未经PS照片\r\n  ")]),t._v(" "),n("div",{staticClass:"link_btn"},[n("span",{on:{click:t.confirm}},[t._v("完成")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"link_top"},[e("p",[this._v("信息采集")])])}]};var A=n("C7Lr")(g,v,!1,function(t){n("32GC")},"data-v-abc2b832",null).exports;a.default.use(r.a);var w=new r.a({mode:"history",base:"itochuWeb",routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:c,meta:{title:"登录"}},{path:"/main",name:"Main",component:function(){return n.e(0).then(n.bind(null,"Gari"))},children:[{path:"/users",component:function(){return n.e(0).then(n.bind(null,"5Wyb"))},name:"UserList",meta:{title:"人员管理"}},{path:"/usersVip",component:function(){return n.e(0).then(n.bind(null,"Bl8W"))},name:"userVipList",meta:{title:"特殊人员"}},{path:"/mangement",component:function(){return n.e(0).then(n.bind(null,"fkxu"))},name:"testMange",meta:{title:"考勤管理"}},{path:"/access",component:function(){return n.e(0).then(n.bind(null,"4VVT"))},name:"Access",meta:{title:"出入记录"}},{path:"/right",component:function(){return n.e(0).then(n.bind(null,"5YFt"))},name:"rightAdmin",meta:{title:"管理员"}}]},{path:"/linkPage",name:"LinkPage",component:A,meta:{title:"伊藤忠"}}]});e.a=w},iQH9:function(t,e,n){t.exports=n.p+"static/img/logo.30d65dc.png"},"r/bG":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAEHklEQVQ4jZ1TWUxUVxj+zjn3zmXgMsLMIAhCAgxilCJQhVYKVUNJE4WHRhv7UBOT2iUmbdK0Nk186JLuD33zoWm6vUhfmoYuFmvrUlxCKQoqIhRoRYGBGZZhmJk79yx9uEHBUGj6JX/yn3O+/zvffxYSS9hYDEoIDBdDR+/E2tYzgwdPXvx7d89guBQAthT7+h57uODH5h2Bz6o3rZ20kgJSqSX1JGHxJROGi6HjerDmhbdPfdJ1+U45KAVc1FlMSkBKVFXm9Rw72vBcTVn2pURSLBUMTsXuDnSNYiQ4V7D35e9+HbgxUUzXuFFRmtWxdXP2aaWAzt7gzu6bk9VyNobAxuyhbz5u3pmfk37L5vdE2eGXjsDmEjaX0BnDsa+7X//+h74m6klRh/dXvPfErsAz/oyUEzk+89QjlbnH87LSaNdAuDZ8O+I1M91W7ZbcX2IJG5xLcC5BdUahMwqXRsGFMH4+P7wbFNhelXvuycYNb6W5tfm4xRG3OEy3Nr+vseTNhyrz2kGBk+3De2whDI1RMOqENhO1QAkBowTzFs+MRm0TUqGqNOtSfo5prTFd8JgGoIBsnxueNFfiwY1ZF86fGayLRi1zNBTzphlsTEgFqQCNCwXOBQgB5hNcBwGFoaG7PyRf/OgsnmrcgLKAHwBw7c8Qjrf1YzaSkDA0gBAajSV1JTUoBWgaBZVS4ffeICxbwNAZJwQKSkEBqqmuEGUBPxIWR8LiKAv40VRfCAWHQwiUS2e2ZQt03ghCAaBcSFzpD+FCz7hBKfFzIRmSAuUBf2pDdYGZSHIfIfARAl8iyX0N1QVmecCfiqQAF5IxSvwXr44b3f0hCCFBugcmXR988ceRzqtj+xUl7uHRSD63he73pobX+dLGhVTa4nfGKOFj4fmc0FTMp+nMLsz1jBCp4tXl61peO7jtQ/J56/UDh462fcmlAigBdAYQAEICXAKEAAu/YSHXKMAooADYApAKGiX49N3HD2i/XRndzpMcSHducpEVp1AoZ54RZwOd3eMRAC7HAJ+zcK7rTq0mhKJ3d7sfQsHj1uPbHsj5yuJy5uZfU4cmwzEvGF3KU44BIRTVCFlWyoElsOvR4p/qt+Y9vz7bxK2xucgr759+BynEaf8+EAJFl5FZxFCYjsQzajbnpNdV5LmGRyPrnT7/HdqKq4aG9u6xHU+/0dbk86TEevpDz8Jgy7r7b4KEQABkeDSiD43MZgJgoCs7XLllAEgK7Kkt9DTVF5uw5ar0lR0CAKO4NhB6dSFfVVCqVS6GEQzfnsl32GxFqlCK0gzTmIMlViRCY6uKwRLINFMidG9DSUt+kXcC03EglgTm/0dMx5Ff5A3uayhpIbEEx7dnh6r6BiabwtFkBqVk9ZNfBCkV9ZnGzKZSf2tzXdHlfwCaLOJTg+7j0QAAAABJRU5ErkJggg=="},t68y:function(t,e){},zHXv:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAEM0lEQVQ4jaVVa2wUVRg9985rZ1/dtlsprW1tlUoxsTUxKUWjqYk8rMFHEN+SxoDaaNI/BmP8qyH6B6MNoD8whiDYIKhRaDQpD4VGg32AoFT62r67253tzu7O7Mzc64+VdrcUSfUkk8l8uffMued88w3R4iYWgxKCqG5i/ze/Q5HF8sM/XKl595W1nnf2delPr6++bKadUPPmNcj3KmCcX7dfpJTkVjggChQ+VaKXh6JvDoW0bX394Zqml9sh5KuQKblUWZb/uU+VPxAFymyHAYsoyEQ4kVsggCwK0tt7zrV9eqhnu2M5gEvKbOQADAuCJGDHs3WfvPdaw+uWzSy+SK34x9BsTsHrlvDjL6GX9n7RvR2EAKqU9UYAqgTHZth7sHtHZbG/6+H6sv3xpJVLeuq3sWydUCTqPtE13AyHZRQuBZGCpywc7xpuBvgh02YpZIkleiq9sFagCE3FS+966sBA2nJkELIE4z/gHIokpC+2v1BZtsI3bjtsgcezSI1XlcS0YcsQ6Y0JAYAQmIYte1VJViQBiiQskF74KzL/QAkQmTOSwaAnHJ5NBrG4M7LBOIqKPDP9IU2PxMyc1hJPnh/NWevzyNGN6yo6DhzufR4+5cakiTQ2bV7TMTwRj2YLAwBxw9qKrCMBLlmwC/xK2/Ezg02RKT0A9xJhJdMIlvijWx+6o632ziLHMJ1cZ9JWpnDtIyCEgBLgq86rW1p3dbaFRrRb4JYy3jAOJC2UVQSmd+9sbHmy8fYjnAPX+tRhmTuxHQaBEkxHU7g6GoMWN9F4761wHI629t57opqx7UDHn02Ts4mi4kLvzIsbqr8rCKiftWy5u4cKBKfOjyLgU1BVmodgvgrGOMR5iwwLk5EEZrQUYrqBgyf6MTtnduf5lW5Zoq2UEMgihd+vYHbOwL6jF/HcxlUITesw0jZWFLpRBDXj6YKdBKoiwqtKECh1SSKtvzQQWd17JVys6YYXgBTWktae9gt6bXVwcv1a72WB0l89qpRSFREkawDMH1/TTXScG6k82zPW8vWZwa16wgqm0rbbshkcxsE5ByEEAiWQRApVFhM+jxR+/IGqww11JXs31JcP5vkUOIyDOIyBEoKjJweeaH2/86OREa0UIs0EQ65dWdFyAJl0MsHZDBXlgdEPdza+8diDVccY5yDxZBqnu8cbn3nr+2/j0ZQHqghcPyJvDAIgZcNfoMa/3PXIo/fXlZ4WNm151bX7YM/HF3vGa+CRl8GWBZHCjCSVmMVWrioPHKGjU3rN2b7xdUs2+XLglvBz38S60JS+mhYGXCXR8TnfTQfITdUKmB2L+Qv9rlIa0Qzfsjz8N3AgHEt5qe1wEez6/8yyQQAwBsvmknhbiW/YledyjGhK+F8W2AyugMuuLPENkb7+sPRT30RDScBVbDr/3QdZIJjSjMn7alee/RsjcsjQXA3Q1AAAAABJRU5ErkJggg=="}},[0]);
//# sourceMappingURL=app.0a5ee030a3fe406bd5e4.js.map