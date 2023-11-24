import { useUser } from './components/provider/user'

export const Post = ({ post }) => {
  const { user } = useUser();

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {user && user.id === post.authorId && <p>You are the author of this post.</p>}
    </div>
  );
};

