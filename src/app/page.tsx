import FirstLoad from './components/FirstLoad/FirstLoad';
import FixedNav from './components/FixedNav/FixedNav';

export default function Home() {
  return (
    <main className=" w-[100vw] h-[100vh] ">
      <FirstLoad />
      <FixedNav />
    </main>
  );
}
