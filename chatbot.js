window.botpressWebChat.init({
    botId: 'your-bot-id', // Make sure to replace this with your actual bot ID
    hostUrl: 'https://cdn.botpress.cloud/webchat/v2.2',
    configUrl: 'https://files.bpcontent.cloud/2024/10/27/05/20241027050650-0515Q194.json'
});

function toggleChatbot() {
    window.botpressWebChat.sendEvent({ type: 'toggle' });
}
