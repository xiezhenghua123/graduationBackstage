(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f3e3ad9a"],{e822:function(t,e,a){"use strict";a.r(e);var n=a("5530"),r=(a("4de4"),a("d3b7"),a("d81d"),a("ecdc")),l={data:function(){return{headerStyle:{"background-color":"rgba(0,0,0,0.05)"},data:[],applyPerson:[],page:1,limit:10,total:0,dialogTableVisible:!1,filter:{salary:"",education:""}}},computed:{},mounted:function(){this.getList()},methods:{getStatus:function(t){switch(t){case"0":return"进行中";case"1":return"已完成";case"2":return"待雇主接受";case"3":return"雇主已拒绝";case"4":return"已取消应聘";case"5":return"待雇主确认完成"}},removeJob:function(t){var e=this;Object(r.a)(t.id,Object(n.a)(Object(n.a)({},t),{},{status:0})).then((function(){e.$message({message:"下架成功",type:"success"}),e.getList()}))},getApplyPerson:function(t){var e=this;Object(r.b)(t).then((function(t){e.applyPerson=t,e.dialogTableVisible=!0}))},getList:function(){var t=this;Object(r.c)(this.page,Object(n.a)(Object(n.a)({},this.filter),{},{workerId:"n",type:"partTime"})).then((function(e){t.data=e.workOrderList.map((function(t){return Object(n.a)(Object(n.a)({},t),{},{salary:t.salary+"元",employer:"1"==t.user_type?t.worker_name:t.company_name})})),t.total=e.total,t.limit=e.limit}))}}},o=a("2877"),i=Object(o.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-fff height-100"},[a("div",{staticClass:"p-10"},[a("el-table",{attrs:{data:t.data,"header-cell-style":t.headerStyle,border:""}},[a("el-table-column",{attrs:{label:"职位ID",prop:"id"}}),a("el-table-column",{attrs:{label:"雇主(企业)",prop:"employer"}}),a("el-table-column",{attrs:{label:"标题",prop:"content"}}),a("el-table-column",{attrs:{label:"薪酬",prop:"salary"}}),a("el-table-column",{attrs:{label:"应聘者"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.getApplyPerson(e.row.id)}}},[t._v(" 查看 ")])]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(2==e.row.status?"进行中":"已下架")+" ")]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",size:"mini",disabled:0==e.row.status},on:{click:function(a){return t.removeJob(e.row)}}},[t._v(" "+t._s(0==e.row.status?"已下架":"下架")+" ")])]}}])})],1),a("div",{staticClass:"mt-10 mb-10 flex",staticStyle:{"justify-content":"right"}},[a("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next","page-size":t.limit,"current-page":t.page,total:t.total},on:{"update:pageSize":function(e){t.limit=e},"update:page-size":function(e){t.limit=e},"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.getList,"prev-click":t.getList,"next-click":t.getList}})],1)],1),a("el-dialog",{attrs:{title:"应聘者查看",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[a("el-table",{attrs:{data:t.applyPerson,border:"","header-cell-style":t.headerStyle}},[a("el-table-column",{attrs:{prop:"worker_name",label:"名字"}}),a("el-table-column",{attrs:{label:"应聘状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(t.getStatus(e.row.application_order_status)))])]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports},ecdc:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return o}));var n=a("365c"),r=function(t,e){return Object(n.a)().post("workOrder/list/".concat(t),e)},l=function(t){return Object(n.a)().get("applicationOrder/workOrder/".concat(t))},o=function(t,e){return Object(n.a)().put("workOrder/".concat(t),e)}}}]);