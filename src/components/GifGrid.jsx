import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/UseFetchGifs";

export const GifGrid = ({ category} ) => {
    
    const {data, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading 
                && <h2>Cargando....</h2>
            }
            <div className="class-grid">
                { data.map( (image) => 
                    (
                        <GifItem key={image.id} {...image} />
                    )
                )}
            </div> 
            {/* <div className="class-grid">
                {images.map( (image) => 
                    (
                        <GifItem key={image.id} title={image.title} url={image.url} />
                    )
                )}
            </div> */}
            
        </>
    )
}
