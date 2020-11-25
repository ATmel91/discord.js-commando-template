
// Imports
const Commando = require('discord.js-commando')
const path = require('path')

// Local imports
const config = require('./config.json')

// Setup client
client = new Commando.CommandoClient({
  owners: [config.ownerIDs],
  invite: config.serverInvite,
  commandPrefix: config.prefix,
  fetchAllMembers: true,
  commandEditableDuration: 10000,
  unknownCommandResponse: false,
})

// Setup registry
client.registry
  .registerDefaultTypes()
  .registerGroups([
    ["misc", "misc commands"],
    ["fun", "fun commands"]
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    ping: false,
    prefix: true,
    help: true,
    commandState: true,
    eval_: true,
    unknownCommand: false
  })

  // PLEASE NOTE:
  //
  // Every command inside of ./commands will be ran.
  // This includes commands embedded inside of folders like so:
  //
  // - commands
  //   - fun
  //     - meme.js
  //   - utility
  //     - botOwner
  //       - reboot.js
  //
  // No extra work is needed to run any of these commands! wooo

  .registerCommandsIn(path.join(__dirname, 'commands'))

// Ready event
client.once('ready', () => {
  console.log(`
    0====================0
    |                    |
    |    ~  ${config.botName}  ~    |
    | Created by ATmel91 |
    |                    |
    0====================0
    `)
})

// Log errors
client.on('error', console.error)

// Login the bot
client.login(config.token)
