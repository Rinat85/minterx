import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { FaUserCircle } from 'react-icons/fa';

const Reviews = () => {
    const data = [
        {
            id: 0,
            name: 'Наталия',
            avatar: '',
            review: 'Сегодня впервые воспользовалась этим обменником, Все прошло хорошо.'
        },
        {
            id: 1,
            name: 'Олег',
            avatar: '',
            review: 'Ребята отлично работают, все четко быстро и надёжно, а ещё у них вкусный кофе)) всем рекомендую менял неоднократно и всегда всем доволен!!'
        },
        {
            id: 2,
            name: 'Наталия',
            avatar: '',
            review: 'Сегодня впервые воспользовалась этим обменником, Все прошло хорошо.'
        },
        {
            id: 3,
            name: 'Олег',
            avatar: '',
            review: 'Ребята отлично работают, все четко быстро и надёжно, а ещё у них вкусный кофе)) всем рекомендую менял неоднократно и всегда всем доволен!!'
        },
        {
            id: 4,
            name: 'Наталия',
            avatar: '',
            review: 'Сегодня впервые воспользовалась этим обменником, Все прошло хорошо.'
        },
        {
            id: 5,
            name: 'Олег',
            avatar: '',
            review: 'Ребята отлично работают, все четко быстро и надёжно, а ещё у них вкусный кофе)) всем рекомендую менял неоднократно и всегда всем доволен!!'
        },
        {
            id: 6,
            name: 'Наталия',
            avatar: '',
            review: 'Сегодня впервые воспользовалась этим обменником, Все прошло хорошо.'
        },
        {
            id: 7,
            name: 'Олег',
            avatar: '',
            review: 'Ребята отлично работают, все четко быстро и надёжно, а ещё у них вкусный кофе)) всем рекомендую менял неоднократно и всегда всем доволен!!'
        },
        {
            id: 8,
            name: 'Наталия',
            avatar: '',
            review: 'Сегодня впервые воспользовалась этим обменником, Все прошло хорошо.'
        },
        {
            id: 9,
            name: 'Олег',
            avatar: '',
            review: 'Ребята отлично работают, все четко быстро и надёжно, а ещё у них вкусный кофе)) всем рекомендую менял неоднократно и всегда всем доволен!!'
        },
        {
            id: 10,
            name: 'Наталия',
            avatar: '',
            review: 'Сегодня впервые воспользовалась этим обменником, Все прошло хорошо.'
        },
        {
            id: 11,
            name: 'Олег',
            avatar: '',
            review: 'Ребята отлично работают, все четко быстро и надёжно, а ещё у них вкусный кофе)) всем рекомендую менял неоднократно и всегда всем доволен!!'
        }
    ];


    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        className: 'reviews-slider',
        rows: 2,
        slidesPerRow: 2,
    };

    return (
        <section className="reviews">
            <h2 className="reviews-title">Отзывы наших клиентов</h2>
            <Slider {...settings}>
                {data.map(({id, name, review}) => (
                    <div key={id} className={`reviews-slider-item ${id % 2 ? 'bg-color-green' : 'bg-color-blue'}`}>
                        <FaUserCircle className="reviews-slider-avatar" />
                        <div className="reviews-slider-content">
                            <h3>{name}</h3>
                            <p>{review}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default Reviews;