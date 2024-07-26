

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
      <button type="button">
        enviar inf
      </button>
    );
  }

  export default function componets() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />

      </section>
    );
  }