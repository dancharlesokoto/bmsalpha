(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{AI8F:function(n,t,e){"use strict";e.r(t),e.d(t,"LayoutModule",(function(){return O}));var o=e("ofXK"),c=e("1kSV"),a=e("sYmb"),r=e("tyNb"),b=e("fXoL");const i=function(){return["/login"]};let s=(()=>{class n{constructor(n,t){this.translate=n,this.router=t,this.router.events.subscribe(n=>{n instanceof r.a&&window.innerWidth<=992&&this.isToggled()&&this.toggleSidebar()})}ngOnInit(){this.pushRightClass="push-right"}isToggled(){return document.querySelector("body").classList.contains(this.pushRightClass)}toggleSidebar(){document.querySelector("body").classList.toggle(this.pushRightClass)}rltAndLtr(){document.querySelector("body").classList.toggle("rtl")}onLoggedout(){localStorage.removeItem("isLoggedin")}changeLang(n){this.translate.use(n)}}return n.\u0275fac=function(t){return new(t||n)(b.Mb(a.d),b.Mb(r.b))},n.\u0275cmp=b.Gb({type:n,selectors:[["app-header"]],decls:80,vars:44,consts:[[1,"navbar","navbar-expand-lg","fixed-top"],["href","#",1,"navbar-brand"],["type","button",1,"navbar-toggler",3,"click"],["aria-hidden","true",1,"fa","fa-bars","text-muted"],[1,"collapse","navbar-collapse"],[1,"form-inline","my-2","my-lg-0"],["type","text",1,"form-control","mr-sm-2",3,"placeholder"],[1,"navbar-nav","ml-auto"],["ngbDropdown","",1,"nav-item","dropdown"],["href","javascript:void(0)","ngbDropdownToggle","",1,"nav-link"],[1,"fa","fa-envelope"],[1,"caret"],[1,"sr-only"],["ngbDropdownMenu","",1,"dropdown-menu-right","messages"],[1,"media"],["alt","Generic placeholder image","src","http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg",1,"d-flex","align-self-center","mr-3"],[1,"media-body"],[1,"mt-0","mb-1"],[1,"small","text-muted"],[1,"fa","fa-clock-o"],[1,"last"],[1,"fa","fa-language"],["ngbDropdownMenu","",1,"dropdown-menu-right"],["href","javascript:void(0)",1,"dropdown-item",3,"click"],[1,"fa","fa-user"],["href","javascript:void(0)",1,"dropdown-item"],[1,"fa","fa-fw","fa-user"],[1,"fa","fa-fw","fa-envelope"],[1,"fa","fa-fw","fa-gear"],[1,"dropdown-item",3,"routerLink","click"],[1,"fa","fa-fw","fa-power-off"]],template:function(n,t){1&n&&(b.Rb(0,"nav",0),b.Rb(1,"a",1),b.Bc(2,"Balance Management System "),b.Qb(),b.Rb(3,"button",2),b.dc("click",(function(){return t.toggleSidebar()})),b.Nb(4,"i",3),b.Qb(),b.Rb(5,"div",4),b.Rb(6,"form",5),b.Nb(7,"input",6),b.gc(8,"translate"),b.Qb(),b.Rb(9,"ul",7),b.Rb(10,"li",8),b.Rb(11,"a",9),b.Nb(12,"i",10),b.Nb(13,"b",11),b.Rb(14,"span",12),b.Bc(15,"(current)"),b.Qb(),b.Qb(),b.Rb(16,"ul",13),b.Rb(17,"li",14),b.Nb(18,"img",15),b.Rb(19,"div",16),b.Rb(20,"h5",17),b.Bc(21,"John Smith"),b.Qb(),b.Rb(22,"p",18),b.Nb(23,"i",19),b.Bc(24," Yesterday at 4:32 PM"),b.Qb(),b.Rb(25,"p",20),b.Bc(26,"Lorem ipsum dolor sit amet, consectetur..."),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(27,"li",8),b.Rb(28,"a",9),b.Nb(29,"i",21),b.Bc(30),b.gc(31,"translate"),b.Nb(32,"b",11),b.Qb(),b.Rb(33,"div",22),b.Rb(34,"a",23),b.dc("click",(function(){return t.changeLang("en")})),b.Bc(35),b.gc(36,"translate"),b.Qb(),b.Rb(37,"a",23),b.dc("click",(function(){return t.changeLang("fr")})),b.Bc(38),b.gc(39,"translate"),b.Qb(),b.Rb(40,"a",23),b.dc("click",(function(){return t.changeLang("ur")})),b.Bc(41),b.gc(42,"translate"),b.Qb(),b.Rb(43,"a",23),b.dc("click",(function(){return t.changeLang("es")})),b.Bc(44),b.gc(45,"translate"),b.Qb(),b.Rb(46,"a",23),b.dc("click",(function(){return t.changeLang("it")})),b.Bc(47),b.gc(48,"translate"),b.Qb(),b.Rb(49,"a",23),b.dc("click",(function(){return t.changeLang("fa")})),b.Bc(50),b.gc(51,"translate"),b.Qb(),b.Rb(52,"a",23),b.dc("click",(function(){return t.changeLang("de")})),b.Bc(53),b.gc(54,"translate"),b.Qb(),b.Rb(55,"a",23),b.dc("click",(function(){return t.changeLang("zh-CHS")})),b.Bc(56),b.gc(57,"translate"),b.Qb(),b.Qb(),b.Qb(),b.Rb(58,"li",8),b.Rb(59,"a",9),b.Nb(60,"i",24),b.Bc(61," John Smith "),b.Nb(62,"b",11),b.Qb(),b.Rb(63,"div",22),b.Rb(64,"a",25),b.Nb(65,"i",26),b.Bc(66),b.gc(67,"translate"),b.Qb(),b.Rb(68,"a",25),b.Nb(69,"i",27),b.Bc(70),b.gc(71,"translate"),b.Qb(),b.Rb(72,"a",25),b.Nb(73,"i",28),b.Bc(74),b.gc(75,"translate"),b.Qb(),b.Rb(76,"a",29),b.dc("click",(function(){return t.onLoggedout()})),b.Nb(77,"i",30),b.Bc(78),b.gc(79,"translate"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&n&&(b.zb(7),b.lc("placeholder",b.hc(8,15,"Search")),b.zb(23),b.Dc(" ",b.hc(31,17,"Language")," "),b.zb(5),b.Dc(" ",b.hc(36,19,"English")," "),b.zb(3),b.Dc(" ",b.hc(39,21,"French")," "),b.zb(3),b.Dc(" ",b.hc(42,23,"Urdu")," "),b.zb(3),b.Dc(" ",b.hc(45,25,"Spanish")," "),b.zb(3),b.Dc(" ",b.hc(48,27,"Italian")," "),b.zb(3),b.Dc(" ",b.hc(51,29,"Farsi")," "),b.zb(3),b.Dc(" ",b.hc(54,31,"German")," "),b.zb(3),b.Dc(" ",b.hc(57,33,"Simplified Chinese")," "),b.zb(10),b.Dc(" ",b.hc(67,35,"Profile")," "),b.zb(4),b.Dc(" ",b.hc(71,37,"Inbox")," "),b.zb(4),b.Dc(" ",b.hc(75,39,"Settings")," "),b.zb(2),b.kc("routerLink",b.nc(43,i)),b.zb(2),b.Dc(" ",b.hc(79,41,"Log Out")," "))},directives:[c.n,c.g,c.j,c.h,r.d],pipes:[a.c],styles:["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]{background-color:#222}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#999}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]{width:300px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:5px 10px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;font-weight:600}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{font-size:12px;margin:0}"]}),n})();const l=function(n,t){return{sidebarPushRight:n,collapsed:t}},d=function(){return["router-link-active"]},g=function(){return["/user/balance"]},p=function(){return["/user/topup-user"]},u=function(){return["/user/topup-history"]},h=function(){return["/user/profile"]},f=function(){return["/login"]},m=function(n){return{collapsed:n}};let R=(()=>{class n{constructor(n,t){this.translate=n,this.router=t,this.collapsedEvent=new b.n,this.router.events.subscribe(n=>{n instanceof r.a&&window.innerWidth<=992&&this.isToggled()&&this.toggleSidebar()})}ngOnInit(){this.isActive=!1,this.collapsed=!1,this.showMenu="",this.pushRightClass="push-right"}eventCalled(){this.isActive=!this.isActive}addExpandClass(n){this.showMenu=n===this.showMenu?"0":n}toggleCollapsed(){this.collapsed=!this.collapsed,this.collapsedEvent.emit(this.collapsed)}isToggled(){return document.querySelector("body").classList.contains(this.pushRightClass)}toggleSidebar(){document.querySelector("body").classList.toggle(this.pushRightClass)}rltAndLtr(){document.querySelector("body").classList.toggle("rtl")}changeLang(n){this.translate.use(n)}onLoggedout(){localStorage.removeItem("isLoggedin")}}return n.\u0275fac=function(t){return new(t||n)(b.Mb(a.d),b.Mb(r.b))},n.\u0275cmp=b.Gb({type:n,selectors:[["app-sidebar"]],outputs:{collapsedEvent:"collapsedEvent"},decls:114,vars:87,consts:[[1,"sidebar",3,"ngClass"],[1,"list-group"],["routerLink","/user/dashboard",1,"list-group-item",3,"routerLinkActive"],[1,"fa","fa-fw","fa-dashboard"],[1,"list-group-item",3,"routerLinkActive","routerLink"],[1,"fa","fa-fw","fa-desktop"],[1,"nested-menu"],[1,"list-group-item",3,"click"],[1,"fa","fa-plus"],[1,"nested"],[1,"submenu"],["href","javascript:void(0)",3,"routerLinkActive","routerLink"],[1,"fa","fa-monument"],[1,"header-fields"],[1,"fa","fa-arrows-h"],[1,"fa","fa-language"],[1,"caret"],["href","javascript:void(0)",3,"click"],[1,"fa","fa-user"],["href","javascript:void(0)"],[1,"fa","fa-fw","fa-user"],[1,"fa","fa-fw","fa-envelope"],[1,"fa","fa-fw","fa-gear"],[3,"routerLink","click"],[1,"fa","fa-fw","fa-power-off"],[1,"toggle-button",3,"ngClass","click"]],template:function(n,t){1&n&&(b.Rb(0,"nav",0),b.Rb(1,"div",1),b.Rb(2,"a",2),b.Nb(3,"i",3),b.Bc(4,"\xa0 "),b.Rb(5,"span"),b.Bc(6),b.gc(7,"translate"),b.Qb(),b.Qb(),b.Rb(8,"a",4),b.Nb(9,"i",5),b.Bc(10,"\xa0 "),b.Rb(11,"span"),b.Bc(12),b.gc(13,"translate"),b.Qb(),b.Qb(),b.Rb(14,"div",6),b.Rb(15,"a",7),b.dc("click",(function(){return t.addExpandClass("pages")})),b.Nb(16,"i",8),b.Bc(17,"\xa0 "),b.Rb(18,"span"),b.Bc(19),b.gc(20,"translate"),b.Qb(),b.Qb(),b.Rb(21,"li",9),b.Rb(22,"ul",10),b.Rb(23,"li"),b.Rb(24,"a",11),b.Nb(25,"i",12),b.Bc(26,"\xa0 "),b.Rb(27,"span"),b.Bc(28),b.gc(29,"translate"),b.Qb(),b.Qb(),b.Qb(),b.Rb(30,"li"),b.Rb(31,"a",11),b.Nb(32,"i",12),b.Bc(33,"\xa0 "),b.Rb(34,"span"),b.Bc(35),b.gc(36,"translate"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(37,"a",4),b.Nb(38,"i",5),b.Bc(39,"\xa0 "),b.Rb(40,"span"),b.Bc(41),b.gc(42,"translate"),b.Qb(),b.Qb(),b.Rb(43,"div",13),b.Rb(44,"a",7),b.dc("click",(function(){return t.rltAndLtr()})),b.Rb(45,"span"),b.Nb(46,"i",14),b.Bc(47,"\xa0 RTL/LTR"),b.Qb(),b.Qb(),b.Rb(48,"div",6),b.Rb(49,"a",7),b.dc("click",(function(){return t.addExpandClass("languages")})),b.Rb(50,"span"),b.Nb(51,"i",15),b.Bc(52),b.gc(53,"translate"),b.Nb(54,"b",16),b.Qb(),b.Qb(),b.Rb(55,"li",9),b.Rb(56,"ul",10),b.Rb(57,"li"),b.Rb(58,"a",17),b.dc("click",(function(){return t.changeLang("en")})),b.Bc(59),b.gc(60,"translate"),b.Qb(),b.Qb(),b.Rb(61,"li"),b.Rb(62,"a",17),b.dc("click",(function(){return t.changeLang("fr")})),b.Bc(63),b.gc(64,"translate"),b.Qb(),b.Qb(),b.Rb(65,"li"),b.Rb(66,"a",17),b.dc("click",(function(){return t.changeLang("es")})),b.Bc(67),b.gc(68,"translate"),b.Qb(),b.Qb(),b.Rb(69,"li"),b.Rb(70,"a",17),b.dc("click",(function(){return t.changeLang("it")})),b.Bc(71),b.gc(72,"translate"),b.Qb(),b.Qb(),b.Rb(73,"li"),b.Rb(74,"a",17),b.dc("click",(function(){return t.changeLang("de")})),b.Bc(75),b.gc(76,"translate"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(77,"div",6),b.Rb(78,"a",7),b.dc("click",(function(){return t.addExpandClass("profile")})),b.Rb(79,"span"),b.Nb(80,"i",18),b.Bc(81,"\xa0 John Smith"),b.Qb(),b.Qb(),b.Rb(82,"li",9),b.Rb(83,"ul",10),b.Rb(84,"li"),b.Rb(85,"a",19),b.Rb(86,"span"),b.Nb(87,"i",20),b.Bc(88),b.gc(89,"translate"),b.Qb(),b.Qb(),b.Qb(),b.Rb(90,"li"),b.Rb(91,"a",19),b.Rb(92,"span"),b.Nb(93,"i",21),b.Bc(94),b.gc(95,"translate"),b.Qb(),b.Qb(),b.Qb(),b.Rb(96,"li"),b.Rb(97,"a",19),b.Rb(98,"span"),b.Nb(99,"i",22),b.Bc(100),b.gc(101,"translate"),b.Qb(),b.Qb(),b.Qb(),b.Rb(102,"li"),b.Rb(103,"a",23),b.dc("click",(function(){return t.onLoggedout()})),b.Rb(104,"span"),b.Nb(105,"i",24),b.Bc(106),b.gc(107,"translate"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(108,"div",25),b.dc("click",(function(){return t.toggleCollapsed()})),b.Nb(109,"i"),b.Bc(110,"\xa0 "),b.Rb(111,"span"),b.Bc(112),b.gc(113,"translate"),b.Qb(),b.Qb(),b.Qb()),2&n&&(b.kc("ngClass",b.pc(72,l,t.isActive,t.collapsed)),b.zb(2),b.kc("routerLinkActive",b.nc(75,d)),b.zb(4),b.Cc(b.hc(7,38,"Dashboard")),b.zb(2),b.kc("routerLinkActive",b.nc(76,d))("routerLink",b.nc(77,g)),b.zb(4),b.Cc(b.hc(13,40,"Check Balance")),b.zb(7),b.Cc(b.hc(20,42,"Top Up")),b.zb(2),b.Eb("expand","pages"===t.showMenu),b.zb(3),b.kc("routerLinkActive",b.nc(78,d))("routerLink",b.nc(79,p)),b.zb(4),b.Cc(b.hc(29,44,"Top up Account")),b.zb(3),b.kc("routerLinkActive",b.nc(80,d))("routerLink",b.nc(81,u)),b.zb(4),b.Cc(b.hc(36,46,"Top Up History")),b.zb(2),b.kc("routerLinkActive",b.nc(82,d))("routerLink",b.nc(83,h)),b.zb(4),b.Cc(b.hc(42,48,"Profile")),b.zb(11),b.Dc("\xa0 ",b.hc(53,50,"Language")," "),b.zb(3),b.Eb("expand","languages"===t.showMenu),b.zb(4),b.Dc(" ",b.hc(60,52,"English")," "),b.zb(4),b.Dc(" ",b.hc(64,54,"French")," "),b.zb(4),b.Dc(" ",b.hc(68,56,"Spanish")," "),b.zb(4),b.Dc(" ",b.hc(72,58,"Italian")," "),b.zb(4),b.Dc(" ",b.hc(76,60,"German")," "),b.zb(7),b.Eb("expand","profile"===t.showMenu),b.zb(6),b.Dc(" ",b.hc(89,62,"Profile"),""),b.zb(6),b.Dc(" ",b.hc(95,64,"Inbox"),""),b.zb(6),b.Dc(" ",b.hc(101,66,"Settings"),""),b.zb(3),b.kc("routerLink",b.nc(84,f)),b.zb(3),b.Dc(" ",b.hc(107,68,"Log Out"),""),b.zb(2),b.kc("ngClass",b.oc(85,m,t.collapsed)),b.zb(1),b.Cb("fa fa-fw fa-angle-double-",t.collapsed?"right":"left",""),b.zb(3),b.Cc(b.hc(113,70,"Collapse Sidebar")))},directives:[o.j,r.d,r.c],pipes:[a.c],styles:[".sidebar[_ngcontent-%COMP%]{position:fixed;z-index:1000;top:56px;left:235px;width:235px;margin-left:-235px;margin-bottom:48px;border:none;border-radius:0;overflow-y:auto;background-color:#222;bottom:0;overflow-x:hidden;padding-bottom:40px;white-space:nowrap;transition:all .2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#222;border:0;border-radius:0;color:#999;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]{padding-top:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%]:first-child{border-top:1px solid hsla(0,0%,100%,.2)}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#222}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:1rem 1.5rem .75rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:none;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#151515}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radious:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#222;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#151515}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar[_ngcontent-%COMP%]{top:54px;left:0}}@media print{.sidebar[_ngcontent-%COMP%]{display:none!important}}@media (min-width:992px){.header-fields[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0 #fff;border-radius:3px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:3px;-webkit-box-shadow:inset 0 0 3px #fff}.toggle-button[_ngcontent-%COMP%]{position:fixed;width:236px;cursor:pointer;padding:12px;bottom:0;color:#999;background:#212529;border-top:1px solid #999;transition:all .2s ease-in-out}.toggle-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:23px}.toggle-button[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.collapsed[_ngcontent-%COMP%]{width:60px}.collapsed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}"]}),n})();const Q=function(n){return{collapsed:n}},C=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}receiveCollapsed(n){this.collapedSideBar=n}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=b.Gb({type:n,selectors:[["app-layout"]],decls:4,vars:3,consts:[[3,"collapsedEvent"],[1,"main-container",3,"ngClass"]],template:function(n,t){1&n&&(b.Nb(0,"app-header"),b.Rb(1,"app-sidebar",0),b.dc("collapsedEvent",(function(n){return t.receiveCollapsed(n)})),b.Qb(),b.Rb(2,"section",1),b.Nb(3,"router-outlet"),b.Qb()),2&n&&(b.zb(2),b.kc("ngClass",b.oc(1,Q,t.collapedSideBar)))},directives:[s,R,o.j,r.f],styles:["*[_ngcontent-%COMP%]{transition:margin-left .2s ease-in-out}.main-container[_ngcontent-%COMP%]{margin-top:56px;margin-left:235px;padding:15px;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}.collapsed[_ngcontent-%COMP%]{margin-left:60px}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}@media print{.main-container[_ngcontent-%COMP%]{margin-top:0!important;margin-left:0!important}}"]}),n})(),children:[{path:"",redirectTo:"dashboard",pathMatch:"prefix"},{path:"dashboard",loadChildren:()=>Promise.all([e.e(0),e.e(19)]).then(e.bind(null,"putL")).then(n=>n.DashboardModule)},{path:"components",loadChildren:()=>Promise.all([e.e(0),e.e(18)]).then(e.bind(null,"TDA/")).then(n=>n.BsComponentModule)},{path:"topup-user",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=b.Gb({type:n,selectors:[["app-topup-user"]],decls:15,vars:1,consts:[[1,"row"],[1,"col-lg-6"],["role","form"],[1,"form-group"],["disabled","","type","number","placeholder","@Username",1,"form-control"],["disabled","","type","number","placeholder","Balance",1,"form-control"],["type","number","placeholder","Top up Amount",1,"form-control"],["type","submit",1,"btn","btn-secondary"]],template:function(n,t){1&n&&(b.Rb(0,"div"),b.Rb(1,"h2"),b.Bc(2,"Topup Account"),b.Qb(),b.Rb(3,"div",0),b.Rb(4,"div",1),b.Rb(5,"form",2),b.Rb(6,"fieldset",3),b.Nb(7,"input",4),b.Qb(),b.Rb(8,"fieldset",3),b.Nb(9,"input",5),b.Qb(),b.Rb(10,"fieldset",3),b.Nb(11,"input",6),b.Qb(),b.Rb(12,"div",3),b.Rb(13,"button",7),b.Bc(14,"Topup"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&n&&b.kc("@routerTransition",void 0)},styles:[""]}),n})()},{path:"topup-history",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=b.Gb({type:n,selectors:[["app-topup-history"]],decls:56,vars:1,consts:[[1,"row"],[1,"col","col-xl-12","col-lg-12"],[1,"card","mb-3"],[1,"card-header"],[1,"card-body","table-responsive"],[1,"table"],["scope","row"]],template:function(n,t){1&n&&(b.Rb(0,"div"),b.Rb(1,"div",0),b.Rb(2,"div",1),b.Rb(3,"div",2),b.Rb(4,"div",3),b.Bc(5," Topup Activities "),b.Qb(),b.Rb(6,"div",4),b.Rb(7,"table",5),b.Rb(8,"thead"),b.Rb(9,"tr"),b.Rb(10,"th"),b.Bc(11,"#"),b.Qb(),b.Rb(12,"th"),b.Bc(13,"Username"),b.Qb(),b.Rb(14,"th"),b.Bc(15,"Amount"),b.Qb(),b.Rb(16,"th"),b.Bc(17,"Sender"),b.Qb(),b.Rb(18,"th"),b.Bc(19,"Date"),b.Qb(),b.Nb(20,"th"),b.Nb(21,"th"),b.Qb(),b.Qb(),b.Rb(22,"tbody"),b.Rb(23,"tr"),b.Rb(24,"th",6),b.Bc(25,"1"),b.Qb(),b.Rb(26,"td"),b.Bc(27,"@mdo"),b.Qb(),b.Rb(28,"th"),b.Bc(29,"$100"),b.Qb(),b.Rb(30,"th"),b.Bc(31,"Admin"),b.Qb(),b.Rb(32,"th"),b.Bc(33,"Date"),b.Qb(),b.Qb(),b.Rb(34,"tr"),b.Rb(35,"th",6),b.Bc(36,"2"),b.Qb(),b.Rb(37,"td"),b.Bc(38,"@fat"),b.Qb(),b.Rb(39,"th"),b.Bc(40,"$100"),b.Qb(),b.Rb(41,"th"),b.Bc(42,"Admin"),b.Qb(),b.Rb(43,"th"),b.Bc(44,"Date"),b.Qb(),b.Qb(),b.Rb(45,"tr"),b.Rb(46,"th",6),b.Bc(47,"3"),b.Qb(),b.Rb(48,"td"),b.Bc(49,"@twitter"),b.Qb(),b.Rb(50,"th"),b.Bc(51,"$100"),b.Qb(),b.Rb(52,"th"),b.Bc(53,"Admin"),b.Qb(),b.Rb(54,"th"),b.Bc(55,"Date"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&n&&b.kc("@routerTransition",void 0)},styles:[""]}),n})()},{path:"profile",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=b.Gb({type:n,selectors:[["app-profile"]],decls:19,vars:1,consts:[[1,"row"],[1,"col-lg-6"],["role","form"],[1,"form-group"],["placeholder","James",1,"form-control"],["placeholder","Bond",1,"form-control"],["type","email","placeholder","james.bond@007.com",1,"form-control"],["type","tel","placeholder","+1 100000000000000",1,"form-control"],["rows","3","placeholder","Home Address",1,"form-control"],["type","submit",1,"btn","btn-secondary"]],template:function(n,t){1&n&&(b.Rb(0,"div"),b.Rb(1,"h2"),b.Bc(2,"Update User Profile"),b.Qb(),b.Rb(3,"div",0),b.Rb(4,"div",1),b.Rb(5,"form",2),b.Rb(6,"fieldset",3),b.Nb(7,"input",4),b.Qb(),b.Rb(8,"fieldset",3),b.Nb(9,"input",5),b.Qb(),b.Rb(10,"fieldset",3),b.Nb(11,"input",6),b.Qb(),b.Rb(12,"fieldset",3),b.Nb(13,"input",7),b.Qb(),b.Rb(14,"fieldset",3),b.Nb(15,"textarea",8),b.Qb(),b.Rb(16,"div",3),b.Rb(17,"button",9),b.Bc(18,"Update User"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&n&&b.kc("@routerTransition",void 0)},styles:[""]}),n})()},{path:"balance",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=b.Gb({type:n,selectors:[["app-balance"]],decls:68,vars:1,consts:[[1,"text-muted"],[1,"row"],[1,"col-lg-6"],["role","form"],[1,"form-group"],["disabled","","type","number","placeholder","Top up Balance",1,"form-control"],["type","submit",1,"btn","btn-primary"],[1,"col","col-xl-12","col-lg-12"],[1,"card","mb-3"],[1,"card-header"],[1,"card-body","table-responsive"],[1,"table"],["scope","row"]],template:function(n,t){1&n&&(b.Rb(0,"div"),b.Rb(1,"h2",0),b.Bc(2,"Topup Balance"),b.Qb(),b.Nb(3,"hr"),b.Rb(4,"div",1),b.Rb(5,"div",2),b.Rb(6,"form",3),b.Rb(7,"fieldset",4),b.Nb(8,"input",5),b.Qb(),b.Rb(9,"div",4),b.Rb(10,"button",6),b.Bc(11,"Check Balance"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Nb(12,"hr"),b.Rb(13,"div",1),b.Rb(14,"div",7),b.Rb(15,"div",8),b.Rb(16,"div",9),b.Bc(17," Topup Activities "),b.Qb(),b.Rb(18,"div",10),b.Rb(19,"table",11),b.Rb(20,"thead"),b.Rb(21,"tr"),b.Rb(22,"th"),b.Bc(23,"#"),b.Qb(),b.Rb(24,"th"),b.Bc(25,"Username"),b.Qb(),b.Rb(26,"th"),b.Bc(27,"Amount"),b.Qb(),b.Rb(28,"th"),b.Bc(29,"Sender"),b.Qb(),b.Rb(30,"th"),b.Bc(31,"Date"),b.Qb(),b.Nb(32,"th"),b.Nb(33,"th"),b.Qb(),b.Qb(),b.Rb(34,"tbody"),b.Rb(35,"tr"),b.Rb(36,"th",12),b.Bc(37,"1"),b.Qb(),b.Rb(38,"td"),b.Bc(39,"@mdo"),b.Qb(),b.Rb(40,"th"),b.Bc(41,"$100"),b.Qb(),b.Rb(42,"th"),b.Bc(43,"Admin"),b.Qb(),b.Rb(44,"th"),b.Bc(45,"Date"),b.Qb(),b.Qb(),b.Rb(46,"tr"),b.Rb(47,"th",12),b.Bc(48,"2"),b.Qb(),b.Rb(49,"td"),b.Bc(50,"@fat"),b.Qb(),b.Rb(51,"th"),b.Bc(52,"$100"),b.Qb(),b.Rb(53,"th"),b.Bc(54,"Admin"),b.Qb(),b.Rb(55,"th"),b.Bc(56,"Date"),b.Qb(),b.Qb(),b.Rb(57,"tr"),b.Rb(58,"th",12),b.Bc(59,"3"),b.Qb(),b.Rb(60,"td"),b.Bc(61,"@twitter"),b.Qb(),b.Rb(62,"th"),b.Bc(63,"$100"),b.Qb(),b.Rb(64,"th"),b.Bc(65,"Admin"),b.Qb(),b.Rb(66,"th"),b.Bc(67,"Date"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&n&&b.kc("@routerTransition",void 0)},styles:[""]}),n})()}]}];let M=(()=>{class n{}return n.\u0275mod=b.Kb({type:n}),n.\u0275inj=b.Jb({factory:function(t){return new(t||n)},imports:[[r.e.forChild(C)],r.e]}),n})(),O=(()=>{class n{}return n.\u0275mod=b.Kb({type:n}),n.\u0275inj=b.Jb({factory:function(t){return new(t||n)},imports:[[o.b,M,a.b,c.i]]}),n})()}}]);