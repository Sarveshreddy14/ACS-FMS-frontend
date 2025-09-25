export default function Contact() {
  return (
    <section id="contact" className="section bg-surface-300/30">
      <div className="container grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl">Contact Us</h2>
          <p className="mt-2 text-ink-600">Replace text to match your video exactly.</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>📍 Address line 1, City, Country</li>
            <li>✉️ support@example.com</li>
            <li>📞 +91-00000 00000</li>
          </ul>
        </div>
        <form className="card p-6 grid gap-4">
          <div>
            <label className="text-sm">Name</label>
            <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea rows="4" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
          </div>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
}
