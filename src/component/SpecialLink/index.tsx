import React from 'react';

interface SpecialLinkProps {
    href: string;
    navigate():void;
    children:any
}

export const SpecialLink: React.FC<SpecialLinkProps> = props => {
    return (
        <button onClick={props.navigate}>{props.children}</button>
    )
}