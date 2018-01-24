// Importing React requirements
import React from 'react';
import { render } from 'react-dom';

// Importing data
import data from './data/data.json';

// Importing styles
import './assets/styles/index.scss';

// Importing images
import logo from './assets/images/logos/logo-94x94.png';

let header = (
    <header>
            <a
                href="https://fluentweb.com"
            >
                <img
                    src={ logo }
                    alt={ data.alt }
                />
            </a>
    </header>
);

let main = (
    <main>
        <h1>
            { data.heading }
        </h1>
        <p>
            { data.paragraph }
        </p>
    </main>
);

render(
    <div>
        { header }
        { main }
    </div>,
    document.getElementById('root')
);