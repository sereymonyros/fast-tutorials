// Imports React dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Imports components from Fluent Web
import { Header, Footer } from '@ms-fw/fw-react/components';

// Imports styles from Fluent Web
const styles = require('../build/public/assets/styles/css/fw-west-european-default-orange.css');

// ==================================================================
// Configuring Header component
import logoMsGray from './assets/images/logos/microsoft-gray.png';
 
var globalNavigation = {
    "items": [
        {
            "text": "Windows",
            "href": "#"
        },
        {
            "text": "Surface",
            "href": "#"
        },
        {
            "text": "Office",
            "href": "#"
        },
        {
            "text": "Xbox",
            "href": "#"
        },
        {
            "text": "Azure",
            "href": "#"
        }
    ],
    "logo": {
        "href": "#",
        "image": {
            "src": logoMsGray,
            "alt": "Microsoft"
        },
        "text": "Microsoft"
    }
};

var mobileToggle = {
    "glyph": "global-nav-button",
    "glyphOnly": true,
    "text": "Menu"
};

var mobilePrevious = {
    "glyph": "chevron-left",
    "glyphOnly": true,
    "text": "Previous"
};

var mobileNext = {
    "glyph": "chevron-right",
    "glyphOnly": true,
    "text": "Next"
};

var actions = [
    {
        "glyph": "waffle",
        "glyphOnly": true,
        "text": "Menu"
    },
    {
        "glyph": "search",
        "glyphOnly": true,
        "text": "Search"
    },
    {
        "glyph": "shop-brand",
        "glyphOnly": true,
        "href": "#",
        "text": "Bag"
    }
];

// ==================================================================
// Configuring other components

// ==================================================================
// Render app

ReactDOM.render(
    <Header
        globalNavigation={ globalNavigation }
        mobileToggle={ mobileToggle }
        mobilePrevious={ mobilePrevious }
        mobileNext={ mobileNext }
        actions={ actions } 
    />
    ,
    document.getElementById('root')
);