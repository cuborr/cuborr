import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
  height?: string;
  width?: string;
  size?: string;
  onClick?: any;
}

interface StyleProps {
  height?: string;
  width?: string;
  size?: string;
}

const Container = styled.div<StyleProps>`
  display: block;
  height: ${({ height, size }) => (size ? size : height)};
  width: ${({ width, size }) => (size ? size : width)};
  svg {
    height: ${({ height, size }) => (size ? size : height)};
    width: ${({ width, size }) => (size ? size : width)};
  }
`;

export const Icon: React.FC<IconProps> = ({ name, color, size, width, height, className, onClick }): JSX.Element => {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>> | any>();
  const [loading, setLoading] = useState(false);

  useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        // Changing this line works fine to me
        ImportedIconRef.current = (await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!./svg/${name}.svg`)).default;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return (
      <Container color={color} size={size} width={width} height={height} onClick={onClick} className={className}>
        <ImportedIcon />
      </Container>
    );
  }
  return <div />;
};

Icon.defaultProps = {
  height: '24pt',
  width: '24pt',
};
