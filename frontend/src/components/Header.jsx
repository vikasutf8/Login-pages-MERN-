import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='bg-slate-500'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to={'/'}>
        <h1 className='font-bold'> App Auth</h1></Link>
        <ul className='flex gap-4 text-xl font-medium text-gray-100'>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            <Link to={'/service'}><li>Service</li></Link>
            <Link to={'/sign-in'}><li>Sign In</li></Link>

            
            
            
            
        </ul>
      </div>
    </div>
  )
}
