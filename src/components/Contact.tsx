export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Ready to bring your next project to life? I&apos;d love to hear from you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="mailto:hello@example.com" 
            className="inline-block bg-transparent border-2 border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
          >
            Email
          </a>
          <a 
            href="#" 
            className="inline-block bg-transparent border-2 border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
          >
            LinkedIn
          </a>
          <a 
            href="#" 
            className="inline-block bg-transparent border-2 border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
} 