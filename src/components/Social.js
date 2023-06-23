import React from 'react'
import { social } from '../Data'

function Social() {
  return (
    <section id="social media" className="fixed z-50 top-1/2 left-0 flex flex-col content-center space-y-3">
            {social.map((social) => (
                <h1>
                {social.icon}
                </h1>
            ))}     
    </section>
  )
}

export default Social