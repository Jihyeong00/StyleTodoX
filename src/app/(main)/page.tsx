'use client';

import SignInForm from '@/app/(main)/_components/SignIn.tsx';
import { MouseEventHandler, useState } from 'react';
import SignUpForm from '@/app/(main)/_components/SignUp.tsx';
import { Button } from '@/components/ui/button';
import {stylex} from "@stylexjs/stylex";
import S from "@/app/(main)/styles";

export default function Page() {
  const [isFormLogin, setIsFormLogin] = useState<boolean>(true);

  const onClickFormHeader: MouseEventHandler<HTMLButtonElement> = (event) => {
    const target = event.target as typeof event.target & {
      innerHTML: string;
    };
    if (target.innerHTML === 'LOGIN') {
      setIsFormLogin(true);
    } else {
      setIsFormLogin(false);
    }
  };

  return (
    <div
        {...stylex.props(S.container)}
    >
      <div {...stylex.props(S.buttonBar)}>
        <Button
            {...stylex.props(S.leftButton, isFormLogin && S.activeButton)}
          onClick={onClickFormHeader}
        >
          LOGIN
        </Button>
        <Button
            {...stylex.props(S.rightButton, !isFormLogin && S.activeButton)}
          onClick={onClickFormHeader}
        >
          SIGN
        </Button>
      </div>
      {isFormLogin ? <SignInForm /> : <SignUpForm />}
    </div>
  );
}
