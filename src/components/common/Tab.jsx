import React from 'react';

const Tab = ({ activeTab, onSelect }) => {
    const tabItems = [
        {
            name: "All",
            value: ""
        },{
            name: "Web Development",
            value: "web_dev"
        },{
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
    {/* Left fade */}
    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-surface to-transparent" />

    {/* Right fade */}
    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-surface to-transparent" />

    {/* Scrollable tabs */}
    <div className="flex gap-5 overflow-x-auto scrollbar-none">
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
</div>
  );
};

export default Tab;