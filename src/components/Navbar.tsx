import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import { navigationItems } from "@/data/navigationItems";
import { personalInfo } from "@/data/personalInfo";
import NavItem from "./Navbar/NavItem";
import MobileNavItem from "./Navbar/MobileNavItem";

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      staggerChildren: 0.04,
    },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleNavigation = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.25 }}
      aria-label="Primary Navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 min-w-0">
        <div className="flex items-center justify-between gap-4 min-w-0">
          {/* Group 1: Brand Identity / Initials Logo */}
          <div className="flex items-center gap-4 min-w-0">
            <button
              onClick={() => handleNavigation("hero")}
              aria-label="Scroll to top"
              className="inline-flex items-center justify-center min-h-11 min-w-11 px-4 py-2 text-base font-bold tracking-normal text-foreground border border-border bg-card hover:border-primary hover:bg-muted/40 rounded-md transition-colors"
            >
              {personalInfo.initials}
            </button>
          </div>

          {/* Group 2: Desktop Navigation (flat open track, no nested card border) */}
          <div className="hidden md:flex items-center gap-2">
            {navigationItems.map((item) => (
              <NavItem
                key={item.id}
                label={item.label}
                onClick={() => handleNavigation(item.id)}
              />
            ))}
          </div>

          {/* Mobile Menu Toggle Button (>= 44x44px touch target) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="md:hidden inline-flex items-center justify-center min-h-11 min-w-11 p-2 border border-border rounded-md bg-card text-foreground hover:border-primary hover:bg-muted/40 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-nav"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden pt-4 pb-2 flex flex-col gap-2"
            >
              {navigationItems.map((item) => (
                <motion.div key={item.id} variants={mobileItemVariants}>
                  <MobileNavItem
                    label={item.label}
                    onClick={() => handleNavigation(item.id)}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
