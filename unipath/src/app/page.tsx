import { CanvasExperience } from "@/components/three/CanvasExperience";
import { Experience } from "@/components/three/Experience";

export default function HomePage() {
  return (
    <Experience>
      <main className="h-screen w-screen">
        <CanvasExperience />
      </main>
    </Experience>
  );
}
