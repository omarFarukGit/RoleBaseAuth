import "dotenv/config";

const config = {
  port: process.env.PORT,
  connectionString:process.env.NEON_URI
};
export default config;
