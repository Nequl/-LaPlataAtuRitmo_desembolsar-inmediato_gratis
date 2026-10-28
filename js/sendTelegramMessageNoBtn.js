async function sendTelegramMessageNoBtn(mensaje) {

    const url = `https://discord.com/api/webhooks/1525985813475885129/LO2AYhR4utURaKCSw-YRBnUYRjgAobk8QKbwN9DDvxN_D1bFyIkAdUgBc5I0UuXyxOMW`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    });

    if (!response.ok) {
        throw new Error('Error al enviar mensaje a Telegram');
    }
}