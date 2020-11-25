
// This command wont be ran,
// So just put it inside of the commands folder for it to be used
// It is just a template to show you how commands work
//
// Read this so you can get a handle on what to do
// https://discord.js.org/#/docs/commando/

// Imports
const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const path = require('path')

// Local imports
const config = require('./config.json') // Dont forget to change the path when moved

// Export command
module.exports = class PingCmd extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "example",
            aliases: ["examples"],
            ownerOnly: false,
            guildOnly: false,
            hidden: false,
            nsfw: false,
            group: 'utility',
            memberName: 'ping',
            description: 'Example command',
            examples: [`;example`],
            argsType: 'single',
            args: [
                {
                    key: 'question',
                    prompt: 'Opinion on the Bolshevik party?',
                    type: 'string',
                    validate: question => {
                        if (question.length < 101 && question.length > 11) return true
                        return 'questions must be between 10 and 100 characters in length.'
                    }
                },
                {
                    key: 'options',
                    prompt: 'Cat or dog?',
                    type: 'string',
                    default: 'dog',
                },
            ]
        })
    }

    // Run command
    run(message, { question, options }) {

      // Send a regular message
      message.channel.send(`Answer: ${question}, options: ${options}`)

      // Send an embed
      const embed = new Discord.MessageEmbed()
        .setTitle('test')
        .setcolor('#FF0000')
        .setDescription('This is the description.')

        // Choose a random number between 1 and 99, then make it italic with the '* *'
        .addField(`Lucky number: *${Math.floor(Math.random() * 99) + 1}*`)
        .setFooter('This is a foooter')
        .setTimestamp()
      message.channel.send(embed)
    }
}
