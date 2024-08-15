import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [{ hostname: "a0.muscache.com" }],
    domains: ["lh3.googleusercontent.com", "gravatar.com","res.cloudinary.com"],
  },
};

export default withNextIntl(nextConfig);
