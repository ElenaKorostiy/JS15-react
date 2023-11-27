import { useEffect, useState} from "react";
import { useUserContext } from "../components/provider/user";
import { Post } from "./post";

export const Posts = () => {
  const { user } = useUserContext();
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch("https://dummyjson.com/posts");
      if (resp.ok) {
        const { posts } = await resp.json();
        setPosts(posts);
      }
    };

    if (user) {
      fetchPosts();
    }
  }, [user]);

  return user ? (
    posts.map((post) => (
      <Post
        title={post.title}
        authorId={post.userId}
        key={post.id}
        body={post.body}
      />
    ))
  ) : (
    <p>Please Login</p>
  );
};