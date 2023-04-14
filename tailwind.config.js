module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0095f6",
      },
      backgroundImage: {
        "login-bg":
          "url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png)",
      },
      animation: {
        torch: "torch 1s infinite",
      },
      keyframes: {
        torch: {
          from: {
            backgroundPosition: "-100% 0",
          },
          to: {
            backgroundPosition: "200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
