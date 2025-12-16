import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const QUOTES = [
    "A inovação distingue um líder de um seguidor. – Steve Jobs",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário. – Vidal Sassoon",
    "A melhor maneira de prever o futuro é criá-lo. – Peter Drucker",
    "O sucesso não é o final, o fracasso não é fatal: é a coragem de continuar que conta. – Winston Churchill",
    "Sozinhos vamos mais rápido, juntos vamos mais longe.",
    "Qualidade significa fazer certo quando ninguém está olhando. – Henry Ford"
];

const InspirationalQuotes = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % QUOTES.length);
        }, 6000); // Change every 6 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="quotes-container glass-panel">
            <Quote size={40} className="quote-icon-bg" />
            <AnimatePresence mode='wait'>
                <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="quote-text"
                >
                    {QUOTES[index]}
                </motion.p>
            </AnimatePresence>
            <div className="progress-bar-container">
                <motion.div
                    className="progress-bar"
                    key={index}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                />
            </div>
        </div>
    );
};

export default InspirationalQuotes;
