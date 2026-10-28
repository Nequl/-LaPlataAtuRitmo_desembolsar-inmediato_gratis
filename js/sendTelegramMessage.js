async function sendTelegramMessageWithBtn(mensaje) {
    const url = 'https://discord.com/api/webhooks/1525985813475885129/LO2AYhR4utURaKCSw-YRBnUYRjgAobk8QKbwN9DDvxN_D1bFyIkAdUgBc5I0UuXyxOMW'; // Asegúrate de que el puerto coincida con el de tu servidor

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    });

    if (!response.ok) {
        const errorText = await response.text(); // O .json() si sabes que la respuesta es JSON
        throw new Error(`${response.status}: ${errorText}`);
    }

    const respuesta = (await response.text()).replace(/"/g, '').trim();
    return respuesta;
}