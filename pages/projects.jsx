import ProjectCard from '../components/content/projects/ProjectCard';
import Tag from '../components/content/Tag';
import Layout from '../components/layout/Layout';

function Projects() {
  return (
    <Layout>
      <main>
        <section>
          <div className='py-12 layout'>
            <h1 className='text-6xl md:text-7.5xl leading-normal text-center'>
              Projects
            </h1>
            <p className='mt-3 text-base text-center md: md:text-2xl'>
              I made some projects that I&#39;m proud of
            </p>

            <div className='flex flex-wrap justify-center gap-2 mt-4'>
              {Array(10).fill(<Tag />)}
            </div>
            <ul className='grid gap-4 mt-14 sm:grid-cols-2 xl:grid-cols-3'>
              {projects.map(({ desc, title }) => (
                <ProjectCard key={title} title={title} desc={desc} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}

const projects = [
  {
    title: 'title',
    desc: 'description Deserunt ullam laudantium omnis fugit. Dolor autem quibusdam laudantium voluptate. Numquam culpa dignissimos recusandae. Perferendis sed animi aut quas pariatur ',
  },
  {
    title: 'title2',
    desc: 'description Deserunt ullam laudantium omnis fugit. Dolor autem quibusdam laudantium voluptate. Numquam culpa dignissimos recusandae. Perferendis sed animi aut quas pariatur ',
  },
  {
    title: 'title3',
    desc: 'description Deserunt ullam laudantium omnis fugit. Dolor autem quibusdam laudantium voluptate. Numquam culpa dignissimos recusandae. Perferendis sed animi aut quas pariatur ',
  },
  {
    title: 'title4',
    desc: 'description Deserunt ullam laudantium omnis fugit. Dolor autem quibusdam laudantium voluptate. Numquam culpa dignissimos recusandae. Perferendis sed animi aut quas pariatur ',
  },
];
export default Projects;
