import Hero from '@/components/hero';
import { IActionButton } from '@/components/hero/data';

export default function Home() {
  return (
    <div>
      <Hero
        title="Welcome to the Lab"
        body="Blazed is your Source for Innovative Solutions."
        action={{
          label: "Learn More",
          url: "/about"
        } as IActionButton}
      />
    </div>
  )
}
