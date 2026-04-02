import { AmbientDots } from "@/components/landing/ambient-dots";
import { KanbanBoard } from "@/components/landing/kanban-board";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white px-4 py-4 md:px-6 md:py-6">
      <AmbientDots />
      <div className="relative z-20">
        <KanbanBoard />
      </div>
    </main>
  );
}
