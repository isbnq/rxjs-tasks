import{a as v}from"./chunk-FI7FAMFE.js";import{a as y}from"./chunk-TVF47NAY.js";import{A as h,D as r,E as o,F,I as b,N as n,Q as D,X as B,ca as p,r as l,t as d,u as s,w as E,x as c}from"./chunk-A54WQI45.js";var m=(()=>{let u=class u{getData(){return this.data$?this.data$:this.data$=v("https://jsonplaceholder.typicode.com/posts/1").pipe(l())}};u.\u0275fac=function(e){return new(e||u)},u.\u0275prov=d({token:u,factory:u.\u0275fac,providedIn:"root"});let t=u;return t})();var a=(()=>{let u=class u{constructor(i){this.myservice=i}ngOnDestroy(){this.subscription?.unsubscribe()}newSubscribe(){this.subscription?.unsubscribe(),this.subscription=this.myservice.getData().subscribe(y)}};u.\u0275fac=function(e){return new(e||u)(h(m))},u.\u0275cmp=E({type:u,selectors:[["app-task-3"]],features:[D([m])],decls:11,vars:0,consts:[[3,"click"]],template:function(e,x){e&1&&(r(0,"h2"),n(1,"\u041A\u0435\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445"),o(),r(2,"p"),n(3,"\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u043F\u043E\u0442\u043E\u043A \u0434\u0430\u043D\u043D\u044B\u0445, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 Observable, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0434\u0435\u043B\u0430\u0435\u0442 \u0437\u0430\u043F\u0440\u043E\u0441 \u043A API \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435. \u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043A\u0435\u0448\u0438\u0440\u0443\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0438\u0445 \u043F\u0440\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430\u0445 \u0431\u0435\u0437 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043A API (\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044B RxJS)."),o(),F(4,"hr"),r(5,"h3")(6,"em"),n(7,"See console to view results"),o()(),r(8,"div")(9,"button",0),b("click",function(){return x.newSubscribe()}),n(10,"New subscribe"),o()())}});let t=u;return t})();var g=[{path:"",component:a}],C=(()=>{let u=class u{};u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=c({type:u}),u.\u0275inj=s({imports:[p.forChild(g),p]});let t=u;return t})();var J=(()=>{let u=class u{};u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=c({type:u,bootstrap:[a]}),u.\u0275inj=s({imports:[B,C]});let t=u;return t})();export{J as Task3Module};
