import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer",
    company: "Vivam Software Services and IT Trainings Pvt Ltd",
    period: "Jun 2025 – Feb 2026",
    highlights: [
      "Integrated Razorpay payment gateway and implemented reliable webhook handlers for real-time transaction processing and reconciliation",
      "Designed a secure authentication architecture using JWT, Spring Security, and custom filters for scalable REST APIs",
      "Managed database schema evolution using Flyway, enabling version-controlled migrations",
      "Integrated Brevo email service API for transactional communication",
    ],
  },
  {
    title: "Java Intern",
    company: "Almanet Professional Services",
    period: "Oct 2024 – Jan 2025",
    highlights: [
      "Contributed to backend feature development using Java and Spring Boot, including API implementation, testing, and bug fixes",
      "Collaborated with frontend developers to ensure API responses aligned with UI requirements",
      "Customized CORS policies to ensure secure and controlled cross-origin access for REST APIs",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            My professional journey in building backend solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 glow-effect`} />

              <div className={`gradient-border p-6 rounded-xl card-gradient ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                <div className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className={index % 2 === 0 ? "md:text-right" : ""}>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </div>

                <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className={`flex items-start gap-2 text-muted-foreground ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
