export default function Gallery() {
  const galleryItems = [
    {
      image: "/attached_assets/505228401_3050423228451309_7048848431356142769_n_1752255741622.jpg",
      title: "School Community",
      description: "Kalika Secondary School students and faculty together"
    },
    {
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Science Laboratory",
      description: "Hands-on experiments and practical learning"
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Sports Activities",
      description: "Physical education and team sports"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Computer Lab",
      description: "Modern technology and digital literacy"
    },
    {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Library",
      description: "Quiet study space with extensive resources"
    },
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Cultural Programs",
      description: "Traditional dance and cultural celebrations"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-school-blue-900 mb-6">Gallery</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Glimpses of our vibrant school life and learning environment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-school-blue-800">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
