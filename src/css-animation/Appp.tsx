function Appp() {
    const name = 'Brain Station 23'
    const nameArray = name.split('')
    
      return (
    <div className='main'>
    
    <div className='container'>
       {
        nameArray.map((item,i)=> (
          <span className='alphabet' style={{transitionDelay: `${i * 30}ms`}}>
            {item}
          </span>
        ))
       }
    </div>
    </div>
      )
    }