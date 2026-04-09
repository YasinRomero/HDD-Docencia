import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface OrderItem {
  name: string;
  price: number;
  qty: number;
}

@Component({
  selector: 'app-delivery',
  imports: [CommonModule],
  templateUrl: './delivery.html',
  styleUrl: './delivery.css',
})

export class Delivery implements OnInit {
  status: number = 2; 

  order = {
    id: 'ABC-12345',
    deliveryFee: 2.50,
    items: [
      { name: 'Pizza Margherita XL', price: 12.50, qty: 1 },
      { name: 'Refresco Cola 500ml', price: 2.10, qty: 2 },
      { name: 'Papas Fritas Medianas', price: 3.50, qty: 1 }
    ]
  };

  get subtotal(): number {
    return this.order.items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  }

  ngOnInit(): void {}
}