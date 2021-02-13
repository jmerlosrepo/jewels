import constants from './data.constants';

const dataService = {
    fetchAllJewels: () => {
        return new Promise((resolve, reject) => {
            fetch(`${constants.host}:${constants.port}/getData`)
            .then(response => response.json())
            .then(data => resolve(data.jewels))
            .catch(err => reject(err))
        });
    }
}

export default dataService;