import { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LanguageContext } from '../context/languageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faExternalLinkAlt,
  faCode,
  faCheckCircle,
  faLightbulb,
  faUsers,
  faBullseye,
  faChevronLeft,
  faChevronRight,
  faImages,
  faTimes,
  faDownload
} from '@fortawesome/free-solid-svg-icons';

interface WebsiteCard {
  title: string;
  description: string;
  detailedDescription: string;
  index?: string;
  objective?: string;
  intendedFor?: string;
  documentUrl?: string;
  url: string;
  github: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  observations?: string;
  logo?: string;
  gallery?: string[];
}

type WebsiteDataByLanguage = {
  [key: string]: {
    cards: WebsiteCard[];
    descriptionTitle?: string;
    objective?: string;
    intendedFor?: string;
    featureTitle?: string;
    TechnicalTitle?: string;
    TechnologyTitle?: string;
    QuickLinks?: string;
    [key: string]: any;
  };
};

const WebsiteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, texts } = useContext(LanguageContext);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // ✅ Acceso seguro a los datos
  const websiteData = (texts?.websites?.[0] ?? {}) as WebsiteDataByLanguage;
  const websites = websiteData[language] || websiteData['es'] || {};
  const websiteCards: WebsiteCard[] = Array.isArray(websites.cards) ? websites.cards : [];
  const website = websiteCards.find(card => card.index === id);

  // ✅ Resolución dinámica de imágenes (sin imports hardcodeados)
  const mainImage = website?.logo || (website?.gallery && website.gallery[0]) || '/images/default-website.jpg';
  const galleryImages = website?.gallery || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Scroll al cambiar de proyecto

  // ✅ Funciones del Carrusel
  const nextImage = () => {
    if (galleryImages.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (galleryImages.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // ✅ Funciones del Modal
  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    if (galleryImages.length > 0) {
      setModalImageIndex((prev) => (prev + 1) % galleryImages.length);
    }
  };

  const prevModalImage = () => {
    if (galleryImages.length > 0) {
      setModalImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  // ✅ Navegación por teclado en el modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextModalImage();
      if (e.key === 'ArrowLeft') prevModalImage();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, galleryImages.length]);

  // ✅ Fallback elegante si no se encuentra el sitio web
  if (!website) {
    return (
      <div className="min-h-screen bg-background-1 dark:bg-dark-background-1 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-righteous text-text-light dark:text-text-dark mb-4">
            Website not found
          </h2>
          <Link to="/websites" className="text-accent dark:text-accent-dark hover:underline">
            ← Back to websites
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-1 dark:bg-dark-background-1 text-text-light dark:text-text-dark">
      {/* Header */}
      <div className="bg-white dark:bg-dark-background-2 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mt-14 mx-auto px-4 py-6">
          <Link
            to="/websites"
            className="inline-flex items-center gap-2 text-accent dark:text-accent-dark hover:text-accent/80 dark:hover:text-accent-dark/80 transition-colors mb-4"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            {language === 'es' ? 'Volver a sitios web' : 'Back to websites'}
          </Link>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-righteous mb-4">
                {website.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {website.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {website.url && (
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent dark:bg-accent-dark text-white rounded-lg hover:bg-accent/80 dark:hover:bg-accent-dark/80 transition-all duration-300 font-medium"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    {websites.visit || 'Visit website'}
                  </a>
                )}

                {website.github && (
                  <a
                    href={website.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent dark:border-accent-dark text-accent dark:text-accent-dark rounded-lg hover:bg-accent hover:text-white dark:hover:bg-accent-dark transition-all duration-300 font-medium"
                  >
                    <FontAwesomeIcon icon={faCode} />
                    {language === 'es' ? 'Ver código' : 'View code'}
                  </a>
                )}
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="relative group">
                <img
                  src={mainImage}
                  alt={website.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Website+Preview';
                  }}
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  LIVE
                </div>
              </div>
            </div>
          </div>

          {website.observations && (
            <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-400 text-yellow-800 dark:text-yellow-200 rounded">
              <strong>Nota:</strong> {website.observations}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white dark:bg-dark-background-2 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-righteous mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faLightbulb} className="text-accent" />
                {websites.descriptionTitle || 'Descripción'}
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                {website.detailedDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Objective & Intended For */}
            {(website.objective || website.intendedFor) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {website.objective && (
                  <section className="bg-white dark:bg-dark-background-2 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-righteous mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faBullseye} className="text-accent" />
                      {websites.objective || 'Objetivo'}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {website.objective}
                    </p>
                  </section>
                )}

                {website.intendedFor && (
                  <section className="bg-white dark:bg-dark-background-2 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-righteous mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faUsers} className="text-accent" />
                      {websites.intendedFor || 'Dirigido a'}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {website.intendedFor}
                    </p>
                  </section>
                )}
              </div>
            )}

            {/* Features */}
            <section className="bg-white dark:bg-dark-background-2 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-righteous mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faCheckCircle} className="text-accent" />
                {websites.featureTitle || 'Características Principales'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {website.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-dark-background-1 rounded-lg">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges */}
            <section className="bg-white dark:bg-dark-background-2 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-righteous mb-6">
                {websites.TechnicalTitle || 'Desafíos Técnicos'}
              </h2>
              <div className="space-y-3">
                {website.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-400">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <section className="bg-white dark:bg-dark-background-2 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-righteous mb-4">
                {websites.TechnologyTitle || 'Tecnologías'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {website.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark text-sm rounded-full border border-accent/20 dark:border-accent-dark/20 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section className="bg-white dark:bg-dark-background-2 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-righteous mb-4">
                {websites.QuickLinks || 'Enlaces rápidos'}
              </h3>
              <div className="space-y-3">
                {website.url && (
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-accent/5 dark:bg-accent-dark/5 rounded-lg hover:bg-accent/10 dark:hover:bg-accent-dark/10 transition-colors group"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-accent dark:text-accent-dark group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300">{websites.visit || 'Visit website'}</span>
                  </a>
                )}

                {website.github && (
                  <a
                    href={website.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <FontAwesomeIcon icon={faCode} className="text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300">View source code</span>
                  </a>
                )}

                {website.documentUrl && (
                  <a
                    href={website.documentUrl}
                    download
                    className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
                  >
                    <FontAwesomeIcon icon={faDownload} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300">Download documentation</span>
                  </a>
                )}
              </div>
            </section>

            {/* Navigation */}
            <section className="bg-white dark:bg-dark-background-2 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-righteous mb-4">
                {language === 'es' ? 'Otros Sitios Web' : 'Other Websites'}
              </h3>
              <div className="space-y-2">
                {websiteCards.map((otherWebsite, index) => (
                  otherWebsite.index !== website.index && (
                    <Link
                      key={index}
                      to={`/websites/${otherWebsite.index}`}
                      className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {otherWebsite.title}
                      </span>
                    </Link>
                  )
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Image Gallery Carousel (Solo si hay galería) */}
      {galleryImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="bg-white dark:bg-dark-background-2 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-righteous mb-6 flex items-center gap-3">
              <FontAwesomeIcon icon={faImages} className="text-accent" />
              {language === 'es' ? 'Galería' : 'Gallery'}
            </h2>

            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100 dark:bg-gray-800">
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`${website.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-96 object-contain transition-all duration-500 cursor-pointer hover:opacity-90"
                  onClick={() => openModal(currentImageIndex)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                  }}
                />

                {/* Navigation Arrows */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {galleryImages.length}
                </div>

                {/* Click to expand hint */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs opacity-75">
                  {language === 'es' ? 'Clic para ampliar' : 'Click to expand'}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              {galleryImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer hover:opacity-80 ${
                        index === currentImageIndex
                          ? 'border-accent dark:border-accent-dark'
                          : 'border-gray-300 dark:border-gray-600 hover:border-accent/50 dark:hover:border-accent-dark/50'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100x100?text=Err';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Modal */}
      {isModalOpen && galleryImages.length > 0 && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-4 right-4 text-white hover:text-accent text-3xl z-10 bg-black/50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {/* Modal content */}
          <div 
            className="relative max-w-7xl max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image */}
            <img
              src={galleryImages[modalImageIndex]}
              alt={`${website.title} - Image ${modalImageIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Modal navigation arrows */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={prevModalImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 text-xl"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  onClick={nextModalImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 text-xl"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </>
            )}

            {/* Modal image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {modalImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteDetail;