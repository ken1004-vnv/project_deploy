import React from 'react';

function App() {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    name: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#333',
    },
    subtitle: {
      fontSize: '18px',
      color: '#666',
    },
    section: {
      marginBottom: '20px',
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '8px',
      color: '#444',
    },
    sectionContent: {
      fontSize: '16px',
      color: '#555',
      lineHeight: '1.6',
    },
    footer: {
      textAlign: 'center',
      marginTop: '40px',
      fontSize: '14px',
      color: '#aaa',
    },
    link: {
      color: '#007acc',
      textDecoration: 'none',
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>Thái Nguyễn Văn Ngọc</h1>
        <p style={styles.subtitle}>Frontend Developer | React Enthusiast</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.sectionContent}>
          I'm a passionate frontend developer with experience in building responsive and user-friendly web interfaces using React.js and modern web technologies.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <p style={styles.sectionContent}>
          ✅ React.js, JavaScript, HTML5, CSS3<br />
          ✅ Git & GitHub, Responsive Design, Figma<br />
          ✅ Learning Docker and CI/CD with GitHub Actions
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p style={styles.sectionContent}>
          Email: <a href="mailto:thainguyenvanngoc10042004@gmail.com" style={styles.link}>thainguyenvanngoc10042004@gmail.com</a><br />
          GitHub: <a href="https://github.com/ken1004-vnv" target="_blank" rel="noopener noreferrer" style={styles.link}>@ken1004-vnv</a>
        </p>
      </section>

      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} Thái Nguyễn Văn Ngọc. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
