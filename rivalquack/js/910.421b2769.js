"use strict";(globalThis["webpackChunkrivalquack"]=globalThis["webpackChunkrivalquack"]||[]).push([[910],{3910:(t,e,a)=>{a.r(e),a.d(e,{default:()=>Dt});var i=a(9835);const n={class:"body"},s=(0,i._)("div",{class:"rival"},[(0,i._)("img",{src:"rival.png",style:{width:"140px"}})],-1);function l(t,e,a,l,c,o){const d=(0,i.up)("select-difficulty"),r=(0,i.up)("rival-details"),u=(0,i.up)("round-counter"),m=(0,i.up)("round-details"),v=(0,i.up)("round-nav"),g=(0,i.up)("results"),p=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(p,{class:"q-pa-none app-page",style:{"background-image":"url('parchment.png')"}},{default:(0,i.w5)((()=>[(0,i._)("div",n,[s,!0===t.newGame?((0,i.wg)(),(0,i.j4)(d,{key:0})):(0,i.kq)("",!0),!1===t.newGame&&!1===t.gameover?((0,i.wg)(),(0,i.j4)(r,{key:1})):(0,i.kq)("",!0),!1===t.newGame&&!1===t.gameover?((0,i.wg)(),(0,i.j4)(u,{key:2})):(0,i.kq)("",!0),!1===t.newGame&&!1===t.gameover?((0,i.wg)(),(0,i.j4)(m,{key:3})):(0,i.kq)("",!0),!1===t.newGame&&!1===t.gameover?((0,i.wg)(),(0,i.j4)(v,{key:4})):(0,i.kq)("",!0),!1===t.newGame&&!0===t.gameover?((0,i.wg)(),(0,i.j4)(g,{key:5})):(0,i.kq)("",!0)])])),_:1})}var c=a(6970);const o={class:"difficulty select"},d={class:"row justify-center"};function r(t,e,a,n,s,l){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",o,(0,c.zw)(t.$t("selectlevel")),1),(0,i._)("div",d,[(0,i._)("div",{class:"difficulty level",onClick:e[0]||(e[0]=t=>l.setDifficulty(1))}," I "),(0,i._)("div",{class:"difficulty level",onClick:e[1]||(e[1]=t=>l.setDifficulty(2))}," II "),(0,i._)("div",{class:"difficulty level",onClick:e[2]||(e[2]=t=>l.setDifficulty(3))}," III ")])])}const u={name:"SelectDifficulty",data(){return{}},methods:{setDifficulty:function(t){this.$store.commit("gamedata/setDifficultyLevel",t),this.$store.commit("gamedata/startGame")}}};var m=a(1639);const v=(0,m.Z)(u,[["render",r]]),g=v,p={style:{width:"100%"}},f={class:"row",style:{padding:"10px 10px 0 10px"}},y={class:"difficulty difficultylevel"},h={class:"levelsmall"},w={class:"row",style:{"padding-left":"10px"}},k={class:"victorypoints"},_={class:"row"},b={class:"droplet"},D={key:0,class:"ruby"},R=(0,i._)("img",{src:"ruby.png"},null,-1),x=[R];function $(t,e,a,n,s,l){const o=(0,i.up)("q-space");return(0,i.wg)(),(0,i.iD)("div",p,[(0,i._)("div",f,[(0,i._)("div",y,[(0,i.Uk)((0,c.zw)(t.$t("level"))+" ",1),(0,i._)("span",h,(0,c.zw)(l.fancyLevel),1)])]),(0,i._)("div",w,[(0,i._)("div",k,(0,c.zw)(t.$t("vp"))+": "+(0,c.zw)(t.victoryPoints),1)]),(0,i._)("div",_,[(0,i.Wm)(o),(0,i._)("div",b,(0,c.zw)(t.$t("droplet"))+" @ "+(0,c.zw)(t.dropletPosition),1)]),1==t.rubies?((0,i.wg)(),(0,i.iD)("div",D,x)):(0,i.kq)("",!0)])}var C=a(3100);const q={name:"RivalDetails",data(){return{}},computed:{...(0,C.Se)({victoryPoints:"gamedata/getVictoryPoints",difficultyLevel:"gamedata/getDifficultyLevel",dropletPosition:"gamedata/getDropletPosition",rubies:"gamedata/getRubies"}),fancyLevel:function(){return"I".repeat(this.difficultyLevel)}}};var z=a(136),L=a(9984),P=a.n(L);const G=(0,m.Z)(q,[["render",$]]),Z=G;P()(q,"components",{QSpace:z.Z});const j={class:"round"},S=["src"];function B(t,e,a,n,s,l){return(0,i.wg)(),(0,i.iD)("div",j,[(0,i._)("img",{src:"round_"+t.round+".png",style:{width:"80px"}},null,8,S)])}const I={name:"RoundCounter",data(){return{}},computed:{...(0,C.Se)({round:"gamedata/getRound"})}},Q=(0,m.Z)(I,[["render",B]]),U=Q,V=(0,i._)("div",{class:"magnifier"},[(0,i._)("img",{src:"magnifier.png",style:{width:"240px"}})],-1),N={class:"space"},W=["src"],T={class:"column"},O={id:"rattails"},A={class:"q-px-md"},E={id:"beatthat"},F={class:"blackchip1"},H={key:0,src:"blackchip.png"},J={class:"blackchip2"},K={key:0,src:"blackchip.png"};function M(t,e,a,n,s,l){const o=(0,i.up)("q-slider");return(0,i.wg)(),(0,i.iD)("div",null,[V,(0,i._)("div",N,[(0,i._)("img",{class:"space",src:"space_"+t.currentRoundData.id+".png",style:{width:"116px"}},null,8,W)]),(0,i._)("div",T,[(0,i._)("div",O,(0,c.zw)(t.$t("addrattails"))+": "+(0,c.zw)(s.rattails),1),(0,i._)("div",A,[(0,i.Wm)(o,{modelValue:s.rattails,"onUpdate:modelValue":e[0]||(e[0]=t=>s.rattails=t),markers:"",min:0,max:8,onChange:l.setcauldronposition,style:{width:"240px"}},null,8,["modelValue","onChange"])])]),(0,i._)("div",E,(0,c.zw)(t.$t("beatrival")),1),(0,i._)("div",F,[t.currentBlackChips>0?((0,i.wg)(),(0,i.iD)("img",H)):(0,i.kq)("",!0)]),(0,i._)("div",J,[t.currentBlackChips>1?((0,i.wg)(),(0,i.iD)("img",K)):(0,i.kq)("",!0)])])}const X={name:"RoundDetails",data(){return{rattails:0}},computed:{...(0,C.Se)({round:"gamedata/getRound",currentRoundData:"gamedata/getCurrentRoundData",currentRatstonePos:"gamedata/getCurrentRatstonePos",currentBlackChips:"gamedata/getCurrentBlackChips"})},mounted:function(){this.$nextTick((function(){this.rattails=0,this.setcauldronposition()}))},watch:{round:function(){this.rattails=0,this.setcauldronposition()}},methods:{setcauldronposition:function(){this.$store.commit("gamedata/setCurrentRoundData",this.rattails)}}};var Y=a(2756);const tt=(0,m.Z)(X,[["render",M]]),et=tt;P()(X,"components",{QSlider:Y.Z});const at={class:"roundnav"};function it(t,e,a,n,s,l){const c=(0,i.up)("q-btn");return(0,i.wg)(),(0,i.iD)("div",at,[(0,i.Wm)(c,{color:"primary",class:"q-px-md q-py-xs",size:"md",label:s.label,onClick:l.buttonclick},null,8,["label","onClick"])])}const nt={name:"RoundNav",data(){return{label:this.$t("nextround")}},computed:{...(0,C.Se)({round:"gamedata/getRound"})},methods:{buttonclick(){this.$bus.emit("nextButtonClicked")}},watch:{round:function(t){this.label=9===t?this.$t("endgame"):this.$t("nextround")}}};var st=a(9379);const lt=(0,m.Z)(nt,[["render",it]]),ct=lt;P()(nt,"components",{QBtn:st.Z});const ot={style:{width:"100%"}},dt={class:"difficulty select"},rt={class:"row justify-center"},ut={class:"difficulty difficultylevel"},mt={class:"levelsmall"},vt={class:"row justify-center"},gt={class:"victorypoints"},pt={class:"roundnav"};function ft(t,e,a,n,s,l){const o=(0,i.up)("q-btn");return(0,i.wg)(),(0,i.iD)("div",ot,[(0,i._)("div",dt,(0,c.zw)(t.$t("endresult")),1),(0,i._)("div",rt,[(0,i._)("div",ut,[(0,i.Uk)((0,c.zw)(t.$t("level"))+" ",1),(0,i._)("span",mt,(0,c.zw)(l.fancyLevel),1)])]),(0,i._)("div",vt,[(0,i._)("div",gt,(0,c.zw)(t.$t("vp"))+": "+(0,c.zw)(t.victoryPoints),1)]),(0,i._)("div",pt,[(0,i.Wm)(o,{color:"primary",class:"q-px-md q-py-xs",size:"md",onClick:l.buttonclick},{default:(0,i.w5)((()=>[(0,i.Uk)((0,c.zw)(t.$t("newgame")),1)])),_:1},8,["onClick"])])])}const yt={name:"Results",data(){return{label:this.$t("endgame")}},computed:{...(0,C.Se)({victoryPoints:"gamedata/getVictoryPoints",difficultyLevel:"gamedata/getDifficultyLevel"}),fancyLevel:function(){return"I".repeat(this.difficultyLevel)}},methods:{buttonclick(){this.$store.commit("gamedata/setNewGame")}}},ht=(0,m.Z)(yt,[["render",ft]]),wt=ht;P()(yt,"components",{QBtn:st.Z});const kt={name:"PageIndex",components:{SelectDifficulty:g,RivalDetails:Z,RoundCounter:U,RoundDetails:et,RoundNav:ct,Results:wt},computed:{...(0,C.Se)({round:"gamedata/getRound",difficultyLevel:"gamedata/getDifficultyLevel",newGame:"gamedata/startNewGame",gameover:"gamedata/isGameOver"})},created(){this.$bus.on("nextButtonClicked",(()=>{this.nextRound()}),this)},beforeUnmount(){this.$bus.off("nextButtonClicked",(()=>{this.nextRound()}),this)},methods:{nextRound(){this.$store.commit("gamedata/endRound"),this.round<9?this.$store.commit("gamedata/setRound",this.round+1):this.$store.commit("gamedata/finishGame")}}};var _t=a(9885);const bt=(0,m.Z)(kt,[["render",l]]),Dt=bt;P()(kt,"components",{QPage:_t.Z})}}]);