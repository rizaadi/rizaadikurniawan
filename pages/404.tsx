import Seo from '../components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle='Not Found' />
      <main>
        <section className='flex items-center justify-center min-h-screen text-center layout'>
          <h1>Page Not Found</h1>
        </section>
      </main>
    </>
  );
}
