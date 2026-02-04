import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Layers, Zap, MapPin, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Jokha – Food Delivery App",
    description: "A comprehensive food delivery platform with real-time tracking, payment processing, and microservices architecture.",
    features: [
      { icon: Layers, text: "Centralized API Gateway for routing, security, and request management across multiple backend services" },
      { icon: Zap, text: "Event-driven communication using Apache Kafka for async workflows like order updates and notifications" },
      { icon: MapPin, text: "Google Distance Matrix API integration for nearby restaurant discovery using geo-coordinates" },
      { icon: Radio, text: "Real-time delivery tracking using WebSockets for live location updates" },
    ],
    techStack: ["Java", "Spring Boot", "Spring Cloud Gateway", "Eureka", "Kafka", "WebSockets", "MySQL", "Hibernate", "Flyway", "Redis", "OpenFeign", "Swagger", "Google Maps API"],
    githubUrl: "https://github.com/Rajesh-Killadi/Jokha",
    featured: true,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Showcasing my expertise in building scalable backend systems
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="gradient-border p-8 rounded-2xl card-gradient relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative">
                {project.featured && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    <Zap className="w-3 h-3" />
                    Featured Project
                  </span>
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="border-border hover:bg-secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <feature.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded-md bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
