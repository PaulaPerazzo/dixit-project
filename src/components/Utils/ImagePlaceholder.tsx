import { ImagePlaceholderContainer } from ".";

type ImagePlaceholderProps = {
    width?: string;
    height?: string;
    url?: string;
  }
  
  const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({width, height, url}) => {
    const imgStyle = {
        width: '30%',
        height: '20%',
      };
      
    return (
      <ImagePlaceholderContainer width={width} height={height}>
        <img src={url} style={imgStyle}></img>
      </ImagePlaceholderContainer>
    )
  }
  
  export default ImagePlaceholder;