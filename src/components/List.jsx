import React from 'react'

const List = (props) => {
    return (
        <>
              
              <i className='fa fa-times' onClick={()=>
                  {
                      props.onSelect(props.id)
                  }
              } aria-hidden='true'></i>
             <li>{props.text}</li>
              
             </>
    )
}
export default List;
