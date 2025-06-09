class MainApi {
    constructor({ baseUrl }) {
        this._address = baseUrl;
    }

    _getAnswer(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status} ${res.statusText}`);
    }

    // Отправка данных формы
    async sendNote(customer) {
        return fetch(`${this._address}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: customer.name,
                phone: customer.phone,
                message: customer.message,
                communication: customer.communication,
                dateTime: customer.dateTime,
            })
        })
        .then(this._getAnswer)
        .catch(err => {
            console.error(`Failed to send note: ${err}`);
            throw err;
        });
    }
}

const BOT_API_URL = process.env.BOT_API_URL || "http://localhost:8001/";
const mainApi = new MainApi({
    baseUrl: BOT_API_URL,
});

export default mainApi;