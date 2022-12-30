import React from 'react'

const ServiceCard = ({ title, Description, number }) => {
  // var cursor = document.getElementById('hover_display');
  // const [span, setSpan] = useState(document.querySelectorAll('span'))

  // const addClass = (cursor) => {
  //   span?.forEach(item => {
  //     item.addEventListener('mouseover', () => {
  //       cursor.classList.add('hovered');
  //     });
  //     item.addEventListener('mouseleave', () => {
  //       cursor.classList.remove('hovered');
  //     });
  //   })
  // }

  // useEffect(() => {
  //   setSpan(document.querySelectorAll('span'))
  //   addClass(cursor)
  // }, [cursor])



  return (
    <span className='card' id={`cards_${number}`}>
      {
        number === 1 && <img className='card-img' src={require('../Assets/service.png')} alt="card img" />
      }
      <div className='cardinside'>
        <p className='numbercard'>&#47; &#47;  {number}</p>
        <p className='titlecard' >{title}</p>
        <p className='descriptioncard'>{Description}</p>
      </div>
    </span>
  )
}

export default ServiceCard