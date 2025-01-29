import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WelcomeProps {
  onEnter: () => void;
}

export function Welcome({ onEnter }: WelcomeProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center"
        >
          <UtensilsCrossed className="w-12 h-12 text-primary-foreground" />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Welcome to
            <span className="text-primary block">La Maison</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
            Discover our exquisite menu featuring the finest selection of dishes,
            drinks, and experiences.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={onEnter}
          >
            Enter Menu
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}