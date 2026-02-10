
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: string[];
  category: string;
  size: string;
  stock: number;
  description: string;
}

export enum OrderStatus {
  NEW = 'New',
  CONTACTED = 'Contacted',
  CONFIRMED = 'Confirmed',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled'
}

export interface CustomOrder {
  id: string;
  customerName: string;
  phone: string;
  email?: string;
  size: 'S' | 'M' | 'L' | 'Custom';
  designImageUrl?: string;
  theme: string;
  colorPreferences: string;
  budgetRange: string;
  deadline: string;
  location: string;
  notes: string;
  status: OrderStatus;
  createdAt: string;
}

export interface WorkshopSlot {
  id: string;
  date: string;
  time: string;
  duration: string;
  maxSeats: number;
  bookedSeats: number;
  price: number;
  status: 'Open' | 'Closed';
}

export interface WorkshopBooking {
  id: string;
  slotId: string;
  name: string;
  phone: string;
  email: string;
  rugOption: string;
  paymentStatus: 'Pending' | 'Paid';
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
  featured: boolean;
}
