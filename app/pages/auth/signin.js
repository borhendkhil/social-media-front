import{redirect } from 'next/navigation';
import { getSession ,login ,logut} from './lib';
import { use } from 'react';


export default async function SignIn() {
  const session = await getSession();
  return (
    <section>
      <form action={async (FormData)=>{
        'use server';
        await login(FormData);
        redirect('/');
      }} >
        <input type="email" placeholder="Email" />
        <br />

        <button type="submit">Login</button>
      
      </form>
      <form action={async ()=>{
        'use server';
       await logout(); 
       redirect('/');
      }}>
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session,null,2)}</pre>
      
      </section>
    
  );
}