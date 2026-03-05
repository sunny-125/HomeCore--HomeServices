export const metadata = {
  title: "About Us | Service Booking Platform",
  description:
    "Learn more about our service booking platform, our mission, team, and values.",
};

export default function AboutPage() {
  return (
    <div className="px-6 md:px-36 pt-24 pb-16">
      {/* 👆 pt-24 = header ke baad natural spacing */}

      <h1 className="text-3xl font-bold mb-6 text-primary">
        About Us
      </h1>

      <p className="text-gray-600 text-lg leading-8">
        We are a modern service booking platform designed to connect users
        with trusted local professionals. Our goal is to make booking
        services simple, fast, and reliable.
      </p>

      <p className="text-gray-600 text-lg leading-8 mt-4">
        From home services to professional assistance, we help customers
        find verified experts with real-time availability.
      </p>

      {/* ================= TEAM SECTION ================= */}
      <h2 className="text-2xl font-bold mt-16 mb-6">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-justify">
        {[
          {
            name: "Sunny Prajapati",
            // role: "Founder & Developer",
             role: "Developer",
            image: "/team1.jpg",
          },
          {
            name: "Mayur Bansode",
            role: "UI/UX Designer",
            image: "/team2.jpg",
          },
        ].map((member, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="font-bold mt-4">{member.name}</h3>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}