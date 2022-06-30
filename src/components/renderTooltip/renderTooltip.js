import React from 'react'

const renderTooltip = context => {
    const { category, value,} = context.point || context;
    console.log(context);
    return (
      <div>
        {category}: {value}
      </div>
    );
  };
  export default renderTooltip