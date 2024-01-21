import React from 'react'
import { Carousel } from 'react-carousel-minimal';

function Header() {
    const data = [
        {
            image: "https://preview.colorlib.com/theme/wines/images/img_2.jpg.webp",
            caption: "<h5>Welcome</h5><h1>Wines For Everyone</h1>"
        },
        {
            image: "https://preview.colorlib.com/theme/wines/images/hero_1.jpg.webp",
            caption: "<h5>Royal wine</h5><h1>GRAPE WINE</h1>"
        },
    ]

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }



    return (
        <div>
                <Carousel
                    data={data}
                    width="1200px"
                    height="953px"
                    captionStyle={captionStyle}
                    captionPosition="center"
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideImageFit="cover"
                    style={{
                        textAlign: "center",
                        maxWidth: "1200px",
                        maxHeight: "953px",
                        margin: "40px auto",
                    }}
                />
        </div>
    )
}

export default Header