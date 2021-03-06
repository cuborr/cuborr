import React from 'react';
import styled from 'styled-components';

interface InputProps {
  value: string;
  label: string;
  error?: string;
  type?: 'email' | 'password' | 'text' | 'date';
  className?: string;
  onChange?: (text: string) => string | void;
  onFocus?: () => void;
  onBlur?: () => void;
  setRef?: any;
}

interface StyleProps {
  error?: string;
  focused?: boolean;
}

const InputContainer = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  & > input {
    border: 0.5pt solid ${({ error }) => (error ? 'var(--color-red)' : 'var(--color-border-light)')};
    border-radius: var(--border-radius-s);
    background-color: transparent;
    color: var(--color-text-light);
    
    outline: none;
    padding: var(--margin-r) var(--margin-r) var(--margin-r) var(--margin-m);
    font-size: var(--font-size-m);
    transition: all 0.2s ease;
    z-index: 1;
  }
  & > label {
    color: var(--color-text-dark);
    font-weight: 600;
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 1;

    ${(props) =>
    props.focused &&
    `
      font-size: var(--font-size-s);
      transform: translateY(-35px) translateX(-3px);
      z-index: 2;
      padding: 0 8px;
    `}
  }
`;

export const Input: React.FC<InputProps> = ({
  value,
  type,
  label,
  onChange,
  onFocus,
  error,
  onBlur,
  setRef,
  className,
  ...props
}) => {
  const [focused, setFocused] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (value.length > 0) {
      setFocused(true)
    }
  }, [])

  const handleOnFocus = () => {
    setFocused(true);
    if (onFocus !== undefined) {
      onFocus();
    }
  };

  const handleOnBlur = () => {
    if (!value) {
      setFocused(false);
      if (onBlur !== undefined) {
        onBlur();
      }
    }
  };

  const handleOnChange = (val) => {
    if (onChange !== undefined) onChange(val);
    if (val && !focused) handleOnFocus()
  };

  const renderLabel = () => {
    if (label) {
      // if we have an error
      if (error) {
        return <label>{error}</label>;
      }
      return <label>{label}</label>;
    }
    return null;
  };

  const isFocused = focused || String(value).length || type === 'date';

  return (
    <InputContainer focused={focused} error={error} className={className}>
      {renderLabel()}
      <input
        value={value}
        type={type}
        onChange={(e) => handleOnChange(e.target.value)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={(ref) => setRef(ref)}
        {...props}
      />
    </InputContainer>
  );
};

Input.defaultProps = {
  type: 'text',
  label: 'Hello World',
  error: '',
  onFocus: () => null,
  onBlur: () => null,
  setRef: () => null,
};
