import styled from "styled-components";
import logoN from "../../Asets/logoN.png";

export const LoadingWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  margin-top: 10rem;
  background-image: url(${logoN});
  background-repeat: no-repeat;
  background-size: contain;
  animation: rotate 1.5s infinite;
  @keyframes rotate {
    0% {
      transform: perspective(190px) rotateX(0deg) rotateY(0);
    }
    50% {
      transform: perspective(190px) rotateX(-180.1deg) rotateY(0);
    }
    100% {
      transform: perspective(190px) rotateX(-180deg) rotateY(-179.9deg);
    }
  } ;
`;
