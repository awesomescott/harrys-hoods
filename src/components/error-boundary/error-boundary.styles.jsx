import styled from 'styled-components';

const textColor = '#e896ed';

export const ErrorImageOverlay = styled.div`
  align-items: center;
  display: flex;
  background-color: #fff4bb;
  flex-direction: column;
  height: 60vh;
  justify-content: center;
  width: 100%;
`;

export const ErrorImageContainer = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  display: inline-block;
  height: 40vh;
  width: 40vh;
`;

export const ErrorImageText = styled.h2`
  color: ${textColor};
  font-size: 28px;
  margin-bottom: 0;
`;

export const ErrorImageSubtext = styled.p`
  color: ${textColor};
  font-size: 1rem;
`;
