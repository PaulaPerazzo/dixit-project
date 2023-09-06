import { ImagePlaceholderContainer } from ".";

type ImagePlaceholderProps = {
    width?: string;
    height?: string;
  }
  
  const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({width, height}) => {

    const imgStyle = {
        width: '30%',
        height: '20%',
      };

      
    return (
      <ImagePlaceholderContainer width={width} height={height}>
        <img src="https://jailson-personal.s3.sa-east-1.amazonaws.com/images/criatividade-computacional/imagePlaceholder.png" style={imgStyle}></img>
      </ImagePlaceholderContainer>
        
    )
  }
  
  export default ImagePlaceholder;