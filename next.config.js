// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "media.graphassets.com",
//       "ap-south-1.graphassets.com"
     
//     ],
//   },
// };

// module.exports = nextConfig;


// sdk ka past


// isse code ache se run hota h

// /** @type {import('next').NextConfig} */
// const nextConfig = {
// images: {
// domains: [
// "media.graphassets.com",
// "ap-south-1.graphassets.com",
// "lh3.googleusercontent.com" // Google profile images
// ],
// },
// };

// module.exports = nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
remotePatterns: [
{
protocol: "https",
hostname: "media.graphassets.com",
},
{
protocol: "https",
hostname: "ap-south-1.graphassets.com",
},
{
protocol: "https",
hostname: "lh3.googleusercontent.com",
},
],
},
};

module.exports = nextConfig;

