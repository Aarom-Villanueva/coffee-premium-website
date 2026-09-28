export type NavItem = {
  num: string;
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { num: '01', label: 'Story', href: '#story' },
  { num: '02', label: 'Coffees', href: '#coffees' },
  { num: '03', label: 'Menu', href: '#menu' },
  { num: '04', label: 'Moments', href: '#gallery' },
  { num: '05', label: 'Visit', href: '#visit' },
];

export const reserveHref = '#reserve';
