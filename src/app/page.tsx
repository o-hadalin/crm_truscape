import StatusLabel, { Status } from '@/app/components/StatusLabel/StatusLabel';
import AddCompanyButton from './components/AddCompanyButton/add-company-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Active}>Activ</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Activ</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <AddCompanyButton />
    </main>
  );
}
