interface ILinks {
  href: string;
  label: string;
}

const links: ILinks[] = [
  { href: '#strona-glowna', label: 'Strona główna' },
  { href: '#o-nas', label: 'O nas' },
  { href: '#dlaczego-my', label: 'Dlaczego my?' },
  // { href: '#portfolio', label: 'Portfolio' },
  { href: '#nasze-uslugi', label: 'Nasze usługi' },
  { href: '/status-zlecenia', label: 'Status zlecenia' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default links;
