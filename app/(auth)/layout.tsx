import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='h-full flex items-center justify-center'>{children}</div>
  );
};

export default AuthLayout;
