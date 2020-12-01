class Service {
    BASE_URL = 'https://swapi.dev/api'

    getProducts = () => {
        return fetch(`${this.BASE_URL}/people/`).then((res) => res.json())
    }

    addProduct = (item) => {
        const form = new FormData()
        form.append('image', item.image)
        form.append('title', item.title)
        form.append('price', item.price)
        return fetch(`${this.BASE_URL}/people/`, {
            method: 'POST',
            body: form
        }).then((res) => res.json())
    }

    deleteProduct = (id) => {
        return fetch(`${this.BASE_URL}/people/` + id, {
            method: 'DELETE'
        })
    }

}

export default Service;