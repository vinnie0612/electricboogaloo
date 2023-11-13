import PocketBase from 'pocketbase';

import { get, writable } from 'svelte/store';

export const pb = new PocketBase('https://api.petrikmeme.hu');
pb.autoCancellation(false);

export const currentUser = writable(pb.authStore.model);

export const signIn = async () => {
  const authData = await pb
    .collection('users')
    .authWithOAuth2({ provider: 'microsoft', createData: { isBanned: false } });

  if (authData.record.isBanned) {
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
