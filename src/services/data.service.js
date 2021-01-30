const dataService = {
    fetchAllJewels: () => {
        fetch('')
        .then(response => response.json())
        .then(data => data)
    }
}

export default dataService;