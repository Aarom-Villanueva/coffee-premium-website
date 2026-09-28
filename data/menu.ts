export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    title: 'Espresso Bar',
    items: [
      { name: 'Espresso', description: 'La Soledad, 18g in, 40g out', price: '3.00' },
      { name: 'Cortado', description: 'Equal parts, served warm', price: '3.60' },
      { name: 'Flat White', description: 'Double ristretto', price: '4.20' },
      { name: 'Filter of the Day', description: 'Batch-brewed, rotating', price: '4.00' },
    ],
  },
  {
    title: 'Slow Bar',
    items: [
      { name: 'Pour-over', description: 'V60 or Kalita, by origin', price: '6.50–9.00' },
      { name: 'Tasting Flight', description: 'Three origins, side by side', price: '14.00' },
      { name: 'Cold Brew', description: 'Eighteen-hour steep, over ice', price: '5.00' },
      { name: 'Cascara Tonic', description: 'Coffee cherry, tonic, orange peel', price: '5.50' },
    ],
  },
  {
    title: 'Kitchen',
    items: [
      { name: 'Cardamom Bun', description: 'Baked at seven', price: '3.80' },
      { name: 'Pastel de Nata', description: 'From Manteigaria, next door', price: '1.80' },
      { name: 'Sourdough', description: 'Cultured butter, flaked salt', price: '4.50' },
      { name: 'Olive Oil Cake', description: 'Orange zest, crème fraîche', price: '4.20' },
    ],
  },
];
