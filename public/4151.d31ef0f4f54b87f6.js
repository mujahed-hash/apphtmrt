"use strict";(self.webpackChunkhmfront=self.webpackChunkhmfront||[]).push([[4151],{4151:(U,f,a)=>{a.r(f),a.d(f,{AdminModule:()=>P});var d=a(6814),g=a(3403),t=a(5879),x=a(2048);function l(e,m){if(1&e&&(t.TgZ(0,"div")(1,"h2"),t._uU(2,"Order Received"),t.qZA(),t.TgZ(3,"div",6)(4,"h1"),t._uU(5),t.qZA()()()),2&e){const r=t.oxw();t.xp6(5),t.Oqu(r.order.totalOrders)}}function _(e,m){if(1&e&&(t.TgZ(0,"div",7)(1,"div")(2,"h2"),t._uU(3,"Order Delivered"),t.qZA(),t.TgZ(4,"div",6)(5,"h1"),t._uU(6),t.qZA()()()()),2&e){const r=t.oxw();t.xp6(6),t.Oqu(r.order.deliveredOrders)}}function o(e,m){if(1&e&&(t.TgZ(0,"div",8)(1,"div")(2,"h2"),t._uU(3,"Total Sales.."),t.qZA(),t.TgZ(4,"div",6)(5,"h1"),t._uU(6),t.qZA()()()()),2&e){const r=t.oxw();t.xp6(6),t.Oqu(r.order.deliveredOrders)}}function s(e,m){if(1&e&&(t.TgZ(0,"div")(1,"h2"),t._uU(2,"Total Items"),t.qZA(),t.TgZ(3,"div",6)(4,"h1"),t._uU(5),t.qZA()()()),2&e){const r=t.oxw();t.xp6(5),t.Oqu(r.products.count)}}function n(e,m){if(1&e&&(t.TgZ(0,"div")(1,"h2"),t._uU(2,"Total Users"),t.qZA(),t.TgZ(3,"div",6)(4,"h1"),t._uU(5),t.qZA()()()),2&e){const r=t.oxw();t.xp6(5),t.Oqu(r.users.totalUsers)}}function p(e,m){if(1&e&&(t.TgZ(0,"div")(1,"h2"),t._uU(2,"Total Admins"),t.qZA(),t.TgZ(3,"div",6)(4,"h1"),t._uU(5),t.qZA()()()),2&e){const r=t.oxw();t.xp6(5),t.Oqu(r.users.admins)}}function h(e,m){if(1&e&&(t.TgZ(0,"div")(1,"h2"),t._uU(2,"Total Buyers"),t.qZA(),t.TgZ(3,"div",6)(4,"h1"),t._uU(5),t.qZA()()()),2&e){const r=t.oxw();t.xp6(5),t.Oqu(r.users.buyers)}}function y(e,m){if(1&e&&(t.TgZ(0,"div")(1,"h2"),t._uU(2,"Total Suppliers"),t.qZA(),t.TgZ(3,"div",6)(4,"h1"),t._uU(5),t.qZA()()()),2&e){const r=t.oxw();t.xp6(5),t.Oqu(r.users.suppliers)}}let M=(()=>{class e{constructor(r){this.adminService=r}ngOnInit(){this.token=localStorage.getItem("token"),this.getOrdersCount(),this.getProductsCount(),this.getUsersCount()}getOrdersCount(){this.adminService.getOrdersCountAdmin(this.token).subscribe(r=>{console.log(r),this.order=r})}getProductsCount(){this.adminService.getProductsCountAdmin(this.token).subscribe(r=>{console.log(r),this.products=r})}getUsersCount(){this.adminService.getUsersCountAdmin(this.token).subscribe(r=>{console.log(r),this.users=r})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(x.l))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],decls:15,vars:8,consts:[[1,"s-dashboard"],[1,"s-d-i","s-r"],[4,"ngIf"],["class","s-d-i s-d",4,"ngIf"],["class","s-d-i s-s",4,"ngIf"],[1,"s-d-i","s-i"],[1,"stat-value"],[1,"s-d-i","s-d"],[1,"s-d-i","s-s"]],template:function(i,u){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,l,6,1,"div",2),t.qZA(),t.YNc(3,_,7,1,"div",3),t.YNc(4,o,7,1,"div",4),t.TgZ(5,"div",5),t.YNc(6,s,6,1,"div",2),t.qZA(),t.TgZ(7,"div",5),t.YNc(8,n,6,1,"div",2),t.qZA(),t.TgZ(9,"div",5),t.YNc(10,p,6,1,"div",2),t.qZA(),t.TgZ(11,"div",5),t.YNc(12,h,6,1,"div",2),t.qZA(),t.TgZ(13,"div",5),t.YNc(14,y,6,1,"div",2),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("ngIf",u.order),t.xp6(1),t.Q6J("ngIf",u.order),t.xp6(1),t.Q6J("ngIf",u.order),t.xp6(2),t.Q6J("ngIf",u.products),t.xp6(2),t.Q6J("ngIf",u.users),t.xp6(2),t.Q6J("ngIf",u.users),t.xp6(2),t.Q6J("ngIf",u.users),t.xp6(2),t.Q6J("ngIf",u.users))},dependencies:[d.O5],styles:[".s-dashboard[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;gap:30px;justify-content:space-around;padding:15px}.s-d-i[_ngcontent-%COMP%]{background-color:#f5f5f5;border-radius:10px;box-shadow:0 4px 8px #0000001a;padding:20px;flex:1 1 calc(25% - 20px);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;min-width:250px;transition:transform .3s ease}.s-d-i[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.s-d-i[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:10px;color:#333}.stat-value[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3em;margin:0;color:#00796b}.s-dashboard[_ngcontent-%COMP%]{width:100%;display:inline-block}.s-d-i[_ngcontent-%COMP%]{width:25%;display:inline-block;margin:15px}@media screen and (orientation: portrait){.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(20% - 10px);margin:10px 5px;width:8.8rem;max-width:8.8rem;min-width:8.8rem;height:12rem;min-height:12rem}}@media screen and (max-width: 500px){.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(30% - 10px);margin:10px 4px;min-width:10rem;overflow:hidden}}@media screen and (orientation: portrait){.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(30% - 10px);margin:10px 4px;min-width:8.5rem;overflow:hidden}}@media screen and (max-width: 500px){.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(30% - 10px);margin:10px 4px;min-width:9.5rem;overflow:hidden}}@media screen and (max-width: 400px){.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(20% - 10px);margin:10px 4px;width:8rem;max-width:8rem;min-width:6rem;overflow:hidden}}"]})}return e})(),Z=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin"]],decls:1,vars:0,template:function(i,u){1&i&&t._UZ(0,"app-dashboard")},dependencies:[M]})}return e})();var c=a(6223);let v=(()=>{class e{constructor(r,i,u,C){this.fb=r,this.userService=i,this.route=u,this.router=C,this.isEditMode=!1}ngOnInit(){this.userForm=this.fb.group({name:["aa",c.kI.required],email:["a1a@aa.com",[c.kI.required,c.kI.email]],password:[""],phone:["0987",c.kI.required],street:["as"],apartment:["wc"],city:["cdwe",c.kI.required],zip:["3334"],country:["iin",c.kI.required],isAdmin:[!0],isSupplier:[!1],isBuyer:[!1]}),this.token=localStorage.getItem("token"),this.customIdentifer=this.route.snapshot.params.customIdentifer,this.customIdentifer&&(this.isEditMode=!0,this.userService.getUserByCID(this.customIdentifer,this.token).subscribe(r=>{console.log(r),this.userForm.patchValue(r)},r=>console.error("Error fetching user details",r))),this.customIdentifer&&this.isEditMode&&(this.userForm.value.password="")}onSubmit(){if(this.userForm.invalid)return void console.log("iclicked-inavlid-form",this.userForm.value);console.log("iclicked-valid-form",this.userForm.value);const r=this.userForm.value;this.isEditMode?this.userService.updateUser(this.customIdentifer,r,this.token).subscribe(i=>{console.log("User updated successfully",i),this.router.navigate(["/admin/allusers"])},i=>console.error("Error updating user",i)):this.userService.addUser(r,this.token).subscribe(i=>{console.log("User added successfully",i),this.router.navigate(["/admin/allusers"])},i=>console.error("Error adding user",i))}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(c.qu),t.Y36(x.l),t.Y36(g.gz),t.Y36(g.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-aeuser"]],decls:55,vars:3,consts:[[1,"form"],[1,"user-form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["id","name","formControlName","name","type","text","placeholder","Enter name"],["for","email"],["id","email","formControlName","email","type","email","placeholder","Enter email"],["for","password"],["id","password","formControlName","password","type","password","placeholder","Enter password"],["for","phone"],["id","phone","formControlName","phone","type","text","placeholder","Enter phone number"],["for","street"],["id","street","formControlName","street","type","text","placeholder","Enter street"],["for","apartment"],["id","apartment","formControlName","apartment","type","text","placeholder","Enter apartment"],["for","city"],["id","city","formControlName","city","type","text","placeholder","Enter city"],["for","zip"],["id","zip","formControlName","zip","type","text","placeholder","Enter ZIP code"],["for","country"],["id","country","formControlName","country","type","text","placeholder","Enter country"],[1,"form-check-group",2,"position","relative","vertical-align","middle"],["for","isAdmin"],["id","isAdmin","formControlName","isAdmin","type","checkbox"],[2,"position","relative","top","-1rem"],["for","isSupplier"],["id","isSupplier","formControlName","isSupplier","type","checkbox"],["for","isBuyer"],["id","isBuyer","formControlName","isBuyer","type","checkbox"],["type","submit",1,"submit-btn"]],template:function(i,u){1&i&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return u.onSubmit()}),t.TgZ(2,"h2"),t._uU(3),t.qZA(),t.TgZ(4,"div",2)(5,"label",3),t._uU(6,"Name"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"div",2)(9,"label",5),t._uU(10,"Email"),t.qZA(),t._UZ(11,"input",6),t.qZA(),t.TgZ(12,"div",2)(13,"label",7),t._uU(14,"Password"),t.qZA(),t._UZ(15,"input",8),t.qZA(),t.TgZ(16,"div",2)(17,"label",9),t._uU(18,"Phone"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"div",2)(21,"label",11),t._uU(22,"Street"),t.qZA(),t._UZ(23,"input",12),t.qZA(),t.TgZ(24,"div",2)(25,"label",13),t._uU(26,"Apartment"),t.qZA(),t._UZ(27,"input",14),t.qZA(),t.TgZ(28,"div",2)(29,"label",15),t._uU(30,"City"),t.qZA(),t._UZ(31,"input",16),t.qZA(),t.TgZ(32,"div",2)(33,"label",17),t._uU(34,"ZIP"),t.qZA(),t._UZ(35,"input",18),t.qZA(),t.TgZ(36,"div",2)(37,"label",19),t._uU(38,"Country"),t.qZA(),t._UZ(39,"input",20),t.qZA(),t.TgZ(40,"div",21)(41,"label",22),t._UZ(42,"input",23),t.TgZ(43,"span",24),t._uU(44,"Admin"),t.qZA()(),t.TgZ(45,"label",25),t._UZ(46,"input",26),t.TgZ(47,"span",24),t._uU(48,"Supplier"),t.qZA()(),t.TgZ(49,"label",27),t._UZ(50,"input",28),t.TgZ(51,"span",24),t._uU(52,"Buyer"),t.qZA()()(),t.TgZ(53,"button",29),t._uU(54),t.qZA()()()),2&i&&(t.xp6(1),t.Q6J("formGroup",u.userForm),t.xp6(2),t.hij("",u.isEditMode?"Update":"Add"," User"),t.xp6(51),t.hij("",u.isEditMode?"Update":"Add"," User"))},dependencies:[c._Y,c.Fj,c.Wl,c.JJ,c.JL,c.sg,c.u],styles:[".form[_ngcontent-%COMP%]{width:100%;display:grid;justify-items:center;margin-left:-8rem;margin-top:1rem}.user-form[_ngcontent-%COMP%]{width:40%;margin:0;padding:20px;border:1px solid #ddd;border-radius:8px;background-color:#f9f9f9}.user-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:20px;font-size:24px;color:#333}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:5px}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px}.form-check-group[_ngcontent-%COMP%]{margin-bottom:20px}.form-check-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-weight:400;margin-bottom:5px}.form-check-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:10px}.submit-btn[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;font-size:16px;color:#fff;background-color:#007bff;border:none;border-radius:4px;cursor:pointer}.submit-btn[_ngcontent-%COMP%]:hover{background-color:#0056b3}@media (max-width: 600px){.user-form[_ngcontent-%COMP%]{padding:10px;width:90%}.form[_ngcontent-%COMP%]{margin-left:0rem}.submit-btn[_ngcontent-%COMP%]{width:100%;text-align:center}}"]})}return e})();var b=a(1391),A=a(9742);const O=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"dashboard",component:Z},{path:"home",component:Z},{path:"adduser",component:v},{path:"secret/signupAz",component:v},{path:"aeuser/:customIdentifer",component:v},{path:"",loadChildren:()=>a.e(2958).then(a.bind(a,2958)).then(e=>e.OrdersModule),canActivate:[b.a,A.p],data:{role:"admin"}},{path:"",loadChildren:()=>a.e(390).then(a.bind(a,390)).then(e=>e.UsersModule),canActivate:[b.a,A.p],data:{role:"admin"}}];let T=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(O),g.Bz]})}return e})();var w=a(4240);let P=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({providers:[w.f],imports:[d.ez,T,c.u5,c.UX]})}return e})()},2048:(U,f,a)=>{a.d(f,{l:()=>x});var d=a(9862),g=a(6136),t=a(5879);let x=(()=>{class l{constructor(o){this.http=o,this.baseUrl=g.F}getOrdersCountAdmin(o){const n={headers:new d.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/admin/orderscount`,n)}getProductsCountAdmin(o){const n={headers:new d.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/admin/productscount`,n)}getUsersCountAdmin(o){const n={headers:new d.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/admin/users-count`,n)}getProductsAll(o,s,n){const h={headers:new d.WM({Authorization:`Bearer ${n}`})};return this.http.get(`${this.baseUrl}/admin/allitems?start=${o}&limit=${s}`,h)}getOrdersAll(o,s,n){const h={headers:new d.WM({Authorization:`Bearer ${n}`})};return this.http.get(`${this.baseUrl}/admin/orders?start=${o}&limit=${s}`,h)}getOrder(o){const n={headers:new d.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/order/:customIdentifier`,n)}getUsers(o){const n={headers:new d.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/users/all`,n)}getUserByCID(o,s){const p={headers:new d.WM({Authorization:`Bearer ${s}`})};return this.http.get(`${this.baseUrl}/user/${o}`,p)}addUser(o,s){const p={headers:new d.WM({Authorization:`Bearer ${s}`})};return this.http.post(`${this.baseUrl}/user/signup`,o,p)}updateUser(o,s,n){const h={headers:new d.WM({Authorization:`Bearer ${n}`})};return this.http.put(`${this.baseUrl}/updateuser/${o}`,s,h)}getCategories(o){const n={headers:new d.WM({Authorization:`Bearer ${o}`})};return this.http.get(`${this.baseUrl}/categories`,n)}getCategory(o,s){const p={headers:new d.WM({Authorization:`Bearer ${s}`})};return this.http.get(`${this.baseUrl}/${o}`,p)}postCategory(o,s){const p={headers:new d.WM({Authorization:`Bearer ${s}`})};return this.http.post(`${this.baseUrl}/category`,o,p)}static#t=this.\u0275fac=function(s){return new(s||l)(t.LFG(d.eN))};static#e=this.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()}}]);