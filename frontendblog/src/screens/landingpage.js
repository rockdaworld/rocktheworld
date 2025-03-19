import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the About Me page
    navigate('/about');
  };

  return (
    <div>
      <h1>Welcome to My Site!</h1>
      <p>This is the landing page where you can get an overview of what I do.</p>
      <button onClick={handleButtonClick}>Learn More About Me</button>

      <p>Click here to go to my blog</p>
      <button onClick={() => navigate('/blog')}>blog</button>
    </div>
  );
}

export default LandingPage;
