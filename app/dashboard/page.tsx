"use client"

const Home = ({
   children,
 }: {
   children: React.ReactNode
 }) => {

  if(children) return children;

  return <div>All Jobs</div>
}
 
export default Home;
