import React from "react";

const SectionBlock = React.forwardRef(({ className, children }, ref)=> {
 // console.log(ref, "ref");
  

  return (
    <React.Fragment>
      <div className={className + "-container"} ref={ref}>
        {React.Children.map(children, (child) => {
  
          return child;
        })}
      </div>
    </React.Fragment>
  );
});

export default SectionBlock;