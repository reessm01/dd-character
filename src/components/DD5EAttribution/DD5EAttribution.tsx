import React from 'react';

export const DD5EAttribution: React.FC = () => {
    return (
        <a
            className="flex flex-row items-center"
            style={{ backgroundColor: '#555' }}
            href="https://github.com/bagelbits/5e-srd-api"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img style={{ height: 14, width: 14, marginLeft: 5 }} src="https://www.dnd5eapi.co/public/favicon.ico" />
            <img src="https://img.shields.io/badge/Powered By-D&D 5e API-d81921?style=flat-square" />
        </a>
    );
};
