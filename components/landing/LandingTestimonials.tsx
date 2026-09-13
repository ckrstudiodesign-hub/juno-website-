"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const LandingTestimonials = () => {
  const testimonials = [
    {
      quote: "Highly recommend to new founders or anyone looking to establish a business.",
      content: "The team at Juno BizHub made the entire process seamless. Their expert guidance helped me avoid costly mistakes and their dedication to my success was clear from day one. I highly recommend them to anyone setting up in Dubai.",
      author: "Sarah J.",
      company: "Tech Startup Founder",
      initial: "S"
    },
    {
      quote: "Just perfect and outstanding work from the team.",
      content: "A massive thank you to Juno BizHub for their incredible support. They handled my mainland license and visa process with impressive speed and transparency. No hidden costs, just exceptional service and professionalism.",
      author: "Omar A.",
      company: "Retail Group CEO",
      initial: "O"
    },
    {
      quote: "Incredibly responsive, knowledgeable, and genuinely helpful.",
      content: "From opening our corporate bank account to advising on corporate tax, Juno BizHub has been a trusted partner. Their pro-active approach ensures we are always compliant and ahead of the curve.",
      author: "David M.",
      company: "Consulting Agency Director",
      initial: "D"
    }
  ];

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-[#FAFAFA] to-transparent -z-10"></div>

      <div className="container mx-auto px-4 sm:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#0077B6] font-bold tracking-wider text-sm uppercase mb-3 block">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#03045E]">
            What Founders Say About Juno BizHub
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col"
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-[#03045E] mb-4 leading-tight">
                "{testimonial.quote}"
              </h3>
              
              <p className="text-gray-600 mb-8 italic flex-grow">
                {testimonial.content}
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#0077B6] text-white flex items-center justify-center font-bold text-lg">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-bold text-[#03045E]">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LandingTestimonials;
