"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

const containerVariants = {
  hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

export default function StyleTypeItem({ item }) {
  // Open by default for the inline images
  const [isOpen, setIsOpen] = useState(true);
  const imagesRef = useRef([]);
  // State for modal
  const [modalImage, setModalImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (isOpen && imagesRef.current.length) {
      // Stagger the animations for each image card using GSAP
      gsap.fromTo(
        imagesRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.5 }
      );
    }
  }, [isOpen]);

  // Toggle zoom on double tap in modal
  const handleDoubleClick = () => {
    setZoom((prev) => (prev === 1 ? 2 : 1));
  };

  // Modal component
  const ImageModal = ({ src, alt, onClose }) => {
    return (
      <AnimatePresence>
        {src && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-full max-h-full p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <motion.img
                src={src}
                alt={alt}
                onDoubleClick={handleDoubleClick}
                style={{
                  transform: `scale(${zoom})`,
                  transition: "transform 0.3s ease",
                }}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <button
                onClick={() => {
                  setModalImage(null);
                  setZoom(1);
                }}
                className="absolute top-8 right-8 text-white text-[2rem] bg-gray-800 rounded-full py-[1rem] px-[2rem] hover:bg-gray-700 transition-colors"
              >
                X
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="bg-white rounded-[25px] border-2 border-gold my-4">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center px-[5rem] py-[2rem] cursor-pointer max-5xl:px-[2rem]"
      >
        <h3 className="text-[2rem] font-bold">{item.name}</h3>
        <span className="text-[2rem] text-gold">{isOpen ? "✖" : "☰"}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="px-[5rem] pb-[2rem] max-5xl:px-[2rem]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <div className="flex gap-[4rem] h-[35rem] overflow-x-scroll items-start justify-center rounded-[25px] max-15xl:justify-start max-6xl:h-[25rem]">
              {item.images.map((img, idx) => (
                <div
                  key={idx}
                  ref={(el) => (imagesRef.current[idx] = el)}
                  className="relative min-h-[30rem] min-w-[30rem] rounded-[25px] overflow-hidden max-6xl:min-h-[20rem] max-6xl:min-w-[20rem] shadow-xl cursor-pointer"
                  onClick={() => {
                    setModalImage(img);
                    setZoom(1);
                  }}
                >
                  <Image
                    src={img}
                    alt={`${item.name} ${idx + 1}`}
                    className="object-cover"
                    fill
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Render Modal if modalImage is set */}
      {modalImage && (
        <ImageModal
          src={modalImage}
          alt={item.name}
          onClose={() => {
            setModalImage(null);
            setZoom(1);
          }}
        />
      )}
    </div>
  );
}
