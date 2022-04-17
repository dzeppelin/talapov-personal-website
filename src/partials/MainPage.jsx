import React from 'react';

import NewsImageSingle from '../images/3836fb2e7c5bf490.jpg';

export function MainPage() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">

            <article>

              <header className="mb-8">
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <h1 className="h1 mb-4" data-aos="fade-up">That's my website which gives a little bit about me</h1>
                  <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Why do programmers always have to write code? Because without code, there would be nothing to debug!</p>
                </div>
              </header>

              {/* Article image */}
              <figure className="mb-8 lg:-ml-32 lg:-mr-32" data-aos="fade-up" data-aos-delay="600">
                <img className="w-full" src={NewsImageSingle} width="1024" height="576" alt="News single" />
              </figure>

              {/* Article content */}
              <div className="text-lg text-gray-400">
                <p className="mb-8">
                I am a programmer with experience in a variety of programming languages. I have a strong background in computer science and have developed many applications for both personal and professional use. I am a quick learner and have a knack for problem solving. I am also an excellent communicator and have a strong work ethic. I am looking for a position where I can use my skills to make a difference.
                        </p>
                <p className='mb-8'>
                  There will be more on me, with time. 
                </p>
              </div>

              {/* Article footer */}
              <footer>
                <div className="md:flex md:items-center md:justify-between text-center md:text-left">
                  <div className="text-lg text-gray-400 italic">Social Media</div>
                  <ul className="inline-flex mt-4 md:ml-4 md:mb-0">
                    <li className="ml-4">
                      <a href="https://www.linkedin.com/in/abulkhaiyr-talapov-14bb36237/" target={"_blank"} className="flex justify-center items-center text-purple-600 font-bold hover:text-gray-100 rounded-full transition duration-150 ease-in-out">
                        LinkedIn
                      </a>
                    </li>
                    <li className='ml-4'>
                      <a href="https://github.com/abzh423" target={"_blank"} className="flex justify-center items-center text-purple-600 font-bold hover:text-gray-100 rounded-full transition duration-150 ease-in-out">
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}