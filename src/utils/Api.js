class MainApi {
    constructor({ baseUrl, headers }) {
        this._addres = baseUrl;
    }

    _getAnswer(res) {
        if (res.status === 200) {
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
                phone: customer.phone,
                message: customer.message,
                communication: customer.communication
            })
        }).then(this._getAnswer)
    }
}

const mainApi = new MainApi({
    baseUrl: 'http://localhost:3002/',
});

export default mainApi