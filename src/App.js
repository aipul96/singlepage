
import './App.css';
import Signup from './Component/Signup';
import Footer from './page/Footer';
import Home from './page/Home';
//import Main from './page/Main';
import Navbar from './page/indiseProject/Navbar';

function App() {

  return (
    <div >
      <header className="h-8 pt-6 pb-12 justify-center items-center bg-slate-700 max-w-ful pb-8">
        <Navbar />
      </header>
      <div className='flex flex-col justify-center items-center'>
        <div className=" flex flex-col justify-cente items-center bg-slate-200 max-h-full sm:flex-col-1 ">
          <div className='flex flex-col justify-cente items-center  bg-slate-200'>

            <div className=' flex flex-col place-item-start'>
              <h1 className='font-medium text-2xl p-1'>Best Website builders in the US</h1>
              <div className='flex flex-row p-2 gap-2'>
                <div>
                  <input type='radio' /> Last Updated - February 22,2020
                </div>
                <div className='flex gap-5 '>
                  <div> <input type='radio' />
                    Advertising Disclosure</div>
                  <p>Top Relevant</p>
                </div>
              </div>

            </div>
            <div className='flex p-2'>
              <ul className='flex gap-8  '>
                <li>Tools</li>
                <li>AWS Builder</li>
                <li>Start Build</li>
                <li>Build Supplies</li>
                <li>Tooling</li>
                <li>Blue Hosting</li>
              </ul>
            </div>

            <div >
              <Home />
            </div>
            <div className='p-6 '>
              <Signup />
            </div>

          </div>
        </div>

      </div>
      <div className='bg-black text-white flex justify-center'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
