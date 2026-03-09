import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">About <span className="text-[#FFD400]">Arc Digital Solution</span></h1>
        
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <p className="text-lg leading-relaxed">
            Arc Digital Solution is Pune&apos;s leading web and application development company. We specialize in transforming innovative ideas into powerful digital experiences that drive business growth and operational excellence.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Mission</h2>
          <p>
            To empower businesses of all sizes with cutting-edge digital technology, scalable web architectures, and stunning design aesthetics that captivate users and generate measurable results.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Expert Team:</strong> We house a powerful team of developers, designers, and digital strategists.</li>
            <li><strong>Scalable Solutions:</strong> Our architectures are built for tomorrow, ensuring your tech stack grows alongside your business.</li>
            <li><strong>Client-Centric Approach:</strong> Your success is our success. We maintain complete transparency and agile workflows throughout the project lifecycle.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Expertise</h2>
          <p>
            From custom React and Next.js web applications to full-scale e-commerce platforms and comprehensive SEO strategies, Arc Digital Solution is a full-stack digital agency positioned to solve complex tech challenges.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
