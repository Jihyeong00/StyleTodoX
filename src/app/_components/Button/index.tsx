import * as S from './style';
import React, { CSSProperties, PropsWithChildren } from 'react';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'primary-text';
  shape: 'round' | 'default';
  size: 'small' | 'medium' | 'large' | 'full';
  containerStyle?: CSSProperties;
}

const Button: React.FC<PropsWithChildren<Props>> = ({
  variant,
  shape = 'default',
  size,
  containerStyle,
  children,
  ...rest // onclick, style, ....
}) => {
  return (
    <div style={containerStyle}>
      <S.Button variant={variant} shape={shape} size={size} {...rest}>
        {children}
      </S.Button>
    </div>
  );
};

export default Button;
