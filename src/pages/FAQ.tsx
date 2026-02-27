export default function FAQ() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all physical products. If you're not satisfied, simply return the item in its original condition for a full refund.",
    },
    {
      question: "How do I access my program?",
      answer: "Once you purchase a program, you will receive an email with login credentials to our learning portal. You can access your courses anytime, anywhere.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries worldwide. Shipping rates and delivery times vary depending on your location.",
    },
    {
      question: "Can I upgrade my program level?",
      answer: "Absolutely. If you start with a beginner course and want to advance, contact our support team for an upgrade discount.",
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, we use industry-standard encryption and secure payment gateways (Stripe) to protect your financial information.",
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Can't find the answer you're looking for? Reach out to our customer support team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10">
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.question} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
