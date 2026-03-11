import { Header } from "../components/header";
import { Footer } from "../components/footer";
import styles from "./privacy.module.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>Privacy <span className={styles.highlight}>Policy</span></h1>

        <div className={`prose prose-invert max-w-none ${styles.content}`}>
          <p className={styles.date}>Last Updated: {new Date().toLocaleDateString()}</p>

          <p className={styles.lead}>
            At Arc Digital Solution, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className={styles.heading2}>Information We Collect</h2>
          <p>We may collect information about you in various ways, including:</p>
          <ul className={styles.list}>
            <li><strong>Personal Data:</strong> Name, email address, phone number, and company details when you contact us or request a quote.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP addresses, browser types, and pages visited.</li>
          </ul>

          <h2 className={styles.heading2}>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className={styles.list}>
            <li>Provide, operate, and maintain our services.</li>
            <li>Respond to your inquiries and offer customer support.</li>
            <li>Send you administrative information, invoices, and service updates.</li>
            <li>Analyze website usage to improve our digital presence and user experience.</li>
          </ul>

          <h2 className={styles.heading2}>Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className={styles.heading2}>Third-Party Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your identifiable personal information to outside parties unless we provide users with advance notice. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
          </p>

          <div className={styles.contactBox}>
            <h3 className={styles.contactTitle}>Contacting Us</h3>
            <p>If you have questions or concerns regarding this Privacy Policy, please reach out to us at info@arcdigitalsolution.in</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
