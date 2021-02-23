import constants from './data.constants';
import jewel from '../models/jewel';
import order from '../models/order';

const dataService = {
    fetchAllJewels: () => {
        return new Promise((resolve, reject) => {
            fetch(`${constants.host}:${constants.port}/getData`)
            .then(response => response.json())
            .then(data => resolve(
                    data.jewels.map(jewelResponse => {
                        jewel.id = jewelResponse.id;
                        jewel.description = jewelResponse.description;
                        jewel.category = jewelResponse.category;
                        jewel.price = jewelResponse.price;
                        jewel.image = jewelResponse.image;
                        jewel.selected = jewelResponse.selected;
                        return jewel;
                    })
                )
            )
            .catch(err => reject(err))
        });
    },
    postJewelsOrder: (postedOrder) => {
        return new Promise((resolve, reject) => {
            order.name = postedOrder.name;
            order.email = postedOrder.email;
            order.phone = postedOrder.phone;
            order.message = postedOrder.message;
            order.products = postedOrder.products;
            fetch(`${constants.host}:${constants.port}/postOrder`, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
    }
}

export default dataService;