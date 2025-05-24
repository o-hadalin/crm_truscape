import ActiveLabel from '@/app/components/ActiveLabel/ActiveLabel';
import NotActiveLabel from '@/app/components/NotActiveLabel/NotActiveLabel';

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <ActiveLabel>Activ</ActiveLabel>
      <NotActiveLabel>Not Activ</NotActiveLabel>
    </main>
  );
}
