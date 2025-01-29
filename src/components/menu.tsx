import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, UtensilsCrossed, Wine, Cigarette, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type Category = 'food' | 'drinks' | 'smoking';

// Sample menu items (you'll replace these with data from your backend)
const menuItems = {
  food: [
    { id: 1, name: 'Wagyu Beef Steak', price: '$120', description: 'Premium Japanese A5 Wagyu beef, served with seasonal vegetables', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, name: 'Truffle Pasta', price: '$45', description: 'Homemade pasta with black truffle shavings and parmesan', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop' },
    { id: 3, name: 'Lobster Thermidor', price: '$95', description: 'Fresh lobster in a rich cream sauce with mushrooms', image: 'https://images.unsplash.com/photo-1533682440833-0215c8b42c01?q=80&w=2070&auto=format&fit=crop' },
  ],
  drinks: [
    { id: 1, name: 'Aged Whiskey', price: '$35', description: '18-year-old single malt whiskey', image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, name: 'Signature Cocktail', price: '$28', description: 'House special with premium gin and exotic fruits', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop' },
    { id: 3, name: 'Vintage Wine', price: '$180', description: 'Bordeaux Grand Cru 2010', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop' },
  ],
  smoking: [
    { id: 1, name: 'Cuban Cigar', price: '$75', description: 'Hand-rolled premium Cuban cigar', image: 'https://images.unsplash.com/photo-1574287094661-a0d3339c7ab0?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, name: 'Premium Shisha', price: '$55', description: 'Luxury hookah with premium tobacco', image: 'https://images.unsplash.com/photo-1564222256577-45e728f2c611?q=80&w=2070&auto=format&fit=crop' },
    { id: 3, name: 'Rare Tobacco', price: '$45', description: 'Exclusive blend of premium tobacco', image: 'https://images.unsplash.com/photo-1527005980469-e172416c200b?q=80&w=2071&auto=format&fit=crop' },
  ],
};

const categories = [
  {
    id: 'food',
    name: 'Food Menu',
    icon: UtensilsCrossed,
    description: 'Explore our delicious dishes',
  },
  {
    id: 'drinks',
    name: 'Drinks',
    icon: Wine,
    description: 'Refreshing beverages and cocktails',
  },
  {
    id: 'smoking',
    name: 'Smoking',
    icon: Cigarette,
    description: 'Premium smoking options',
  },
] as const;

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const renderCategoryItems = (category: Category) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-background"
      >
        <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-10">
          <div className="container flex items-center h-16 px-4 sm:px-8">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 hover:bg-transparent"
              onClick={() => setSelectedCategory(null)}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Back to categories</span>
            </Button>
            <h1 className="text-xl font-semibold">
              {categories.find((c) => c.id === category)?.name}
            </h1>
          </div>
        </header>

        <main className="container px-4 py-6 sm:px-8 sm:py-8">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {menuItems[category].map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold line-clamp-1">{item.name}</h3>
                    <p className="text-lg font-bold text-primary">{item.price}</p>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </motion.div>
    );
  };

  return (
    <AnimatePresence mode="wait">
      {selectedCategory ? (
        renderCategoryItems(selectedCategory)
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-gradient-to-br from-background to-muted"
        >
          <header className="border-b">
            <div className="container flex items-center justify-between h-16 px-4 sm:px-8">
              <div className="flex items-center gap-3">
                <Coffee className="w-6 h-6" />
                <h1 className="text-xl font-semibold">La Maison</h1>
              </div>
            </div>
          </header>

          <main className="container px-4 py-6 sm:px-8 sm:py-8">
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full h-28 sm:h-32 flex flex-col items-center justify-center gap-3 sm:gap-4 transition-all hover:scale-[1.02] hover:shadow-lg',
                      selectedCategory === category.id &&
                        'border-primary text-primary'
                    )}
                    onClick={() => setSelectedCategory(category.id as Category)}
                  >
                    <category.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    <div className="text-center">
                      <div className="font-semibold">{category.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {category.description}
                      </div>
                    </div>
                  </Button>
                </motion.div>
              ))}
            </div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}