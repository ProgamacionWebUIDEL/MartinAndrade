'use client'
import { onsumit, onsumitPost } from './hook.js';


function Profile() {
    return (
      <img
         src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }

  export function Bottom(){
    return(
      <button type="button" onClick={onsumit}>
        Enviar info
      </button>
    );
  }

  export function Bottomsend(){
    return(
      <button type="button" onClick={onsumitPost}>
        llamarPost
      </button>
    );
  }

  export default function componets() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile/>
        <Bottom/>
        <Bottomsend/>

      </section>
    );
  }