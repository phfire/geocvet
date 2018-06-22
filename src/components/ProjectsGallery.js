import ImageGallery from 'react-image-gallery';
import React from "react";
 
class ProjectsGallery extends React.Component {
 
  render() {
 
    const images = [
      {
        original: 'static/images/projects/1.png',
        thumbnail: 'static/images/projects/1thumb.png',
      },
      {
        original: 'static/images/projects/2.png',
        thumbnail: 'static/images/projects/2thumb.png'
      },
      {
        original: 'static/images/projects/3.png',
        thumbnail: 'static/images/projects/3thumb.png'
      }
    ]
 
    return (
      <ImageGallery items={images} />
    );
  }
 
}

export default ProjectsGallery;