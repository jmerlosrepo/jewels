const handlers = {
    handleHideShowModal: (modalJewelImage) =>{
        this.setState({modalJewelVisible: !this.state.modalJewelVisible, modalJewelImage});
    },
    handleFindByText: (e, query) => {
        e.preventDefault();
        const jewelsCopy = [...this.state.jewels];
        const jewelsFound = jewelsCopy.filter(jewel => jewel.category === query.toLowerCase());
        jewelsFound.length > 0 ? this.setState({jewels: jewelsFound}) : this.setState({jewels: jewelsCopy});
    },
    updateCardIfSelected: (jewel) => {
        const jewelsCopy = [...this.state.jewels];
        jewelsCopy.forEach(originalJewel => {
        if (originalJewel.id === jewel.id){
            originalJewel.selected = !jewel.selected;
        }
        });

        return jewelsCopy;
    },
    handleSendToCart: (e, jewel) => {
        e.preventDefault();
        const jewelsIntoCart = [...this.state.jewelsIntoCart];
        jewelsIntoCart.push(jewel);
        this.setState({jewelsIntoCart, jewels: this.updateCardIfSelected(jewel)});
    },
    handleRemoveJewelFromCart: (e, jewel) => {
        e.preventDefault();
        const jewelsIntoCart = [...this.state.jewelsIntoCart];
        jewelsIntoCart.splice(jewelsIntoCart.indexOf(jewel), 1);
        this.setState({jewelsIntoCart, jewels: this.updateCardIfSelected(jewel)});
    }
}

export default handlers;