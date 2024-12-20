import React from 'react';
import { default as InstagramIcon } from "../assets/ig.svg";
import { default as FacebookIcon } from "../assets/facebook.svg";
import { default as XIcon } from "../assets/twitter.svg";

const SocialMedia = () => {
    return (
        <section 
            className="fixed right-5 top-1/2 transform -translate-y-1/2 z-10 flex flex-col space-y-4" 
            aria-label="Social Media Links"
        >
            <a 
                href="https://www.instagram.com/sanatanadharmafoundation1/?igsh=MmNmcGk0MWE0Nmdn" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Instagram"
            >
                <img 
                    src={InstagramIcon} 
                    alt="Instagram logo" 
                    className="w-8 h-8 hover:opacity-75" 
                />
            </a>
            <a 
                href="https://www.facebook.com/people/Sanatana-Dharma-Foundation/61560817495402/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Facebook"
            >
                <img 
                    src={FacebookIcon} 
                    alt="Facebook logo" 
                    className="w-8 h-8 hover:opacity-75" 
                />
            </a>
            <a 
                href="https://x.com/dharmaorigins" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Twitter"
            >
                <img 
                    src={XIcon} 
                    alt="Twitter logo" 
                    className="w-8 h-8 hover:opacity-75" 
                />
            </a>
        </section>
    );
};

export default SocialMedia;
