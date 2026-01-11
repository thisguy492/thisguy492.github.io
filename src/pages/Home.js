import React, { useState} from 'react';
function Home() {
    const [title, setTitle] = useState('');
  return (
    <div>
      <h1>Welcome to the Home Page {title}</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <p>This is the main page of our multi-page React application.</p>
    </div>

  );
}

export default Home;