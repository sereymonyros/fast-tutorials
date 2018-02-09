// Imports React dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Imports components from Fluent Web https://fluentweb.com/building-blocks 
import { Header, ContentPlacement, TypographicIntro, Footer, Hyperlink } from '@ms-fw/fw-react/components';

// Imports layout features from Fluent Web https://fluentweb.com/prototyping/getting-started/grid-layout 
import { Page, Grid, Column } from '@ms-fw/fw-react/layouts';

// Imports styles from Fluent Web 
const styles = require('../build/public/assets/styles/css/fw-west-european-default-orange.css');

// Importing data
import data from './data/data.json';

// ==================================================================
// Render app
ReactDOM.render(
    <div>
        <Hyperlink
            className={ data.hyperLink.class }
            text={ data.hyperLink.text } 
            href={ data.hyperLink.href }
        />

        <Header
            globalNavigation={ data.header.navigation }
            mobileToggle={ data.header.mobileToggle }
            mobilePrevious={ data.header.mobilePrevious }
            mobileNext={ data.header.mobileNext }
            actions={ data.header.actions } 
        />

         <main
            id="mainContent">
                
            <Page>
                <TypographicIntro
                    backgroundColor={ data.typographicIntro.backgroundColor }
                    heading={ data.typographicIntro.heading }
                    subheading={ data.typographicIntro.subheading }
                />
                <Grid 
                    columnCount={ 5 } 
                    gutter={ 12 }
                >
                   <Column 
                        position={ 1 } 
                        span={ 5 }
                    >
                        <ContentPlacement
                            image={ data.contentPlacement.image }
                            badge={ data.contentPlacement.badge }
                            heading={ data.contentPlacement.heading }
                            paragraph={ data.contentPlacement.paragraph }
                            callToActions={ data.contentPlacement.callToActions }
                        />
                    </Column>
                </Grid>
            </Page>
        </main>
        
        <Footer
            baseLinks={ data.footer.baseLinks }
        />
    </div>
    ,
    document.getElementById('root')
);