'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import Container from './Container';
import Button from '../ui/Button';

interface PageErrorProps {
    url: string | '/'
}

const PageError: React.FC<PageErrorProps> = ({ url }) => {
    const router = useRouter()
    return (
        <Container className='w-full min-h-[50vh] flex justify-center items-center border'>
            <div className="w-full flex flex-col items-center gap-y-10">
                <h1 className="text-4xl font-semibold text-center">Somethings Went Wrong!!!</h1>
                <div>
                    <Button
                        className='w-fit'
                        onClick={() => router.push(url)}>
                        Back Again
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default PageError;