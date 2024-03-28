const isDevelopment = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  rewrites: async () => {
    if (isDevelopment) {
      return [
        {
          source: "/:path*",
          destination: "https://jsonplaceholder.typicode.com/:path*", // Your API endpoint
        },
      ];
    } else {
      return [
        {
          source: "/:path*",
          destination: "/:path*", // Your API endpoint
        },
      ];
    }
  },
};

export default nextConfig;
