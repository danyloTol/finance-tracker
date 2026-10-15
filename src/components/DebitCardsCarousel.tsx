import { useState } from "react";
import { DebitCard } from "./DebitCard";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WalletItem {
    type: string;
    name: string;
    balance: number;
}

interface CarouselProps {
    wallet: WalletItem[];
}

export const DebitCardsCarousel = ({wallet}: CarouselProps) => {

    // Зберігаємо індекс поточного зображення
    const [currentIndex, setCurrentIndex] = useState(0);

    // Функція для переходу назад
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? wallet.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Функція для переходу вперед
    const nextSlide = () => {
        const isLastSlide = currentIndex === wallet.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Перехід на конкретний слайд (для точок внизу)
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return(
        <div className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <button onClick={prevSlide}>
                <ChevronLeft />
            </button>
            <div className="overflow-hidden w-full">
                <div 
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {wallet.map((card) => (
                        <div 
                            key={card.name} 
                            className="w-full shrink-0 flex justify-center"
                        >
                            <DebitCard type={card.type} name={card.name} balance={card.balance}/>
                        </div>
                    ))

                    }
                </div>
            </div>
            <button onClick={nextSlide}>
                <ChevronRight />
            </button>
            <div className="col-span-full bottom-4 left-0 right-0 flex justify-center gap-2">
                {wallet.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            currentIndex === index ? 'bg-[#000000]' : 'bg-[#494949]'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}