(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["caffeinelist"],{"2aa4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillcontain"},[a("head-top"),e._m(0),a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":"","default-sort":{prop:"time",order:"descending"}}},[a("el-table-column",{attrs:{type:"index",width:"100"}}),a("el-table-column",{attrs:{property:"time",label:"饮用时间",sortable:""}}),a("el-table-column",{attrs:{property:"brand",label:"品牌"}}),a("el-table-column",{attrs:{property:"type",label:"饮品"}}),a("el-table-column",{attrs:{property:"size",label:"杯型"}}),a("el-table-column",{attrs:{property:"percent",label:"饮用了"}}),a("el-table-column",{attrs:{property:"caffeine",label:"咖啡因含量"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除 ")])]}}])})],1)],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"data_section"},[a("header",{staticClass:"section_title"},[e._v("咖啡记录")])])}],s=a("b9b3"),l={data:function(){return{tableData:[],currentRow:null}},components:{headTop:s["a"]},created:function(){},mounted:function(){this.getCaffeineList()},methods:{handleDelete:function(){this.$alert("删除功能上线中","提示",{confirmButtonText:"确定",type:"info"})},getCaffeineList:function(){var e=this;this.$axios.post("People/ExistPeople/"+sessionStorage.getItem("loginid")).then((function(t){t.data||(sessionStorage.setItem("loginid",""),e.$message({type:"info",message:"请您重新登录"}),e.$router.push("/"))}),(function(t){e.$message({type:"error",message:"错误信息："+t})})),this.$axios.post("Caffeine/getCaffeineRecordById/"+sessionStorage.getItem("loginid")).then((function(t){for(var a in t.data){var n={};n.time=t.data[a].time,n.time=t.data[a].time,n.brand=t.data[a].brand,n.type=t.data[a].type,n.size=t.data[a].size,n.percent=t.data[a].percent,n.caffeine=t.data[a].caffeine,e.tableData.push(n)}}),(function(t){e.$message({type:"error",message:"错误信息："+t})}))}}},o=l,r=(a("4780"),a("2877")),c=Object(r["a"])(o,n,i,!1,null,null,null);t["default"]=c.exports},4780:function(e,t,a){"use strict";a("e04b")},e04b:function(e,t,a){}}]);
//# sourceMappingURL=caffeinelist.cb9aed42.js.map