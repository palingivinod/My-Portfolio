const Publications = () => {
    // Array of publications - easily add more papers here
    const publications = [
        {
            title: "Empowering Students: Career Guidance and Learning Pathways through an Educational Chatbot",
            publisher: "Springer International Conference Proceedings",
            year: "2024",
            doi: "DOI: 10.1007/xxxxx",
            link: " "
        },
        {
            title: "Voice Assistant For Task Automation",
            publisher: "The Journal of Computational Science and Engineering (TJCSE) - ISSN 2583-9055",
            year: "Vol 4 No 2, Feb 2026",
            doi: "Media Online",
            link: "https://jcse.cloud/JCSE/Published_Papers/paper4.pdf"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-red-200 to-yellow-300 min-h-screen p-7">
            <div className="flex flex-row overflow-x-auto gap-6 pb-4">
                {publications.map((pub, index) => (
                    <div 
                        key={index}
                        className="w-80 flex-shrink-0 bg-gradient-to-br from-purple-900/80 to-blue-800/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-6 hover:shadow-teal-400/20 transition-all duration-300"
                    >
                        <div className="flex items-center justify-center mb-3">
                            <svg className="w-6 h-6 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                            <h3 className="text-xl font-bold text-center text-white">RESEARCH PUBLICATION</h3>
                        </div>
                        
                        <div className="mb-4">
                            <p className="text-sm font-medium text-white/90 mb-1">Title:</p>
                            <p className="text-white text-sm italic">
                                "{pub.title}"
                            </p>
                        </div>
                        
                        <div className="mb-4">
                            <p className="text-sm font-medium text-white/90 mb-1">Published in:</p>
                            <p className="text-white text-sm">{pub.publisher}</p>
                        </div>
                        
                        <div className="flex justify-between text-xs text-white/70 mb-4">
                            <span>{pub.year}</span>
                            <span>{pub.doi}</span>
                        </div>
                        
                        <a 
                            href={pub.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-amber-400/30"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Publication
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Publications;
