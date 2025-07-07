'use client';

import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
    onClick?: () => void;
    };

    export default function Button({ children, onClick }: ButtonProps) {
    return (
        <button
        onClick={onClick}
        className="px-6 py-4 bg-gray-700 text-white rounded-4xl hover:bg-gray-900 transition"
        >
        {children}
        </button>
    );
}
