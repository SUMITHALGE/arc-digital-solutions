import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Terms and <span className="text-[#FFD400]">Conditions</span></h1>
        
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <p className="text-sm text-slate-400 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the services provided by Arc Digital Solution ("we," "our," or "us"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Services Description</h2>
          <p>
            Arc Digital Solution provides digital services including but not limited to web development, application development, UI/UX design, SEO, and digital marketing. The specific scope of services will be outlined in separate project proposals or contracts.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Intellectual Property</h2>
          <p>
            Unless otherwise stated in a specific contract, Arc Digital Solution retains the intellectual property rights to all code, designs, and content developed until full payment is received. Upon full payment, ownership transfers to the client as specified in the project agreement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Payment Terms</h2>
          <p>
            Payment schedules and milestones are detailed in project proposals. We reserve the right to suspend services if payments are not received according to the agreed schedule.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            Arc Digital Solution shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any third-party services we integrate.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the date at the top of this page.
          </p>

          <div className="mt-12 p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-2">Contact Us</h3>
            <p>If you have any questions about these Terms, please contact us at info@arcdigitalsolution.in</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
