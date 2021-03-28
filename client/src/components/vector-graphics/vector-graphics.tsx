import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface VectorProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  height?: string;
  width?: string;
}

interface StyleProps {
  height?: string;
  width?: string;
}

const Container = styled.div<StyleProps>`
  svg {
    height: ${({ height }) => (height ? height : undefined)};
    width: ${({ width }) => (width ? width : undefined)};
  }
`;

export const VectorGraphic: React.FC<VectorProps> = ({ name, width, height, className }): JSX.Element | null => {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>> | any>();
  const [loading, setLoading] = useState<boolean>(false);

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
      <Container width={width} height={height} className={className}>
        <ImportedIcon />
      </Container>
    );
  }
  return null;
};
