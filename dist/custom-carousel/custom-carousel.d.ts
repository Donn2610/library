import React from 'react';
interface Props {
    carouselItems: Array<{
        title: string;
        content: string;
    }>;
    setSelectedItem: Function;
    fontSize: string;
    textColor: string;
    backgroundColor: string;
}
declare const CustomCarousel: React.FC<Props>;
export default CustomCarousel;
