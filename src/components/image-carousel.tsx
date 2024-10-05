'use client';
import React, { useState } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { LiaTimesSolid } from 'react-icons/lia';

const ImageCarousel = ({ imgPaths }: { imgPaths: string[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imgPaths.length) % imgPaths.length,
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgPaths.length);
  };

  return (
    <div>
      <div
        className="md:hidden h-[250px] bg-no-repeat bg-center bg-cover relative"
        style={{ backgroundImage: `url('${imgPaths[currentImageIndex]}')` }}
      >
        <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white font-urbanist px-2 py-1 rounded-lg font-500 text-[12px]">
          {currentImageIndex + 1}/{imgPaths.length}
        </div>
        <div className="absolute w-full h-full flex items-center justify-between px-4">
          <button
            className=" h-[28px] w-[28px] rounded-[50%] bg-black bg-opacity-60 flex items-center justify-center text-white"
            onClick={showPrevImage}
          >
            <IoIosArrowBack size={15} />
          </button>
          <button
            className=" h-[28px] w-[28px] rounded-[50%] bg-black bg-opacity-60 flex items-center justify-center text-white"
            onClick={showNextImage}
          >
            <IoIosArrowForward size={15} />
          </button>
        </div>
      </div>
      <div className="hidden md:flex gap-4 h-[450px]">
        <div
          className="basis-[60%] rounded-[8px] bg-no-repeat bg-center bg-cover cursor-pointer"
          style={{ backgroundImage: `url('${imgPaths[0]}')` }}
          onClick={() => openModal(0)}
        ></div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {imgPaths.slice(1, 4).map((i, index) => (
            <div
              key={i}
              className="rounded-[8px] bg-no-repeat bg-center bg-cover cursor-pointer"
              style={{ backgroundImage: `url('${i}')` }}
              onClick={() => openModal(index + 1)}
            ></div>
          ))}
          {imgPaths.length > 4 && (
            <div
              className="flex items-center justify-center rounded-[8px] bg-[#e6e4e4] text-[18px] font-urbanist cursor-pointer"
              onClick={() => openModal(4)}
            >
              <span>+{imgPaths.length - 4} Photos</span>
            </div>
          )}
        </div>

        {isModalOpen && (
          <div className=" fixed inset-0  bg-black bg-opacity-80 flex items-center justify-center z-50">
            <button
              className="absolute top-6 right-10 text-white "
              onClick={closeModal}
            >
              <LiaTimesSolid size={25} />
            </button>
            <div className="absolute w-[85vw] h-[100vh] flex items-center justify-between mx-auto">
              <button className="  text-white" onClick={showPrevImage}>
                <IoIosArrowBack size={30} />
              </button>
              <button className=" text-white" onClick={showNextImage}>
                <IoIosArrowForward size={30} />
              </button>
            </div>
            <div className="relative ">
              <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white font-urbanist px-2 py-1 rounded-lg font-500 text-[12px]">
                {currentImageIndex + 1}/{imgPaths.length}
              </div>
              <img
                src={imgPaths[currentImageIndex]}
                alt="Expanded view"
                className="max-h-screen"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
