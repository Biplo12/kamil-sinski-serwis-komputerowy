interface IContactInfo {
  icon: string;
  content: string;
  href: string;
}

export const contactInfoData: IContactInfo[] = [
  {
    icon: 'location',
    content: 'Bytom, karbowska 13/1 41-923',
    href: 'https://www.google.pl/maps/place/Karbowska+13',
  },
  {
    icon: 'phone',
    content: '+48 513 292 132',
    href: 'tel:+48513292132',
  },
  {
    icon: 'mail',
    content: 'kamilsinskiserwis@gmail.com',
    href: 'mailto:mailto:kamilsinskiserwis@gmail.com',
  },
  {
    icon: 'facebook',
    content: '/kamilsinskiserwis',
    href: 'https://www.facebook.com/kamilsinskiserwis',
  },
];
