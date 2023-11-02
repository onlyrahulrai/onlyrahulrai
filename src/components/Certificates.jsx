import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    Card,
    CardBody,
} from 'reactstrap';

const items = [
    {
        src: 'assets/img/certificates/1.jpg',
        altText: 'Python Programming Certification',
        caption: 'Python Programming Certification',
        key: 1,
    },
    {
        src: 'assets/img/certificates/6.jpg',
        altText: 'Java Programming Certification',
        caption: 'Java Programming Certification',
        key: 2,
    },
    {
        src: 'assets/img/certificates/2.jpg',
        altText: 'Javascript(Basic)',
        caption: 'Javascript(Basic)',
        key: 3,
    },
    {
        src: 'assets/img/certificates/3.jpg',
        altText: 'Javascript(Advanced)',
        caption: 'Javascript(Advanced)',
        key: 4,
    },
    {
        src: 'assets/img/certificates/4.jpg',
        altText: 'Python(Basic)',
        caption: 'Python(Basic)',
        key: 5,
    },
    {
        src: 'assets/img/certificates/5.jpg',
        altText: 'CSS(Basic)',
        caption: 'CSS(Basic)',
        key: 6,
    },

];

function Certificates(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const slides = items.map((item, key) => {
        return (

            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={key}
            >
                <Card className='shadow-lg'>
                    <CardBody>
                        <img src={item.src} alt={item.altText} className='object-fit-contain' width="100%" style={{ maxHeight: "516px" }} />
                    </CardBody>
                </Card>
            </CarouselItem>

        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
            interval={10000}
            fade={true}
        >
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}

export default Certificates;