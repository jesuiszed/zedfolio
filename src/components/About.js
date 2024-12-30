const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Me</h2>
        <div className="md:grid md:grid-cols-2 gap-8 items-center">
          <div className="mb-12 md:mb-0">
            <img
              src="/images/flozed.png"
              alt="Jesuiszed"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-gray-800 dark:text-white">
            <p className="text-xl mb-4">
              I'm a Computer Science Engineering student specializing in Network and IT Systems.
              My tech journey is driven by passion and curiosity!
            </p>
            <ul className="text-lg mb-6 space-y-2">
              <li>🎓 Computer Science Engineering Student</li>
              <li>🌐 Network & IT Systems Specialist</li>
              <li>🔒 Cybersecurity Enthusiast</li>
              <li>🤖 AI Explorer</li>
              <li>🌱 Currently learning Cloud Architecture</li>
            </ul>
            <div className="flex gap-4">
              <a 
                href="https://github.com/jesuiszed" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300"
              >
                GitHub Profile
              </a>
              <a 
                href="/cv.pdf" 
                download="CV_ZED.pdf"
                className="bg-gray-700 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 text-white px-6 py-2 rounded-full transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
