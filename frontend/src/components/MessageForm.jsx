export function MessageForm() {
    return (
        <form>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" name="name" placeholder="Your name" />
                </div>
            </div>

            <div className="field">
                <label className="label">Address</label>
                <div className="control">
                    <input className="input" type="text" name="address" placeholder="Your address" />
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" name="email" placeholder="Your email address" />
                </div>
            </div>

            <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                    <input className="input" type="tel" name="phone" placeholder="Your phone number" />
                </div>
            </div>

            <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                    <input className="input" type="text" name="subject" placeholder="Subject of your message" />
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" name="message_text" placeholder="Your message"></textarea>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button className="button is-primary" type="submit">Send</button>
                </div>
            </div>
        </form>
    )
}