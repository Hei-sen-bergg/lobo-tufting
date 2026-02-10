
import React, { useState } from 'react';
import { 
    LayoutDashboard, 
    ShoppingBag, 
    Calendar, 
    Image as ImageIcon, 
    Box, 
    Settings,
    ChevronRight,
    Search,
    Plus,
    Filter,
    Edit3,
    Trash2,
    Eye
} from 'lucide-react';
import { COLORS, MOCK_PRODUCTS, MOCK_WORKSHOPS, MOCK_GALLERY } from '../constants';
import { OrderStatus } from '../types';

const AdminSidebar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { id: 'orders', label: 'Orders', icon: <ShoppingBag size={20} /> },
        { id: 'workshops', label: 'Workshops', icon: <Calendar size={20} /> },
        { id: 'products', label: 'Products', icon: <Box size={20} /> },
        { id: 'gallery', label: 'Gallery', icon: <ImageIcon size={20} /> },
    ];

    return (
        <aside className="w-64 border-r border-[#1C261C] h-[calc(100vh-65px)] bg-[#0B0F0B] hidden md:block">
            <div className="p-6 space-y-2">
                {menuItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            activeTab === item.id ? 'bg-[#74C63D] text-black font-bold' : 'text-[#7C857C] hover:text-white hover:bg-[#1C261C]'
                        }`}
                    >
                        {item.icon}
                        {item.label}
                    </button>
                ))}
            </div>
            <div className="absolute bottom-6 left-6 right-6">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#7C857C] hover:text-white transition-all">
                    <Settings size={20} /> Settings
                </button>
            </div>
        </aside>
    );
};

const DashboardView = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold">Good morning, Admin</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'New Orders', value: '12', color: 'text-[#74C63D]' },
                    { label: 'Upcoming Workshops', value: '3', color: 'text-white' },
                    { label: 'Monthly Revenue', value: '₹42,500', color: 'text-white' },
                    { label: 'Active Listings', value: '24', color: 'text-white' },
                ].map((stat, i) => (
                    <div key={i} className="p-6 bg-[#0B0F0B] border border-[#1C261C] rounded-2xl">
                        <p className="text-sm text-[#7C857C] mb-1">{stat.label}</p>
                        <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#0B0F0B] border border-[#1C261C] rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold">Recent Custom Orders</h3>
                        <button className="text-[#74C63D] text-sm hover:underline">View All</button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center justify-between p-4 bg-black rounded-xl border border-[#1C261C]">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#1C261C] flex items-center justify-center">
                                        <ShoppingBag size={18} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Arjun Das</p>
                                        <p className="text-xs text-[#7C857C]">Anime Rug • Medium • ₹3,500</p>
                                    </div>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-[#74C63D]/10 text-[#74C63D] text-[10px] font-bold uppercase">New</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#0B0F0B] border border-[#1C261C] rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold">Upcoming Workshops</h3>
                        <button className="text-[#74C63D] text-sm hover:underline">Manage Slots</button>
                    </div>
                    <div className="space-y-4">
                        {MOCK_WORKSHOPS.slice(0, 3).map(slot => (
                            <div key={slot.id} className="flex items-center justify-between p-4 bg-black rounded-xl border border-[#1C261C]">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#1C261C] flex items-center justify-center">
                                        <Calendar size={18} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">{new Date(slot.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</p>
                                        <p className="text-xs text-[#7C857C]">{slot.time} • {slot.bookedSeats}/{slot.maxSeats} Booked</p>
                                    </div>
                                </div>
                                <ChevronRight size={16} className="text-[#7C857C]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductsView = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Products</h2>
                <button className="px-5 py-2.5 bg-[#74C63D] text-black font-bold rounded-xl flex items-center gap-2 hover:bg-[#8DFF4A]">
                    <Plus size={18} /> Add Product
                </button>
            </div>
            
            <div className="flex gap-4 mb-6">
                <div className="flex-grow flex items-center gap-3 bg-[#0B0F0B] border border-[#1C261C] px-4 py-2.5 rounded-xl">
                    <Search size={18} className="text-[#7C857C]" />
                    <input type="text" placeholder="Search by name or category..." className="bg-transparent border-none outline-none w-full text-white" />
                </div>
                <button className="p-3 border border-[#1C261C] rounded-xl text-[#7C857C] hover:text-white"><Filter size={20} /></button>
            </div>

            <div className="bg-[#0B0F0B] border border-[#1C261C] rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="border-b border-[#1C261C] bg-[#0F140F]">
                        <tr>
                            <th className="px-6 py-4 text-xs font-black uppercase text-[#7C857C]">Product</th>
                            <th className="px-6 py-4 text-xs font-black uppercase text-[#7C857C]">Category</th>
                            <th className="px-6 py-4 text-xs font-black uppercase text-[#7C857C]">Price</th>
                            <th className="px-6 py-4 text-xs font-black uppercase text-[#7C857C]">Stock</th>
                            <th className="px-6 py-4 text-xs font-black uppercase text-[#7C857C]">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1C261C]">
                        {MOCK_PRODUCTS.map(p => (
                            <tr key={p.id} className="hover:bg-[#1C261C]/20 transition-colors">
                                <td className="px-6 py-4 flex items-center gap-4">
                                    <img src={p.images[0]} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                                    <span className="font-bold text-sm">{p.name}</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-[#B8C0B8]">{p.category}</td>
                                <td className="px-6 py-4 text-sm font-bold">₹{p.price}</td>
                                <td className="px-6 py-4 text-sm">
                                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${p.stock > 0 ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                        {p.stock} In Stock
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-3 text-[#7C857C]">
                                        <button className="hover:text-[#74C63D]"><Edit3 size={18} /></button>
                                        <button className="hover:text-red-500"><Trash2 size={18} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export const Admin = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="flex">
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="flex-grow p-8 max-h-[calc(100vh-65px)] overflow-y-auto">
                {activeTab === 'dashboard' && <DashboardView />}
                {activeTab === 'products' && <ProductsView />}
                {activeTab === 'orders' && <div className="flex items-center justify-center h-64 text-[#7C857C]">Order management view coming soon...</div>}
                {activeTab === 'workshops' && <div className="flex items-center justify-center h-64 text-[#7C857C]">Workshop management view coming soon...</div>}
                {activeTab === 'gallery' && <div className="flex items-center justify-center h-64 text-[#7C857C]">Gallery management view coming soon...</div>}
            </main>
        </div>
    );
};
