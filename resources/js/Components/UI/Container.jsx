import React from 'react';

/**
 * Componente Container
 *
 * Wrapper centralizado com largura máxima e padding responsivo.
 *
 * @param {React.ReactNode} children - Conteúdo do container
 * @param {string} className - Classes CSS adicionais
 * @param {string|React.ElementType} as - Elemento HTML a ser renderizado (default: 'div')
 */
export const Container = ({
    children,
    className = '',
    as: Component = 'div',
    ...props
}) => {
    return (
        <Component
            className={`max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Container;
