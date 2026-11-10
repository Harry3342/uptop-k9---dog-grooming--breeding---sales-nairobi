import React, { useState } from 'react';
import { Check, ShoppingBag, Sparkles, Truck } from 'lucide-react';
import { KENNEL_CONTACT } from '../data/kennelData';

interface MerchPageProps {
  currency: 'KES' | 'USD';
}

type CategoryId = 'all' | 't-shirts' | 'hoodies' | 'caps' | 'accessories';
type ProductCategory = Exclude<CategoryId, 'all'>;

const CATEGORY_OPTIONS: Array<{ id: CategoryId; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 't-shirts', label: 'T-Shirts' },
  { id: 'hoodies', label: 'Hoodies' },
  { id: 'caps', label: 'Caps' },
  { id: 'accessories', label: 'Accessories' },
];

interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  priceKES: number;
  description: string;
  color: string;
  image: string;
  sizes?: string[];
  badge?: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'pack-tee',
    name: 'Uptop Pack Tee',
    category: 't-shirts',
    priceKES: 1800,
    description: 'Heavyweight cotton tee with our signature pack mark.',
    color: 'bg-[#111111]',
    image: '/assets/dogs/1000506653.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'Best seller',
  },
  {
    id: 'kennel-hoodie',
    name: 'Kennel Club Hoodie',
    category: 'hoodies',
    priceKES: 4200,
    description: 'A warm, relaxed fit for early walks and cool Nairobi evenings.',
    color: 'bg-[#25232a]',
    image: '/assets/dogs/UpTop Hoodie Streetwear Showcase.png',
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'New drop',
  },
  {
    id: 'heritage-cap',
    name: 'Heritage K9 Cap',
    category: 'caps',
    priceKES: 1500,
    description: 'Structured cotton cap with a clean embroidered emblem.',
    color: 'bg-[#d7d0c4]',
    image: '/assets/dogs/Gemini_Generated_Image_43p63843p63843p6.jpg',
    sizes: ['One size'],
  },
  {
    id: 'walk-tote',
    name: 'Walkies Canvas Tote',
    category: 'accessories',
    priceKES: 1200,
    description: 'Durable everyday tote for leads, treats, and everything else.',
    color: 'bg-[#e7e1d5]',
    image: '/assets/dogs/UpTop Hoodie Logo Studio Portrait.png',
    sizes: ['One size'],
  },
  {
    id: 'guardian-tee',
    name: 'Guardian Tee',
    category: 't-shirts',
    priceKES: 1800,
    description: 'Soft premium tee inspired by the dogs who watch over us.',
    color: 'bg-[#111111]',
    image: '/assets/dogs/1000506653.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'kennel-sweatshirt',
    name: 'Umoja Crew Sweatshirt',
    category: 'hoodies',
    priceKES: 3500,
    description: 'A simple, heavyweight layer made for kennel days.',
    color: 'bg-[#25232a]',
    image: '/assets/dogs/UpTop Hoodie Studio Portrait.png',
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

const formatPrice = (priceKES: number, currency: 'KES' | 'USD') =>
  currency === 'KES' ? `KSh ${priceKES.toLocaleString('en-KE')}` : `$${Math.round(priceKES / 130)}`;

export const MerchPage: React.FC<MerchPageProps> = ({ currency }) => {
  const [category, setCategory] = useState<CategoryId>('all');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [cart, setCart] = useState<Record<string, number>>({});
  const [addedProduct, setAddedProduct] = useState<string | null>(null);

  const visibleProducts = category === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === category);
  const selectedCategoryLabel = CATEGORY_OPTIONS.find((option) => option.id === category)?.label ?? 'All';
  const cartCount = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  const cartTotal = PRODUCTS.reduce((sum, product) => sum + product.priceKES * (cart[product.id] || 0), 0);

  const addToCart = (product: Product) => {
    setCart((current) => ({ ...current, [product.id]: (current[product.id] || 0) + 1 }));
    setAddedProduct(product.id);
    window.setTimeout(() => setAddedProduct(null), 1800);
  };

  return (
    <div className="pb-20">
      <section className="relative overflow-hidden bg-[#1d281b] text-white">
        <div className="absolute inset-0 opacity-30">
          <img src="/assets/dogs/UpTop Hoodie Streetwear Showcase.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-end gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#9fc76d] px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#213019]">
              <Sparkles className="h-3.5 w-3.5" /> The Uptop K9 collection
            </span>
            <h1 className="text-4xl font-black leading-[0.98] tracking-tight sm:text-6xl">Wear your love for the pack.</h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Branded essentials for dog people, made for long walks, kennel days, and showing up for the pack.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-xs font-bold">
              <span className="rounded-full bg-white/10 px-4 py-2">Small-batch drops</span>
              <span className="rounded-full bg-white/10 px-4 py-2">Nairobi delivery</span>
            </div>
          </div>
          <div className="hidden justify-self-end rounded-[2rem] border border-white/15 bg-white/10 p-8 backdrop-blur-sm lg:block">
            <img src="/assets/uptop_k9_logo.png" alt="Uptop K9" className="mx-auto h-36 w-36 rounded-full object-cover shadow-2xl" />
            <p className="mt-5 text-center text-xs font-bold uppercase tracking-[0.2em] text-white/70">Built for the pack</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { image: '/assets/dogs/UpTop Hoodie Studio Portrait.png', label: 'Signature hoodie' },
            { image: '/assets/dogs/1000506653.jpg', label: 'Everyday tees' },
            { image: '/assets/dogs/Gemini_Generated_Image_43p63843p63843p6.jpg', label: 'Uptop caps' },
          ].map((feature) => (
            <div key={feature.label} className="group relative h-56 overflow-hidden rounded-[1.75rem] bg-[#171717]">
              <img src={feature.image} alt={feature.label} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-12">
                <span className="text-sm font-black text-white">{feature.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#76A035]">Shop the drop</span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-900 dark:text-white">Everyday gear, Uptop style.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORY_OPTIONS.map((item) => (
              <button
                key={item.id}
                onClick={() => setCategory(item.id)}
                aria-pressed={category === item.id}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${category === item.id ? 'bg-[#76A035] text-white' : 'border border-[#E3ECD5] bg-white text-gray-600 hover:border-[#76A035] dark:border-[#2C3824] dark:bg-[#1A1F18] dark:text-gray-300'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
          Showing {selectedCategoryLabel}
        </p>
        <div key={category} className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => {
            const size = selectedSizes[product.id] || product.sizes?.[1] || product.sizes?.[0] || 'One size';
            const quantity = cart[product.id] || 0;
            return (
              <article key={`${category}-${product.id}`} className="group overflow-hidden rounded-[1.75rem] border border-[#E3ECD5] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-[#2C3824] dark:bg-[#1A1F18]">
                <div className={`relative flex h-72 items-center justify-center overflow-hidden ${product.color}`}>
                  <img src={product.image} alt={product.name} className="relative h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  {product.badge && <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#5B8226]">{product.badge}</span>}
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div><h3 className="font-black text-gray-900 dark:text-white">{product.name}</h3><p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">{product.description}</p></div>
                    <span className="shrink-0 text-sm font-black text-[#5B8226] dark:text-[#A8D368]">{formatPrice(product.priceKES, currency)}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {product.sizes?.map((item) => <button key={item} onClick={() => setSelectedSizes((current) => ({ ...current, [product.id]: item }))} className={`h-8 min-w-8 rounded-lg px-2 text-[10px] font-black ${size === item ? 'bg-[#76A035] text-white' : 'bg-[#F2F7EA] text-[#5B8226] dark:bg-[#25301E] dark:text-[#A8D368]'}`}>{item}</button>)}
                    </div>
                    <button onClick={() => addToCart(product)} className="flex h-10 items-center gap-2 rounded-full bg-[#1d281b] px-4 text-xs font-bold text-white transition hover:bg-[#76A035]">
                      {addedProduct === product.id ? <><Check className="h-4 w-4" /> Added</> : <><ShoppingBag className="h-4 w-4" /> Add{quantity > 0 ? ` (${quantity})` : ''}</>}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#F2F7EA] p-6 dark:bg-[#1A2417] sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#76A035] shadow-sm dark:bg-[#25301E]"><Truck className="h-5 w-5" /></div>
            <div><h3 className="font-black text-gray-900 dark:text-white">Your cart {cartCount > 0 && `· ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}</h3><p className="mt-1 text-xs text-gray-600 dark:text-gray-300">We deliver across Nairobi. Pick up from Nasra Gardens by arrangement.</p></div>
          </div>
          <div className="text-right text-xs text-gray-700 dark:text-gray-200">
            {cartCount > 0 && <p className="font-bold">Cart total: {formatPrice(cartTotal, currency)}</p>}
            <p>For orders, contact us and pay by M-PESA Buy Goods Till <strong>{KENNEL_CONTACT.mpesaTill}</strong>.</p>
            <p className="mt-1">Call {KENNEL_CONTACT.phoneFormatted} to arrange delivery.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
