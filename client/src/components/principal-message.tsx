import { Quote } from "lucide-react";

export default function PrincipalMessage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-school-blue-900 mb-6">Principal's Message</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-school-blue-50 p-8 rounded-2xl relative">
              <div className="absolute top-4 left-4 text-6xl text-school-blue-200">
                <Quote size={48} />
              </div>
              <p className="text-lg leading-relaxed mb-6 text-slate-700 relative z-10 pt-8">
                "At Kalika Secondary School, we believe education shapes the future. Our mission is to inspire every student to reach their full potential through a blend of academics, discipline, and creativity. We are committed to nurturing not just academic excellence, but also character development and moral values."
              </p>
              <p className="text-lg leading-relaxed mb-8 text-slate-700">
                "Thank you for trusting us with your child's growth and development. Together, we will prepare them for a bright and successful future."
              </p>
              <div className="flex items-center">
                <div className="w-1 h-16 bg-amber-500 mr-4"></div>
                <div>
                  <p className="font-semibold text-school-blue-800 text-lg">Mr. Ram Bahadur Thapa</p>
                  <p className="text-slate-600">Principal, Kalika Secondary School</p>
                  <p className="text-sm text-slate-500">M.Ed, 20+ years in Education</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
