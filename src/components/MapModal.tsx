import React, { useState } from 'react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  address: string;
  directionsUrl: string;
}

export const MapModal: React.FC<MapModalProps> = ({
  isOpen,
  onClose,
  title,
  address,
  directionsUrl,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(directionsUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    title + ' ' + address
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title-area">
            <svg viewBox="0 0 24 24" className="modal-pin-icon" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
            </svg>
            <div>
              <h3 className="modal-title">{title}</h3>
              <p className="modal-address">{address}</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className="modal-body">
          <iframe
            title="Google Maps Location"
            src={embedUrl}
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>

        <div className="modal-footer">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn modal-btn-primary"
          >
            Get directions
          </a>
          <button className="modal-btn modal-btn-secondary" onClick={handleShare}>
            {copied ? 'Copied!' : 'Share'}
          </button>
          <button className="modal-btn modal-btn-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
