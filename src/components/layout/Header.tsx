'use client';

import { RecoilRoot } from 'recoil';
import LoginButton from '@/components/layout/component/LoginButton';

const Header = () => {
  return (
    <div className={'flex justify-between p-2'}>
      <div className={'h-20'}>HEADER</div>
      <RecoilRoot>
        <LoginButton />
      </RecoilRoot>
    </div>
  );
};
export default Header;
