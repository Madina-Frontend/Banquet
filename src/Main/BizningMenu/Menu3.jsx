import React from 'react'

const Menu3 = () => {
  const Menu = [
    {
      id:21,
      img: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg',
      title: 'product-13',
      price: "15 000 so'm"
    },
    {
      id:22,
      img: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg',
      title: 'product-14',
      price: "125 000 so'm"
    },
    {
      id:23,
      img: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg',
      title: 'product-15',
      price: "35 000 so'm"
    },
    {
      id:24,
      img: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg',
      title: 'product-16',
      price: "100 000 so'm"
    },
    {
      id:25,
      img: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg',
      title: 'product-17',
      price: "115 000 so'm"
    },
    {
      id:26,
      img: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg',
      title: 'product-18',
      price: "10 000 so'm"
    },
  ]
  return (
    <div className=' grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 xl:grid-cols-6'>
      {
        Menu.map((v) => {
          return (
              <div className=' rounded-lg p-2 shadow-lg' id={v.id}>
                <img className=' w-[100%] h-[200px]' src={v.img} alt="" />
                <b>{v.title}</b>
                <p className=' text-purple-500'>{v.price}</p>
              </div>
          )
        })
      }
    </div>
  )
}

export default Menu3