import { useRef, useState, useEffect } from "react";
import {ChevronRight, ChevronLeft} from 'lucide-react'

const Tab = ({ activeTab, onSelect }) => {
    const scrollRef = useRef(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    
    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;

        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(
            el.scrollLeft < el.scrollWidth - el.clientWidth
        );
    };

    useEffect(() => {
        checkScroll();

        const el = scrollRef.current;
        if (!el) return;

        el.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);

        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);
    
    const tabItems = [
        {
            name: "All",
            value: ""
        },{
            name: "Web Development",
            value: "web_dev"
        },{
            name: "Robotics",
            value: "robotics"
        }
        ,{
            name: "Data Analysis",
            value: "data_analysis"
        },{
            name: "Machine Design",
            value: "machine_design"
        },{
            name: "Machine Learning",
            value: "machine_learning"
        }
    ]

  return (
    <div className="relative mt-5">
    {/* Scrollable tabs */}
    <div className='flex items-center gap-2 relative'>
       <div className={`${canScrollLeft ? '':  'opacity-0'} pb-1 top-0 right-0 bottom-0 transition-all duration-300`}>
            <button className={`w-fit p-0.5 aspect-square bg-transparent rounded-full group`}
                onClick={() => scrollRef.current.scrollBy({ left: -20, behavior: "smooth" })}
                >
                <ChevronLeft className='text-white group-hover:text-accent group-active:scale-90 transition-all duration-300' size={20}/>
            </button>
       </div>
        
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto scrollbar-none">
            {tabItems.map((item, index) => (
                <button
                    key={index}
                    className={`group cursor-pointer ${
                        activeTab === item.value
                            ? "text-accent"
                            : "text-text-primary"
                    } text-xs text-nowrap active:text-accent-light active:scale-90 transition-all duration-300`}
                    onClick={() => onSelect(item.value)}
                >
                    <span className="block p-0.5 transition-colors duration-300 group-hover:text-accent">
                        {item.name}
                    </span>

                    <span
                        className={`block h-0.5 ${
                            activeTab === item.value
                                ? "bg-accent"
                                : "bg-transparent"
                        } w-full mt-1 transition-all duration-300`}
                    />
                </button>
            ))}
        </div>
        
        <div className={`${canScrollRight ? '' : 'opacity-0'} pb-1 top-0 left-0 bottom-0 transition-all duration-300`}>
            <button className={`w-fit p-0.5 aspect-square bg-transparent rounded-full group`}
                onClick={() => scrollRef.current.scrollBy({ left: 20, behavior: "smooth" })}
            >
                <ChevronRight className='text-white group-hover:text-accent group-active:scale-90 transition-all duration-300 ' size={20}/>
            </button>
        </div>
        
    </div>
</div>
  );
};

export default Tab;