import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  logoUrl: string;
  profileUrl: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  logoUrl,
  profileUrl,
}) => {
  const shareOptions = [
    {
      name: 'Facebook',
      iconClass: 'share-fb',
      color: '#1877F2',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileUrl)}`,
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      iconClass: 'share-wa',
      color: '#25D366',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out Empire Auto Spa on Linktree: ${profileUrl}`)}`,
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.455h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      iconClass: 'share-li',
      color: '#0077B5',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`,
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Messenger',
      iconClass: 'share-msg',
      color: '#00B2FF',
      url: `https://www.facebook.com/dialog/send?app_id=291494419107518&link=${encodeURIComponent(profileUrl)}&redirect_uri=${encodeURIComponent(profileUrl)}`,
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.267 14.885l-3.21-3.426-6.26 3.426 6.883-7.31 3.27 3.426 6.2-3.426-6.883 7.31z"/>
        </svg>
      )
    },
    {
      name: 'Snapchat',
      iconClass: 'share-snap',
      color: '#FFFC00',
      textColor: '#000000',
      url: `https://www.snapchat.com/share?url=${encodeURIComponent(profileUrl)}`,
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 .047c-.833 0-1.892.42-2.784.81-1.07.47-1.95 1.13-2.61 2.01-.58.78-.96 1.74-.96 2.87 0 1.25.43 2.16.89 2.92.23.38.32.61.16.89-.15.26-.52.54-.95.83-.93.61-2.12 1.39-2.12 2.76 0 .54.26 1.03.73 1.4.52.41 1.27.65 2.14.65.3 0 .61-.03.9-.08.41-.07.72.1.86.5.21.6.64 1.83 2.04 1.83.21 0 .42-.03.63-.09.34-.1.6.01.76.3.36.66 1.09 2.02 2.24 2.02s1.88-1.36 2.24-2.02c.16-.29.42-.4.76-.3.21.06.42.09.63.09 1.4 0 1.83-1.23 2.04-1.83.14-.4.45-.57.86-.5.29.05.6.08.9.08.87 0 1.62-.24 2.14-.65.47-.37.73-.86.73-1.4 0-1.37-1.19-2.15-2.12-2.76-.43-.29-.8-.57-.95-.83-.16-.28-.07-.51.16-.89.46-.76.89-1.67.89-2.92 0-1.13-.38-2.09-.96-2.87-.66-.88-1.54-1.54-2.61-2.01-.892-.39-1.951-.81-2.784-.81z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      iconClass: 'share-email',
      color: '#6e7075',
      url: `mailto:?subject=${encodeURIComponent('Empire Auto Spa Linktree')}&body=${encodeURIComponent(`Check out Empire Auto Spa on Linktree: ${profileUrl}`)}`,
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="share-modal-container bg-[#10121a] border-cyan-500/20 text-[#36c2cf] p-6 rounded-[28px] max-w-[500px] w-[92%] shadow-2xl">
        <DialogHeader className="share-modal-header text-left flex justify-between items-center border-none p-0">
          <DialogTitle className="share-modal-title text-white text-[17px] font-bold tracking-tight">
            Share Linktree
          </DialogTitle>
        </DialogHeader>

        {/* Preview Card */}
        <div className="share-preview-card bg-gradient-to-br from-[#161a29] to-[#0d0f17] border border-cyan-500/15 rounded-[20px] p-6 text-center my-4">
          <div className="share-preview-avatar-container w-[76px] height-[76px] rounded-full p-[3px] bg-gradient-to-br from-[#36c2cf] to-[#1e2230] mx-auto mb-3">
            <img src={logoUrl} alt="Empire Auto Spa Logo" className="share-preview-avatar w-full h-full rounded-full object-cover border-2 border-[#10121a]" />
          </div>
          <div className="share-preview-info">
            <div className="share-preview-name-row flex items-center justify-center gap-1.5 mb-1">
              <span className="share-preview-name text-white text-lg font-bold">Empire Auto Spa</span>
              <span className="share-preview-verified-badge text-[#1d9bf0]" title="Verified Account">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
              </span>
            </div>
            <div className="share-preview-handle-row flex items-center justify-center gap-1 text-[#36c2cf]/75">
              <svg fill="currentColor" viewBox="0 0 28 28" width="12" height="12" className="share-preview-linktree-icon">
                <path d="m15.7603 6.829 4.6725-4.80317 2.712 2.77734-4.9012 4.67248h6.8944v3.85565h-6.9271l4.9339 4.7922-2.712 2.7229-6.6983-6.731-6.69829 6.731-2.712-2.712 4.93387-4.7923h-6.92703v-3.86645h6.89436l-4.9012-4.67248 2.712-2.77734 4.67249 4.80317v-6.829h4.0516zm-4.0516 12.0243h4.0516v9.1489h-4.0516z"></path>
              </svg>
              <span className="share-preview-handle text-xs font-medium">/Empireautospa</span>
            </div>
          </div>
        </div>

        {/* Scrollable Share Row - Modified to use native <a> tags for direct navigation */}
        <div className="share-social-scroll overflow-x-auto scrollbar-none mb-6 py-1">
          <div className="share-social-track flex gap-4 px-1">
            {shareOptions.map((opt) => (
              <a
                key={opt.name}
                href={opt.url}
                target="_blank"
                rel="noopener noreferrer"
                className="share-social-item flex flex-col items-center w-16 shrink-0 no-underline"
                data-tooltip={`Share via ${opt.name}`}
              >
                <div 
                  className={`share-social-icon-wrapper w-12 h-12 rounded-full flex justify-center items-center transition-all duration-200 shadow-md hover:-translate-y-1 hover:scale-105`}
                  style={{ 
                    backgroundColor: opt.color,
                    color: opt.textColor || '#ffffff'
                  }}
                >
                  {opt.icon}
                </div>
                <span className="share-social-name text-[11px] font-semibold text-[#36c2cf]/75 mt-2 text-center">
                  {opt.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Area */}
        <div className="share-cta-section text-center pt-5 border-t border-cyan-500/10">
          <h3 className="share-cta-title text-white text-sm font-bold mb-1.5">Join Empire Auto Spa on Linktree</h3>
          <p className="share-cta-sub text-[11px] text-[#36c2cf]/75 leading-relaxed mb-4">
            Get your own free Linktree. The only link in bio trusted by 70M+ people.
          </p>
          <div className="share-cta-buttons flex gap-2.5 justify-center">
            <a 
              href="https://linktr.ee/?utm_source=linktree&utm_medium=profile&utm_campaign=share_modal_cta" 
              className="share-btn share-btn-primary flex justify-center items-center h-10 px-5 rounded-full text-xs font-bold bg-[#36c2cf] text-[#0f111a] hover:bg-[#4fe7f5] hover:shadow-[0_4px_12px_rgba(54,194,207,0.3)] transition-all duration-200"
              target="_blank" 
              rel="noopener noreferrer"
              data-tooltip="Get Started"
            >
              Sign up free
            </a>
            <a 
              href="https://linktr.ee/s/about" 
              className="share-btn share-btn-secondary flex justify-center items-center h-10 px-5 rounded-full text-xs font-bold bg-transparent text-[#36c2cf] border border-cyan-500/30 hover:bg-cyan-500/5 hover:border-[#36c2cf] transition-all duration-200"
              target="_blank" 
              rel="noopener noreferrer"
              data-tooltip="Learn More"
            >
              Find out more
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
