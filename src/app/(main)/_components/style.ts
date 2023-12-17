import { flexCenter } from '@/styles/common';
import styled from 'styled-components';

export const Form = styled.form`
  width: 360px;
  background-color: #f9f9f9;
  ${flexCenter};
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 10px;
`;

export const InputBox = styled.div`
  position: relative;
  width: 80%;
  height: 48px;
  ${flexCenter};
  margin-bottom: 16px;

  input {
    width: 100%;
    border: 1px solid #999;
    border-radius: 4px;
    height: 100%;
    text-align: center;
  }

  label {
    position: absolute;
    left: 16px;
    top: -8px;
    background-color: ${({ theme }) => theme.PALETTE.background.white};
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    z-index: 1;
    padding: 0 4px;
  }
`;
