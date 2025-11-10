export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  images?: string[];
};
