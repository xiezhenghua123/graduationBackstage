(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-034a4061"],{a726:function(e,t,o){},b889:function(e,t,o){"use strict";o("a726")},dd7b:function(e,t,o){"use strict";o.r(t);var r=o("f16e"),s={name:"Login",data:function(){return{title:"湘潭大学学生兼职后台管理系统",form:{account:localStorage.login_account||"",password:"",remember:!!localStorage.login_account},rules:{account:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPassword:function(){var e=this;this.passwordType="password"===this.passwordType?"":"password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.loading=!0,e.$store.dispatch("user/login",{phone:e.form.account,password:e.form.password}).then((function(){r.b.success("登录成功！"),e.loading=!1,e.form.remember?localStorage.setItem("login_account",e.form.account):localStorage.removeItem("login_account"),e.$router.push({path:e.redirect||"/"})})).catch((function(){e.loading=!1})))}))},testAccount:function(e){this.form.account=e,this.form.password="123456",this.handleLogin()}}},a=(o("b889"),o("2877")),n=Object(a.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"bg-banner"}),o("div",{attrs:{id:"login-box"}},[o("div",{staticClass:"login-banner"}),o("el-form",{ref:"form",staticClass:"login-form",attrs:{model:e.form,rules:e.rules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v(e._s(e.title))])]),o("div",[o("el-form-item",{attrs:{prop:"account"}},[o("el-input",{ref:"name",attrs:{placeholder:"用户名",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}},[o("svg-icon",{attrs:{slot:"prefix",name:"user"},slot:"prefix"})],1)],1),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{ref:"password",attrs:{type:e.passwordType,placeholder:"密码",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin.apply(null,arguments)}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}},[o("svg-icon",{attrs:{slot:"prefix",name:"password"},slot:"prefix"}),o("svg-icon",{attrs:{slot:"suffix",name:"password"===e.passwordType?"eye":"eye-open"},on:{click:e.showPassword},slot:"suffix"})],1)],1)],1),o("el-checkbox",{model:{value:e.form.remember,callback:function(t){e.$set(e.form,"remember",t)},expression:"form.remember"}},[e._v("记住我")]),o("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin.apply(null,arguments)}}},[e._v(" 登 录 ")])],1)],1),e.$store.state.settings.showCopyright?o("Copyright"):e._e()],1)}),[],!1,null,"37e9310a",null);t.default=n.exports}}]);