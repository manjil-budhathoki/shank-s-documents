import React, { useState, useEffect } from 'react';

const WelcomeScreen = () => {
  return (
    <div style={styles.welcomeContainer}>
      <div style={styles.alertBox}>
        <h1>⚠ ALERT</h1>
        <h2>[WELCOME, PLAYER.]</h2>
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <div>
      <h1>This is the Main Page</h1>
      {/* Your main content goes here */}
    </div>
  );
};

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Display the welcome screen for 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div>
      {showWelcome ? <WelcomeScreen /> : <MainPage />}
    </div>
  );
};

const styles = {
  welcomeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000', // Background color
  },
  alertBox: {
    textAlign: 'center',
    color: 'green',
    border: '2px solid white',
    padding: '20px',
    backgroundColor: '#0000ff', // Blue background color similar to your image
  }
};

export default App;
