import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

export const LargeImg = styled.img`
  max-width: 1280px;
`;

export const ButtonModal = styled.button`
  position: absolute;
  top: 50px;
  right: 50px;
  border: none;
  background: none;
  cursor: pointer;
  color: #000;
  stroke: #000;
`;

export const CloseIcon = styled(AiFillCloseCircle)`
  fill: #fff;
  stroke-width: 5px;
  width: 35px;
  height: 35px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1280px;
  height: auto;
  min-height: 700px;
`;
