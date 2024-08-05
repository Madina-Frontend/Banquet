import React from 'react'

const Menu1 = () => {
  const Menu = [
    {
      id:31,
      img: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg',
      title: 'product-1',
      price: "15 000 so'm"
    },
    {
      id:42,
      img: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg',
      title: 'product-2',
      price: "125 000 so'm"
    },
    {
      id:53,
      img: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg',
      title: 'product-3',
      price: "35 000 so'm"
    },
    {
      id:64,
      img: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg',
      title: 'product-4',
      price: "100 000 so'm"
    },
    {
      id:75,
      img: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg',
      title: 'product-5',
      price: "115 000 so'm"
    },
    {
      id:86,
      img: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg',
      title: 'product-6',
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

export default Menu1