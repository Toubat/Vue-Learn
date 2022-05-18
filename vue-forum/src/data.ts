interface Post {
  id: string;
  userId: string;
  publishedAt: number;
}

interface User {
  id: string;
  name: string;
}

interface Thread {
  id: string;
  userId: string;
  title: string;
  publishedAt: number;
  posts: Post[] | string[];
}

interface Forum {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  threads: string[] | Thread[];
}

interface Category {
  id: string;
  name: string;
  forums: string[] | Forum[];
}

type data = {
  categories: Category[];
  forums: Forum[];
  users: User[];
  threads: Thread[];
  posts: Post[];
};
