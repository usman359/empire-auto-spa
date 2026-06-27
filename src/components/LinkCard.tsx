import React, { useState } from 'react';
import { LinkShareModal } from './LinkShareModal';

interface LinkCardProps {
  title: string;
  url?: string;
  iconType: 'phone' | 'pin' | 'tiktok' | 'instagram' | 'facebook' | 'youtube' | 'email';
  addressText?: string;
  onClick?: () => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({
  title,
  url,
  iconType,
  addressText,
  onClick,
}) => {
  const [showShare, setShowShare] = useState(false);

  const getIcon = () => {
    switch (iconType) {
      case 'phone':
        return (
          <svg viewBox="0 0 24 24" className="link-card-icon" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
          </svg>
        );
      case 'pin':
        return (
          <svg viewBox="0 0 24 24" className="link-card-icon" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
          </svg>
        );
      case 'tiktok':
        return (
          <svg viewBox="0 0 24 24" className="link-card-icon" fill="currentColor">
            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.52-4.06-1.42-.45-.37-.83-.82-1.14-1.31v7.43c.06 2.02-.73 4.09-2.21 5.48-1.57 1.51-3.9 2.13-5.99 1.62-2.12-.47-3.93-2.07-4.66-4.13-.88-2.39-.41-5.18 1.28-7.06 1.58-1.8 4.19-2.52 6.47-1.78v4.09c-1.28-.52-2.83-.17-3.69.87-.77.9-1.02 2.21-.6 3.33.4 1.14 1.58 1.95 2.79 1.9 1.34.02 2.54-.95 2.79-2.27.1-.47.09-.96.09-1.44V.02z"></path>
          </svg>
        );
      case 'instagram':
        return (
          <svg viewBox="0 0 24 24" className="link-card-icon" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path>
          </svg>
        );
      case 'facebook':
        return (
          <svg viewBox="0 0 24 24" className="link-card-icon" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
          </svg>
        );
      case 'youtube':
        return (
          <svg viewBox="0 0 24 24" className="link-card-icon" fill="currentColor">
            <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
          </svg>
        );
      case 'email':
        return (
          <svg viewBox="0 0 24 24" className="link-card-icon" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowShare(!showShare);
  };

  const shareUrl = url || window.location.href;

  const cardContent = (
    <div className="link-card-inner">
      <div className="link-card-icon-container">{getIcon()}</div>
      <div className="link-card-text-container">
        <span className="link-card-title">{title}</span>
        {addressText && (
          <div className="link-card-subtext">
            <svg viewBox="0 0 24 24" className="link-card-sub-pin" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
            </svg>
            <span className="link-card-address">{addressText}</span>
          </div>
        )}
      </div>
      <button
        type="button"
        className="link-card-share-btn"
        onClick={handleShareClick}
        aria-label={`Share ${title}`}
        data-tooltip="Share link"
      >
        <svg width="4" height="16" viewBox="0 0 4 16" fill="currentColor">
          <path d="M2 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      </button>

      {showShare && (
        <div onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
          <LinkShareModal
            isOpen={showShare}
            onClose={() => setShowShare(false)}
            title={title}
            url={shareUrl}
            iconType={iconType}
          />
        </div>
      )}
    </div>
  );

  const handleCardClick = (e: React.MouseEvent) => {
    if (
      (e.target as HTMLElement).closest('.link-card-share-btn') ||
      (e.target as HTMLElement).closest('.share-menu-dropdown')
    ) {
      return;
    }
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) {
        onClick();
      } else if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="link-card-button-div"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      {cardContent}
    </div>
  );
};
export default LinkCard;
