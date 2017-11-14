import React from 'react'

export default function ShoppingList ({ list }) {
  return (
    <div className='ingredients-list'>
      <h3 className='subheader'>
        Your Shopping List
      </h3>
      {list instanceof Array && list.length == 0 ? 'Choose meals first'
        : list.map((meal) => (
        <div>
          <h4>{meal.label}: ingredients</h4>
          <ul>
            {meal.ingredientLines.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}