import { Github, Linkedin, Code2 } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/rajesh-killadi", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rajesh-killadi-159915230/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/RajeshKilladi/", label: "LeetCode" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>©  Rajesh Killadi</span>
            
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
