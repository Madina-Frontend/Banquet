
const BizHaqimizda = () => {
  return (
    <div id='aboutUs'>
      <h1 className=' text-[30px]'>Biz haqimizda</h1>
      <div className=' flex gap-3 justify-between bg-[#F9F8F6] p-8 rounded-xl'>
        <div className=' w-[100%] xl:w-[50%]'>
          <h1 className=' text-[30px] text-purple-600'>Catering lux</h1>
          <p className=' text-[20px]'>BIZNING MISSIYAMIZ- bu nafis va unutilmas yaratish san’ati bilan shug’ullanuvchi yetakchi catering kompaniya hisoblanadi. Catering lux servisi 2023-yilda o’z faoliyatini boshlagan. Shuningdek 11 yildan ortiq vaqt davomida o’z ko’nikmalarini kengaytir</p>
        </div>
        <div className=' w-[50%] hidden xl:block'>
          <img src="https://static01.nyt.com/images/2021/05/02/business/00officespace8/00officespace8-superJumbo.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default BizHaqimizda