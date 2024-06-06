import React from 'react'

const Alert = ({type, text}) => {
    return (
        <div className='absolute top-16 left-0 right-0 flex justify-center items-center'>
          <div
            className={`${type === 'alert' ? "bg-red-800" : "bg-green-900" }
            p-2 items-center text-indigo-100 leading-none rounded-full  flex lg:inline-flex`}
            role='alert' >

            <p className={ `${type === "danger" ? "bg-red-500" : "bg-green-700" }
            flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}>
                {type === 'danger' ? 'Failed' : 'Success'}
            </p>

            <p className='mr-2 text-left'>{text}</p>
          </div>
        </div>
      );
}
 
export default Alert