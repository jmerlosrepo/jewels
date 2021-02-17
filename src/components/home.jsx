import React from "react";
import Filter from "./filter";
import JewelsList from "./jewelsList";
import ImageModal from "./imageModal";

const Home = ({
  jewels,
  modalJewelVisible,
  modalJewelImage,
  onShowHideModal,
  onSendToCart,
  onCloseModal,
  onFindByText,
}) => {
  return (
    <div>
      <div className="navAndLogo">
        <Filter onSearch={onFindByText} />
        <img
          src="http://localhost:3000/assets/logo.jpg"
          width="400"
          height="300"
          alt="logo"
        />
      </div>
      <JewelsList
        jewels={jewels}
        onShowHideModal={onShowHideModal}
        onSendToCart={onSendToCart}
      />
      <ImageModal
        onCloseModal={onCloseModal}
        visible={modalJewelVisible}
        image={modalJewelImage}
      />
    </div>
  );
};

export default Home;
