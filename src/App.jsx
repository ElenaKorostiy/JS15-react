import React, { useState, useEffect } from 'react';
import { Timer } from "./components/timer";

export const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const[userLocation, setUserLocation] = useState(null);
  
  
  const handleButtonClick = () => {
    setClickCount((prevClickCount) => prevClickCount + 1);
    setClickCount((prevClickCount) => prevClickCount + 1);
    setClickCount((prevClickCount) => prevClickCount + 1);
    setClickCount((prevClickCount) => prevClickCount + 1);
    setClickCount((prevClickCount) => prevClickCount + 1);
  };
 useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const data = await fetch("https://dummyjson.com/posts");
      const posts = await data.json();
      setLoading(false);
      setPosts(posts.posts);
    };

    loadPosts();
 }, []);
  
  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };
    getUserLocation();
  }, []);
  
  return (
    <div>
      <Timer />
      {loading && <p>Loading...</p>}
      {userLocation && (
        <div>
          <p>User Location:</p>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
        </div>
      )}
      {posts && (
        <div>
          <p>Posts {posts.length}</p>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    
      <button onClick={handleButtonClick}>Click me</button>
      <ClickCounter count={clickCount} />
    </div>
  );
};

const ClickCounter = ({ count }) => {
  return <p>Number of clicks: {count}</p>;
};