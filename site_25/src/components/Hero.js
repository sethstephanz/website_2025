import React from 'react';

function Hero() {
  return (
    <section style={{
      padding: '4rem 1rem',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      marginBottom: '2rem',
    }}>
      <h1 style={{ fontSize: '3rem', margin: 0 }}>Your Name</h1>
      <p style={{ fontSize: '1.5rem', color: '#555', marginTop: '0.5rem' }}>
        This is my tagline!!!
      </p>
      {/* Optional CTA button */}
      {/* <button style={{ marginTop: '1.5rem', padding: '0.75rem 2rem', fontSize: '1rem' }}>Contact Me</button> */}
    </section>
  );
}

export default Hero;