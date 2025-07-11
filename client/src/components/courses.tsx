import { GraduationCap, Palette, Heart, Check } from "lucide-react";

export default function Courses() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-school-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-school-blue-900 mb-6">Courses Offered</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive educational programs designed to foster holistic development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-school-blue-100 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="text-school-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-school-blue-800">Academic Programs</h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={16} />
                Pre-Primary to Class 10 (NEB Curriculum)
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={16} />
                Science, Mathematics & English Focus
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={16} />
                Computer Science & ICT
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={16} />
                Nepali, Social Studies & Optional Math
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-school-blue-100 rounded-full flex items-center justify-center mr-4">
                <Palette className="text-school-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-school-blue-800">Extra-Curricular Activities</h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={16} />
                Arts, Music & Dance Classes
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={16} />
                Sports & Physical Education
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={16} />
                Debate & Public Speaking
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={16} />
                Science & Quiz Competitions
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-school-blue-100 rounded-full flex items-center justify-center mr-4">
              <Heart className="text-school-blue-600" size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-school-blue-800">Character Development</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={16} />
                Moral & Value-based Education
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={16} />
                Leadership Development Programs
              </li>
            </ul>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={16} />
                Community Service Projects
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={16} />
                Cultural & Religious Studies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
