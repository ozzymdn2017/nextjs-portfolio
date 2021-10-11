import {
  InboxInIcon,
} from '@heroicons/react/outline'

export default function contact() {
  return (
    <div className="grid place-content-center space-y-10">
      <h1 className="text-7xl text-center font-fancy uppercase tracking-tighter">Get In Touch</h1>
      <div className="flex justify-center">
        <InboxInIcon height={32} width={32}/>
        <p className="uppercase text-2xl">: oamedina1994@gmail.com </p>
      </div>
      
    </div>
  )
}
