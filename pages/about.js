import Link from 'next/link'
export default function About() {
    return (
        <div className="container">
            <main>
                <h1 className="title">
                    Oh look, the about section
                </h1>

                <p className='descriptions'>
                    The part where the site owner flex about their skill
                </p>
                <div className="card">
                    <h3>Naufal</h3>
                </div>
                <Link href="/">
                    <a className='button'>Okay, go back</a>
                </Link>

            </main>
            <style jsx>{`
            html,body{
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            }    
            .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              .title {
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
              }
      
              .title,
              .description {
                text-align: center;
              }
      
              .description {
                line-height: 1.5;
                font-size: 1.5rem;
              }
            main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
              }
      
              .card:hover,
              .card:focus,
              .card:active {
                color: #0070f3;
                border-color: #0070f3;
              }
      
              .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
              }
      
              .card p {
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
              }
            `}</style>
        </div>

    )
}