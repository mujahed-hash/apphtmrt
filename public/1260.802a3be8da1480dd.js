"use strict";(self.webpackChunkhmfront=self.webpackChunkhmfront||[]).push([[1260],{1260:(L,p,l)=>{l.r(p),l.d(p,{ReqAdminModule:()=>z});var c=l(6814),m=l(3403),e=l(5879),u=l(2048);const g=function(n){return["/buyer/request-requirement/",n]};function _(n,r){if(1&n&&(e.TgZ(0,"button",8),e._uU(1,"View"),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("routerLink",e.VKq(1,g,t.customIdentifier))}}function f(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,s=e.oxw();return e.KtG(s.forwardToSuppliers(o._id))}),e._uU(1,"Forward to Suppliers"),e.qZA()}}function b(n,r){1&n&&(e.TgZ(0,"button",10),e._uU(1,"Forwarded"),e.qZA())}function h(n,r){if(1&n&&(e.TgZ(0,"button",10),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.status)}}function q(n,r){if(1&n&&(e.TgZ(0,"div",2)(1,"div",3)(2,"p"),e._uU(3),e.qZA()(),e.TgZ(4,"div",4),e.YNc(5,_,2,3,"button",5),e.YNc(6,f,2,0,"button",6),e.YNc(7,b,2,0,"button",7),e.YNc(8,h,2,1,"button",7),e.qZA()()),2&n){const t=r.$implicit,i=e.oxw();e.xp6(3),e.hij("",i.truncateText(t.reqDetails,15),".."),e.xp6(2),e.Q6J("ngIf",t.reqDetails.length>1),e.xp6(1),e.Q6J("ngIf","Pending"===t.status),e.xp6(1),e.Q6J("ngIf","Forwarded"===t.status),e.xp6(1),e.Q6J("ngIf","Forwarded"!==t.status&&"Pending"!==t.status)}}let x=(()=>{class n{constructor(t){this.adminService=t,this.token=localStorage.getItem("token")}ngOnInit(){this.getRequirements()}getRequirements(){this.adminService.getAllRequirements(this.token).subscribe(t=>{this.requirements=t,console.log(t)})}truncateText(t,i){return t.length>i?t.substring(0,i)+"...":t}forwardToSuppliers(t){this.adminService.forwardRequirement(t,this.token).subscribe(i=>{console.log(i),this.getRequirements()},i=>{})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(u.l))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-req-admin"]],decls:2,vars:1,consts:[[1,"requests"],["class","request",4,"ngFor","ngForOf"],[1,"request"],[1,"r-s-t"],[1,"r-s-btn"],["class","v-b",3,"routerLink",4,"ngIf"],["class","f-s",3,"click",4,"ngIf"],["class","f-d",4,"ngIf"],[1,"v-b",3,"routerLink"],[1,"f-s",3,"click"],[1,"f-d"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e.YNc(1,q,9,5,"div",1),e.qZA()),2&i&&(e.xp6(1),e.Q6J("ngForOf",o.requirements))},dependencies:[c.sg,c.O5,m.rH],styles:[".requests[_ngcontent-%COMP%]{width:100%;display:flex;gap:2px}.request[_ngcontent-%COMP%]{width:15%;display:inline-block;margin:1rem;border:1px solid #161D6F;border-radius:20px}.requests[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;left:1rem}.r-s-btn[_ngcontent-%COMP%]{width:100%;text-align:center}.request[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:8px;padding:8px 0;width:90%;border:none;margin-bottom:.4rem}.f-d[_ngcontent-%COMP%]{background-color:#bde8ca;color:#0d7c66;font-weight:700}.f-s[_ngcontent-%COMP%]{background-color:#e9efec;color:#16325b;font-weight:700}.f-s[_ngcontent-%COMP%]:hover{background-color:#16325b;color:#e9efec;font-weight:700}@media screen and (orientation: portrait){.requests[_ngcontent-%COMP%]{display:inline-block}.request[_ngcontent-%COMP%]{width:40%;display:inline-grid;height:10rem}}"]})}return n})();var d=l(6223);function v(n,r){if(1&n&&(e.TgZ(0,"div",5),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.errorMessage," ")}}function Z(n,r){1&n&&(e.TgZ(0,"div",6)(1,"p",7),e._uU(2,"Loading product submissions..."),e.qZA()())}function A(n,r){if(1&n&&(e.TgZ(0,"option",20),e._uU(1),e.qZA()),2&n){const t=r.$implicit,i=e.oxw(4);e.Q6J("value",t.requirement._id),e.xp6(1),e.hij(" ",i.truncateText(t.requirement.reqDetails,15),".. ")}}function C(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",17)(1,"select",18),e.NdJ("ngModelChange",function(o){e.CHM(t);const s=e.oxw().$implicit;return e.KtG(s.requirement._id=o)}),e.YNc(2,A,2,2,"option",19),e.qZA()()}if(2&n){const t=e.oxw().$implicit,i=e.oxw(2);e.xp6(1),e.MGl("id","requirementId-",t._id,""),e.Q6J("ngModel",t.requirement._id),e.xp6(1),e.Q6J("ngForOf",i.requirements)}}function T(n,r){1&n&&(e.TgZ(0,"button",21),e._uU(1,"Forward"),e.qZA())}function P(n,r){if(1&n&&(e.TgZ(0,"small",22),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.status)}}function O(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.ALo(9,"currency"),e.qZA(),e.TgZ(10,"td"),e._UZ(11,"img",12),e.qZA(),e.TgZ(12,"td")(13,"form",13),e.NdJ("ngSubmit",function(){const s=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.forwardSubmission(s._id,s.requirement._id,a.token))}),e.YNc(14,C,3,3,"div",14),e.TgZ(15,"div"),e.YNc(16,T,2,0,"button",15),e.YNc(17,P,2,1,"small",16),e.qZA()()()()}if(2&n){const t=r.$implicit,i=e.oxw(2);e.xp6(2),e.hij("",i.truncateText(t.requirement.reqDetails,15),".."),e.xp6(2),e.Oqu(t.supplier.name),e.xp6(2),e.Oqu(i.truncateText(t.name,15)),e.xp6(2),e.Oqu(e.xi3(9,9,t.price,"INR")),e.xp6(3),e.s9C("alt",t.name),e.Q6J("src",t.image,e.LSH),e.xp6(3),e.Q6J("ngIf","Pending"===t.status),e.xp6(2),e.Q6J("ngIf","Pending"===t.status),e.xp6(1),e.Q6J("ngIf","Pending"!==t.status)}}function w(n,r){if(1&n&&(e.TgZ(0,"div",8)(1,"table",9)(2,"thead",10)(3,"tr")(4,"th"),e._uU(5,"Requirement"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Supplier"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Product Detail"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Price"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Image"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Action"),e.qZA()()(),e.TgZ(16,"tbody"),e.YNc(17,O,18,12,"tr",11),e.qZA()()()),2&n){const t=e.oxw();e.xp6(17),e.Q6J("ngForOf",t.requirements)}}function y(n,r){1&n&&(e.TgZ(0,"div"),e._uU(1,"Loading..."),e.qZA())}function U(n,r){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.error)}}function S(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"li")(1,"p")(2,"strong"),e._uU(3,"Product Name:"),e.qZA(),e._uU(4),e.qZA(),e.TgZ(5,"p")(6,"strong"),e._uU(7,"Price:"),e.qZA(),e._uU(8),e.qZA(),e._UZ(9,"img",4),e.TgZ(10,"h3"),e._uU(11,"Supplier Details"),e.qZA(),e.TgZ(12,"p")(13,"strong"),e._uU(14,"Name:"),e.qZA(),e._uU(15),e.qZA(),e.TgZ(16,"p")(17,"strong"),e._uU(18,"Email:"),e.qZA(),e._uU(19),e.qZA(),e.TgZ(20,"p")(21,"strong"),e._uU(22,"Phone:"),e.qZA(),e._uU(23),e.qZA(),e.TgZ(24,"p")(25,"strong"),e._uU(26,"Address:"),e.qZA(),e._uU(27),e.qZA(),e.TgZ(28,"h3"),e._uU(29,"Buyer Details"),e.qZA(),e.TgZ(30,"p")(31,"strong"),e._uU(32,"Name:"),e.qZA(),e._uU(33),e.qZA(),e.TgZ(34,"p")(35,"strong"),e._uU(36,"Email:"),e.qZA(),e._uU(37),e.qZA(),e.TgZ(38,"p")(39,"strong"),e._uU(40,"Phone:"),e.qZA(),e._uU(41),e.qZA(),e.TgZ(42,"p")(43,"strong"),e._uU(44,"Address:"),e.qZA(),e._uU(45),e.qZA(),e.TgZ(46,"button",5),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.confirmDelivery(s._id))}),e._uU(47,"Confirm Delivery"),e.qZA()()}if(2&n){const t=r.$implicit;e.xp6(4),e.hij(" ",t.name,""),e.xp6(4),e.hij(" ",t.price,""),e.xp6(1),e.s9C("src",t.image,e.LSH),e.xp6(6),e.hij(" ",t.supplier.name,""),e.xp6(4),e.hij(" ",t.supplier.email,""),e.xp6(4),e.hij(" ",t.supplier.phone,""),e.xp6(4),e.xDo(" ",t.supplier.street,", ",t.supplier.apartment,", ",t.supplier.city,", ",t.supplier.zip,", ",t.supplier.country,""),e.xp6(6),e.hij(" ",t.requirement.buyer.name,""),e.xp6(4),e.hij(" ",t.requirement.buyer.email,""),e.xp6(4),e.hij(" ",t.requirement.buyer.phone,""),e.xp6(4),e.xDo(" ",t.requirement.buyer.street,", ",t.requirement.buyer.apartment,", ",t.requirement.buyer.city,", ",t.requirement.buyer.zip,", ",t.requirement.buyer.country,"")}}function D(n,r){if(1&n&&(e.TgZ(0,"div",2)(1,"h2"),e._uU(2,"Requested Deliveries"),e.qZA(),e.TgZ(3,"ul"),e.YNc(4,S,48,19,"li",3),e.qZA()()),2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.requestedSubmissions)}}function I(n,r){1&n&&(e.TgZ(0,"div")(1,"p"),e._uU(2,"No requested deliveries found."),e.qZA()())}function J(n,r){1&n&&(e.TgZ(0,"div",5),e._uU(1,"Loading completed products..."),e.qZA())}function N(n,r){if(1&n&&(e.TgZ(0,"div",6),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.error)}}function F(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," status: "),e.TgZ(2,"strong"),e._uU(3,"Delivery Requested "),e.qZA()())}function R(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," status: "),e.TgZ(2,"strong"),e._uU(3," Delivered "),e.qZA()())}function Q(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.updateDelivery(o.requirement._id,o._id))}),e._uU(1,"Mark Delivered"),e.qZA()}}function Y(n,r){1&n&&(e.TgZ(0,"button",13),e._uU(1,"Delivered"),e.qZA())}function j(n,r){if(1&n&&(e.TgZ(0,"li",8)(1,"h3"),e._uU(2),e.ALo(3,"currency"),e.qZA(),e.TgZ(4,"p")(5,"strong"),e._uU(6,"Requirement:"),e.qZA(),e._uU(7),e.qZA(),e.YNc(8,F,4,0,"p",4),e.YNc(9,R,4,0,"p",4),e._UZ(10,"img",9),e.YNc(11,Q,2,0,"button",10),e.YNc(12,Y,2,0,"button",11),e.qZA()),2&n){const t=r.$implicit;e.xp6(2),e.AsE("",t.name," - ",e.xi3(3,9,t.price,"INR"),""),e.xp6(5),e.hij(" ",t.requirement.reqDetails,""),e.xp6(1),e.Q6J("ngIf","Completed"===t.status),e.xp6(1),e.Q6J("ngIf","Delivered"===t.status),e.xp6(1),e.s9C("alt",t.name),e.Q6J("src",t.image,e.LSH),e.xp6(1),e.Q6J("ngIf","Completed"===t.status),e.xp6(1),e.Q6J("ngIf","Delivered"===t.status)}}function $(n,r){if(1&n&&(e.TgZ(0,"ul"),e.YNc(1,j,13,12,"li",7),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.completedProducts)}}const E=[{path:"admin-requirements",component:x},{path:"submitted-prod-info",component:(()=>{class n{constructor(t){this.adminService=t,this.requirements=[]}ngOnInit(){this.token=localStorage.getItem("token"),this.loadProductSubmissions()}loadProductSubmissions(){this.adminService.getProductSubmissions(this.token).subscribe(t=>{this.requirements=t.productSubmissions,console.log(t)})}truncateText(t,i){return t.length>i?t.substring(0,i)+"...":t}forwardSubmission(t,i,o){this.adminService.forwardProductSubmission(t,i,this.token).subscribe(s=>{alert("Product submission forwarded successfully"),this.loadProductSubmissions()},s=>{this.errorMessage=`Error forwarding product submission: ${s.message}`,console.error("Error details:",s)})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(u.l))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-prod-sub"]],decls:6,vars:3,consts:[[1,"container","my-5"],[1,"text-center","mb-4"],["class","alert alert-danger text-center",4,"ngIf"],["class","text-center",4,"ngIf"],["class","table-responsive",4,"ngIf"],[1,"alert","alert-danger","text-center"],[1,"text-center"],[1,"mt-2"],[1,"table-responsive"],[1,"table","table-striped","table-hover","align-middle"],[1,"table-dark"],[4,"ngFor","ngForOf"],["width","100",1,"img-fluid","rounded","shadow-sm",3,"src","alt"],[3,"ngSubmit"],["class","form-group",4,"ngIf"],["type","submit","class","btn btn-primary mt-2 w-100",4,"ngIf"],["class","btn btn-success mt-2 w-100",4,"ngIf"],[1,"form-group"],["name","requirementId","required","",1,"form-select",3,"id","ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","submit",1,"btn","btn-primary","mt-2","w-100"],[1,"btn","btn-success","mt-2","w-100"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Submitted Product Information"),e.qZA(),e.YNc(3,v,2,1,"div",2),e.YNc(4,Z,3,0,"div",3),e.YNc(5,w,18,1,"div",4),e.qZA()),2&i&&(e.xp6(3),e.Q6J("ngIf",o.errorMessage),e.xp6(1),e.Q6J("ngIf",!o.requirements.length&&!o.errorMessage),e.xp6(1),e.Q6J("ngIf",o.requirements.length))},dependencies:[c.sg,c.O5,d._Y,d.YN,d.Kr,d.EJ,d.JJ,d.JL,d.Q7,d.On,d.F,c.H9],styles:[".table[_ngcontent-%COMP%]{width:40rem;margin-bottom:1rem;color:#212529}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#f8f9fa}.img-fluid[_ngcontent-%COMP%]{max-width:100%;height:auto}.btn-primary[_ngcontent-%COMP%], .btn-success[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:700}.spinner-border[_ngcontent-%COMP%]{width:3rem;height:3rem}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:max-content}th[_ngcontent-%COMP%]{white-space:nowrap;text-align:left}.table[_ngcontent-%COMP%]{table-layout:auto}@media screen and (orientation: portrait){.table[_ngcontent-%COMP%]{width:50%;font-size:small;overflow:scroll}.table-responsive[_ngcontent-%COMP%]{overflow:scroll}}"]})}return n})()},{path:"deliveries-reqs",component:(()=>{class n{constructor(t){this.deliveryService=t,this.requestedSubmissions=[],this.loading=!1,this.error=""}ngOnInit(){this.token=localStorage.getItem("token"),this.getRequestedSubmissions()}getRequestedSubmissions(){this.loading=!0,this.deliveryService.getRequestedSubmissions(this.token).subscribe(t=>{this.requestedSubmissions=t,this.loading=!1,console.log(t)},t=>{this.error="Error fetching requested submissions",this.loading=!1})}confirmDelivery(t){this.deliveryService.confirmDelivery(t,this.token).subscribe(i=>{this.requestedSubmissions=this.requestedSubmissions.filter(o=>o._id!==t),alert("Delivery confirmed successfully!")},i=>{this.error="Error confirming delivery"})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(u.l))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-del-reqs"]],decls:4,vars:4,consts:[[4,"ngIf"],["class","del-req",4,"ngIf"],[1,"del-req"],[4,"ngFor","ngForOf"],["alt","",3,"src"],[3,"click"]],template:function(i,o){1&i&&(e.YNc(0,y,2,0,"div",0),e.YNc(1,U,2,1,"div",0),e.YNc(2,D,5,1,"div",1),e.YNc(3,I,3,0,"div",0)),2&i&&(e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",o.error),e.xp6(1),e.Q6J("ngIf",!o.loading&&o.requestedSubmissions.length>0),e.xp6(1),e.Q6J("ngIf",!o.loading&&0===o.requestedSubmissions.length))},dependencies:[c.sg,c.O5],styles:[".component-container[_ngcontent-%COMP%]{padding:20px;background-color:#f8f9fa;border-radius:8px;box-shadow:0 0 10px #0000001a;max-width:800px;margin:0 auto}h2[_ngcontent-%COMP%]{text-align:center;color:#343a40;margin-bottom:20px}h3[_ngcontent-%COMP%]{color:#007bff;margin-top:15px;margin-bottom:10px}ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}li[_ngcontent-%COMP%]{background-color:#fff;margin-bottom:20px;padding:15px;border-radius:8px;border:1px solid #dee2e6;box-shadow:0 0 5px #0000000d}p[_ngcontent-%COMP%]{margin:5px 0;color:#495057}button[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;font-size:14px;font-weight:700;color:#fff;background-color:#28a745;border:none;border-radius:4px;cursor:pointer;transition:background-color .3s}button[_ngcontent-%COMP%]:hover{background-color:#218838}.loading[_ngcontent-%COMP%]{text-align:center;font-size:18px;color:#6c757d}.error[_ngcontent-%COMP%]{text-align:center;font-size:18px;color:#dc3545}.del-req[_ngcontent-%COMP%]{width:60%;height:max-content}.del-req[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:95%}.del-req[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:12rem;height:7rem;border-radius:5px;object-fit:cover}@media screen and (orientation: portrait){.del-req[_ngcontent-%COMP%]{width:87%}}"]})}return n})()},{path:"admin-deliveries",component:(()=>{class n{constructor(t){this.productService=t,this.completedProducts=[],this.loading=!0,this.error=null}ngOnInit(){this.token=localStorage.getItem("token"),this.getDelivery()}getDelivery(){this.productService.getCompletedProductsForAdmin(this.token).subscribe({next:t=>{this.completedProducts=t,this.loading=!1,console.log(t)},error:t=>{this.error=t.message||"Failed to load completed products",this.loading=!1}})}updateDelivery(t,i){this.productService.updateDelivery(t,i,this.token).subscribe(o=>{alert("Delivered successfully!"),this.getDelivery()},o=>{this.error="Error confirming delivery"})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(u.l))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-deliveries"]],decls:7,vars:3,consts:[[1,"component-container"],[1,"delivery"],["class","loading",4,"ngIf"],["class","error",4,"ngIf"],[4,"ngIf"],[1,"loading"],[1,"error"],["class","del-prod",4,"ngFor","ngForOf"],[1,"del-prod"],[1,"product-image",3,"src","alt"],["class","btn-cmplt",3,"click",4,"ngIf"],["class","btn-dlvd","disabled","",4,"ngIf"],[1,"btn-cmplt",3,"click"],["disabled","",1,"btn-dlvd"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Products Deliveries"),e.qZA(),e.YNc(4,J,2,0,"div",2),e.YNc(5,N,2,1,"div",3),e.YNc(6,$,2,1,"ul",4),e.qZA()()),2&i&&(e.xp6(4),e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",o.error),e.xp6(1),e.Q6J("ngIf",!o.loading&&!o.error))},dependencies:[c.sg,c.O5,c.H9],styles:[".component-container[_ngcontent-%COMP%], .delivery[_ngcontent-%COMP%]{width:100%}.del-prod[_ngcontent-%COMP%]{width:22%;height:15rem;display:inline-block;background-color:#fff;padding:5px;margin:0 8px 0 0}.del-prod[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:5rem;width:8rem;border-radius:7px;object-fit:cover}.del-prod[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;border-radius:5px;padding:7px 0}.btn-cmplt[_ngcontent-%COMP%]{background-color:#16325b;color:#fff5e4}@media screen and (orientation: portrait){.del-prod[_ngcontent-%COMP%]{width:50%;position:relative;left:0;margin:0;padding:0 5px;font-size:small}}"]})}return n})()}];let H=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(E),m.Bz]})}return n})(),z=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[c.ez,H,d.u5,d.UX]})}return n})()}}]);