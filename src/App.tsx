import { useState } from 'react';
import LinkCard from './components/LinkCard';
import { MapModal } from './components/MapModal';
import { ShareModal } from './components/ShareModal';
import { PromoModal } from './components/PromoModal';
import logoImg from './assets/logo.jpg';
import './App.css';

function App() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);

  const profileUrl = 'https://linktr.ee/Empireautospa';
  const avatarUrl = logoImg;

  return (
    <div className="app-container">
      {/* Outer mock mobile shell for desktop */}
      <div className="mobile-shell">
        {/* Top bar with back icon and share button */}
        <div className="top-bar">
          <button 
            type="button" 
            className="top-bar-btn top-bar-logo" 
            onClick={() => setIsPromoOpen(true)} 
            aria-label="About Linktree"
            data-tooltip="About Linktree"
          >
            <svg fill="currentColor" viewBox="0 0 28 28" width="18" height="18">
              <path d="m15.7603 6.829 4.6725-4.80317 2.712 2.77734-4.9012 4.67248h6.8944v3.85565h-6.9271l4.9339 4.7922-2.712 2.7229-6.6983-6.731-6.69829 6.731-2.712-2.712 4.93387-4.7923h-6.92703v-3.86645h6.89436l-4.9012-4.67248 2.712-2.77734 4.67249 4.80317v-6.829h4.0516zm-4.0516 12.0243h4.0516v9.1489h-4.0516z"></path>
            </svg>
          </button>
          <button 
            type="button" 
            className="top-bar-btn top-bar-share" 
            onClick={() => setIsShareOpen(true)} 
            aria-label="Share profile"
            data-tooltip="Share"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
            </svg>
          </button>
        </div>

        {/* Profile Info */}
        <div className="profile-header">
          <div className="profile-avatar-container">
            <img 
              src={avatarUrl} 
              alt="Empire Auto Spa Logo" 
              className="profile-avatar"
              onError={(e) => {
                // Fallback image in case the UGC link is dead
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=250&auto=format&fit=crop';
              }}
            />
          </div>
          <div className="profile-name-container">
            <h1 className="profile-name">Empire Auto Spa</h1>
            <span className="verified-badge" title="Verified Account">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
              </svg>
            </span>
          </div>
          <h2 className="profile-bio">PPF, Ceramic Coatings, Detailing</h2>
        </div>

        {/* Inline Social Row */}
        <div className="social-row">
          <a href="https://www.instagram.com/dabautoconcept" className="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-tooltip="Instagram">
            <svg fill="currentColor" width="22" height="22" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path>
            </svg>
          </a>
          <a href="https://wa.me/923223700777" className="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" data-tooltip="WhatsApp">
            <svg fill="currentColor" width="22" height="22" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.455h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@dab.autoconcept" className="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="TikTok" data-tooltip="TikTok">
            <svg fill="currentColor" width="22" height="22" viewBox="0 0 24 24">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.52-4.06-1.42-.45-.37-.83-.82-1.14-1.31v7.43c.06 2.02-.73 4.09-2.21 5.48-1.57 1.51-3.9 2.13-5.99 1.62-2.12-.47-3.93-2.07-4.66-4.13-.88-2.39-.41-5.18 1.28-7.06 1.58-1.8 4.19-2.52 6.47-1.78v4.09c-1.28-.52-2.83-.17-3.69.87-.77.9-1.02 2.21-.6 3.33.4 1.14 1.58 1.95 2.79 1.9 1.34.02 2.54-.95 2.79-2.27.1-.47.09-.96.09-1.44V.02z"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/@dabautoconcept" className="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="YouTube" data-tooltip="YouTube">
            <svg fill="currentColor" width="22" height="22" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/dab.auto.concept" className="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-tooltip="Facebook">
            <svg fill="currentColor" width="22" height="22" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
            </svg>
          </a>
        </div>

        {/* Main Link Cards Container */}
        <div className="links-area">
          {/* Booking Card */}
          <LinkCard 
            title="Booking/Appointments!" 
            url="https://wa.me/923223700777" 
            iconType="phone" 
          />
          <LinkCard 
            title="Email Us!" 
            url="mailto:empireautospa5@gmail.com" 
            iconType="email" 
          />

          {/* Branch Locations Section */}
          <div className="section-divider">
            <h3 className="section-title">Branch Locations!</h3>
          </div>
          
          <div className="links-group">
            <LinkCard 
              title="College Road Lahore Branch!" 
              url="https://maps.app.goo.gl/ZGuX1SmZStV2g9ie7?g_st=com.google.maps.preview.copy" 
              iconType="pin" 
            />
            
            <LinkCard 
              title="Islamabad Branch!" 
              addressText="G-9/4, G-9, Islamabad"
              iconType="pin" 
              onClick={() => setIsMapOpen(true)}
            />
            
            <LinkCard 
              title="Ring Road Lahore Branch!" 
              url="https://maps.app.goo.gl/g7rYTPjMhXxToiuEA?g_st=com.google.maps.preview.copy" 
              iconType="pin" 
            />
          </div>

          {/* Social Media Section */}
          <div className="section-divider">
            <h3 className="section-title">Social Media Handles</h3>
          </div>

          <div className="links-group">
            <LinkCard 
              title="TikTok" 
              url="https://www.tiktok.com/@dab.autoconcept" 
              iconType="tiktok" 
            />
            <LinkCard 
              title="Instagram" 
              url="https://www.instagram.com/dabautoconcept" 
              iconType="instagram" 
            />
            <LinkCard 
              title="Facebook" 
              url="https://www.facebook.com/dab.auto.concept" 
              iconType="facebook" 
            />
            <LinkCard 
              title="YouTube" 
              url="https://www.youtube.com/@dabautoconcept" 
              iconType="youtube" 
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="footer-area">
          <a href="https://linktr.ee/?utm_source=linktree&utm_medium=profile&utm_campaign=footer_logo_cta&utm_content=Empireautospa" className="cta-pill" target="_blank" rel="noopener noreferrer">
            <span className="cta-icon">
              <svg fill="currentColor" viewBox="0 0 28 28" width="16" height="16">
                <path d="m15.7603 6.829 4.6725-4.80317 2.712 2.77734-4.9012 4.67248h6.8944v3.85565h-6.9271l4.9339 4.7922-2.712 2.7229-6.6983-6.731-6.69829 6.731-2.712-2.712 4.93387-4.7923h-6.92703v-3.86645h6.89436l-4.9012-4.67248 2.712-2.77734 4.67249 4.80317v-6.829h4.0516zm-4.0516 12.0243h4.0516v9.1489h-4.0516z"></path>
              </svg>
            </span>
            <span className="cta-text">Join Empire Auto Spa on Linktree</span>
          </a>
          <div className="footer-links">
            <a href="https://linktr.ee/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://linktr.ee/s/about/trust-center/report/?field86145911=https%3A%2F%2Flinktr.ee%2FEmpireautospa" target="_blank" rel="noopener noreferrer">Report Profile</a>
          </div>
        </footer>
      </div>

      {/* Islamabad Branch Map Modal */}
      <MapModal 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)} 
        title="Islamabad Branch!" 
        address="G-9/4, G-9, Islamabad"
        directionsUrl="https://maps.app.goo.gl/f5w7HU7gJ6W7tMcB9?g_st=iw"
      />

      {/* Share Modal overlay */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        logoUrl={avatarUrl}
        profileUrl={profileUrl}
      />

      {/* Promo Modal overlay */}
      <PromoModal
        isOpen={isPromoOpen}
        onClose={() => setIsPromoOpen(false)}
      />
    </div>
  );
}

export default App;
