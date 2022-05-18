<template>
  <div class="col-large push-top" v-for="thread in threads" :key="thread.id">
    <h1>{{ thread.title }}</h1>
    <div class="post-list">
      <div class="post" v-for="postId in thread.posts" :key="postId">
        <div class="user-info">
          <a href="#" class="user-name">{{ getUserById(getPostById(postId).userId).name }}</a>
          <a href="#">
            <img
              class="avatar-large"
              :src="getUserById(getPostById(postId).userId).avatar"
              alt=""
            />
          </a>
          <p class="desktop-only text-small" href="">107 posts</p>
        </div>
        <div class="post-content">
          <div>
            <p>{{ getPostById(postId).text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json';

export default {
  name: 'HomePage',
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  methods: {
    getPostById(postId) {
      return this.posts.find((post) => post.id === postId);
    },
    getUserById(userId) {
      return this.users.find((user) => user.id === userId);
    },
  },
};
</script>

<style scoped></style>
