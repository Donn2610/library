import React from 'react';
interface SwitchButtonProps {
    onToggle: (checked: boolean) => void;
    checked: boolean;
}
export declare const SwitchButton: React.FC<SwitchButtonProps>;
export {};
