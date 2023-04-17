interface IContactInfo {
  icon: string;
  label: string;
  href: string;
}

const contactInfoData: IContactInfo[] = [
  {
    icon: 'location',
    label: 'Bytom, karbowska 13/1 41-923',
    href: 'https://www.google.pl/maps/place/Karbowska+13',
  },
  {
    icon: 'phone',
    label: '+48 513 292 132',
    href: 'tel:+48513292132',
  },
  {
    icon: 'mail',
    label: 'kamilsinskiserwis@gmail.com',
    href: 'mailto:mailto:kamilsinskiserwis@gmail.com',
  },
  {
    icon: 'facebook',
    label: '/kamilsinskiserwis',
    href: 'https://www.facebook.com/kamilsinskiserwis',
  },
];

export default contactInfoData;
