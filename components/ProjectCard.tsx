'use client';

import { motion } from 'framer-motion';
import type { Project } from '@/types/project';

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="w-fit cursor-pointer rounded-full px-4 py-2 text-left font-normal text-black transition-all hover:bg-white/60 hover:backdrop-blur-sm"
      style={{ fontSize: '17px', letterSpacing: '0.02em' }}
    >
      {project.title}
    </motion.button>
  );
}
