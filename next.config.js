/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  // Для создания статического экспорта
  output: "export",
  // Указываем /static для размещения на сервере
  assetPrefix: "/static",
  basePath: "/static",
  /* config options here */
  // Отключаем трассировку ссылок, так как используем HashRouter
  trailingSlash: true,
  // Игнорируем ошибки при экспорте страниц
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
