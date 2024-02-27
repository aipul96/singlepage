import React from 'react'

const Main = ({ items }) => {

    return (
        <div className='flex flex-row  ml-40 mr-40 '>
            <div className='flex flex-row gap-8 text-black'>
                <div className='flex h-auto w-auto'>
                    <img className='object-contain h-48 w-96' src={items.img} alt="hello" />
                </div>
                <div className='flex flex-col h-auto'>
                    <h1 className='font-bold'>{items.name}</h1>
                    <p className='flex'>{items.titleDescrip}</p>
                    <h3 className='font-bold'>{items.name2}</h3>
                    <p className='flex'>{items.title2}</p>
                </div>
                <div className='flex flex-col '>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-bold'>{items.rating}</h1>
                        <p className='font-bold'>{items.ratde}</p>
                    </div>
                    <button className='border-solid border-2 border-sky-500 w-28 bg-sky-700 text-white rounded-lg '>view</button>
                </div>
            </div>

        </div>
    )
}

export default Main