import { useState } from 'react';
import styles from '../styles/HomePage.module.css';

function HomePage() {
  const [userInput, setUserInput] = useState('');

  // This function handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log(`User input: ${userInput}`);
    setUserInput('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.homepage}>
      <p className={styles.title}>Comic Scraper</p>

      <input
        name='userInput'
        value={userInput}
        className={styles.input}
        onChange={(e) => setUserInput(e.target.value)}
        type='text'
        placeholder='Search by title'
      />
      <button type='submit' className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
}

export default HomePage;
