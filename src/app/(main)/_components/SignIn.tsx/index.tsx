'use client';

import {FormEvent} from 'react';
import * as S from '../style';
import BasicButton from '@/app/_components/Button'
import {useRouter} from "next/navigation";

const SignInForm = () => {
    const router = useRouter()
    const onPressSignIn = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };

        const email = target.email.value;
        const password = target.password.value;
        if (email === 'test' && password === 'testtest') {
            router.push('/todo/5')
        }
    };

    return (
        <S.Form onSubmit={onPressSignIn}>
            <S.InputBox>
                <label>이메일</label>
                <input name="email"/>
            </S.InputBox>
            <S.InputBox>
                <label>비밀번호</label>
                <input name="password"/>
            </S.InputBox>
            <BasicButton size={'full'} shape={'default'} variant={'primary'}>
                로그인
            </BasicButton>
        </S.Form>
    );
};
export default SignInForm;
