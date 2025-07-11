export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-school-blue-900 mb-6">About Our School</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Image removed as requested */}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-school-blue-800 mb-6">Excellence in Education</h3>
            <p className="text-lg leading-relaxed mb-6 text-slate-600">
              Kalika Secondary School, located in the heart of Pokhara-10, Ram Bazar, is committed to providing quality education rooted in discipline, innovation, and inclusiveness. Our experienced faculty and supportive environment nurture academic excellence and moral development from early grades to secondary level.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-slate-600">
              With over 25 years of educational excellence, we have been shaping young minds and preparing them for a successful future through comprehensive academic programs and character development.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-school-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-school-blue-700">25+</div>
                <div className="text-sm text-school-blue-600">Years Experience</div>
              </div>
              <div className="p-4 bg-school-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-school-blue-700">500+</div>
                <div className="text-sm text-school-blue-600">Students</div>
              </div>
              <div className="p-4 bg-school-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-school-blue-700">30+</div>
                <div className="text-sm text-school-blue-600">Teachers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
