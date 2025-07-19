import { Presentation, Shield, Laptop, Microscope, Trophy, Users } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: Presentation,
      title: "Experienced Teachers",
      description: "Qualified and passionate educators focused on student-centered learning with personalized attention for every student."
    },
    {
      icon: Shield,
      title: "Safe & Supportive Campus",
      description: "A peaceful and secure learning environment in the heart of the city with modern facilities and safety measures."
    },
    {
      icon: Laptop,
      title: "Modern Curriculum",
      description: "NEB-aligned education with co-curricular activities and technology-integrated learning methods."
    },
    {
      icon: Microscope,
      title: "Science Lab",
      description: "Well-equipped science laboratories for hands-on learning and practical experiments in Physics, Chemistry, and Biology."
    },
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Consistent track record of outstanding academic results with 95% pass rate in SLC examinations."
    },
    {
      icon: Users,
      title: "Medium Class Sizes",
      description: "Ideal number students per class ensuring personalized attention and better teacher-student interaction."
    }
  ];

  return (
    <section id="why-choose" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-school-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-school-blue-900 mb-6">Why Choose Kalika?</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover what makes Kalika Model Secondary School the preferred choice for quality education in Pokhara
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-school-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-school-blue-200 transition-colors">
                <feature.icon className="text-2xl text-school-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-school-blue-800">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
