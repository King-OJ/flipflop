"use client"

import PageHeader from "../components/PageHeader";

const Home = ({
   children,
 }: {
   children: React.ReactNode
 }) => {

  if(children) return children;

  return (<section className="m-6 w-full" >
          <PageHeader title="All Jobs" />
        </section> )
}
 
export default Home;
