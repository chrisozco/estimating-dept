import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';

import { useState } from 'react';
import styles from 'styles/pages/Contact.module.scss';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Message sent successfully');
      setLoading(false);
      // reset the form
      event.target.name.value = '';
      event.target.email.value = '';
      event.target.message.value = '';
    }
    if (!response.ok) {
      console.log('Error sending message');
      setLoading(false);
    }
  }
  return (
    <Layout>
      <Helmet>
        <title>Who is This Guy?</title>
        <meta name="robots" content="noindex, nofollow" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <meta charset="UTF-8"></meta>
      </Helmet>

      <Section>
        <Container className={styles.center}>
          <h1 className={styles.contactTitle}>Let&apos;s Connect! 🤝</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputOne}>
              <label className={styles.inputOneLabel} htmlFor="name">
                Name
              </label>
              <input
                type="text"
                minLength={3}
                maxLength={150}
                required
                className={styles.inputOneInput}
                autoComplete="off"
                id="name"
              />
            </div>
            <div className={styles.inputTwo}>
              <label className={styles.inputTwoLabel} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                minLength={5}
                maxLength={150}
                required
                className={styles.inputTwoInput}
                autoComplete="off"
                id="email"
              />
            </div>
            <div className={styles.inputThree}>
              <label className={styles.inputThreeLabel} htmlFor="message">
                Message
              </label>
              <textarea
                rows={4}
                required
                minLength={10}
                maxLength={500}
                name="message"
                className={styles.inputThreeInput}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <motion.button
                type="submit"
                disabled={loading}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>Send!</span>
              </motion.button>
              {/* <button
                                type="submit"
                                disabled={loading}
                                className={styles.formButton}>
                                <span>Send!</span>
                            </button> */}
            </div>
          </form>
        </Container>
      </Section>
    </Layout>
  );
}
