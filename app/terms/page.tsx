import { Header } from "../components/header";
import { Footer } from "../components/footer";
import styles from "./terms.module.css";

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>Terms and <span className={styles.highlight}>Conditions</span></h1>

        <div className={`prose prose-invert max-w-none ${styles.content}`}>
          <p className={styles.date}>Last Updated: {new Date().toLocaleDateString()}</p>

          <h2 className={styles.heading2}>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the services provided by Arc Digital Solution ("we," "our," or "us"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className={styles.heading2}>2. Services Description</h2>
          <p>
            Arc Digital Solution provides digital services including but not limited to web development, application development, UI/UX design, SEO, and digital marketing. The specific scope of services will be outlined in separate project proposals or contracts.
          </p>

          <h2 className={styles.heading2}>3. Intellectual Property</h2>
          <p>
            Unless otherwise stated in a specific contract, Arc Digital Solution retains the intellectual property rights to all code, designs, and content developed until full payment is received. Upon full payment, ownership transfers to the client as specified in the project agreement.
          </p>

          <h2 className={styles.heading2}>4. Payment Terms</h2>
          <p>
            Payment schedules and milestones are detailed in project proposals. We reserve the right to suspend services if payments are not received according to the agreed schedule.
          </p>

          <h2 className={styles.heading2}>5. Limitation of Liability</h2>
          <p>
            Arc Digital Solution shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any third-party services we integrate.
          </p>

          <h2 className={styles.heading2}>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the date at the top of this page.
          </p>

          <div className={styles.contactBox}>
            <h3 className={styles.contactTitle}>Contact Us</h3>
            <p>If you have any questions about these Terms, please contact us at info@arcdigitalsolution.in</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
