import React from 'react'
import Main from './Main'
import { Data } from '../Data'


const Home = () => {


  return (
    <div className='flex flex-col '>

      <div  className='mt-2'>
        {
          Data.map((datas, index) => {
            return <Main items={datas} key={index} />
          })
        }
      </div>
      <div className=' flex flex-col justify-center mt-4 items-center '>
        <h1 className='font-bold text-2xl mt-2 mb-2'>Related deals you might like for</h1>

        <div className='flex flex-row gap-4 items-center justify-center  '>
          <div>
            <div  >
              <div><img className='h-32 w-32' src="https://cdn0.iconfinder.com/data/icons/web-development-50/512/Web_Development_computer_design_site-03-512.png" alt="" /></div>

            </div>
            <div>
              <span>20% Off</span> <span>Limited time</span>
              <h3>Webbuilder 1</h3>
              <p>Computer Modern clasic with wix support</p>
              <span>$39.96</span> <span>$49.96</span> <span>(20% Off)</span>
            </div>
            <button className='border-solid border-2 border-sky-500 w-48 bg-sky-700 text-white rounded-lg '>View Deals</button>
          </div>
          <div>
            <div >
              <div><img className='h-32 w-32' src="https://cdn0.iconfinder.com/data/icons/web-development-50/512/Web_Development_computer_design_site-03-512.png" alt="" /></div>

            </div>
            <div>
              <span>20% Off</span> <span>Limited time</span>
              <h3>Webbuilder 1</h3>
              <p>Computer Modern clasic with wix support</p>
              <span>$39.96</span> <span>$49.96</span> <span>(20% Off)</span>
            </div>
            <button className='border-solid border-2 border-sky-500 w-48 bg-sky-700 text-white rounded-lg '>View Deals</button>
          </div>
          <div>
            <div >
              <div><img className='h-32 w-32' src="https://cdn0.iconfinder.com/data/icons/web-development-50/512/Web_Development_computer_design_site-03-512.png" alt="" /></div>

            </div>
            <div >
              <span>20% Off</span> <span>Limited time</span>
              <h3>Webbuilder 1</h3>
              <p>Computer Modern clasic with wix support</p>
              <span>$39.96</span> <span>$49.96</span> <span>(20% Off)</span>
            </div>
            <button className='border-solid border-2 border-sky-500 w-48 bg-sky-700 text-white rounded-lg '>View Deals</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home