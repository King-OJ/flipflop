"use client"

interface PageheaderProps {
    title: string
}

const PageHeader: React.FC<PageheaderProps> = ({ title }) => {
    return ( 
    <div className="flex justify-center mb-10">
        <h4 className="pb-4 border-[#D99712] border-b-4">{title}</h4>
    </div> );
}
 
export default PageHeader;