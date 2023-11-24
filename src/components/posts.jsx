import { useEffect} from "react";
import { useUserContext } from "../components/provider/user";

export const Posts = () => {
  const { user } = useUserContext();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();

        console.log("Posts:", data.posts);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };

    if (user) {
      fetchPosts();
    }
  }, [user]);

  return (
    <div>
      <h2>Posts</h2>
      {user ? (
        <p>User is logged in. Loading posts...</p>
      ) : (
        <p>Please log in to view posts.</p>
      )}
    </div>
  );
};

