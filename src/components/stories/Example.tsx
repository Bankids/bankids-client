import React from 'react';
import styled from 'styled-components';
import './Example.css';

interface ButtonProps {
  /**
   * 이렇게 주석으로 설명 ㄱㄴ
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <>
      <StyledTest>
        <button
          type="button"
          className={[
            'storybook-button',
            `storybook-button--${size}`,
            mode,
          ].join(' ')}
          style={{ backgroundColor }}
          {...props}
        >
          {label}
        </button>
      </StyledTest>
    </>
  );
};

const StyledTest = styled.div`
  background-color: gray;
`;