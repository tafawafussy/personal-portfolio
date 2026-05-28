const Hero = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white">
    <div className="max-w-4xl mx-auto text-center px-6 pt-20">
      <h1 className="text-6xl md:text-7xl font-bold mb-6">Hi, I'm Tafawa</h1>
      <p className="text-3xl md:text-4xl mb-6">Full Stack Developer</p>
      <p className="text-xl max-w-2xl mx-auto mb-10">
        Passionate about building beautiful web applications and deploying them on cloud platforms.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="#projects" className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
          View My Projects
        </a>
        
        {/* Email Link */}
        <a 
          href="mailto:tafawafussy@gmail.com" 
          className="border-2 border-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition flex items-center gap-2"
        >
          ✉️ Email Me
        </a>
      </div>

      {/* Optional: Show email address visibly */}
      <p className="mt-8 text-sm opacity-75">
        📧 <a href="mailto:tafawafussy@gmail.com" className="hover:underline">tafawafussy@gmail.com</a>
      </p>
    </div>
  </section>
);

export default Hero;