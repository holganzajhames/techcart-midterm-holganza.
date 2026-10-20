import test from 'node:test';
import assert from 'node:assert/strict';
import {Cart,Customer,Order} from '../src/models.js';
import {products} from '../src/data.js';
test('cart merges duplicate products and enforces stock',()=>{const b=new Cart();b.add(products[0],2).add(products[0],30);assert.equal(b.count,products[0].stock);assert.equal(b.items.length,1);assert.equal(b.subtotal,products[0].stock*products[0].price);});
test('delivery threshold and totals update after quantity and removal',()=>{const b=new Cart();b.add(products[3]);assert.equal(b.shipping,150);assert.equal(b.total,1040);b.update(products[3].id,4);assert.equal(b.shipping,0);assert.equal(b.total,3560);b.remove(products[3].id);assert.equal(b.total,0);});
test('restore ignores malformed or obsolete entries and preserves models',()=>{const b=Cart.restore([{id:products[0].id,quantity:2},{id:'missing',quantity:4},{id:products[1].id,quantity:-1}],products);assert.equal(b.count,2);assert.equal(b.total,4980);assert.deepEqual(b.toJSON(),[{id:products[0].id,quantity:2}]);assert.equal(Cart.restore({},products).count,0);});
test('order captures an independent snapshot and customer details',()=>{const b=new Cart().add(products[0],1);const customer=new Customer({name:'Sample Customer',city:'Cebu City'});const order=new Order(customer,b);b.update(products[0].id,5);assert.equal(order.items[0].quantity,1);assert.equal(order.total,2640);assert.equal(order.customer.city,'Cebu City');assert.match(order.id,/^TC-/);});
