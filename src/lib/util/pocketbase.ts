import PocketBase from 'pocketbase';

import { get, writable } from 'svelte/store';

export const pb = new PocketBase('https://pb.petrikreal.tech');
pb.autoCancellation(false);

export const currentUser = writable(pb.authStore.model);

export const signIn = async () => {
  await pb
    .collection('users')
    .authWithOAuth2({ provider: 'microsoft', createData: { isBanned: false } });

  let user = get(currentUser);
  if (user?.isBanned) {
    pb.authStore.clear();
    alert('you have been banned.');
  }
};

export const signOut = async () => {
  await pb.authStore.clear();
};

pb.authStore.onChange((auth) => {
  currentUser.set(pb.authStore.model);
});
