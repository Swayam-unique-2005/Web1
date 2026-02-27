export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imagePrompt: string; // For AI generation reference
}

export const products: Product[] = [
  {
    id: "1",
    slug: "minimalist-watch",
    name: "Zenith Minimalist Watch",
    description: "A sleek, timeless timepiece designed for the modern professional. Features a genuine leather strap and sapphire crystal glass.",
    price: 199.00,
    category: "Accessories",
    imagePrompt: "minimalist luxury watch on a dark stone surface, dramatic lighting, high detail",
  },
  {
    id: "2",
    slug: "ergonomic-chair",
    name: "ErgoFlow Workspace Chair",
    description: "Designed for maximum comfort and productivity. Breathable mesh back and fully adjustable lumbar support.",
    price: 349.00,
    category: "Furniture",
    imagePrompt: "modern ergonomic office chair in a bright minimalist workspace, soft sunlight",
  },
  {
    id: "3",
    slug: "ceramic-coffee-set",
    name: "Artisan Ceramic Coffee Set",
    description: "Hand-crafted ceramic pour-over set. Includes dripper, carafe, and two matching mugs in a matte speckled finish.",
    price: 85.00,
    category: "Home",
    imagePrompt: "handcrafted ceramic coffee pour over set on a wooden table, cozy atmosphere, steam rising",
  },
  {
    id: "4",
    slug: "noise-cancelling-headphones",
    name: "SonicPure Headphones",
    description: "Industry-leading active noise cancellation with 30-hour battery life and premium audio quality.",
    price: 299.00,
    category: "Electronics",
    imagePrompt: "sleek silver over-ear headphones floating against a gradient background, studio lighting",
  },
  {
    id: "5",
    slug: "bamboo-standing-desk",
    name: "EcoLift Standing Desk",
    description: "Sustainable bamboo desktop with a quiet, dual-motor lifting mechanism. Programmable height settings.",
    price: 599.00,
    category: "Furniture",
    imagePrompt: "bamboo standing desk in a modern home office with plants, natural light",
  },
  {
    id: "6",
    slug: "travel-backpack",
    name: "Nomad Weekender Pack",
    description: "Water-resistant, expandable travel backpack with dedicated laptop compartment and anti-theft features.",
    price: 145.00,
    category: "Accessories",
    imagePrompt: "rugged yet stylish travel backpack resting on a rock in nature, golden hour lighting",
  },
];
