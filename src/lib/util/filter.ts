import { get, writable } from 'svelte/store';
import { currentUser } from './pocketbase';

export const filter = writable('');

export const updateFilter = (query: string) => {
  let filterString = '';

  if (query == '') {
    filter.set('');
  }

  if (query.length < 3) {
    return;
  }

  if (query.startsWith('#')) {
    filterString = `id="${query.slice(1)}"`;
  } else if (query.startsWith('@own')) {
    let user = get(currentUser);
    if (!user) {
      return;
    }
    filterString = `author="${user.id}"`;
  } else {
    filterString = `title~"${query}"`;
  }

  filter.set(filterString);
  console.log('filter set');
};
