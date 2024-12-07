import React, { useRef, useState } from "react";
import { Link, ExternalLink } from "lucide-react";
import { Header } from "./components/Header";
import { BudgetSummary } from "./components/BudgetSummary";
import { BudgetCard } from "./components/BudgetCard";
import { TransactionList } from "./components/TransactionList";
import { BottomNav } from "./components/BottomNav";
import { useBudget } from "./hooks/useBudget";

function App() {
  const { transactions, budget } = useBudget();

  const scrollContainer = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    if (scrollContainer.current) {
      setScrollLeft(scrollContainer.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX === 0) return;
    const moveX = e.touches[0].clientX;
    const distance = startX - moveX;
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft = scrollLeft + distance;
    }
  };

  const handleTouchEnd = () => {
    setStartX(0);
  };

  return (
    <div className="min-w-[375px] max-w-[576px] mx-auto min-h-screen bg-indigo-600 flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col mb-20">
        <BudgetSummary budget={budget} />

        <div className="px-6">
          {/* Horizontal Scroll Container */}
          <div
            className="flex gap-4 px-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={scrollContainer}
          >
            <div className="snap-center shrink-0 w-64">
              <BudgetCard
                title="My Spending"
                amount={budget.spent}
                subtitle="From Balance"
                icon={<Link className="text-blue-500 w-5 h-5" />}
              />
            </div>
            <div className="snap-center shrink-0 w-64">
              <BudgetCard
                title="Balance"
                amount={budget.remaining}
                subtitle="Balance Left"
                icon={<ExternalLink className="text-blue-500 w-5 h-5" />}
              />
            </div>
            <div className="snap-center shrink-0 w-64">
              <BudgetCard
                title="Savings"
                amount={1200}
                subtitle="In Savings"
                icon={<Link className="text-green-500 w-5 h-5" />}
              />
            </div>
            <div className="snap-center shrink-0 w-64">
              <BudgetCard
                title="Investments"
                amount={3500}
                subtitle="Portfolio"
                icon={<ExternalLink className="text-yellow-500 w-5 h-5" />}
              />
            </div>
            <div className="snap-center shrink-0 w-64">
              <BudgetCard
                title="Expenses"
                amount={800}
                subtitle="Monthly Costs"
                icon={<Link className="text-red-500 w-5 h-5" />}
              />
            </div>
          </div>
        </div>

        <TransactionList transactions={transactions} />
      </main>

      <BottomNav />
    </div>
  );
}

export default App;
