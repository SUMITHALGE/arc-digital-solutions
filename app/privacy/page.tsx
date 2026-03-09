import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Privacy <span className="text-[#FFD400]">Policy</span></h1>
        
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <p className="text-sm text-slate-400 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <p className="text-lg leading-relaxed">
            At Arc Digital Solution, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Information We Collect</h2>
          <p>We may collect information about you in various ways, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Data:</strong> Name, email address, phone number, and company details when you contact us or request a quote.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP addresses, browser types, and pages visited.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our services.</li>
            <li>Respond to your inquiries and offer customer support.</li>
            <li>Send you administrative information, invoices, and service updates.</li>
            <li>Analyze website usage to improve our digital presence and user experience.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Third-Party Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your identifiable personal information to outside parties unless we provide users with advance notice. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
          </p>

          <div className="mt-12 p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">Contacting Us</h3>
            <p>If you have questions or concerns regarding this Privacy Policy, please reach out to us at info@arcdigitalsolution.in</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
