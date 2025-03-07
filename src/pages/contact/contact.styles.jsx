import styled from 'styled-components';

// Icons
import { ReactComponent as GitHubIconSVG } from '../../assets/Github.svg';
import { ReactComponent as LinkedInIconSVG } from '../../assets/Linkedin.svg';


export const AvatarContainer = styled.div`
    border-radius: 50%;
    height: 200px;
    overflow: hidden;
    width: 200px;
`;

export const Avatar = styled.img`
    height: 335px;
    object-fit: cover;
    width: 100%;
`;

export const ContactDivider = styled.hr`
    border: 1px solid black;
    width: 165px;
`;

export const ContactHeading = styled.h2`
    margin: 0 0.5rem 0.75rem 0.5rem;
`;

export const ContactPageContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    &:nth-child(3) {
        margin: 1rem 0 0 0;
    }
`;

export const ContactSubHeading = styled.h3`
    margin-bottom: 0;
`;

export const ContactSubtextContainer = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-width: 435px;
    padding: 0 1.5rem;
    width: 100%;
`;

export const ContactText = styled.p`
    margin: 0;
    text-align: center;
    
    &:nth-child(3) {
        margin: 1rem 0 0 0;
    }
`;

export const GitHubIcon = styled(GitHubIconSVG)`
    cursor: pointer;
    height: 30px;
    width: 30px;
`;

export const IconContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin: 0.5rem 0;
    width: auto;
`;

export const LinkedInIcon = styled(LinkedInIconSVG)`
    cursor: pointer;
    height: 30px;
    width: 30px;
`;

export const StyledLink = styled.a`
  color: #2A8C73;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
  display: inline-block;

  &:hover,
  &:focus {
    color: #1E6B57;
    transform: scale(1.05);
  }

  &:active {
    color: #155443;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #73BDA8;
    border-radius: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #2A8C73;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    visibility: visible;
    transform: scaleX(1);
  }
`;

// Display names.
Avatar.displayName = 'Avatar';
AvatarContainer.displayName = 'AvatarContainer';
ContactDivider.displayName = 'ContactDivider';
ContactHeading.displayName = 'ContactHeading';
ContactPageContainer.displayName = 'ContactPageContainer';
ContactSubHeading.displayName = 'ContactSubHeading';
ContactSubtextContainer.displayName = 'ContactSubtextContainer';
ContactText.displayName = 'ContactText';
GitHubIcon.displayName = 'GitHubIcon';
IconContainer.displayName = 'IconContainer';
LinkedInIcon.displayName = 'LinkedInIcon';
StyledLink.displayName = 'StyledLink';
