"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export function FeaturesSectionDemo({
  title,
  subtitle,
  features,
}: FeaturesSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-lg text-neutral-300 max-w-3xl mx-auto">{subtitle}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative h-full bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl mb-6 group-hover:bg-blue-500/20 transition-colors">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
