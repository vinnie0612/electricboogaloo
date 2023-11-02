const sortTop = '+upvotes,-downvotes';
const sortNew = '-created';
const sortRandom = '@random';

import { writable } from 'svelte/store';
import { get } from 'svelte/store';

export const sort = writable({ filter: sortNew, display: 'new' });

export const updateSort = (sortString: string) => {
  switch (sortString) {
    case 'top':
      sort.set({ filter: sortTop, display: 'top' });
      break;
    case 'new':
      sort.set({ filter: sortNew, display: 'new' });
      break;
    case 'random':
      sort.set({ filter: sortRandom, display: 'random' });
      break;
  }
};

export const nextSort = () => {
  let current = get(sort);
  switch (current.display) {
    case 'top':
      sort.set({ filter: sortNew, display: 'new' });
      break;
    case 'new':
      sort.set({ filter: sortRandom, display: 'random' });
      break;
    case 'random':
      sort.set({ filter: sortTop, display: 'top' });
      break;
  }
};
