import React from 'react'

const Statistika = () => {
  return (
    <div id='status' className=' mt-[50px]'>
      <h1 className=' text-[30px]'>Statistika</h1>
      <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        <div className=' p-[20px] w-[100%] text-center  bg-[#F9F8F6] rounded-xl shadow-2xl'>
          <h1 className=' text-[25px]'>1200+</h1>
          <hr />
          <p className=' text-[25px]'>O'tkazilgan Tadbirlar</p>
        </div>
        <div className=' p-[20px] w-[100%] text-center  bg-[#F9F8F6] rounded-xl shadow-2xl'>
          <h1 className=' text-[25px]'>700+</h1>
          <hr />
          <p className=' text-[25px]'>O'tkazilgan Tadbirlar</p>
        </div>
        <div className=' p-[20px] w-[100%] text-center  bg-[#F9F8F6] rounded-xl shadow-2xl'>
          <h1 className=' text-[25px]'>20+</h1>
          <hr />
          <p className=' text-[25px]'>O'tkazilgan Tadbirlar</p>
        </div>
        <div className=' p-[20px] w-[100%] text-center  bg-[#F9F8F6] rounded-xl shadow-2xl'>
          <h1 className=' text-[25px]'>190+</h1>
          <hr />
          <p className=' text-[25px]'>O'tkazilgan Tadbirlar</p>
        </div>
      </div>
    </div>
  )
}

export default Statistika