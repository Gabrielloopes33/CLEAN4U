"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

const ReviewsPage = () => {
  const [selectedReview, setSelectedReview] = useState<null | {
    image: string;
    altText: string;
  }>(null);

  const reviews = [
    {
      id: 1,
      image: '/reviews/1.jpeg', // Aponta a imagem aqui 
      altText: 'Cliente satisfeito no WhatsApp',
      date: '15/03/2024'
    },
    {
      id: 2,
      image: '/reviews/2.jpeg', // Aponta a imagem aqui 
      altText: 'Cliente satisfeito no WhatsApp',
      date: '15/03/2024'
    },
    {
      id: 3,
      image: '/reviews/3.jpeg', // Aponta a imagem aqui 
      altText: 'Cliente satisfeito no WhatsApp',
      date: '15/03/2024'
    },
    {
      id: 4,
      image: '/reviews/4.jpeg', // Aponta a imagem aqui 
      altText: 'Cliente satisfeito no WhatsApp',
      date: '15/03/2024'
    },
    
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">What our customers say</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedReview(review)}
            >
              <div className="relative h-[500px] w-full">
                <Image
                  src={review.image}
                  alt={review.altText}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para visualização ampliada */}
      <Dialog 
        open={selectedReview !== null} 
        onClose={() => setSelectedReview(null)}
        className="relative z-50"
      >
        {/* Overlay de fundo escuro */}
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

        {/* Container do modal */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden">
            {/* Botão de fechar */}
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Imagem ampliada */}
            {selectedReview && (
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedReview.image}
                  alt={selectedReview.altText}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                />
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ReviewsPage; 