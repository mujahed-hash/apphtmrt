"use strict";(self.webpackChunkhmfront=self.webpackChunkhmfront||[]).push([[8208],{8208:(R,a,c)=>{c.r(a),c.d(a,{ReqSupModule:()=>M});var u=c(6814),l=c(3403),e=c(5879),p=c(6940);const m=function(n){return["/supplier/sup-requested/",n]};function g(n,r){if(1&n&&(e.TgZ(0,"button",6),e._uU(1,"View"),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("routerLink",e.VKq(1,m,t.customIdentifier))}}function _(n,r){if(1&n&&(e.TgZ(0,"div",2)(1,"div",3)(2,"p"),e._uU(3),e.qZA()(),e.TgZ(4,"div",4),e.YNc(5,g,2,3,"button",5),e.qZA()()),2&n){const t=r.$implicit,i=e.oxw();e.xp6(3),e.hij("",i.truncateText(t.reqDetails,15),".."),e.xp6(2),e.Q6J("ngIf",t.reqDetails.length>1)}}let h=(()=>{class n{constructor(t){this.requirementService=t}ngOnInit(){this.token=localStorage.getItem("token"),this.loadForwardedRequirements()}loadForwardedRequirements(){this.requirementService.getForwardedRequirementsToSupplier(this.token).subscribe(t=>{this.requirements=t,console.log(t)})}truncateText(t,i){return t.length>i?t.substring(0,i)+"...":t}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(p.b))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-req-sup"]],decls:2,vars:1,consts:[[1,"requests"],["class","request",4,"ngFor","ngForOf"],[1,"request"],[1,"r-s-t"],[1,"r-s-btn"],["class","v-b",3,"routerLink",4,"ngIf"],[1,"v-b",3,"routerLink"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e.YNc(1,_,6,2,"div",1),e.qZA()),2&i&&(e.xp6(1),e.Q6J("ngForOf",o.requirements))},dependencies:[u.sg,u.O5,l.rH],styles:[".requests[_ngcontent-%COMP%]{width:100%;display:flex;gap:2px}.request[_ngcontent-%COMP%]{width:15%;display:inline-block;margin:1rem;border:1px solid #161D6F;border-radius:20px}.requests[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;left:1rem}.r-s-btn[_ngcontent-%COMP%]{width:100%;text-align:center}.request[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:8px;padding:8px 0;width:90%;border:none;margin-bottom:.4rem}.f-d[_ngcontent-%COMP%]{background-color:#bde8ca;color:#0d7c66;font-weight:700}.f-s[_ngcontent-%COMP%]{background-color:#e9efec;color:#16325b;font-weight:700}.f-s[_ngcontent-%COMP%]:hover{background-color:#16325b;color:#e9efec;font-weight:700}"]})}return n})();var s=c(6223);function f(n,r){if(1&n&&(e.TgZ(0,"div",20)(1,"h4"),e._uU(2,"Image Preview:"),e.qZA(),e._UZ(3,"img",21),e.qZA()),2&n){const t=e.oxw(3);e.xp6(3),e.Q6J("src",t.imagePreview,e.LSH)}}function q(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",8)(2,"h3",9),e._uU(3,"Post Product Information"),e.qZA(),e.TgZ(4,"form",10),e.NdJ("ngSubmit",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.postProductInfo())}),e.TgZ(5,"div",11)(6,"label",12),e._uU(7,"Product Details:"),e.qZA(),e.TgZ(8,"textarea",13),e.NdJ("ngModelChange",function(o){e.CHM(t);const d=e.oxw(2);return e.KtG(d.name=o)}),e._uU(9,"            "),e.qZA()(),e.TgZ(10,"div",11)(11,"label",14),e._uU(12,"Price:"),e.qZA(),e.TgZ(13,"input",15),e.NdJ("ngModelChange",function(o){e.CHM(t);const d=e.oxw(2);return e.KtG(d.price=o)}),e.qZA()(),e.YNc(14,f,4,1,"div",16),e.TgZ(15,"div",11)(16,"label",17),e._uU(17,"Product Image:"),e.qZA(),e.TgZ(18,"input",18),e.NdJ("change",function(o){e.CHM(t);const d=e.oxw(2);return e.KtG(d.onFileChange(o))}),e.qZA()(),e.TgZ(19,"div",9)(20,"button",19),e._uU(21,"Submit Product Info"),e.qZA()()()()()}if(2&n){const t=e.oxw(2);e.xp6(8),e.Q6J("ngModel",t.name),e.xp6(5),e.Q6J("ngModel",t.price),e.xp6(1),e.Q6J("ngIf",t.imagePreview),e.xp6(6),e.Q6J("disabled",!t.isFormValid())}}function x(n,r){if(1&n&&(e.TgZ(0,"div",22)(1,"div",8)(2,"h3",4),e._uU(3,"Posted Product Information"),e.qZA(),e.TgZ(4,"p")(5,"strong"),e._uU(6,"Name:"),e.qZA(),e._uU(7),e.qZA(),e.TgZ(8,"p")(9,"strong"),e._uU(10,"Price:"),e.qZA(),e._uU(11),e.qZA(),e.TgZ(12,"p")(13,"strong"),e._uU(14,"Status:"),e.qZA(),e._uU(15),e.qZA(),e.TgZ(16,"div",23),e._UZ(17,"img",24),e.qZA()()()),2&n){const t=e.oxw(2);e.xp6(7),e.hij(" ",t.SubmittedProd.name,""),e.xp6(4),e.hij(" ",t.SubmittedProd.price,""),e.xp6(4),e.hij(" ",t.SubmittedProd.status,""),e.xp6(2),e.Q6J("src",t.SubmittedProd.image,e.LSH)}}function v(n,r){if(1&n&&(e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"h2",4),e._uU(4,"Requirement Details"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"Details: "),e.qZA(),e.TgZ(7,"p",5),e._uU(8),e.qZA()()(),e.YNc(9,q,22,4,"div",6),e.YNc(10,x,18,4,"div",7),e.qZA()),2&n){const t=e.oxw();e.xp6(8),e.Oqu(t.requirement.reqDetails),e.xp6(1),e.Q6J("ngIf",1!=t.requirement.hasPosted),e.xp6(1),e.Q6J("ngIf",t.requirement.hasPosted)}}function P(n,r){1&n&&(e.TgZ(0,"div",5),e._uU(1,"Loading completed products..."),e.qZA())}function C(n,r){if(1&n&&(e.TgZ(0,"div",6),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.error)}}function b(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," status: "),e.TgZ(2,"strong"),e._uU(3,"Delivery Requested "),e.qZA()())}function S(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," status: "),e.TgZ(2,"strong"),e._uU(3,"Delivered "),e.qZA()())}function T(n,r){if(1&n&&(e.TgZ(0,"li",8)(1,"h3"),e._uU(2),e.ALo(3,"currency"),e.qZA(),e.TgZ(4,"p")(5,"strong"),e._uU(6,"Requirement:"),e.qZA(),e._uU(7),e.qZA(),e.YNc(8,b,4,0,"p",4),e.YNc(9,S,4,0,"p",4),e._UZ(10,"img",9),e.qZA()),2&n){const t=r.$implicit;e.xp6(2),e.AsE("",t.name," - ",e.xi3(3,7,t.price,"INR"),""),e.xp6(5),e.hij(" ",t.requirement.reqDetails,""),e.xp6(1),e.Q6J("ngIf","Completed"===t.status),e.xp6(1),e.Q6J("ngIf","Delivered"===t.status),e.xp6(1),e.s9C("alt",t.name),e.Q6J("src",t.image,e.LSH)}}function w(n,r){if(1&n&&(e.TgZ(0,"ul"),e.YNc(1,T,11,10,"li",7),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.completedProducts)}}const I=[{path:"sup-requirements",component:h},{path:"sup-requested/:customIdentifier",component:(()=>{class n{constructor(t,i){this.route=t,this.requirementService=i,this.name="",this.price=0,this.selectedFile=null,this.hasPosted=!1,this.imagePreview=null}ngOnInit(){this.token=localStorage.getItem("token"),this.customIdentifier=this.route.snapshot.params.customIdentifier,this.getReq()}getReq(){this.customIdentifier=this.route.snapshot.params.customIdentifier,console.log(this.customIdentifier),this.customIdentifier&&this.requirementService.getRequirementByCustomIdentifier(this.customIdentifier,this.token).subscribe(t=>{this.requirement=t,console.log(t),this.SubmittedProd=t.productSubmission})}onFileChange(t){if(this.selectedFile=t.target.files[0],this.selectedFile){const i=new FileReader;i.onload=()=>{this.imagePreview=i.result},i.readAsDataURL(this.selectedFile)}}isFormValid(){return!!this.name&&!!this.price&&!!this.selectedFile}postProductInfo(){this.selectedFile?this.requirementService.postProductInfo(this.requirement._id,this.name,this.price,this.selectedFile,this.token).subscribe(t=>{console.log(t.message),this.getReq(),this.hasPosted=!0}):console.log("No file selected.")}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(l.gz),e.Y36(p.b))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-post-sup-req"]],decls:1,vars:1,consts:[["class","container my-4",4,"ngIf"],[1,"container","my-4"],[1,"row"],[1,"col-12"],[1,"text-center"],[2,"max-width","85%"],["class","row",4,"ngIf"],["class","row mt-4",4,"ngIf"],[1,"col-12","col-md-8","offset-md-2"],[1,"text-center","mt-4"],[3,"ngSubmit"],[1,"form-group"],["for","name"],["id","name","name","name","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","price"],["id","price","type","number","name","price","required","",1,"form-control",3,"ngModel","ngModelChange"],["class","my-3 text-center",4,"ngIf"],["for","image"],["id","image","type","file","required","",1,"form-control",3,"change"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"my-3","text-center"],["alt","Image Preview",1,"img-fluid",2,"max-width","100px","height","auto",3,"src"],[1,"row","mt-4"],[1,"text-center","my-3"],["alt","Product Image",1,"img-fluid",2,"max-width","100px","height","auto",3,"src"]],template:function(i,o){1&i&&e.YNc(0,v,11,3,"div",0),2&i&&e.Q6J("ngIf",o.requirement)},dependencies:[u.O5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.Q7,s.On,s.F],styles:[".container[_ngcontent-%COMP%]{width:60%}.product-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.form-control[_ngcontent-%COMP%]{padding:.5rem;border:1px solid #ccc;border-radius:.25rem;width:100%}.img-preview[_ngcontent-%COMP%], .img-product[_ngcontent-%COMP%]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.img-preview[_ngcontent-%COMP%], .img-product[_ngcontent-%COMP%]{max-width:100%}}"]})}return n})()},{path:"sup-deliveries",component:(()=>{class n{constructor(t){this.productService=t,this.completedProducts=[],this.loading=!0,this.error=null}ngOnInit(){this.token=localStorage.getItem("token"),this.productService.getCompletedProductsForSupplier(this.token).subscribe({next:t=>{this.completedProducts=t,this.loading=!1,console.log(t)},error:t=>{this.error=t.message||"Failed to load completed products",this.loading=!1}})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(p.b))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-sup-req-del"]],decls:7,vars:3,consts:[[1,"component-container"],[1,"delivery"],["class","loading",4,"ngIf"],["class","error",4,"ngIf"],[4,"ngIf"],[1,"loading"],[1,"error"],["class","del-prod",4,"ngFor","ngForOf"],[1,"del-prod"],[1,"product-image",3,"src","alt"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Products Deliveries"),e.qZA(),e.YNc(4,P,2,0,"div",2),e.YNc(5,C,2,1,"div",3),e.YNc(6,w,2,1,"ul",4),e.qZA()()),2&i&&(e.xp6(4),e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",o.error),e.xp6(1),e.Q6J("ngIf",!o.loading&&!o.error))},dependencies:[u.sg,u.O5,u.H9],styles:[".component-container[_ngcontent-%COMP%], .delivery[_ngcontent-%COMP%]{width:100%}.del-prod[_ngcontent-%COMP%]{width:20%;height:18rem;display:inline-block;box-shadow:#63636333 0 2px 8px;padding:20px;margin:0 5px 5px}.del-prod[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:5rem;width:8rem;border-radius:7px;object-fit:cover}@media screen and (orientation: portrait){.del-prod[_ngcontent-%COMP%]{width:50%;position:relative;left:-1.3rem;padding:0 7px;margin:0}}"]})}return n})()}];let A=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(I),l.Bz]})}return n})(),M=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[u.ez,A,s.u5,s.UX]})}return n})()}}]);