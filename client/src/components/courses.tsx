import { GraduationCap, Palette, Check } from "lucide-react";

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
              <li className="relative pl-6 before:absolute before:left-2 before:top-0 before:h-full before:border-l-2 before:border-gray-300">
                <div className="relative">
                  <Check className="text-green-500 mr-3 inline" size={16} />
                  Pre-Primary to Class 12 (NEB Curriculum)
                </div>
                <ul className="mt-2 ml-6 space-y-2">
                  <li className="flex items-center relative pl-4 before:absolute before:left-0 before:top-2 before:w-4 before:border-t-2 before:border-gray-300">
                    <Check className="text-green-500 mr-2" size={14} />
                    Science
                  </li>
                  <li className="flex items-center relative pl-4 before:absolute before:left-0 before:top-2 before:w-4 before:border-t-2 before:border-gray-300">
                    <Check className="text-green-500 mr-2" size={14} />
                    Hotel Management
                  </li>
                  <li className="flex items-center relative pl-4 before:absolute before:left-0 before:top-2 before:w-4 before:border-t-2 before:border-gray-300">
                    <Check className="text-green-500 mr-2" size={14} />
                    Management
                  </li>
                  <li className="flex items-center relative pl-4 before:absolute before:left-0 before:top-2 before:w-4 before:border-t-2 before:border-gray-300">
                    <Check className="text-green-500 mr-2" size={14} />
                    Education
                  </li>
                  <li className="flex items-center relative pl-4 before:absolute before:left-0 before:top-2 before:w-4 before:border-t-2 before:border-gray-300">
                    <Check className="text-green-500 mr-2" size={14} />
                    Humanities
                  </li>
                </ul>
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
      </div>
    </section>
  );
}
