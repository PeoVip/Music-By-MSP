

module.exports = {
  TOKEN: "",
  language: "vi",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "INZEWORLD.COM (DE)",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port:  3128,
      secure: false
    }
  ]
}
