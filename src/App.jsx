import { PiFileCppBold } from "react-icons/pi";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPrisma} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5, FaNodeJs, FaCss3, FaReact } from "react-icons/fa";
import { useState } from 'react'

  function App() {
    const [result, setResult] = useState("");

    window.addEventListener("scroll", function(){
      var nav = this.document.querySelector("nav");
      nav.classList.toggle("bg-slate-900", window.scrollY > 0)
    }) 
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "d11d3839-ef40-4c5e-9ad2-5506d3e4ac86");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    
    
    return (
      <>
        {/* navbar start */}
        <nav className='bg-slate-900'> 
          <div className='container flex items-center justify-between'>
            <a href='#'> 
              <p className="text-white">@Adam_Sujica</p>
            </a>
            <div className='flex items-center gap-8'>
              <a href='#about' className='text-white hover:text-blue-500 transition-colors duration-300'>ABOUT</a>
              <a href='#skills' className='text-white hover:text-blue-500 transition-colors duration-300'>SKILLS</a>
              <a href='#portfolio' className='text-white hover:text-blue-500 transition-colors duration-300'>PROJECTS</a>
              <a href='#contact' className='text-white hover:text-blue-500 transition-colors duration-300'>CONTACT</a>
            </div>
          </div>
        </nav>
        {/* navbar end */}

        {/* hero */}
        <section className='bg-hero-img'>
          <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-white font-bold text-6xl'>I'm Adam Sujica</h1>  
            <h2 className='text-white font-bold text-xl'>Aspiring Full-stack Developer</h2>
          </div>
        </section>
        {/* hero end */}

        {/* About start */}
        <section className='container' id='about'>
          <div className='grid grid-cols-1 md:grid-cols-2 items-start mt-10'>
            <img src='./src/assets/about-image.png' alt=''/>
            <div className='ml-10'>
              <h3 className='font-bold text-blue-500 text-2xl'>ABOUT ME</h3>
              <h4 className='text-white font-bold text-3xl mt-2'>I'm Adam Sujica</h4>
              <p className='text-lg text-slate-500 mt-8'>I'm a software developer committed to lifelong learning in programming. 
                My goal is to deepen my expertise while exploring new areas that interest me. 
                I enjoy tackling challenging problems and crafting innovative solutions. 
                With each project, I aim to sharpen my skills and push my capabilities further.
              </p>
              <p className='text-lg text-slate-500 mt-8'>Outside of coding, I'm an avid tennis player and enjoy experimenting in the kitchen. 
                When I'm not on the court or behind the stove, you can find me gaming,
                with a particular passion for challenging Soulslike games.</p>
            </div>
          </div>
        </section>
        {/* About end */}
  ``
        {/* Skills start */}
        <section className='container' id='skills'>
          <h3 className='font-bold text-blue-500 text-2xl mt-10 p-4'>SKILLS</h3>
          <div className='grid grid-cols-4 gap-8 p-4'>
            <div className='rounded-lg border border-teal-50 p-4 flex flex-col items-center justify-center'>
              <PiFileCppBold className='text-4xl text-blue-600' />
              <p className='text-white font-bold mt-5'>C++</p>
            </div>
            <div className='rounded-lg border border-teal-50 p-4 flex flex-col items-center justify-center'>
              <FaJava className='text-4xl text-orange-600' />
              <p className='text-white font-bold mt-5'>Java</p>
            </div>
            <div className='rounded-lg border border-teal-50 p-4 flex flex-col items-center justify-center'>
              <IoLogoJavascript className='text-4xl text-yellow-400' />
              <p className='text-white font-bold mt-5'>JavaScript</p>
            </div>
            <div className='rounded-lg border border-teal-50 p-4 flex flex-col items-center justify-center'>
              <FaNodeJs className='text-4xl text-green-500' />
              <p className='text-white font-bold mt-5'>NodeJs</p>
            </div>
            <div className='rounded-lg border border-teal-50 p-4 flex flex-col items-center justify-center'>
              <FaReact className='text-4xl text-cyan-400' />
              <p className='text-white font-bold mt-5'>React</p>
            </div>
            <div className='rounded-lg border border-teal-50 p-4 flex flex-col items-center justify-center'>
              <FaHtml5 className='text-4xl text-orange-500' />
              <p className='text-white font-bold mt-5'>HTML</p>
            </div>
            <div className='rounded-lg border border-teal-50 p-4 flex flex-col items-center justify-center'>
              <FaCss3 className='text-4xl text-blue-500' />
              <p className='text-white font-bold mt-5'>CSS</p>
            </div>
            <div className='rounded-lg border border-teal-50 p-4 flex flex-col items-center justify-center'>
              <RiTailwindCssFill className='text-4xl text-cyan-400' />
              <p className='text-white font-bold mt-5'>Tailwind CSS</p>
            </div>
            <div className='rounded-lg border border-teal-50 p-4 flex flex-col items-center justify-center'>
              <SiPrisma className='text-4xl text-blue-300' />
              <p className='text-white font-bold mt-5'>Prisma</p>
            </div>
          </div>
        </section>
        {/* Skills end */}

        {/* Projects start */}
        <section className='container' id='portfolio'>
          <div className='p-4'>
            <h3 className='font-bold text-blue-500 text-2xl mt-10'>PORTFOLIO</h3>
            <h4 className='text-white font-bold text-2xl mt-5'>LATEST PROJECTS</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 mt-8'>
              {/* Card One */}
              <div className="flex flex-col bg-slate-800/80 rounded-xl">
                <div className='px-5 py-4'>
                  <h4 className='text-2xl font-medium text-white'>Multi-Dashboard Application</h4>
                  <img className='rounded-xl mt-5' src='./src/assets/projectdash.png'/> 
                  <div className='flex justify-start space-x-5'>
                    <a href='https://youtu.be/dt-ZIP5py9c' target='_blank' rel='noopener noreferrer' className='inline-flex mt-4 px-4 py-3 font-semibold text-sm text-white rounded-md bg-blue-500 hover:scale-105 
                    active:scale-95 transition-all duration-300'>Video Demo</a>
                    <a href='https://github.com/Shinjax/MultiDashboard' target='_blank' rel='noopener noreferrer' className='inline-flex mt-4 px-4 py-3 font-semibold text-sm text-white rounded-md bg-blue-500 hover:scale-105 
                    active:scale-95 transition-all duration-300'>Github</a>
                  </div>
                </div>
              </div>
              {/* Card Two */}
              <div className="flex flex-col bg-slate-800/80 rounded-xl">
                <div className='px-5 py-4'>
                  <h4 className='text-2xl font-medium text-white'>Podcast Website</h4>
                  <img className='rounded-xl mt-5' src='./src/assets/project1.png'/>
                  <div className='flex justify-start space-x-5'>
                    <a href='https://youtu.be/kvNNSCDr6Zc' target='_blank' rel='noopener noreferrer' className='inline-flex mt-4 px-4 py-3 font-semibold text-sm text-white rounded-md bg-blue-500 hover:scale-105 
                    active:scale-95 transition-all duration-300'>Video Demo</a>
                    <a href='https://github.com/Shinjax/Podcast_Website' target='_blank' rel='noopener noreferrer' className='inline-flex mt-4 px-4 py-3 font-semibold text-sm text-white rounded-md bg-blue-500 hover:scale-105 
                    active:scale-95 transition-all duration-300'>Github</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects end */}

        {/* Contact start */}
        <section className='container p-4' id='contact'>
          <h3 className='font-bold text-blue-500 text-2xl text-center mt-10'>CONTACT FORM</h3>
          <form className='max-w-2xl mx-auto bg-slate-800/80 rounded-xl mt-5 p-8' onSubmit={onSubmit}>
            <div className='mb-6'>
              <label className='block text-white font-bold mb-2'>Name</label>
              <input 
                type='text' 
                id='name'
                name='name'
                className='w-full h-10 bg-transparent border border-blue-500 rounded px-3 text-white focus:outline-none focus:border-blue-300'
                placeholder='Enter your name' 
                required
              />
            </div>
            <div className='mb-6'>
              <label className='block text-white font-bold mb-2'>Email Address</label>
              <input 
                type='email' 
                id='email'
                name='email'
                className='w-full h-10 bg-transparent border border-blue-500 rounded px-3 text-white focus:outline-none focus:border-blue-300'
                placeholder='Enter your email' 
                required
              />
            </div>
            <div className='mb-6'>
              <label className='block text-white font-bold mb-2'>Your Message</label>
              <textarea 
                id='message' 
                name='message'
                className='w-full h-32 bg-transparent border border-blue-500 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-300'
                placeholder='Enter your message' 
                required
              ></textarea>
            </div>
            <button 
              type='submit'
              className='w-full bg-blue-500 text-white font-bold py-3 px-4 rounded hover:bg-blue-600 transition-colors duration-300'
            >
              Send Message
            </button>
          </form>
          {result && <p className="mt-4 text-center text-white">{result}</p>}
        </section>
        {/* Contact end */}
      </>
    )
  }

  export default App;
