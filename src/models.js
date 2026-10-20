export class Product {
  constructor({id,name,category,price,oldPrice,stock=12,rating=4.8,reviews=24,color,kind,tag,description,specs}) { Object.assign(this,{id,name,category,price,oldPrice,stock,rating,reviews,color,kind,tag,description,specs}); }
  get discount(){return this.oldPrice?Math.round((1-this.price/this.oldPrice)*100):0;}
}
export class CartItem {
  constructor(product,quantity=1){this.product=product;this.quantity=Math.max(1,Math.min(product.stock,Math.floor(Number(quantity)||1)));}
  get subtotal(){return this.product.price*this.quantity;}
}
export class Cart {
  constructor(items=[]){this.items=items;}
  add(product,quantity=1){const item=this.items.find(i=>i.product.id===product.id);if(item)item.quantity=Math.min(product.stock,item.quantity+Math.max(1,Number(quantity)||1));else this.items.push(new CartItem(product,quantity));return this;}
  update(id,quantity){if(quantity<=0)return this.remove(id);const item=this.items.find(i=>i.product.id===id);if(item)item.quantity=Math.min(item.product.stock,Math.floor(Number(quantity)||1));return this;}
  remove(id){this.items=this.items.filter(i=>i.product.id!==id);return this;}
  get count(){return this.items.reduce((s,i)=>s+i.quantity,0);}
  get subtotal(){return this.items.reduce((s,i)=>s+i.subtotal,0);}
  get shipping(){return this.count===0||this.subtotal>=3000?0:150;}
  get total(){return this.subtotal+this.shipping;}
  toJSON(){return this.items.map(i=>({id:i.product.id,quantity:i.quantity}));}
  static restore(raw,products){if(!Array.isArray(raw))return new Cart();const cart=new Cart();for(const item of raw){const p=products.find(p=>p.id===item.id);if(p&&Number.isInteger(item.quantity)&&item.quantity>0)cart.add(p,item.quantity);}return cart;}
}
export class Customer {
  constructor({name,email,phone,address,city,postal}){Object.assign(this,{name,email,phone,address,city,postal});}
}
export class Order {
  constructor(customer,cart){this.id=`TC-${Date.now().toString(36).toUpperCase()}`;this.customer=customer;this.items=cart.items.map(i=>new CartItem(i.product,i.quantity));this.subtotal=cart.subtotal;this.shipping=cart.shipping;this.total=cart.total;this.date=new Date().toISOString();this.status='Demo order confirmed';}
}
export class StoreContent {
  constructor(data){Object.assign(this,data);}
}
