import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import Footer from '@/components/Footer';
import type { Project } from '@/types/project';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, checkout flow, and order management.',
    category: 'Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team workspaces, and project tracking capabilities.',
    category: 'Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard displaying real-time weather data, forecasts, and historical trends with beautiful data visualizations.',
    category: 'Data Visualization',
    thumbnail: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    techStack: ['React', 'D3.js', 'OpenWeather API', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A minimalist portfolio website showcasing creative work with smooth animations and an elegant design aesthetic.',
    category: 'Web Design',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  {
    id: '5',
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics with advanced filtering, custom reports, and actionable insights.',
    category: 'Data Analytics',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    techStack: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    liveUrl: 'https://example.com',
  },
  {
    id: '6',
    title: 'Fitness Tracker',
    description: 'Mobile-responsive fitness tracking application with workout logging, progress charts, and personalized recommendations.',
    category: 'Mobile Web',
    thumbnail: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
    techStack: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    githubUrl: 'https://github.com/yourusername/project',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <div className="relative">
        <div className="min-h-[200vh]">
          <ProjectGrid projects={projects} />
        </div>
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
          <div className="pointer-events-auto">
            <Hero
                name="Salem Abdul-Baki"
                title={
                  <>
                    Software Engineer at{' '}
                    <a
                      href="https://adaro.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Adaro.ai
                    </a>
                  </>
                }
                imagePath="/images/profilepic.jpg"
                bio="Hello, I graduated in May, 2025 from George Mason University with a Bachelors of Science in Computer Science. I have done research and product design in anti-counterfeiting software but work more in web-development now. Check out my socials, I would love to connect!"
                email="salembaki@gmail.com"
                linkedin="https://linkedin.com/in/sabdulb"
                github="https://github.com/sabdulb"
              />
          </div>
        </div>
      </div>
    </div>
  );
}
