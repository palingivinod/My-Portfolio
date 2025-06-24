import { useState } from 'react';

const Certifications = () => {
  const [popupImg, setPopupImg] = useState(null);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-[100vh] p-6 overflow-x-hidden text-white">
      
      {/* GLOBAL CERTIFICATIONS */}
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Global Certifications</h1>
      <div className="flex flex-wrap gap-6 p-4 justify-center">
        <CertificateCard title="Salesforce AI Associate" imgSrc="/ai_associate.png" onClick={() => setPopupImg('/ai_associate.png')} />
      </div>

      {/* CERTIFICATES */}
      <h1 className="text-4xl font-bold text-blue-400 my-6">Certificates</h1>
  <div className="flex flex-wrap gap-6 p-4 justify-center">
  {[
    {
      src: '/aws sagemaker.jpg',
      title: 'AWS SageMaker Certificate'
    },
    {
      src: '/google business.jpg',
      title: 'Google Data Analytics Certificate'
    },
   
  ].map((certificate, i) => (
    <CertificateCard 
      key={i}
      title={certificate.title}
      imgSrc={certificate.src}
      onClick={() => setPopupImg(certificate.src)}
    />
     ))}
      </div>

      {/* INTERNSHIPS */}
      <h1 className="text-4xl font-bold text-green-400 my-6">Internships</h1>
      <div className="flex flex-wrap gap-6 p-4 justify-center">
        {[
          {src:'/aicte google_aiml.jpg',
            title: 'AICTE Google AI ML Internship'
          },
           {src:'/aicte blueprism.jpg',
            title: 'AICTE Blue Prism Internship'
          },
          { src: '/Salesforce.jpg',
            title: 'Salesforce Internship'
          },
          {src:'/Techsaksham_spam.jpg',
            title: 'Techsaksham AIML Internship'
          }
          ].map((certificate, i) => (
          <CertificateCard key={i} title={certificate.title} imgSrc={certificate.src} onClick={() => setPopupImg(certificate.src)} />
        ))}
      </div>

      

      {/* POPUP */}
      {popupImg && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setPopupImg(null)}
        >
          <img
            src={popupImg}
            alt="Zoomed Certificate"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

const CertificateCard = ({ title, imgSrc, onClick }) => (
  <div className="flex flex-col items-center bg-white/10 rounded-lg border border-white/20 shadow-lg backdrop-blur-md p-3 transition-transform duration-300 ease-in-out hover:shadow-yellow-400">
    <p className="text-md font-medium mb-2">{title}</p>
    <div
      className="relative w-48 h-32 overflow-hidden rounded-md cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imgSrc}
        alt="Certificate"
        className="w-full h-full object-contain transition duration-300"
      />
    </div>
  </div>
);

export default Certifications;
