/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  rewrites: async () => {
    return [
      {
        source: "/:path*",
        destination: "https://jsonplaceholder.typicode.com/:path*", // Your API endpoint
      },
    ];
  },
};

export default nextConfig;
