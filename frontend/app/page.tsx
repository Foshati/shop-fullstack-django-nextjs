import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div>
      <Button variant="secondary" className={cn("text-slate-700 m-4")}>
        Click me fa
      </Button>
    </div>
  );
}
