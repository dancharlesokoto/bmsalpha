(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{GZeB:function(t,e,s){"use strict";s.r(e),s.d(e,"DashboardModule",(function(){return d}));var i=s("ofXK"),a=s("1kSV"),c=s("M0ag"),n=s("tyNb"),o=s("ZZ88"),r=s("fXoL"),l=s("4BSX");function u(t,e){if(1&t){const t=r.Sb();r.Rb(0,"ngb-alert",9),r.dc("close",(function(){r.tc(t);const s=e.$implicit;return r.fc().closeAlert(s)})),r.Bc(1),r.Qb()}if(2&t){const t=e.$implicit;r.kc("type",t.type),r.zb(1),r.Cc(t.message)}}const b=[{path:"",component:(()=>{class t{constructor(){this.alerts=[],this.alerts.push({id:1,type:"success",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"},{id:2,type:"warning",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"})}ngOnInit(){}closeAlert(t){const e=this.alerts.indexOf(t);this.alerts.splice(e,1)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-dashboard"]],decls:20,vars:14,consts:[[1,"text-muted"],[1,"row"],[1,"col-xl-4","col-lg-12"],[3,"bgClass","count","icon","label"],[1,"col-lg-12"],[1,"card","card-default"],[1,"card-header"],[1,"fa","fa-clock-o","fa-fw"],[3,"type","close",4,"ngFor","ngForOf"],[3,"type","close"]],template:function(t,e){1&t&&(r.Rb(0,"div"),r.Rb(1,"h2",0),r.Bc(2,"Dashboard Overview"),r.Qb(),r.Nb(3,"hr"),r.Rb(4,"div",1),r.Rb(5,"div",2),r.Nb(6,"app-stat",3),r.Qb(),r.Rb(7,"div",2),r.Nb(8,"app-stat",3),r.Qb(),r.Rb(9,"div",2),r.Nb(10,"app-stat",3),r.Qb(),r.Qb(),r.Nb(11,"hr"),r.Rb(12,"div",1),r.Rb(13,"div",4),r.Rb(14,"div",5),r.Rb(15,"div",6),r.Nb(16,"i",7),r.Bc(17," Notifications Timeline"),r.Qb(),r.zc(18,u,2,2,"ngb-alert",8),r.Nb(19,"hr"),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&t&&(r.kc("@routerTransition",void 0),r.zb(6),r.kc("bgClass","primary")("count",26)("icon","fa-money")("label","Top Ups"),r.zb(2),r.kc("bgClass","warning")("count",12)("icon","fa-user")("label","Sub-Admins"),r.zb(2),r.kc("bgClass","success")("count",124)("icon","fa-group")("label","Users"),r.zb(8),r.kc("ngForOf",e.alerts))},directives:[l.a,i.k,a.b],styles:[""],data:{animation:[Object(o.a)()]}}),t})()}];let p=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},imports:[[n.e.forChild(b)],n.e]}),t})(),d=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},imports:[[i.b,a.e,a.c,p,c.c]]}),t})()}}]);