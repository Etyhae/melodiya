import styled from "styled-components";

export const Header = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  backdrop-filter: blur(10px); 
`;

export const CurrentTrack = styled.div`
  position: absolute;
  top: 2rem; 
  left: 0;
  right: 0;

  p {
    font-size: 1rem;
  }
`;

export const TrackInfo = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  
  img {
    height: 40vh;
    width: 40vh;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  p {
    &:first-child {
      font-size: 2rem;
      font-weight: bold; 
      text-decoration: underline;
    }

    &:last-child {
      font-size: 1.5rem;
      color: #ccc;
    }
  }
`;

export const StyledButton = styled.button`
  background: red;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
`

export const Wrapper = styled.div`
  background-color: rgb(15 23 42);
  padding: 1rem;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
  width: 100vw;
  z-index: 10;
`

export const Controls = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    width: 3rem; 
    height: 3rem;
    color: #ddd;
    transition: 0.2s ease;

    &:hover {
      color: white;
      transform: scale(1.1); 
        }
    }
`