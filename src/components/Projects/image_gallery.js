import React, { useState } from 'react';
import { Carousel, Modal } from 'react-bootstrap';

const ImageGalleryModal = ({ images, show, onHide }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const openImageInNewTab = (imageIndex) => {
    const imageUrl = images[imageIndex];
    window.open(imageUrl, '_blank');
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton style={{ backgroundColor: '#0A0416', borderBottomColor: '#0A0416' }}>
        <Modal.Title style={{ color: 'white', fontWeight: 'bold' }}>Project Images</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#14101A' }}>
        <Carousel activeIndex={index} onSelect={handleSelect} wrap={true}>
          {images.map((image, idx) => (
            <Carousel.Item key={idx} onClick={() => openImageInNewTab(idx)}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Slide ${idx}`}
                style={{ maxHeight: '400px', objectFit: 'contain', cursor: 'pointer' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default ImageGalleryModal;
