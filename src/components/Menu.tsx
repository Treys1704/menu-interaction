import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon } from 'lucide-react';

const menuItems = [
    { id: '01', label: 'Home' },
    { id: '02', label: 'About' },
    { id: '03', label: 'Applications' },
    { id: '04', label: 'Sustainability' },
];

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const menuVariants = {
        closed: {
            width: '300px',
            height: '60px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(10px)',
            left: '50%',
            x: '-50%',
        },
        open: {
            width: '70vw',
            height: '80vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(20px)',
            left: '50%',
            x: '-50%',
        },
    };

    return (
        <motion.div
            className="fixed top-12 rounded-2xl overflow-hidden"
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={menuVariants}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            onHoverStart={() => setIsOpen(true)}
            onHoverEnd={() => setIsOpen(false)}
        >
            <div className={`w-full h-full px-8 ${isOpen ? 'pt-4' : 'pt-2.5'}`}>
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white text-2xl font-light"
                    >
                        co.bo.
                    </motion.div>
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
                        <MenuIcon className="text-white w-6 h-6"/>
                    </div>
                </div>

                {/* Main Content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="grid grid-cols-3 gap-8 h-[calc(80%-100px)]"
                        >
                            {/* SITEMAP Column */}
                            <div>
                                <div className="text-gray-400 text-sm mb-8">SITEMAP</div>
                                <div className="space-y-6">
                                    {menuItems.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: hoveredItem && hoveredItem !== item.id ? 0.5 : 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.5 }}
                                            className="flex items-center space-x-4 cursor-pointer"
                                            onHoverStart={() => setHoveredItem(item.id)}
                                            onHoverEnd={() => setHoveredItem(null)}
                                        >
                                            <span className="text-gray-400 text-sm">{item.id}</span>
                                            <span className="text-white text-3xl transition-colors font-light">{item.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* LATEST MODEL Column */}
                            <div>
                                <div className="text-gray-400 text-sm mb-8">LATEST MODEL</div>
                                <div className="bg-gray-900/70 rounded-2xl p-2">
                                    <img
                                        src="/nike.jpeg"
                                        alt="Latest Model"
                                        className="w-full h-48 object-cover backdrop-blur-sm rounded-xl mb-4"
                                    />
                                    <div className="flex justify-between items-center px-1">
                                        <div className="text-white text-xl mb-2">Nike</div>
                                        <button className="bg-white mb-2 text-black px-4 py-2 rounded-full text-sm">
                                            EXPLORE
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* ABOUT Column */}
                            <div>
                                <div className="text-gray-400 text-sm mb-8">ABOUT</div>
                                <p className="text-white text-lg leading-relaxed">
                                    Hyperfoam by CoBo s.r.l. is an advanced, lightweight foam offering exceptional durability, flexibility, and energy rebound for versatile use.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Footer */}
                {isOpen && (
                    <div className="mt-10">
                        <motion.hr
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="border-gray-700 my-8"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex justify-between text-gray-400 transition-colors text-sm"
                        >
                            <div className="flex space-x-4">
                                <span className="hover:text-white/80 transition-colors cursor-pointer">PRIVACY</span>
                                <span>-</span>
                                <span className="hover:text-white/80 transition-colors cursor-pointer">COOKIE</span>
                                <span>-</span>
                                <span className="hover:text-white/80 transition-colors cursor-pointer">TERMS</span>
                            </div>
                            <div>(C) HYPERFOAM . 2025</div>
                        </motion.div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Menu;