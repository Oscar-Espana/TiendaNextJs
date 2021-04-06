module.exports = {
  async rewrites() {
    return [
      {
        source: '/producto/:path*',
        destination: '/product/:path*',
      },
    ]
  },
}
