import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "B.Sc in Computer Science",
    institution: "Adikavi Nannaya University, Andhra Pradesh",
    period: "2019 – 2023",
    score: "CGPA: 7.2",
  },
  {
    degree: "Intermediate (M.P.C)",
    institution: "Sri Surya Junior College, Andhra Pradesh",
    period: "2017 – 2019",
    score: "CGPA: 8.96",
  },
  {
    degree: "S.S.C",
    institution: "Govt High School, Andhra Pradesh",
    period: "2016 – 2017",
    score: "CGPA: 8.2",
  }
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading mx-auto">
            My academic background in Computer Science
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="gradient-border p-6 rounded-xl card-gradient group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-3">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-2 text-primary font-medium">
                      <Award className="w-4 h-4" />
                      {edu.score}
                    </span>
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

export default EducationSection;
