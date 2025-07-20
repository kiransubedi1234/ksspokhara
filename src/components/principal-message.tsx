import { Quote } from "lucide-react";
import principalImage from "@/assets/pc.jpg";

export default function PrincipalMessage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-school-blue-900 mb-6">
            Principal's Message
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Message */}
          <div className="order-2 lg:order-1">
            <div className="bg-school-blue-50 p-8 rounded-2xl relative shadow-md">
              <div className="absolute top-4 left-4 text-6xl text-school-blue-200">
                <Quote size={48} />
              </div>
              <p className="text-lg leading-relaxed mb-6 text-slate-700 relative z-10 pt-8">
                "At Kalika Model Secondary School, we believe education shapes the future. Our mission is to inspire every student to reach their full potential through a blend of academics, discipline, and creativity. We are committed to nurturing not just academic excellence, but also character development and moral values."
              </p>
              <p className="text-lg leading-relaxed mb-8 text-slate-700">
                "Thank you for trusting us with your child's growth and development. Together, we will prepare them for a bright and successful future."
              </p>
              <div className="flex items-center">
                <div className="w-1 h-16 bg-amber-500 mr-4"></div>
                <div>
                  <p className="font-semibold text-school-blue-800 text-lg">Mr. Shree Ram Acharya</p>
                  <p className="text-slate-600">Principal, Kalika Model Secondary School</p>
                  <p className="text-sm text-slate-500">M.A B.Ed, 30+ years in Education</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={principalImage}
              alt="Principal"
              className="rounded-2xl w-[70%] h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}