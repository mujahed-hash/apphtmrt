"use strict";(self.webpackChunkhmfront=self.webpackChunkhmfront||[]).push([[1083],{1083:(w,v,d)=>{d.r(v),d.d(v,{AdminModule:()=>B});var c=d(6814),g=d(3403),e=d(5879),b=d(2048);function f(r,m){if(1&r&&(e.TgZ(0,"div")(1,"h2"),e._uU(2,"Order Received"),e.qZA(),e.TgZ(3,"div",8)(4,"h1"),e._uU(5),e.qZA()()()),2&r){const t=e.oxw();e.xp6(5),e.Oqu(t.order.totalOrders)}}function P(r,m){if(1&r&&(e.TgZ(0,"div",9)(1,"div")(2,"h2"),e._uU(3,"Order Delivered"),e.qZA(),e.TgZ(4,"div",8)(5,"h1"),e._uU(6),e.qZA()()()()),2&r){const t=e.oxw();e.xp6(6),e.Oqu(t.order.deliveredOrders)}}function o(r,m){if(1&r&&(e.TgZ(0,"div",10)(1,"div")(2,"h2"),e._uU(3,"Total Sales.."),e.qZA(),e.TgZ(4,"div",8)(5,"h1"),e._uU(6),e.qZA()()()()),2&r){const t=e.oxw();e.xp6(6),e.Oqu(t.order.deliveredOrders)}}function s(r,m){if(1&r&&(e.TgZ(0,"div")(1,"h2"),e._uU(2,"Total Items"),e.qZA(),e.TgZ(3,"div",8)(4,"h1"),e._uU(5),e.qZA()()()),2&r){const t=e.oxw();e.xp6(5),e.Oqu(t.products.count)}}function n(r,m){if(1&r&&(e.TgZ(0,"div")(1,"h2"),e._uU(2,"Total Users"),e.qZA(),e.TgZ(3,"div",8)(4,"h1"),e._uU(5),e.qZA()()()),2&r){const t=e.oxw();e.xp6(5),e.Oqu(t.users.totalUsers)}}function p(r,m){if(1&r&&(e.TgZ(0,"div")(1,"h2"),e._uU(2,"Total Admins"),e.qZA(),e.TgZ(3,"div",8)(4,"h1"),e._uU(5),e.qZA()()()),2&r){const t=e.oxw();e.xp6(5),e.Oqu(t.users.admins)}}function h(r,m){if(1&r&&(e.TgZ(0,"div")(1,"h2"),e._uU(2,"Total Buyers"),e.qZA(),e.TgZ(3,"div",8)(4,"h1"),e._uU(5),e.qZA()()()),2&r){const t=e.oxw();e.xp6(5),e.Oqu(t.users.buyers)}}function q(r,m){if(1&r&&(e.TgZ(0,"div")(1,"h2"),e._uU(2,"Total Suppliers"),e.qZA(),e.TgZ(3,"div",8)(4,"h1"),e._uU(5),e.qZA()()()),2&r){const t=e.oxw();e.xp6(5),e.Oqu(t.users.suppliers)}}let $=(()=>{class r{constructor(t){this.adminService=t}ngOnInit(){this.token=localStorage.getItem("token"),this.getOrdersCount(),this.getProductsCount(),this.getUsersCount()}getOrdersCount(){this.adminService.getOrdersCountAdmin(this.token).subscribe(t=>{console.log(t),this.order=t})}getProductsCount(){this.adminService.getProductsCountAdmin(this.token).subscribe(t=>{console.log(t),this.products=t})}getUsersCount(){this.adminService.getUsersCountAdmin(this.token).subscribe(t=>{console.log(t),this.users=t})}static#e=this.\u0275fac=function(i){return new(i||r)(e.Y36(b.l))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-dashboard"]],decls:16,vars:8,consts:[[1,"dash-main"],[1,"s-dashboard"],["routerLink","/supplier/orders-recieved/pending",1,"s-d-i","s-r"],[4,"ngIf"],["routerLink","/supplier/orders-recieved/delivered","class","s-d-i s-d",4,"ngIf"],["routerLink","/supplier/orders-recieved/delivered","class","s-d-i s-s",4,"ngIf"],["routerLink","/buyer/marketplace",1,"s-d-i","s-i"],["routerLink","/admin/allusers",1,"s-d-i","s-i"],[1,"stat-value"],["routerLink","/supplier/orders-recieved/delivered",1,"s-d-i","s-d"],["routerLink","/supplier/orders-recieved/delivered",1,"s-d-i","s-s"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.YNc(3,f,6,1,"div",3),e.qZA(),e.YNc(4,P,7,1,"div",4),e.YNc(5,o,7,1,"div",5),e.TgZ(6,"div",6),e.YNc(7,s,6,1,"div",3),e.qZA(),e.TgZ(8,"div",7),e.YNc(9,n,6,1,"div",3),e.qZA(),e.TgZ(10,"div",7),e.YNc(11,p,6,1,"div",3),e.qZA(),e.TgZ(12,"div",7),e.YNc(13,h,6,1,"div",3),e.qZA(),e.TgZ(14,"div",7),e.YNc(15,q,6,1,"div",3),e.qZA()()()),2&i&&(e.xp6(3),e.Q6J("ngIf",a.order),e.xp6(1),e.Q6J("ngIf",a.order),e.xp6(1),e.Q6J("ngIf",a.order),e.xp6(2),e.Q6J("ngIf",a.products),e.xp6(2),e.Q6J("ngIf",a.users),e.xp6(2),e.Q6J("ngIf",a.users),e.xp6(2),e.Q6J("ngIf",a.users),e.xp6(2),e.Q6J("ngIf",a.users))},dependencies:[c.O5,g.rH],styles:[".dash-main[_ngcontent-%COMP%]{padding-left:1rem;overflow-x:hidden}.s-dashboard[_ngcontent-%COMP%]{width:max-content;display:flex;flex-wrap:wrap;gap:30px;justify-content:space-around;padding:15px;height:100%}.s-d-i[_ngcontent-%COMP%]{background-color:#f5f5f5;border-radius:10px;box-shadow:0 4px 8px #0000001a;padding:20px;flex:1 1 calc(25% - 20px);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;min-width:250px;transition:transform .3s ease}.s-d-i[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.s-d-i[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:10px;color:#333}.stat-value[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3em;margin:0;color:#00796b}.s-dashboard[_ngcontent-%COMP%]{width:100%;display:inline-block}.s-d-i[_ngcontent-%COMP%]{width:25%;display:inline-block;margin:15px}@media screen and (orientation: portrait){.s-dashboard[_ngcontent-%COMP%]{height:max-content;margin-bottom:10rem}.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(20% - 10px);margin:10px 5px;width:8.8rem;max-width:8.8rem;min-width:auto;height:12rem;margin-bottom:5rem}}@media screen and (max-width: 500px){.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(20% - 10px);margin:10px 4px;overflow-x:hidden}}@media screen and (orientation: portrait){.dash-main[_ngcontent-%COMP%]{width:95%;display:flex;justify-content:center;overflow-x:hidden;padding-left:1rem;max-width:95%}.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(30% - 10px);margin:10px 4px;min-width:8.5rem;overflow-x:hidden}}@media screen and (max-width: 520px){.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(30% - 10px);margin:10px 4px}}@media screen and (max-width: 420px){.dash-main[_ngcontent-%COMP%]{padding-left:.5rem}.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(20% - 10px);margin:10px 4px;width:8rem;max-width:8rem}}@media screen and (max-width: 377px){.dash-main[_ngcontent-%COMP%]{padding-left:.1rem}.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(10% - 5px);margin:10px 4px;width:4rem;max-width:4rem}}"]})}return r})(),T=(()=>{class r{static#e=this.\u0275fac=function(i){return new(i||r)};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-admin"]],decls:1,vars:0,template:function(i,a){1&i&&e._UZ(0,"app-dashboard")},dependencies:[$]})}return r})();var l=d(6223);let Z=(()=>{class r{constructor(t,i,a,u){this.fb=t,this.userService=i,this.route=a,this.router=u,this.isEditMode=!1}ngOnInit(){this.userForm=this.fb.group({name:["",l.kI.required],email:["",[l.kI.required,l.kI.email]],password:[""],phone:["",l.kI.required],street:[""],apartment:[""],city:["",l.kI.required],zip:[""],country:["",l.kI.required],isAdmin:[!1],isSupplier:[!1],isBuyer:[!0]}),this.token=localStorage.getItem("token"),this.customIdentifer=this.route.snapshot.params.customIdentifer,this.customIdentifer&&(this.isEditMode=!0,this.userService.getUserByCID(this.customIdentifer,this.token).subscribe(t=>{console.log(t),this.userForm.patchValue(t)},t=>console.error("Error fetching user details",t))),this.customIdentifer&&this.isEditMode&&(this.userForm.value.password="")}onSubmit(){if(this.userForm.invalid)return void console.log("iclicked-inavlid-form",this.userForm.value);console.log("iclicked-valid-form",this.userForm.value);const t=this.userForm.value;this.isEditMode?this.userService.updateUser(this.customIdentifer,t,this.token).subscribe(i=>{console.log("User updated successfully",i),this.router.navigate(["/admin/allusers"])},i=>console.error("Error updating user",i)):this.userService.addUser(t,this.token).subscribe(i=>{console.log("User added successfully",i),this.router.navigate(["/admin/allusers"])},i=>console.error("Error adding user",i))}static#e=this.\u0275fac=function(i){return new(i||r)(e.Y36(l.qu),e.Y36(b.l),e.Y36(g.gz),e.Y36(g.F0))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-aeuser"]],decls:56,vars:4,consts:[[1,"form"],[1,"user-form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["id","name","formControlName","name","type","text","placeholder","Enter name"],["for","email"],["id","email","formControlName","email","type","email","placeholder","Enter email"],["for","password"],["id","password","formControlName","password","type","password","placeholder","Enter password"],["for","phone"],["id","phone","formControlName","phone","type","text","placeholder","Enter phone number"],["for","street"],["id","street","formControlName","street","type","text","placeholder","Enter street"],["for","apartment"],["id","apartment","formControlName","apartment","type","text","placeholder","Enter apartment"],["for","city"],["id","city","formControlName","city","type","text","placeholder","Enter city"],["for","zip"],["id","zip","formControlName","zip","type","text","placeholder","Enter ZIP code"],["for","country"],["id","country","formControlName","country","type","text","placeholder","Enter country"],[1,"form-check-group",2,"position","relative","vertical-align","middle"],["for","isAdmin"],[2,"position","relative"],["id","isAdmin","formControlName","isAdmin","type","checkbox"],["for","isSupplier"],["id","isSupplier","formControlName","isSupplier","type","checkbox"],["for","isBuyer"],["id","isBuyer","formControlName","isBuyer","type","checkbox"],["type","submit",1,"submit-btn",3,"disabled"]],template:function(i,a){1&i&&(e.TgZ(0,"div")(1,"div",0)(2,"form",1),e.NdJ("ngSubmit",function(){return a.onSubmit()}),e.TgZ(3,"h2"),e._uU(4),e.qZA(),e.TgZ(5,"div",2)(6,"label",3),e._uU(7,"Name"),e.qZA(),e._UZ(8,"input",4),e.qZA(),e.TgZ(9,"div",2)(10,"label",5),e._uU(11,"Email"),e.qZA(),e._UZ(12,"input",6),e.qZA(),e.TgZ(13,"div",2)(14,"label",7),e._uU(15,"Password"),e.qZA(),e._UZ(16,"input",8),e.qZA(),e.TgZ(17,"div",2)(18,"label",9),e._uU(19,"Phone"),e.qZA(),e._UZ(20,"input",10),e.qZA(),e.TgZ(21,"div",2)(22,"label",11),e._uU(23,"Street"),e.qZA(),e._UZ(24,"input",12),e.qZA(),e.TgZ(25,"div",2)(26,"label",13),e._uU(27,"Apartment"),e.qZA(),e._UZ(28,"input",14),e.qZA(),e.TgZ(29,"div",2)(30,"label",15),e._uU(31,"City"),e.qZA(),e._UZ(32,"input",16),e.qZA(),e.TgZ(33,"div",2)(34,"label",17),e._uU(35,"ZIP"),e.qZA(),e._UZ(36,"input",18),e.qZA(),e.TgZ(37,"div",2)(38,"label",19),e._uU(39,"Country"),e.qZA(),e._UZ(40,"input",20),e.qZA(),e.TgZ(41,"div",21)(42,"label",22)(43,"span",23),e._uU(44,"Admin"),e.qZA(),e._UZ(45,"input",24),e.qZA(),e.TgZ(46,"label",25)(47,"span",23),e._uU(48,"Supplier"),e.qZA(),e._UZ(49,"input",26),e.qZA(),e.TgZ(50,"label",27)(51,"span",23),e._uU(52,"Buyer"),e.qZA(),e._UZ(53,"input",28),e.qZA()(),e.TgZ(54,"button",29),e._uU(55),e.qZA()()()()),2&i&&(e.xp6(2),e.Q6J("formGroup",a.userForm),e.xp6(2),e.hij("",a.isEditMode?"Update":"Add"," User"),e.xp6(50),e.Q6J("disabled",a.userForm.invalid),e.xp6(1),e.hij("",a.isEditMode?"Update":"Add"," User"))},dependencies:[l._Y,l.Fj,l.Wl,l.JJ,l.JL,l.sg,l.u],styles:[".form[_ngcontent-%COMP%]{width:100%;display:grid;justify-items:center;margin-left:-8rem;margin-top:1rem;height:100%;overflow-x:hidden;margin-bottom:5rem}.user-form[_ngcontent-%COMP%]{width:40%;margin:0;padding:20px;border:1px solid #ddd;border-radius:8px;background-color:#f9f9f9;height:100%;overflow:hidden}.user-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:20px;font-size:24px;color:#333}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:5px}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px}.form-check-group[_ngcontent-%COMP%]{margin:20px}.form-check-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;font-weight:400;justify-content:space-around;width:50%}.submit-btn[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;font-size:16px;color:#fff;background-color:#007bff;border:none;border-radius:4px;cursor:pointer}.submit-btn[_ngcontent-%COMP%]:hover{background-color:#0056b3}@media (max-width: 600px){.form[_ngcontent-%COMP%]{height:100%;margin-left:0rem;margin-bottom:10rem}.user-form[_ngcontent-%COMP%]{padding:10px;width:90%;height:100%}.submit-btn[_ngcontent-%COMP%]{width:100%;text-align:center}.form-check-group[_ngcontent-%COMP%]{width:100%}}"]})}return r})();var A=d(1391),_=d(9742),x=d(7700),y=d(9157),M=d(2032);function E(r,m){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Item Type is required. "),e.qZA())}let U=(()=>{class r{constructor(t,i,a,u){this.userService=t,this.fb=i,this.dialogRef=a,this.data=u,this.isEditing=!1,this.imageDisplay=[],this.image=[],this.categoryForm=this.fb.group({itemType:[u.itemType||"",l.kI.required],itemName:[""],image:[u.image||""]}),this.token=localStorage.getItem("token")}ngOnInit(){this.isEditing=!!this.data.id,this.isEditing&&(this.categoryForm.patchValue({itemType:this.data.itemType,itemName:this.data.itemName,image:this.data.image}),this.data.image&&(this.imageDisplay=[this.data.image]))}onFileChange(t){t.target.files&&t.target.files.length&&(this.image=Array.from(t.target.files),this.imageDisplay=[],this.image.forEach(i=>{const a=new FileReader;a.onload=u=>{this.imageDisplay.push(u.target.result)},a.readAsDataURL(i)}),this.categoryForm.patchValue({image:this.image}))}onSubmit(){const t=new FormData;Object.keys(this.categoryForm.controls).forEach(i=>{"image"!==i&&t.append(i,this.categoryForm.get(i)?.value)}),this.image.forEach(i=>{t.append("image",i,i.name)}),this.categoryForm.valid&&(this.isEditing?(this.updateCategory(t),console.log(t)):this.createCategory(t))}updateCategory(t){this.token&&this.data.id&&this.userService.updateCategory(this.data.id,t,this.token).subscribe(i=>this.dialogRef.close(!0),i=>console.error("Error updating category",i))}createCategory(t){this.token&&this.userService.postCategory(t,this.token).subscribe(()=>this.dialogRef.close(!0),i=>console.error("Error creating category",i))}onCancel(){this.dialogRef.close()}static#e=this.\u0275fac=function(i){return new(i||r)(e.Y36(b.l),e.Y36(l.qu),e.Y36(x.so),e.Y36(x.WI))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-pecategories"]],decls:18,vars:5,consts:[["mat-dialog-title",""],[3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","formControlName","itemType"],[4,"ngIf"],[1,"form-group"],["for","files"],["alt","",1,"img-preview",2,"width","4rem","height","4rem",3,"src"],["id","images","type","file","multiple","",1,"form-control-file",3,"change"],["mat-dialog-actions","",1,"button"],["mat-button","",1,"b1",3,"click"],["mat-raised-button","","color","primary","type","submit",1,"b2"]],template:function(i,a){1&i&&(e.TgZ(0,"h2",0),e._uU(1),e.qZA(),e.TgZ(2,"form",1),e.NdJ("ngSubmit",function(){return a.onSubmit()}),e.TgZ(3,"mat-form-field",2)(4,"mat-label"),e._uU(5,"Item Type"),e.qZA(),e._UZ(6,"input",3),e.YNc(7,E,2,0,"mat-error",4),e.qZA(),e.TgZ(8,"div",5)(9,"label",6),e._uU(10,"Images:"),e.qZA(),e._UZ(11,"img",7),e.TgZ(12,"input",8),e.NdJ("change",function(C){return a.onFileChange(C)}),e.qZA()(),e.TgZ(13,"div",9)(14,"button",10),e.NdJ("click",function(){return a.onCancel()}),e._uU(15,"Cancel"),e.qZA(),e.TgZ(16,"button",11),e._uU(17),e.qZA()()()),2&i&&(e.xp6(1),e.Oqu(a.isEditing?"Edit Category":"Add Category"),e.xp6(1),e.Q6J("formGroup",a.categoryForm),e.xp6(5),e.Q6J("ngIf",a.categoryForm.get("itemType").hasError("required")),e.xp6(4),e.s9C("src",a.imageDisplay[0],e.LSH),e.xp6(6),e.hij(" ",a.isEditing?"Save Changes":"Add Category"," "))},dependencies:[c.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,x.uh,x.H8,y.KE,y.hX,y.TO,M.Nt],styles:[".button[_ngcontent-%COMP%]   .b2[_ngcontent-%COMP%]{color:#fff;background-color:#163172;padding:8px 16px;border:none;border-radius:8px}.button[_ngcontent-%COMP%]   .b1[_ngcontent-%COMP%]{color:red;background-color:#fff;padding:8px 16px;border:none;border-radius:8px}"]})}return r})();var O=d(617);function I(r,m){if(1&r){const t=e.EpF();e.TgZ(0,"div",5)(1,"div",6),e._UZ(2,"img",7),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.TgZ(5,"span")(6,"mat-icon",8),e.NdJ("click",function(){const u=e.CHM(t).$implicit,C=e.oxw();return e.KtG(C.openDialog(u))}),e._uU(7,"edit_note"),e.qZA()(),e.TgZ(8,"span")(9,"mat-icon",9),e.NdJ("click",function(){const u=e.CHM(t).$implicit,C=e.oxw();return e.KtG(C.deleteCategory(u._id))}),e._uU(10,"delete"),e.qZA()()()()}if(2&r){const t=m.$implicit;e.xp6(2),e.s9C("src",t.image[0],e.LSH),e.xp6(2),e.Oqu(t.itemType)}}const S=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"dashboard",component:T},{path:"home",component:T},{path:"adduser",component:Z},{path:"secret/signupAz",component:Z},{path:"aeuser/:customIdentifer",component:Z},{path:"",loadChildren:()=>d.e(2958).then(d.bind(d,2958)).then(r=>r.OrdersModule),canActivate:[A.a,_.p],data:{role:"admin"}},{path:"",loadChildren:()=>d.e(390).then(d.bind(d,390)).then(r=>r.UsersModule),canActivate:[A.a,_.p],data:{role:"admin"}},{path:"",loadChildren:()=>d.e(1260).then(d.bind(d,1260)).then(r=>r.ReqAdminModule),canActivate:[A.a,_.p],data:{role:"admin"}},{path:"categories",component:(()=>{class r{constructor(t,i){this.userService=t,this.dialog=i,this.categories=[],this.token=localStorage.getItem("token")}ngOnInit(){this.getCategories()}getCategories(){this.token&&this.userService.getCategories(this.token).subscribe(t=>{this.categories=t,console.log(this.categories)},t=>console.error("Error fetching categories",t))}openDialog(t){this.dialog.open(U,{width:"400px",data:t?{itemType:t.itemType,itemName:t.itemName,image:t.image,id:t._id}:{}}).afterClosed().subscribe(a=>{a&&this.getCategories()})}deleteCategory(t){this.token&&confirm("Are you sure you want to delete this category?")&&this.userService.deleteCategory({id:t}).subscribe(()=>{alert("Category deleted successfully"),this.getCategories()},i=>console.error("Error deleting category",i))}static#e=this.\u0275fac=function(i){return new(i||r)(e.Y36(b.l),e.Y36(x.uw))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-getcategories"]],decls:10,vars:1,consts:[[1,"container"],[1,"button"],["mat-raised-button","","color","primary",3,"click"],[1,"cat"],["class","cat-sub",4,"ngFor","ngForOf"],[1,"cat-sub"],[1,"cat-sub2"],["alt","",2,"width","20px","height","20px","border-radius","100%",3,"src"],[2,"font-size","28px",3,"click"],[2,"color","#D71313",3,"click"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Categories"),e.qZA(),e.TgZ(3,"div",1)(4,"button",2),e.NdJ("click",function(){return a.openDialog()}),e.TgZ(5,"mat-icon"),e._uU(6,"add"),e.qZA(),e._uU(7," Add Category"),e.qZA()(),e.TgZ(8,"div",3),e.YNc(9,I,11,2,"div",4),e.qZA()()),2&i&&(e.xp6(9),e.Q6J("ngForOf",a.categories))},dependencies:[c.sg,O.Hw],styles:[".container[_ngcontent-%COMP%]{width:100%;height:100% s}.cat[_ngcontent-%COMP%]{display:inline-block;margin-top:1rem;width:100%}.cat-sub[_ngcontent-%COMP%]{display:flex;width:auto;padding-right:1rem;text-align:center}.cat-sub2[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;width:auto;gap:5px;padding:8px 15px;margin:.5rem 1rem;border-radius:20px;box-shadow:#00000040 0 .0625em .0625em,#00000040 0 .125em .5em,#ffffff1a 0 0 0 1px inset}.cat-sub[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}.button[_ngcontent-%COMP%]{width:80%}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{max-width:max-content;box-shadow:#0000002e 0 2px 4px;color:#fff;background-color:#163172;padding:8px 16px;border:none;border-radius:8px;display:flex;align-items:center}@media screen and (orientation: portrait){.cat-sub2[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;width:60%;padding:8px 5px;margin:.5rem 1rem;border-radius:20px;box-shadow:#00000040 0 .0625em .0625em,#00000040 0 .125em .5em,#ffffff1a 0 0 0 1px inset}}"]})}return r})()},{path:"add-category",component:U},{path:"get-category",component:U}];let N=(()=>{class r{static#e=this.\u0275fac=function(i){return new(i||r)};static#t=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({imports:[g.Bz.forChild(S),g.Bz]})}return r})();var F=d(4240);let B=(()=>{class r{static#e=this.\u0275fac=function(i){return new(i||r)};static#t=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({providers:[F.f],imports:[c.ez,N,l.u5,l.UX,O.Ps,x.Is,y.lN,M.c]})}return r})()},2048:(w,v,d)=>{d.d(v,{l:()=>b});var c=d(9862),g=d(5349),e=d(5879);let b=(()=>{class f{constructor(o){this.http=o,this.baseUrl=g.N.baseUrl}getRequestedSubmissions(o){const n={headers:new c.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/request/requested-submissions`,n)}getCompletedProductsForAdmin(o){const n={headers:new c.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/request/admin-completed-products`,n)}confirmDelivery(o,s){const p={headers:new c.WM({Authorization:`Bearer ${s}`})};return this.http.post(`${this.baseUrl}/request/confirm-delivery`,{submissionId:o},p)}updateDelivery(o,s,n){const h={headers:new c.WM({Authorization:`Bearer ${n}`})};return this.http.post(`${this.baseUrl}/request/delivery-update`,{requirementId:o,submissionId:s},h)}getAllRequirements(o){const n={headers:new c.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/request/all-requirements`,n)}forwardRequirement(o,s){const p={headers:new c.WM({Authorization:`Bearer ${s}`})};return this.http.post(`${this.baseUrl}/request/forward-requirement`,{requirementId:o},p)}getProductSubmissions(o){const n={headers:new c.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/request/all-product-submissions`,n)}forwardProductSubmission(o,s,n){const h={headers:new c.WM({Authorization:`Bearer ${n}`})};return this.http.post(`${this.baseUrl}/request/forward-product-submission`,{submissionId:o,requirementId:s},h)}getOrdersCountAdmin(o){const n={headers:new c.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/admin/orderscount`,n)}getProductsCountAdmin(o){const n={headers:new c.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/admin/productscount`,n)}getUsersCountAdmin(o){const n={headers:new c.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/admin/users-count`,n)}getProductsAll(o,s,n){const h={headers:new c.WM({Authorization:`Bearer ${n}`})};return this.http.get(`${this.baseUrl}/admin/allitems?start=${o}&limit=${s}`,h)}getOrdersAll(o,s,n){const h={headers:new c.WM({Authorization:`Bearer ${n}`})};return this.http.get(`${this.baseUrl}/admin/orders?start=${o}&limit=${s}`,h)}getOrder(o){const n={headers:new c.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/order/:customIdentifier`,n)}getUsers(o){const n={headers:new c.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/users/all`,n)}getUserByCID(o,s){const p={headers:new c.WM({Authorization:`Bearer ${s}`})};return this.http.get(`${this.baseUrl}/user/${o}`,p)}addUser(o,s){const p={headers:new c.WM({Authorization:`Bearer ${s}`})};return this.http.post(`${this.baseUrl}/user/signup`,o,p)}updateUser(o,s,n){const h={headers:new c.WM({Authorization:`Bearer ${n}`})};return this.http.put(`${this.baseUrl}/updateuser/${o}`,s,h)}getCategories(o){const n={headers:new c.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/categories`,n)}getCategory(o,s){const p={headers:new c.WM({Authorization:`Bearer ${s}`})};return this.http.get(`${this.baseUrl}/${o}`,p)}postCategory(o,s){const p={headers:new c.WM({Authorization:`Bearer ${s}`})};return this.http.post(`${this.baseUrl}/category`,o,p)}updateCategory(o,s,n){const h={headers:new c.WM({Authorization:`Bearer ${n}`})};return this.http.put(`${this.baseUrl}/category/${o}`,s,h)}deleteCategory(o){return this.http.post(`${this.baseUrl}/category/delete-category`,o)}getCategoryById(o){return this.http.get(`${this.baseUrl}/category/${o}`)}static#e=this.\u0275fac=function(s){return new(s||f)(e.LFG(c.eN))};static#t=this.\u0275prov=e.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})}return f})()}}]);