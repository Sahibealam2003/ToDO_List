import React, { useState } from 'react'
import { toDosValue } from '../../Utility/TodoContex'
import { v4 as uuid } from 'uuid'

const AddTodo = () => {
  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')
  const { storeTodos, setStoreTodos } = toDosValue()

  function onSubmitHandler() {
    if (!title || !description) return
    setStoreTodos([...storeTodos, { title, description, id: uuid() }])
    setTitle('')
    setdescription('')
  }

  return (
    <div className='border w-[100%] h-[100%] p-4 text-amber-50' >
      <div>


        <svg
          className="w-[30px] h-[30px] "
          width="70"
          height="70"
          viewBox="0 0 320 291"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_26_2)">
            <path
              d="M63.5511 256.03L93.304 208.124L39.4508 88.8404L10.5704 133.785L63.5511 256.03Z"
              stroke="url(#paint0_linear_26_2)"
              strokeWidth="10"
              shapeRendering="crispEdges"
            />
            <path
              d="M83.9116 270.096L136.756 272.877L174.994 210.999L104.623 64.4645L141.322 6.70413L91.2858 6.31416L55.5295 64.6186L120.521 209.588L83.9116 270.096Z"
              stroke="url(#paint1_linear_26_2)"
              strokeWidth="10"
              shapeRendering="crispEdges"
            />
            <path
              d="M223.029 277.244L261.954 213.452L185.429 64.5188L222 5.52925L169.097 5.02507L132.36 64.3035L204.763 212.397L166.858 273.697L223.029 277.244Z"
              stroke="url(#paint2_linear_26_2)"
              strokeWidth="10"
              shapeRendering="crispEdges"
            />
            <path
              d="M309.826 136.339L244.842 16.0216L214.313 63.095L279.072 185.979L309.826 136.339Z"
              stroke="url(#paint3_linear_26_2)"
              strokeWidth="10"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_26_2"
              x="0.922104"
              y="-0.00152588"
              width="318.679"
              height="290.426"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_2" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_2" result="shape" />
            </filter>
            <linearGradient
              id="paint0_linear_26_2"
              x1="232.905"
              y1="9.12972"
              x2="82.655"
              y2="269.37"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.167634" stopColor="white" stopOpacity="0.875" />
              <stop offset="0.951043" stopColor="white" stopOpacity="0.75" />
              <stop offset="0.996101" stopColor="white" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_26_2"
              x1="232.905"
              y1="9.12972"
              x2="82.655"
              y2="269.37"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.167634" stopColor="white" stopOpacity="0.875" />
              <stop offset="0.951043" stopColor="white" stopOpacity="0.75" />
              <stop offset="0.996101" stopColor="white" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_26_2"
              x1="232.905"
              y1="9.12972"
              x2="82.655"
              y2="269.37"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.167634" stopColor="white" stopOpacity="0.875" />
              <stop offset="0.951043" stopColor="white" stopOpacity="0.75" />
              <stop offset="0.996101" stopColor="white" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_26_2"
              x1="232.905"
              y1="9.12972"
              x2="82.655"
              y2="269.37"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.167634" stopColor="white" stopOpacity="0.875" />
              <stop offset="0.951043" stopColor="white" stopOpacity="0.75" />
              <stop offset="0.996101" stopColor="white" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
        <div className='flex justify-center items-center'>

          <h1 className='text-[25px] font-bold'>Add new thing</h1>
        </div>
      </div>

      <div className='flex flex-col justify-center gap-4 items-center h-[60vh]  '>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          className='border-b focus:text-[20px] focus:border-b-3 focus:outline-none py-[-2px] focus:y-3 focus:h-[50px] foucs:rounded  w-[90%] h-[30px]'
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          placeholder="Enter Description"
          className='border-b focus:text-[16px] focus:border-b-3 focus:outline-none py-[-2px] focus:y-3 focus:h-[50px] foucs:rounded  w-[90%] h-[30px]'
        />
        <button
          onClick={onSubmitHandler}
          className='cursor-pointer w-[80%] py-1.5 mt-4 bg-[#1da1f2] drop-shadow-[0px_0px_5px_rgba(000,000,000,1.6)] active:bg-[#00CCFF] active:py-2 active:w-[82%] active:text-[20px]'
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default AddTodo
