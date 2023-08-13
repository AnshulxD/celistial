const axios = require('axios');
module.exports = async (client, interaction, args) => {
    if (!interaction.replied && !interaction.deferred) await interaction.deferReply({ ephemeral: false });
    const wouldyou = await axios.get('https://would-you-rather-api.abaanshanid.repl.co');
    const question = wouldyou.data.data;

    client.embed(
        {
            title: `🤔・Would you rather...`,
            desc: `**${question}**`,
            components: [],
            type: 'editreply'
        },
        interaction
    );
};