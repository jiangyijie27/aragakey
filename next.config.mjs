/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/aragakey",
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
}

export default nextConfig
