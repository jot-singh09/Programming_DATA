
    const ScrollingGallery = () => {
    // Your 2 images only
    const images = [
        "https://images.unsplash.com/photo-1780678839895-5db70630e0ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TkZUfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1664022617645-cf71791942e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TkZUfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1654792393225-3e8a53d124d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE5GVHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1681488037743-e4c8718c079c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE5GVHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1635237755468-5fba69c13f29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5GVHxlbnwwfHwwfHx8MA%3D%3D",
    ];

    // Just use the 2 images as-is (no extra duplication)
    const scrollingImages = images;

    return (
        <div className="w-full overflow-hidden bg-gray-100 py-8 ">
        <div className="relative flex overflow-x-hidden">
            {/* Scrolling container with just 2 images */}
            <div className="animate-scroll flex gap-5 whitespace-nowrap">
            {scrollingImages.map((src, index) => (
                <img
                key={index}
                src={src}
                alt={`Gallery ${index}`}
                className="w-90 h-54 object-cover rounded-lg shadow-md shrink-0 max-lg:w-50 "
                />
            ))}
            </div>
            
            {/* Duplicate for seamless loop - also just 2 images */}
            <div className="animate-scroll flex gap-5 whitespace-nowrap absolute top-0 left-0">
            {scrollingImages.map((src, index) => (
                <img
                key={`duplicate-${index}`}
                src={src}
                alt={`Gallery ${index}`}
                className="w-90 h-54 object-cover rounded-lg shadow-md shrink-0 max-lg:w-50 "
                />
            ))}
            </div>
        </div>

        <style jsx>{`
            @keyframes scroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
            }
            .animate-scroll {
            animation: scroll 20s linear infinite;
            }
            .hover-pause:hover .animate-scroll {
            animation-play-state: paused;
            }
        `}</style>
        </div>
    );
    };

    export default ScrollingGallery;