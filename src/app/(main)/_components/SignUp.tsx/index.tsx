'use client';

import {useEffect, useState} from 'react';
import * as S from '../style';
import useInputs from '@/hooks/use-inputs';
import BasicButton from '@/app/_components/Button'

type FormType = { email: string; password: string; passwordConfirm: string };

const SignUpForm = () => {
    const [{email, password, passwordConfirm}, onChangeForm] = useInputs<FormType>({
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

    useEffect(() => {
        if (password !== passwordConfirm) return setIsPasswordConfirm(false);
        setIsPasswordConfirm(true);
    }, [password, passwordConfirm]);

    const handleSignUpSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!email || !password) return;
        if (!isPasswordConfirm) return;
    };

    return (
        <S.Form>
            <S.InputBox>
                <label>이메일</label>
                <input onChange={onChangeForm} name="email"/>
            </S.InputBox>
            <S.InputBox>
                <label>비밀번호</label>
                <input onChange={onChangeForm} name="password"/>
            </S.InputBox>
            <S.InputBox>
                <label>비밀번호 확인</label>
                <input onChange={onChangeForm} name="passowrdConfirm"/>
            </S.InputBox>
            <BasicButton size={'full'} shape={'default'} variant={'primary'} onClick={handleSignUpSubmit}>
                회원가입
            </BasicButton>
        </S.Form>
    );
};
export default SignUpForm;
