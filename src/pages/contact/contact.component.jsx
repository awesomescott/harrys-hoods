import React from 'react';

// Assets
import avatar from '../../assets/super-gilmore-front.jpg';

// Styles
import {
    Avatar,
    AvatarContainer,
    ContactDivider,
    ContactHeading,
    ContactPageContainer,
    ContactSubHeading,
    ContactSubtextContainer,
    ContactText,
    // GitHubIcon,
    IconContainer,
    LinkedInIcon,
    StyledLink,
} from './contact.styles';

export const ContactPage = () => (
    <ContactPageContainer>
        <h1>Hi! I'm Scott.</h1>

        { /* Avatar */ }
        <AvatarContainer>
            <Avatar src={ avatar } alt='Cartoon superhero rendering of Scott C. Gilmore' />
        </AvatarContainer>

        <ContactText>Software Engineer</ContactText>

        <ContactHeading>Scott C. Gilmore</ContactHeading>

        <a href="mailto:scott@scottgilmore.dev">scott@scottgilmore.dev</a>

        { /* Social icons */ }
        <IconContainer>
            { /* Linked In */ }
            <a href='https://www.linkedin.com/in/scottcgilmore/'>
                <LinkedInIcon />
            </a>

            { /* Github */ }
            {/* <a href='https://github.com/scottgilmoredev'>
                <GitHubIcon />
            </a> */}
        </IconContainer>

        <ContactDivider />

        <ContactSubtextContainer>
            <ContactSubHeading>Like what you see?</ContactSubHeading>
            <ContactText>
                This app was built to teach myself React. Head over to my
                {' '}
                <StyledLink href="https://scottgilmore.dev" target="_blank" rel="noopener noreferrer">
                    personal site
                </StyledLink>
                {' '}
                to learn more about me. If you like what I do, please get in touch.
            </ContactText>
        </ContactSubtextContainer>
    </ContactPageContainer>
);

export default ContactPage;
