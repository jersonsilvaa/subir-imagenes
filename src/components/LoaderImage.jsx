import React, { useEffect } from "react";
import "../styles/componets/LoaderImage.scss";
import DragImage from "../components/DragImage";

const LoaderImage = ({ file, setFile, setLoading }) => {
    const { url } = DragImage(file)
    useEffect(() => {
        if(url) {
            setFile(null);
            setLoading(false);
        }
    }, [url, setFile, setLoading])

    return (
        <div className="title__loader"><h2>Subiendo imagen</h2>
            <div className="loader">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        </div>
    )
}

export default LoaderImage;