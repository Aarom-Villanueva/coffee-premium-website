export type Moment = {
  key: string;
  src: string;
  alt: string;
  time: string;
  label: string;
};

export const moments: Moment[] = [
  {
    key: 'first-pour',
    src: '/images/coffie/coffie-moment-first-pour.jpg',
    alt: 'A barista pouring from a copper kettle into a pour-over at the bar',
    time: '07:40',
    label: 'First pour',
  },
  {
    key: 'roaster',
    src: '/images/coffie/coffie-moment-roaster.jpg',
    alt: 'A roaster tending a small drum roaster beside sacks of green coffee',
    time: 'Tue',
    label: 'Roasting day',
  },
  {
    key: 'bloom',
    src: '/images/coffie/coffie-moment-bloom.jpg',
    alt: 'Coffee grounds blooming in a paper filter, seen from above',
    time: '0:30',
    label: 'Bloom',
  },
  {
    key: 'eleven-seats',
    src: '/images/coffie/coffie-moment-eleven-seats.jpg',
    alt: 'The long wooden counter and bar stools in afternoon light',
    time: '16:10',
    label: 'Eleven seats, afternoon',
  },
];
