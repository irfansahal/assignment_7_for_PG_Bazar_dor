
import Link from 'next/link'
 
 function NotFound() {
  return (
    <div className='flex items-center justify-center bg-zinc-100 m-20 rounded-2xl'>
        <div className='flex flex-col gap-3 my-20 bg-white p-20 w-full lg:w-[600px] rounded-2xl'>
      <h1 className='text-2xl lg:text-5xl font-bold text-zinc-500 text-center text-center'>৪০০</h1>      
      <h2 className='text-[18px] lg:text-3xl font-bold text-green-600 text-center'>পাওয়া যায়নি </h2>
      <p className='text-center font-bold text-zinc-500'>অনুরোধ করা রিসোর্সটি খুঁজে পাওয়া যায়নি।</p>
      <Link href="/" className='text-green-700 font-bold'><span className='text-4xl pt-4'>⮜── </span> মূল পৃষ্ঠায় ফিরে যান</Link>
    </div>
    </div>
  )
}

export default NotFound