const About = () => (
  <section id="about" className="py-24 bg-white dark:bg-gray-900">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
         <img 
  src="/Profile.JPG" 
  alt="Tafawa" 
  className="rounded-xl shadow-xl w-full"
        />
        </div>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            I am a Data Science student passionate about analytics, machine learning, forecasting, database systems, and business intelligence. 
            I have experience in Python, R, SQL, and statistical analysis, with strong interest in real-world data-driven problem solving.
          </p>
          <p>
            This portfolio was built as part of my Cloud Computing assignment — 
            featuring a modern frontend deployed on Vercel and a backend API on Render.
          </p>
          
          <a href="#contact" className="inline-block mt-6 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition">
            Let's Work Together
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;