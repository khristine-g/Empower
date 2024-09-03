import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../LearnMore.css'; // Import the CSS file for styling

const LearnMore = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/submit-project');
  };

  return (
    <div className="learnmore-container">
      <div className="learnmore-content">
      
          <h2 className="learnmore-title">Bring your creative project to life</h2>
          <p className="learnmore-paragraph">
            The followup to Cities of Magick #1, a fantasy-western tale set in the post-post-post-apocalypse! Combines issues #2 & #3 into one book!
          </p>
          <button className="submitproject-button" onClick={handleLearnMoreClick}>Submit Project</button>
        </div>
        <div className="learnmore-image">
          <img src="https://bestcompaniesaz.com/wp-content/uploads/2021/04/black-women-in-tech.jpg" alt="Creative Project" className="learnmore-img" />
        </div>
      </div>
    
  );
};

export default LearnMore;
