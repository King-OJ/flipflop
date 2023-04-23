"use client"



const CategoriesBox = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return ( 
    <div className="shadow-md bg-white w-full overflow-x-auto">
        {children}
    </div> );
}
 
export default CategoriesBox;