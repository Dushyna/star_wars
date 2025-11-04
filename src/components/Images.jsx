const Images = ({src}) => {
    let style;
    if (src === '/friend7.jpg') {
        style = "col-sm-4 p-1 img1";
    } else if (src === '/friend9.jpg') {
        style = "col-sm-4 p-1 img2";
    } else {
        style = "col-sm-4 p-1";
    }

    return (
        <img className={style} src={src} alt="Friend"/>

    );
};

export default Images;