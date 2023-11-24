import { useUserContext } from '../components/provider/user';

export const Header = () => {
  const { user, loginUser } = useUserContext();

  const handleLogin = () => {
    if (!user) {
      loginUser();
    }
  };

  return (
    <div>
      <h1>Header</h1>
      {user ? (
        <p>Hello, {user.username}</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

