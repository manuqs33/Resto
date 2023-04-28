import { MessageForm } from "./MessageForm";

export function MessageContainer() {
    return (
        <section className="section StaticPage">
            <div className="container is-fluid">
                <div className='content container is-max-desktop'>
                    <div className="columns">
                        <div className="column is-one-half">
                            <h1>Contacto</h1>
                            <p>500 Terry Francois Street, 6th Floor. San Francisco, CA 94158</p>
                            <p>testingwebap@gmail.com</p>
                            <p>123-456-7890</p>
                        </div>
                        <div className="column is-one-half">
                            <MessageForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}