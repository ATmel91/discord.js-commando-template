# discord.js-commando-template:

The `example.js` is only a boilerplate template, it is not actually ran, so if you want to run the command simply copy / paste it into the `commands` folder.

*Steps to get it up and running*

1)  Open command prompt (this tutorial is for windows sorry)
2)  Copy your bot directory root, e.g. `C:\path\to\folder\mainFolderRoot`
3)  If your bot is on anything other than the C: drive do this: `cd /d d:` or `cd /e e:` depending on what drive it is on.
4)  Then paste in your directory root.
5)  Download the files in my repository and paste them into your root directory folder
6)  `npm init` -> Fill out some details to create a `package.json`
7)  `npm install https://github.com/discordjs/Commando` (**do not do** `npm install discord.js-commando` as right now the NPM version is failing)
8)  `npm install path`
9)  `npm install discord.js` (required because Commando is kind of an extension of discord.js in loose terms)
10) Edit the `config.json` and put in your bot details / anything else required. 

# How to setup a discord bot:

1)  Go to: https://discord.com/developers/applications
2)  Click the big "New Application" button -> Then give it a fancy new name.
3)  Then add a profile picture and such to it, customize as you like.
4)  Click on "Bot" on the left -> Then click "Add Bot"
5)  Copy its token and paste it into the `config.json` file. **DISCLAIMER:** Treat your token like your pwd. Do not ever show it to anybody.
6)  Click "OAuth2" -> Select "bot" in the middle column
7)  Scroll down and figure out what permissions you want your bot to have.
8)  Then copy your "OAuth2" link and invite your bot to any server you like! **Note:** This link can be public, it will not harm the bot if shared. Think of it as a server invite, but instead you invite the bot to the server.

# Useful links:

- **discord.js-commando**'s docs: https://discord.js.org/#/docs/commando/master/general/first-steps
- **discord.js-commando** guides: https://discordjs.guide/commando/
- **quick.db** https://quickdb.js.org/overview/docs#add-method (great for small local databases)
