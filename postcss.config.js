module.exports = {
  plugins: {
    // Tailwind PostCSS eklentisi (eski 'tailwindcss' yerine bunu kullanıyoruz)
    '@tailwindcss/postcss': {
      // opsiyonel: Tailwind ayar dosyanızın yolu, genelde root'ta:
      config: './tailwind.config.js'
    },
    // Otomatik vendor-prefix ekler
    autoprefixer: {}
  }
};