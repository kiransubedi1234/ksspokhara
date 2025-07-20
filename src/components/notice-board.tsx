import { Megaphone, Calendar, Microscope, Trophy, Book, GraduationCap } from "lucide-react";

export default function NoticeBoard() {
  const notices = [
    {
      icon: Megaphone,
      title: "Admission Open",
      description: "Admission Open for Academic Year 2082 - Classes Pre-Primary to Grade 10",
      action: "Apply Now",
      color: "amber"
    },
    {
      icon: Calendar,
      title: "Parent Meeting",
      description: "Parent-Teacher Meeting scheduled on 15th Shrawan 2082",
      action: "Mark Your Calendar",
      color: "green"
    },
    {
      icon: Microscope,
      title: "Science Exhibition",
      description: "Annual Science Exhibition on 20th Bhadra 2082",
      action: "Don't Miss It",
      color: "blue"
    },
    {
      icon: Trophy,
      title: "Sports Week",
      description: "Inter-house Sports Competition from 5th to 10th Ashwin",
      action: "Participate",
      color: "purple"
    },
    {
      icon: Book,
      title: "Library Hours",
      description: "Extended library hours during exam season - 6 AM to 8 PM",
      action: "Study Hard",
      color: "red"
    },
    {
      icon: GraduationCap,
      title: "Scholarship",
      description: "Merit-based scholarship applications open for exceptional students",
      action: "Apply Today",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { border: string; bg: string; icon: string; text: string } } = {
      amber: { border: "border-amber-500", bg: "bg-amber-100", icon: "text-amber-600", text: "text-amber-600" },
      green: { border: "border-green-500", bg: "bg-green-100", icon: "text-green-600", text: "text-green-600" },
      blue: { border: "border-blue-500", bg: "bg-blue-100", icon: "text-blue-600", text: "text-blue-600" },
      purple: { border: "border-purple-500", bg: "bg-purple-100", icon: "text-purple-600", text: "text-purple-600" },
      red: { border: "border-red-500", bg: "bg-red-100", icon: "text-red-600", text: "text-red-600" },
      indigo: { border: "border-indigo-500", bg: "bg-indigo-100", icon: "text-indigo-600", text: "text-indigo-600" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-school-blue-900 mb-6">Notice Board</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Important announcements and upcoming events
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notices.map((notice, index) => {
            const colors = getColorClasses(notice.color);
            return (
              <div key={index} className={`bg-white p-6 rounded-2xl shadow-lg border-l-4 ${colors.border}`}>
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 ${colors.bg} rounded-full flex items-center justify-center mr-3`}>
                    <notice.icon className={colors.icon} size={20} />
                  </div>
                  <h3 className="font-semibold text-school-blue-800 text-lg">{notice.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{notice.description}</p>
                <p className={`text-sm font-medium ${colors.text}`}>{notice.action}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
