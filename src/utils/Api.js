class MainApi {
    constructor({ baseUrl, headers }) {
        this._addres = baseUrl;
        this._headers = headers;
    }

    _getAnswer(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`${res.status}`);
    }

    // Отправка данных формы
    sendNote(customer) {
        return fetch(`${this._addres}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: customer.name,
                phone: customer.name,
                message: customer.message,
                communication: customer.communication
            })
        }).then(this._getAnswer)
    }
}

const mainApi = new MainApi({
    baseUrl: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default mainApi