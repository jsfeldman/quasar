module.exports=function(n){function t(e){if(a[e])return a[e].exports;var i=a[e]={exports:{},id:e,loaded:!1};return n[e].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var a={};return t.m=n,t.c=a,t.p="",t(0)}({0:function(n,t,a){n.exports=a(113)},113:function(n,t,a){"use strict";var e=a(114);n.exports={template:e,data:{tabs:[{label:"Tab 1",icon:"message",target:"#tab-1"},{label:"Disabled",icon:"fingerprint",disabled:!0},{label:"Tab 2",icon:"alarm",target:"#tab-2"},{label:"Tab 3",icon:"accessibility",target:"#tab-3"},{label:"Tab 4",icon:"accessibility",target:"#tab-4",hidden:!0}]},ready:function(){quasar.current.layout.vm.$data.title="Tabs"}}},114:function(n,t){n.exports='<h5>\n  On a real mobile device Tabs look a little different\n  in the sense that arrows won\'t be shown since user can\n  pan (touch action) through the menu.\n</h5>\n\n<h5>Select Tabs from below.</h5>\n\n<tabs>\n  <tab\n    v-for="tab in tabs"\n    :hidden="tab.hidden"\n    :disabled="tab.disabled"\n    :icon="tab.icon"\n    :target="tab.target"\n  >\n    {{tab.label}}\n  </tab>\n</tabs>\n\n<div id="tab-1">\n  <div v-for="n in 5">Tab 1</div>\n</div>\n<div id="tab-2">\n  <div v-for="n in 10">Tab 2</div>\n</div>\n<div id="tab-3">\n  <div v-for="n in 7">Tab 3</div>\n</div>\n'}});