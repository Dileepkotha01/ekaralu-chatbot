module.exports = {
  apps: [
    {
      name: "ekaralu-bot",
      script: "server.js",
      cwd: "/var/www/ekaralu_chatbot",
      env: {
        NODE_ENV: "production",
        PORT: 5010
      }
    }
  ]
};
