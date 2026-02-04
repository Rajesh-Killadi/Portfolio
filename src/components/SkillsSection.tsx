import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  "Languages & Core": ["Java", "Data Structures & Algorithms", "HTML", "CSS", "JavaScript"],
  "Frameworks": ["Spring Boot", "Hibernate", "Angular", "Spring Security", "Spring Cloud"],
  "Databases": ["MySQL", "Oracle", "SQL", "Flyway", "Redis"],
  "Tools & DevOps": ["Git", "Docker", "Maven", "Postman", "Swagger", "Kafka"],
  "Cloud & Platforms": ["AWS EC2", "AWS RDS", "AWS S3", "Linux", "Windows"],
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            Technologies and tools I work with to build robust backend systems
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="gradient-border p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
