'use client'

import React from 'react'
import Script from 'next/script'

export function ContactForm() {
    return (
      <div className="lg:order-last">
        <iframe data-tally-src="https://tally.so/embed/np0Ab8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="276"  title="Contact form
        "></iframe>
        
      <Script
          id="tally-js"
          src="https://tally.so/widgets/embed.js"
          onLoad={() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
              Tally.loadEmbeds();
          }}
      />
  
      </div>
    )
  }
