import ImageGallery from 'react-image-gallery';
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
 
class ProjectsGallery extends React.Component {
 
  render() {
 
    const images = [
      {
        original: '/images/projects/1.png',
        thumbnail: '/images/projects/1thumb.png',
      },
      {
        original: '/images/projects/2.png',
        thumbnail: '/images/projects/2thumb.png'
      },
      {
        original: '/images/projects/3.png',
        thumbnail: '/images/projects/3thumb.png'
      }
    ]
 
    return (
      <ImageGallery items={images} />
    );
  }
 
}

export default ProjectsGallery;