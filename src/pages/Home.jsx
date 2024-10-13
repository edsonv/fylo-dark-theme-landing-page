import IllustrationIntro from '../assets/images/illustration-intro.png';
import IconAccessAnywhere from '../assets/images/icon-access-anywhere.svg';
import IconSecurity from '../assets/images/icon-security.svg';
import IconCollaboration from '../assets/images/icon-collaboration.svg';
import IconAnyFile from '../assets/images/icon-any-file.svg';
import IllustrationStayProductive from '../assets/images/illustration-stay-productive.png';
import ProfileOne from '../assets/images/profile-1.jpg';
import ProfileTwo from '../assets/images/profile-2.jpg';
import ProfileThree from '../assets/images/profile-3.jpg';
import { IconArrow } from '../components/IconArrow';

export const Home = () => {
  return (
    <>
      <header className='c-header-section u-d-flex'>
        <picture className='imageContainer'>
          <img src={IllustrationIntro} alt='' />
        </picture>
        <h1 className='title u-ff-accent u-text-center'>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className='content u-ff-body u-text-center'>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <a href='#getStarted' className='link u-ff-accent'>
          Get Started
        </a>
      </header>
      <main>
        <section id='features'>
          <div>
            <div>
              <picture>
                <img src={IconAccessAnywhere} alt='Icon Access Anywhere' />
              </picture>
              <h3>Access your files, anywhere</h3>
              <p>
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
          </div>

          <div>
            <picture>
              <img src={IconSecurity} alt='Icon Security' />
            </picture>
            <h3>Security you can trust</h3>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>

          <div>
            <picture>
              <img src={IconCollaboration} alt='Icon Collaboration' />
            </picture>
            <h3>Real-time collaboration</h3>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>

          <div>
            <picture>
              <img src={IconAnyFile} alt='Icon Any File' />
            </picture>
            <h3>Store any type of file</h3>
            <p>
              Whether you&apos;re sharing holidays photos or work documents,
              Fylo has you covered allowing for all file types to be securely
              stored and shared.
            </p>
          </div>
        </section>
        <section id='howItWorks'>
          <picture>
            <img
              src={IllustrationStayProductive}
              alt='Illustration Stay Productive'
            />
          </picture>
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href='#howItWorks'>
            See how Fylo works
            <IconArrow />
          </a>
        </section>
        <section id='testimonials'>
          <figure>
            <blockquote>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </blockquote>
            <picture>
              <img src={ProfileOne} alt='Satish Patel' />
            </picture>
            <dl>
              <dt>Satish Patel</dt>
              <dd>Founder & CEO, Huddle</dd>
            </dl>
          </figure>
          <figure>
            <blockquote>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </blockquote>
            <picture>
              <img src={ProfileTwo} alt='Bruce McKenzie' />
            </picture>
            <dl>
              <dt>Bruce McKenzie</dt>
              <dd>Founder & CEO, Huddle</dd>
            </dl>
          </figure>
          <figure>
            <blockquote>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </blockquote>
            <picture>
              <img src={ProfileThree} alt='Iva Boyd' />
            </picture>
            <dl>
              <dt>Iva Boyd</dt>
              <dd>Founder & CEO, Huddle</dd>
            </dl>
          </figure>
        </section>
        <aside id='getStarted'>
          <h2>Get early access today</h2>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form action=''>
            <input type='email' name='email' id='email' />
            <button type='submit'>Get Started For Free</button>
          </form>
        </aside>
      </main>
    </>
  );
};
