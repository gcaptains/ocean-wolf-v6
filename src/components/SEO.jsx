import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url = 'https://oceanwolf.com' }) {
    const siteTitle = 'Ocean Wolf // Rapid Deployment Engineering Protocol';
    const fullTitle = title ? `${title} | Ocean Wolf` : siteTitle;
    const desc = description || 'The rapid deployment engineering protocol. One catastrophic challenge. One week. Complete structural authority.';

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name='description' content={desc} />
            <link rel="canonical" href={url} />

            {/* OpenGraph tags */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={desc} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content="@oceanwolf" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={desc} />
        </Helmet>
    );
}
