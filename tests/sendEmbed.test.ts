import { TextChannel, EmbedBuilder } from 'discord.js';
import { sendEmbed } from '../src/sendEmbed';
import { describe, test, expect, jest } from '@jest/globals';

// Mock the channel and embed objects
const channelMock = {
  send: jest.fn(),
} as unknown as TextChannel;

const embedMock = new EmbedBuilder()
  .setTitle('Test Embed')
  .setDescription('This is a test embed.');

describe('sendEmbed', () => {
  test('should send an embed to the specified channel', async () => {
    await sendEmbed(channelMock, embedMock);
    expect(channelMock.send).toHaveBeenCalledWith({ embeds: [embedMock] });
  });
});
