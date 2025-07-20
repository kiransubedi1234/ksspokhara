import img1 from "@/assets/505228401_3050423228451309_7048848431356142769_n_1752255741622.jpg";
import img2 from "@/assets/5.jpg";
import img3 from "@/assets/12.jpg";
import img4 from "@/assets/8.jpg";
import img5 from "@/assets/16.jpg";

export default function Gallery() {
  const galleryItems = [
    {
      image: img1,
      title: "School Community",
      description: "Kalika Secondary School students and faculty together",
    },
    {
      image: img2,
      title: "Science Laboratory",
      description: "Hands-on experiments and practical learning",
    },
    {
      image: img3,
      title: "Sports Activities",
      description: "Physical education and team sports",
    },
    {
      image: img2,
      title: "Physics Laboratory",
      description: "Modern technology and digital literacy",
    },
    {
      image: img4,
      title: "Our Charm",
      description: "Winner of singing reality show",
    },
    {
      image: img5,
      title: "Science Block",
      description: "Everyday learning something new",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-school-blue-900 mb-6">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Glimpses of our vibrant school life and learning environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 relative"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}