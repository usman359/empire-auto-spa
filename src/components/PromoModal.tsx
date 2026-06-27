import React, { useState } from 'react';
import heroImg from '../assets/hero.png';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromoModal: React.FC<PromoModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');

  if (!isOpen) return null;

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      window.open(`https://linktr.ee/register?username=${encodeURIComponent(username)}`, '_blank');
    } else {
      window.open('https://linktr.ee/register', '_blank');
    }
  };

  return (
    <div className="promo-modal-overlay">
      <div className="promo-modal-content">
        {/* Header */}
        <div className="promo-modal-header">
          <div className="promo-logo">
            {/* Linktree symbol (asterisk) in black */}
            <svg fill="currentColor" viewBox="0 0 28 28" width="24" height="24">
              <path d="m15.7603 6.829 4.6725-4.80317 2.712 2.77734-4.9012 4.67248h6.8944v3.85565h-6.9271l4.9339 4.7922-2.712 2.7229-6.6983-6.731-6.69829 6.731-2.712-2.712 4.93387-4.7923h-6.92703v-3.86645h6.89436l-4.9012-4.67248 2.712-2.77734 4.67249 4.80317v-6.829h4.0516zm-4.0516 12.0243h4.0516v9.1489h-4.0516z"></path>
            </svg>
          </div>
          <button 
            className="promo-close-btn" 
            onClick={onClose} 
            aria-label="Close Promo Modal"
            data-tooltip="Close"
          >
            &times;
          </button>
        </div>

        {/* Headline & Body */}
        <div className="promo-body">
          <h1 className="promo-headline">
            Join the only link in bio trusted by 70M+ <span className="highlight-text">businesses.</span>
          </h1>
          <p className="promo-subheading">
            One link to share everything you create, curate and sell across IG, TikTok and more.
          </p>

          {/* Claim Form */}
          <form className="promo-claim-form" onSubmit={handleClaim}>
            <div className="promo-input-container">
              <span className="promo-prefix">linktr.ee/</span>
              <input
                type="text"
                className="promo-input"
                placeholder="yourname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-label="Enter your desired username"
              />
            </div>
            <button type="submit" className="promo-claim-btn" data-tooltip="Claim Username">
              Claim your Linktree
            </button>
          </form>

          {/* Extra Links */}
          <div className="promo-nav-links">
            <a 
              href="https://linktr.ee/s/discover" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="promo-link"
            >
              Explore more Linktrees
            </a>
            <a 
              href="https://linktr.ee/s/about" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="promo-link"
            >
              Learn more about Linktree
            </a>
          </div>

          {/* Sign Up Free CTA */}
          <div className="promo-cta-box">
            <a
              href="https://linktr.ee/register"
              className="promo-signup-btn"
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip="Sign Up Free"
            >
              Sign up free
            </a>
          </div>

          {/* Phone Mockup Image */}
          <div className="promo-mockup-container">
            <img 
              src={heroImg} 
              alt="Linktree Phone Mockup" 
              className="promo-mockup-img"
              onError={(e) => {
                // Fallback UI in case heroImg is missing
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
