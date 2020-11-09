class Service {
    BASE_URL = 'https://nurkadyr.pythonanywhere.com'

    getProducts = () => {
        return fetch(`${this.BASE_URL}/product/`).then((res) => res.json())
    }

    addProduct = (item) => {
        const form = new FormData()
        form.append('image', item.image)
        form.append('title', item.title)
        form.append('price', item.price)
        return fetch(`${this.BASE_URL}/product/`, {
            method: 'POST',
            body: form
        }).then((res) => res.json())
    }

    deleteProduct = (id) => {
        return fetch(`${this.BASE_URL}/product/` + id, {
            method: 'DELETE'
        })
    }

}

export default Service;