import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

const TimelineItem = ({ data, index, isVisible }) => {
    const isLeft = index % 2 === 0;

    return (
        <div className={`timeline-item ${isLeft ? 'left' : 'right'} ${isVisible ? 'active' : ''}`}>
            <div className="content">
                <h3>{data.title}</h3>
                <span className="date">{data.date}</span>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

const Timeline = ({ items }) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const timeline = document.querySelector('.timeline-container');
            const boundingRect = timeline.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const scrolled = Math.max(0, Math.min(1, (windowHeight - boundingRect.top) / (boundingRect.height)));
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress();

        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <div className="timeline-container">
            <div className="timeline-line">
                <div
                    className="fluid-fill"
                    style={{ height: `${scrollProgress * 100}%` }}
                ></div>
            </div>

            {items.map((item, index) => (
                <TimelineItem
                    data={item}
                    index={index}
                    key={`timeline-item-${index}`}
                    isVisible={scrollProgress > (index / items.length)}
                />
            ))}
        </div>
    );
};

TimelineItem.propTypes = {
    data: propTypes.shape({
        title: propTypes.string.isRequired,
        date: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
    }).isRequired,
    index: propTypes.number.isRequired,
    isVisible: propTypes.bool.isRequired,
};

Timeline.propTypes = {
    items: propTypes.array.isRequired,
};

export default Timeline;
