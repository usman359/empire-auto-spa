import React, { useState } from 'react';
import heroImg from '../assets/hero.png';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromoModal: React.FC<PromoModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      window.open(`https://linktr.ee/register?username=${encodeURIComponent(username)}`, '_blank');
    } else {
      window.open('https://linktr.ee/register', '_blank');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="promo-modal-container bg-[#d2e823] border-none text-[#193c14] p-6 rounded-[28px] max-w-[500px] w-[92%] shadow-2xl overflow-y-auto max-h-[90vh]">
        <DialogHeader className="promo-modal-header text-left flex justify-between items-center border-none p-0">
          <DialogTitle className="promo-logo flex items-center text-[#193c14]">
            {/* Linktree symbol (asterisk) in black */}
            <svg fill="currentColor" viewBox="0 0 28 28" width="24" height="24">
              <path d="m15.7603 6.829 4.6725-4.80317 2.712 2.77734-4.9012 4.67248h6.8944v3.85565h-6.9271l4.9339 4.7922-2.712 2.7229-6.6983-6.731-6.69829 6.731-2.712-2.712 4.93387-4.7923h-6.92703v-3.86645h6.89436l-4.9012-4.67248 2.712-2.77734 4.67249 4.80317v-6.829h4.0516zm-4.0516 12.0243h4.0516v9.1489h-4.0516z"></path>
            </svg>
          </DialogTitle>
        </DialogHeader>

        {/* Headline & Body */}
        <div className="promo-body flex flex-col mt-4 text-left">
          <h1 className="promo-headline text-2xl font-extrabold text-[#193c14] leading-tight mb-3 tracking-tight">
            Join the only link in bio trusted by 70M+ <span className="highlight-text text-[#502274]">businesses.</span>
          </h1>
          <p className="promo-subheading text-[13px] text-[#193c14] leading-relaxed mb-5 font-medium opacity-95">
            One link to share everything you create, curate and sell across IG, TikTok and more.
          </p>

          {/* Claim Form */}
          <form className="promo-claim-form flex flex-col gap-3 mb-5" onSubmit={handleClaim}>
            <div className="promo-input-container flex items-center bg-white rounded-xl px-4 h-[50px] shadow-sm border-2 border-transparent focus-within:border-[#502274] transition-all">
              <span className="promo-prefix text-sm font-semibold text-[#193c14]/50 mr-0.5">linktr.ee/</span>
              <input
                type="text"
                className="promo-input border-none outline-none grow text-sm font-semibold text-[#193c14] bg-transparent placeholder-[#193c14]/30"
                placeholder="yourname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-label="Enter your desired username"
              />
            </div>
            <button type="submit" className="promo-claim-btn h-[50px] rounded-full bg-[#502274] text-white font-bold text-sm border-none cursor-pointer shadow-md hover:bg-[#3b1758] active:translate-y-0 transition-all" data-tooltip="Claim Username">
              Claim your Linktree
            </button>
          </form>

          {/* Extra Links */}
          <div className="promo-nav-links flex flex-col gap-2.5 mb-5">
            <a 
              href="https://linktr.ee/s/discover" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="promo-link text-[13px] text-[#193c14] font-semibold underline opacity-85 hover:opacity-100 align-self-start"
            >
              Explore more Linktrees
            </a>
            <a 
              href="https://linktr.ee/s/about" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="promo-link text-[13px] text-[#193c14] font-semibold underline opacity-85 hover:opacity-100 align-self-start"
            >
              Learn more about Linktree
            </a>
          </div>

          {/* Sign Up Free CTA */}
          <div className="promo-cta-box flex mb-6">
            <a
              href="https://linktr.ee/register"
              className="promo-signup-btn inline-flex justify-center items-center h-11 px-6 rounded-full bg-[#193c14] text-[#d2e823] no-underline font-bold text-sm shadow hover:bg-[#0d210a] hover:-translate-y-0.5 transition-all duration-200"
              target="_blank" 
              rel="noopener noreferrer"
              data-tooltip="Sign Up Free"
            >
              Sign up free
            </a>
          </div>

          {/* Phone Mockup Image */}
          <div className="promo-mockup-container mt-auto flex justify-center w-full overflow-hidden">
            <img 
              src={heroImg} 
              alt="Linktree Phone Mockup" 
              className="promo-mockup-img w-3/4 max-h-[200px] object-contain mt-2 translate-y-5 animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
