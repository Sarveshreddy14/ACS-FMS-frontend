const data = [
  { q: "How do I apply for a loan?", a: "Click 'Apply Now' on the loan card and fill the form." },
  { q: "What documents are needed?", a: "Valid ID, address proof, and income proof." },
  { q: "How long does approval take?", a: "Typically 24-72 hours after submission." },
  { q: "Is there a mobile app?", a: "Yes. Replace this with the exact copy from your design." }
];

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="text-3xl">FAQ</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {data.map((x, i) => (
            <details key={i} className="group open:bg-surface-100 px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-medium">{x.q}</span>
                <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-ink-600">{x.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
