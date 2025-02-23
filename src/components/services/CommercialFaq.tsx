import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/Accordion"
import { Button } from "../Button"

const faqAwning = [
    {
        "id": 1,
        "question": "How can a commercial awning improve my London business?",
        "answer": "Awnings increase visibility, enhance customer comfort, and reduce energy costs, making them a valuable investment for London-based businesses.",
    },
    {
        "id": 2,
        "question": "Do you offer custom branding for awnings?",
        "answer": "Yes! We provide full customization, including logos, colors, and graphics tailored to your business’s branding.",
    },
    {
        "id": 3,
        "question": "How long does the installation process take?",
        "answer": "Typically, 1-2 weeks from consultation to installation, depending on design complexity and location within London.",
    },
    {
        "id": 4,
        "question": "Are the awnings suitable for year-round use in London?",
        "answer": "Absolutely. Our awnings are made from durable, weather-resistant materials designed to withstand London’s varying climate.",
    },
]

export default function CommercialFaq() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-bold text-sky-950 tracking-tighter sm:text-3xl">Frequently Asked Questions About Commercial Awning</h3>
        </div>
        <Accordion type="single" collapsible className="w-full">
            {faqAwning.map(item => (
                <AccordionItem key={item.id} value={`item-${item.id}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                        {item.answer}
                    </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
        <div className="mx-auto mt-12 max-w-xl text-center">
          <p className="text-muted-foreground">
            Still have questions? Contact our support team{" "}
            <Button href="tel:+44 7777 602125" invert={false} className="font-medium ">
              Free Call
            </Button>
          </p>
        </div>
      </div>
    </main>
  )
}

