import { writable } from 'svelte/store';
import { pb } from '$lib/util/pocketbase';
import type { RecordModel } from 'pocketbase';

export interface Post extends RecordModel {
  author: string;
  title: string;
  imageUrl: string;
  createdDate: Date;
  upvotes: string[];
  downvotes: string[];
  score: number;
}

let postsList: Post[] = [];

export const posts = writable({ items: postsList, length: 0, pages: 0 });

export const fetchPosts = async (page: number, filter: string, sort: string) => {
  let perPage = 20;
  let result;
  if (typeof filter !== 'undefined' && filter !== '') {
    result = await pb.collection('posts').getList(page, perPage, { filter: filter, sort: sort });
  } else {
    result = await pb.collection('posts').getList(page, perPage, { sort: sort });
  }
  let postsList: Post[] = [];
  result.items.forEach((item) => {
    let post = item as Post;
    post.imageUrl = pb.files.getUrl(post, post.image);
    post.createdDate = new Date(post.created);
    post.score = post.upvotes.length - post.downvotes.length;
    postsList.push(post);
  });

  posts.set({ items: postsList, length: result.totalItems, pages: result.totalPages });
};
