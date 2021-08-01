const Discord = require('discord.js');
module.exports = {
    name: 'unban',
    description: "This command bans a member!",

    async execute(message,args, cmd, client, async){
        const reason = args.slice(1).join(" ")
        if(!message.member.hasPermission('BAN_MEMBERS')) return
        message.delete();
        const user = await message.guild.members.unban(args[0])
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#00c7ff')
            .addFields({name :"\u200b", value: `${user} has been unbanned for "${reason}`})
            .setFooter(message.author.tag)
            .setTimestamp(Date.now())
            message.channel.send(newEmbed)
       // message.channel.send(newEmbed)
    }
}