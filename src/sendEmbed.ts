import { EmbedBuilder, TextChannel } from 'discord.js';

export async function sendEmbed(channel: TextChannel, embed: EmbedBuilder): Promise<void>
{
  await channel.send({ embeds: [embed] });
}