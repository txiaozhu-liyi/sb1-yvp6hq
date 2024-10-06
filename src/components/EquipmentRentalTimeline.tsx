import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, User, Calendar, Briefcase, ArrowRight } from 'lucide-react';

interface EquipmentItem {
  type: string;
  items: string[];
}

interface TimelineItem {
  date: string;
  name: string;
  location: string;
  project: string;
  projectDate: string;
  equipment: EquipmentItem[];
}

interface EquipmentRentalTimelineProps {
  items: TimelineItem[];
}

const EquipmentRentalTimeline: React.FC<EquipmentRentalTimelineProps> = ({ items }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, items.length);
  }, [items]);

  const handleMarkerClick = (index: number) => {
    setSelectedCardIndex(index);
    const card = cardRefs.current[index];
    if (card && timelineRef.current) {
      const containerRect = timelineRef.current.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const scrollLeft = cardRect.left - containerRect.left + timelineRef.current.scrollLeft - (containerRect.width - cardRect.width) / 2;
      timelineRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold mb-2">Equipment Rental Timeline</h1>
      <p className="text-gray-600 mb-8">Track the circulation of rental equipment</p>
      
      {/* Timeline */}
      <div className="relative" ref={timelineRef}>
        <div className="flex overflow-x-auto pb-8 scrollbar-hide">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`flex-shrink-0 w-80 mr-8 p-6 bg-white rounded-lg shadow-md transition-all duration-300 ${
                selectedCardIndex === index ? 'ring-4 ring-blue-500 scale-105' : ''
              }`}
            >
              <h2 className="text-xl font-semibold mb-4">{item.date}</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-gray-500" />
                  <span>{item.name}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-gray-500" />
                  <span>{item.project}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                  <span>{item.projectDate}</span>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {item.equipment.map((eq, eqIndex) => (
                  <div key={eqIndex}>
                    <h3 className="font-semibold">{eq.type}</h3>
                    <ul className="list-disc list-inside">
                      {eq.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {index < items.length - 1 && (
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <ArrowRight className="w-6 h-6 text-gray-400" />
          </div>
        )}
      </div>
      
      {/* Horizontal Axis */}
      <div className="mt-8 relative">
        <div className="h-1 bg-gray-300 absolute w-full top-4"></div>
        <div className="flex justify-between relative">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <button
                className={`w-8 h-8 rounded-full ${
                  selectedCardIndex === index ? 'bg-blue-500 ring-4 ring-blue-300' : 'bg-gray-400'
                } hover:bg-blue-400 transition-all duration-300 transform ${
                  selectedCardIndex === index ? 'scale-125' : ''
                }`}
                onClick={() => handleMarkerClick(index)}
              ></button>
              <button
                className="text-xs mt-2 transform -rotate-45 origin-top-left hover:text-blue-500 transition-colors duration-200"
                onClick={() => handleMarkerClick(index)}
              >
                {item.date}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
          onClick={() => handleMarkerClick(Math.max(0, selectedCardIndex - 1))}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
          onClick={() => handleMarkerClick(Math.min(items.length - 1, selectedCardIndex + 1))}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default EquipmentRentalTimeline;