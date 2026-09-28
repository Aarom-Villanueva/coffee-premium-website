export type SignatureCoffee = {
  key: string;
  num: string;
  name: string;
  origin: string;
  process: string;
  brew: string;
  notes: string;
  price: string;
  src: string;
  alt: string;
  posWide: string;
  posNarrow: string;
};

export const coffees: SignatureCoffee[] = [
  {
    key: 'kiambu',
    num: 'Nº 01',
    name: 'Kiambu AA',
    origin: 'Kenya',
    process: 'Washed',
    brew: 'V60, 94°',
    notes: 'Blackcurrant, pink grapefruit, demerara',
    price: '€7.50',
    src: '/images/coffie/coffie-signature-kiambu.jpg',
    alt: 'A glass of amber filter coffee on a worn wooden counter',
    posWide: '50% 50%',
    posNarrow: '50% 60%',
  },
  {
    key: 'soledad',
    num: 'Nº 02',
    name: 'Finca La Soledad',
    origin: 'Guatemala',
    process: 'Honey',
    brew: 'Espresso, 1:2.2',
    notes: 'Cocoa nib, dark plum, brown butter',
    price: '€4.20',
    src: '/images/coffie/coffie-signature-soledad.jpg',
    alt: 'A ceramic cup of espresso beside a copper spoon on the counter',
    posWide: '50% 50%',
    posNarrow: '50% 65%',
  },
  {
    key: 'hambela',
    num: 'Nº 03',
    name: 'Guji Hambela',
    origin: 'Ethiopia',
    process: 'Natural',
    brew: 'Kalita, 93°',
    notes: 'Jasmine, bergamot, ripe white peach',
    price: '€8.00',
    src: '/images/coffie/coffie-signature-hambela.jpg',
    alt: 'Water poured from a copper kettle into a pour-over dripper',
    posWide: '40% 50%',
    posNarrow: '45% 50%',
  },
];
