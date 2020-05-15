(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{staticClass:"q-pa-none app-page"},[r("div",{staticClass:"body"},[r("div",{staticClass:"rival"},[r("img",{staticStyle:{width:"140px"},attrs:{src:"statics/rival.png"}})]),!0===t.newGame?r("select-difficulty"):t._e(),!1===t.newGame&&!1===t.gameover?r("rival-details"):t._e(),!1===t.newGame&&!1===t.gameover?r("round-counter"):t._e(),!1===t.newGame&&!1===t.gameover?r("round-details"):t._e(),!1===t.newGame&&!1===t.gameover?r("round-nav"):t._e(),!1===t.newGame&&!0===t.gameover?r("results"):t._e()],1)])},i=[],a=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("9523")),s=r.n(a),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"difficulty select"},[t._v(t._s(t.$t("selectlevel")))]),r("div",{staticClass:"row justify-center"},[r("div",{staticClass:"difficulty level",on:{click:function(e){return t.setDifficulty(1)}}},[t._v("I")]),r("div",{staticClass:"difficulty level",on:{click:function(e){return t.setDifficulty(2)}}},[t._v("II")]),r("div",{staticClass:"difficulty level",on:{click:function(e){return t.setDifficulty(3)}}},[t._v("\n      III\n    ")])])])},o=[],l={name:"SelectDifficulty",data:function(){return{}},methods:{setDifficulty:function(t){this.$store.commit("gamedata/setDifficultyLevel",t),this.$store.commit("gamedata/startGame")}}},u=l,d=r("2877"),f=Object(d["a"])(u,c,o,!1,null,null,null),p=f.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{width:"100%"}},[r("div",{staticClass:"row",staticStyle:{padding:"10px 10px 0 10px"}},[r("div",{staticClass:"difficulty difficultylevel"},[t._v("\n      "+t._s(t.$t("level"))+"\n      "),r("span",{staticClass:"levelsmall"},[t._v(t._s(t.fancyLevel))])])]),r("div",{staticClass:"row",staticStyle:{"padding-left":"10px"}},[r("div",{staticClass:"victorypoints"},[t._v(t._s(t.$t("vp"))+": "+t._s(t.victoryPoints))])]),r("div",{staticClass:"row"},[r("q-space"),r("div",{staticClass:"droplet"},[t._v(t._s(t.$t("droplet"))+" @ "+t._s(t.dropletPosition))])],1),1==t.rubies?r("div",{staticClass:"ruby"},[r("img",{attrs:{src:"statics/ruby.png"}})]):t._e()])},b=[],m=(r("14b9"),r("2f62"));function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g={name:"RivalDetails",data:function(){return{}},computed:O(O({},Object(m["b"])({victoryPoints:"gamedata/getVictoryPoints",difficultyLevel:"gamedata/getDifficultyLevel",dropletPosition:"gamedata/getDropletPosition",rubies:"gamedata/getRubies"})),{},{fancyLevel:function(){return"I".repeat(this.difficultyLevel)}})},h=g,j=r("eebe"),w=r.n(j),P=r("2c91"),_=Object(d["a"])(h,v,b,!1,null,null,null),C=_.exports;w()(_,"components",{QSpace:P["a"]});var D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"round"},[r("img",{staticStyle:{width:"80px"},attrs:{src:"statics/round_"+t.round+".png"}})])},$=[];function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var R={name:"RoundCounter",data:function(){return{}},computed:k({},Object(m["b"])({round:"gamedata/getRound"}))},S=R,E=Object(d["a"])(S,D,$,!1,null,null,null),L=E.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("div",{staticClass:"space"},[r("img",{staticClass:"space",staticStyle:{width:"116px"},attrs:{src:"statics/space_"+t.currentRoundData.id+".png"}})]),r("div",{staticClass:"column"},[r("div",{attrs:{id:"rattails"}},[t._v(t._s(t.$t("addrattails"))+": "+t._s(t.rattails))]),r("div",{staticClass:"q-px-md"},[r("q-slider",{staticStyle:{width:"240px"},attrs:{markers:"",min:0,max:5},on:{change:t.setcauldronposition},model:{value:t.rattails,callback:function(e){t.rattails=e},expression:"rattails"}})],1)]),r("div",{attrs:{id:"beatthat"}},[t._v(t._s(t.$t("beatrival")))]),r("div",{staticClass:"blackchip1"},[t.currentBlackChips>0?r("img",{attrs:{src:"statics/blackchip.png"}}):t._e()]),r("div",{staticClass:"blackchip2"},[t.currentBlackChips>1?r("img",{attrs:{src:"statics/blackchip.png"}}):t._e()])])},q=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"magnifier"},[r("img",{staticStyle:{width:"240px"},attrs:{src:"statics/magnifier.png"}})])}];function B(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?B(Object(r),!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Q={name:"RoundDetails",data:function(){return{rattails:0}},computed:I({},Object(m["b"])({round:"gamedata/getRound",currentRoundData:"gamedata/getCurrentRoundData",currentRatstonePos:"gamedata/getCurrentRatstonePos",currentBlackChips:"gamedata/getCurrentBlackChips"})),mounted:function(){this.$nextTick((function(){this.rattails=0,this.setcauldronposition()}))},watch:{round:function(){this.rattails=0,this.setcauldronposition()}},methods:{setcauldronposition:function(){this.$store.commit("gamedata/setCurrentRoundData",this.rattails)}}},N=Q,z=r("c1d0"),J=Object(d["a"])(N,G,q,!1,null,null,null),V=J.exports;w()(J,"components",{QSlider:z["a"]});var T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"roundnav"},[r("q-btn",{staticClass:"q-px-md q-py-xs",attrs:{color:"primary",size:"md",label:t.label},on:{click:t.buttonclick}})],1)},A=[];function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function H(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var K={name:"RoundNav",data:function(){return{label:this.$t("nextround")}},computed:H({},Object(m["b"])({round:"gamedata/getRound"})),methods:{buttonclick:function(){this.$root.$emit("nextButtonClicked")}},watch:{round:function(t){this.label=9===t?this.$t("endgame"):this.$t("nextround")}}},M=K,U=r("9c40"),W=Object(d["a"])(M,T,A,!1,null,null,null),X=W.exports;w()(W,"components",{QBtn:U["a"]});var Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{width:"100%"}},[r("div",{staticClass:"difficulty select"},[t._v(t._s(t.$t("endresult")))]),r("div",{staticClass:"row justify-center"},[r("div",{staticClass:"difficulty difficultylevel"},[t._v("\n      "+t._s(t.$t("level"))+"\n      "),r("span",{staticClass:"levelsmall"},[t._v(t._s(t.fancyLevel))])])]),r("div",{staticClass:"row justify-center"},[r("div",{staticClass:"victorypoints"},[t._v(t._s(t.$t("vp"))+": "+t._s(t.victoryPoints))])]),r("div",{staticClass:"roundnav"},[r("q-btn",{staticClass:"q-px-md q-py-xs",attrs:{color:"primary",size:"md"},on:{click:t.buttonclick}},[t._v(t._s(t.$t("newgame")))])],1)])},Z=[];function tt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function et(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(r),!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var rt={name:"Results",data:function(){return{label:this.$t("endgame")}},computed:et(et({},Object(m["b"])({victoryPoints:"gamedata/getVictoryPoints",difficultyLevel:"gamedata/getDifficultyLevel"})),{},{fancyLevel:function(){return"I".repeat(this.difficultyLevel)}}),methods:{buttonclick:function(){this.$store.commit("gamedata/setNewGame")}}},nt=rt,it=Object(d["a"])(nt,Y,Z,!1,null,null,null),at=it.exports;function st(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ct(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?st(Object(r),!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):st(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}w()(it,"components",{QBtn:U["a"]});var ot={name:"PageIndex",components:{SelectDifficulty:p,RivalDetails:C,RoundCounter:L,RoundDetails:V,RoundNav:X,Results:at},computed:ct({},Object(m["b"])({round:"gamedata/getRound",difficultyLevel:"gamedata/getDifficultyLevel",newGame:"gamedata/startNewGame",gameover:"gamedata/isGameOver"})),created:function(){this.$root.$on("nextButtonClicked",this.nextRound)},beforeDestroy:function(){this.$root.$off("nextButtonClicked",this.nextRound)},methods:{nextRound:function(){this.$store.commit("gamedata/endRound"),this.round<9?this.$store.commit("gamedata/setRound",this.round+1):this.$store.commit("gamedata/finishGame")}}},lt=ot,ut=r("9989"),dt=Object(d["a"])(lt,n,i,!1,null,null,null);e["default"]=dt.exports;w()(dt,"components",{QPage:ut["a"]})}}]);