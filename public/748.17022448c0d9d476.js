"use strict";(self.webpackChunkhmfront=self.webpackChunkhmfront||[]).push([[748],{2734:(w,m,d)=>{d.d(m,{g:()=>r});var l=d(5619),c=d(5879);let r=(()=>{class a{constructor(){this.notificationsSubject=new l.X([]),this.notifications$=this.notificationsSubject.asObservable()}addNotification(e,i){this.notificationsSubject.next([...this.notificationsSubject.value,{message:e,type:i}]),setTimeout(()=>{this.removeNotification()},3e3)}removeNotification(){const e=this.notificationsSubject.value;e.shift(),this.notificationsSubject.next([...e])}static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},4713:(w,m,d)=>{d.d(m,{s:()=>a});var l=d(5879),c=d(2332);const r=["*"];let a=(()=>{class t{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){this.getAttributes()}getAttributes(){const i=c.gb.isEmpty(this.label);this.role=i?void 0:"img",this.ariaLabel=i?void 0:this.label,this.ariaHidden=i}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=function(s){return new(s||t)};static \u0275cmp=l.Xpm({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-element","p-icon-wrapper"],inputs:{label:"label",spin:"spin",styleClass:"styleClass"},standalone:!0,features:[l.jDz],ngContentSelectors:r,decls:1,vars:0,template:function(s,n){1&s&&(l.F$t(),l.Hsn(0))},encapsulation:2,changeDetection:0})}return t})()},2076:(w,m,d)=>{d.d(m,{V:()=>c,p:()=>l});let l=(()=>{class r{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let i=e.trim().split(" ");for(let s=0;s<i.length;s++)t.classList.add(i[s])}else{let i=e.split(" ");for(let s=0;s<i.length;s++)t.className+=" "+i[s]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(s=>this.removeClass(t,s)))}static hasClass(t,e){return!(!t||!e)&&(t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className))}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,i=0;for(var s=0;s<e.length;s++){if(e[s]==t)return i;1==e[s].nodeType&&i++}return-1}static indexWithinGroup(t,e){let i=t.parentNode?t.parentNode.childNodes:[],s=0;for(var n=0;n<i.length;n++){if(i[n]==t)return s;i[n].attributes&&i[n].attributes[e]&&1==i[n].nodeType&&s++}return-1}static appendOverlay(t,e,i="self"){"self"!==i&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,i="self",s=!0){t&&e&&(s&&(t.style.minWidth=`${r.getOuterWidth(e)}px`),"self"===i?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e){const i=v=>{if(v)return"relative"===getComputedStyle(v).getPropertyValue("position")?v:i(v.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),n=e.offsetHeight,o=e.getBoundingClientRect(),u=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),h=this.getViewport(),y=i(t)?.getBoundingClientRect()||{top:-1*u,left:-1*f};let g,b;o.top+n+s.height>h.height?(g=o.top-y.top-s.height,t.style.transformOrigin="bottom",o.top+g<0&&(g=-1*o.top)):(g=n+o.top-y.top,t.style.transformOrigin="top");const C=o.left+s.width-h.width;b=s.width>h.width?-1*(o.left-y.left):C>0?o.left-y.left-C:o.left-y.left,t.style.top=g+"px",t.style.left=b+"px"}static absolutePosition(t,e){const i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=i.height,n=i.width,o=e.offsetHeight,u=e.offsetWidth,f=e.getBoundingClientRect(),h=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),y=this.getViewport();let g,b;f.top+o+s>y.height?(g=f.top+h-s,t.style.transformOrigin="bottom",g<0&&(g=h)):(g=o+f.top+h,t.style.transformOrigin="top"),b=f.left+n>y.width?Math.max(0,f.left+p+u-n):f.left+p,t.style.top=g+"px",t.style.left=b+"px"}static getParents(t,e=[]){return null===t.parentNode?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let i=this.getParents(t);const s=/(auto|scroll)/,n=o=>{let u=window.getComputedStyle(o,null);return s.test(u.getPropertyValue("overflow"))||s.test(u.getPropertyValue("overflowX"))||s.test(u.getPropertyValue("overflowY"))};for(let o of i){let u=1===o.nodeType&&o.dataset.scrollselectors;if(u){let f=u.split(",");for(let h of f){let p=this.findSingle(o,h);p&&n(p)&&e.push(p)}}9!==o.nodeType&&n(o)&&e.push(o)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementDimensions(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}static scrollInView(t,e){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),s=i?parseFloat(i):0,n=getComputedStyle(t).getPropertyValue("paddingTop"),o=n?parseFloat(n):0,u=t.getBoundingClientRect(),h=e.getBoundingClientRect().top+document.body.scrollTop-(u.top+document.body.scrollTop)-s-o,p=t.scrollTop,y=t.clientHeight,g=this.getOuterHeight(e);h<0?t.scrollTop=p+h:h+g>y&&(t.scrollTop=p+h-y+g)}static fadeIn(t,e){t.style.opacity=0;let i=+new Date,s=0,n=function(){s=+t.style.opacity.replace(",",".")+((new Date).getTime()-i)/e,t.style.opacity=s,i=+new Date,+s<1&&(window.requestAnimationFrame&&requestAnimationFrame(n)||setTimeout(n,16))};n()}static fadeOut(t,e){var i=1,o=50/e;let u=setInterval(()=>{(i-=o)<=0&&(i=0,clearInterval(u)),t.style.opacity=i},50)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var i=Element.prototype;return(i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(n){return-1!==[].indexOf.call(document.querySelectorAll(n),this)}).call(t,e)}static getOuterWidth(t,e){let i=t.offsetWidth;if(e){let s=getComputedStyle(t);i+=parseFloat(s.marginLeft)+parseFloat(s.marginRight)}return i}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,i=getComputedStyle(t);return e+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),e}static width(t){let e=t.offsetWidth,i=getComputedStyle(t);return e-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,i=getComputedStyle(t);return e+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),e}static getOuterHeight(t,e){let i=t.offsetHeight;if(e){let s=getComputedStyle(t);i+=parseFloat(s.marginTop)+parseFloat(s.marginBottom)}return i}static getHeight(t){let e=t.offsetHeight,i=getComputedStyle(t);return e-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,i=getComputedStyle(t);return e-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),e}static getViewport(){let t=window,e=document,i=e.documentElement,s=e.getElementsByTagName("body")[0];return{width:t.innerWidth||i.clientWidth||s.clientWidth,height:t.innerHeight||i.clientHeight||s.clientHeight}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent;return t.indexOf("MSIE ")>0||(t.indexOf("Trident/")>0?(t.indexOf("rv:"),!0):t.indexOf("Edge/")>0)}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else{if(!(e&&e.el&&e.el.nativeElement))throw"Cannot append "+e+" to "+t;e.el.nativeElement.appendChild(t)}}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else{if(!e.el||!e.el.nativeElement)throw"Cannot remove "+t+" from "+e;e.el.nativeElement.removeChild(t)}}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}{if(null!==this.calculatedScrollbarWidth)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(null!==this.calculatedScrollbarHeight)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,i){t[e].apply(t,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||null===t.offsetParent}static isVisible(t){return t&&null!=t.offsetParent}static isExist(t){return null!==t&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableElements(t,e=""){let i=this.find(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},\n                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},\n                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),s=[];for(let n of i)"none"!=getComputedStyle(n).display&&"hidden"!=getComputedStyle(n).visibility&&s.push(n);return s}static getFirstFocusableElement(t,e){const i=this.getFocusableElements(t,e);return i.length>0?i[0]:null}static getLastFocusableElement(t,e){const i=this.getFocusableElements(t,e);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,e=!1){const i=r.getFocusableElements(t);let s=0;if(i&&i.length>0){const n=i.indexOf(i[0].ownerDocument.activeElement);e?s=-1==n||0===n?i.length-1:n-1:-1!=n&&n!==i.length-1&&(s=n+1)}return i[s]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return e?.nextElementSibling;case"@prev":return e?.previousElementSibling;case"@parent":return e?.parentElement;case"@grandparent":return e?.parentElement.parentElement;default:const i=typeof t;if("string"===i)return document.querySelector(t);if("object"===i&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;const n=(o=t)&&o.constructor&&o.call&&o.apply?t():t;return n&&9===n.nodeType||this.isExist(n)?n:null}var o}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){const i=t.getAttribute(e);return isNaN(i)?"true"===i||"false"===i?"true"===i:i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}}return r})();class c{element;listener;scrollableParents;constructor(a,t=(()=>{})){this.element=a,this.listener=t}bindScrollListener(){this.scrollableParents=l.getScrollableParents(this.element);for(let a=0;a<this.scrollableParents.length;a++)this.scrollableParents[a].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let a=0;a<this.scrollableParents.length;a++)this.scrollableParents[a].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}},8717:(w,m,d)=>{d.d(m,{L:()=>a});var l=d(5879),c=d(4713),r=d(2332);let a=(()=>{class t extends c.s{pathId;ngOnInit(){this.pathId="url(#"+(0,r.Th)()+")"}static \u0275fac=function(){let i;return function(n){return(i||(i=l.n5z(t)))(n||t)}}();static \u0275cmp=l.Xpm({type:t,selectors:[["SpinnerIcon"]],standalone:!0,features:[l.qOj,l.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(s,n){1&s&&(l.O4$(),l.TgZ(0,"svg",0)(1,"g"),l._UZ(2,"path",1),l.qZA(),l.TgZ(3,"defs")(4,"clipPath",2),l._UZ(5,"rect",3),l.qZA()()()),2&s&&(l.Tol(n.getClassNames()),l.uIk("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),l.xp6(1),l.uIk("clip-path",n.pathId),l.xp6(3),l.Q6J("id",n.pathId))},encapsulation:2})}return t})()},7778:(w,m,d)=>{d.d(m,{q:()=>r});var l=d(5879),c=d(4713);let r=(()=>{class a extends c.s{static \u0275fac=function(){let e;return function(s){return(e||(e=l.n5z(a)))(s||a)}}();static \u0275cmp=l.Xpm({type:a,selectors:[["TimesIcon"]],standalone:!0,features:[l.qOj,l.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,s){1&i&&(l.O4$(),l.TgZ(0,"svg",0),l._UZ(1,"path",1),l.qZA()),2&i&&(l.Tol(s.getClassNames()),l.uIk("aria-label",s.ariaLabel)("aria-hidden",s.ariaHidden)("role",s.role))},encapsulation:2})}return a})()},4480:(w,m,d)=>{d.d(m,{H:()=>t,T:()=>e});var l=d(6814),c=d(5879),r=d(2076),a=d(5219);let t=(()=>{class i{document;platformId;renderer;el;zone;config;constructor(n,o,u,f,h,p){this.document=n,this.platformId=o,this.renderer=u,this.el=f,this.zone=h,this.config=p}animationListener;mouseDownListener;timeout;ngAfterViewInit(){(0,l.NF)(this.platformId)&&this.config&&this.config.ripple&&this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))})}onMouseDown(n){let o=this.getInk();if(!o||"none"===this.document.defaultView?.getComputedStyle(o,null).display)return;if(r.p.removeClass(o,"p-ink-active"),!r.p.getHeight(o)&&!r.p.getWidth(o)){let p=Math.max(r.p.getOuterWidth(this.el.nativeElement),r.p.getOuterHeight(this.el.nativeElement));o.style.height=p+"px",o.style.width=p+"px"}let u=r.p.getOffset(this.el.nativeElement),f=n.pageX-u.left+this.document.body.scrollTop-r.p.getWidth(o)/2,h=n.pageY-u.top+this.document.body.scrollLeft-r.p.getHeight(o)/2;this.renderer.setStyle(o,"top",h+"px"),this.renderer.setStyle(o,"left",f+"px"),r.p.addClass(o,"p-ink-active"),this.timeout=setTimeout(()=>{let p=this.getInk();p&&r.p.removeClass(p,"p-ink-active")},401)}getInk(){const n=this.el.nativeElement.children;for(let o=0;o<n.length;o++)if("string"==typeof n[o].className&&-1!==n[o].className.indexOf("p-ink"))return n[o];return null}resetInk(){let n=this.getInk();n&&r.p.removeClass(n,"p-ink-active")}onAnimationEnd(n){this.timeout&&clearTimeout(this.timeout),r.p.removeClass(n.currentTarget,"p-ink-active")}create(){let n=this.renderer.createElement("span");this.renderer.addClass(n,"p-ink"),this.renderer.appendChild(this.el.nativeElement,n),this.renderer.setAttribute(n,"aria-hidden","true"),this.renderer.setAttribute(n,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(n,"animationend",this.onAnimationEnd.bind(this)))}remove(){let n=this.getInk();n&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,r.p.removeElement(n))}ngOnDestroy(){this.config&&this.config.ripple&&this.remove()}static \u0275fac=function(o){return new(o||i)(c.Y36(l.K0),c.Y36(c.Lbi),c.Y36(c.Qsj),c.Y36(c.SBq),c.Y36(c.R0b),c.Y36(a.b4,8))};static \u0275dir=c.lG2({type:i,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple","p-element"]})}return i})(),e=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=c.oAB({type:i});static \u0275inj=c.cJS({imports:[l.ez]})}return i})()}}]);