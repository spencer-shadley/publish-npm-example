import React from 'react';
import './Paragraph.css'

export default function Paragraph({theme, text}) {
    return (
        <p className={theme}>{text}</p>
    );
}