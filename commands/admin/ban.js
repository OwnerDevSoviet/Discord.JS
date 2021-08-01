const Discord = require("discord.js");
module.exports = {
    name: "ban2",
    description: "This command bans a member!",
  async execute(client, message, args, cmd) {
    try {
      const member =
        (await message.guild.members.cache.find((r) =>
          r.displayName.toLowerCase().includes(args[0])
        )) ||
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.guild.members.cache.find(
          (x) =>
            x.user.username.toLowerCase().includes(args[0]) ||
            x.user.username.toLowerCase().includes(args[0])
        ) ||
        message.guild.members.cache.find(
          (x) => x.user.tag === args[0] || x.user.tag === args[0]
        );

      if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.reply("You have no perms.");
      const user =
        (await message.guild.members.cache.find((r) =>
          r.displayName.toLowerCase().includes(args[0])
        )) ||
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.guild.members.cache.find(
          (x) =>
            x.user.username.toLowerCase().includes(args[0]) ||
            x.user.username.toLowerCase().includes(args[0])
        ) ||
        message.guild.members.cache.find(
          (x) => x.user.tag === args[0] || x.user.tag === args[0]
        );
      const reason = args.slice(1).join(" ");
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          user
            .send("You were banned from Syndicate Rolapley!")
            //incase bot can't dm user
            .catch(() => message.reply("Unable to send message to user"))
            .then(() =>
              member.ban({
                reason: "BANNED!",
              })
            )
            .then(() => message.reply(`Successfully banned ${user}`))
            .catch((err) => {
              message.reply("I was unable to ban the member");
              console.error(err);
            });
          const newEmbed = new Discord.MessageEmbed()
            .setColor("#00c7ff")
            .addFields({
              name: "\u200b",
              value: `${user} has been banned for "**${
                reason || "No reason"
              }**"`,
            })
            .setFooter(message.author.tag)
            .setTimestamp(Date.now());
          message.channel.send(newEmbed);
        }
      }
    } catch (e) {
      console.log(e);
    }
  },
};