import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/Accordion"
import { Button } from "../Button"

const faqAwning = [
    {
        "id": 1,
        "question": "How long will my residential awning last in London?",
        "answer": "With regular maintenance, our durable awnings can last 10-15 years, even with London’s variable weather conditions. We use high-quality, weather-resistant materials to ensure longevity.",
    },
    {
        "id": 2,
        "question": "Do you offer motorized awnings for homes in London?",
        "answer": "Yes! We provide motorized retractable awnings for larger London properties, such as garden terraces in areas like Kensington, giving you convenience and ease of operation.",
    },
    {
        "id": 3,
        "question": "Can I install an awning on my London flat’s balcony?",
        "answer": "Absolutely! Our awnings are designed to fit small outdoor spaces like London flats and apartments. We offer both manual and motorized options to suit your needs.",
    },
    {
        "id": 4,
        "question": "How do I maintain my awning in London’s weather?",
        "answer": "London’s weather can be unpredictable, so we recommend cleaning your awning regularly, especially after rain or storms. Retracting the awning during strong winds or heavy rain can also help maintain its longevity.",
    },
]

export default function ResidentialFaq() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-bold text-sky-950 tracking-tighter sm:text-3xl">Frequently Asked Questions About Residential Awning</h3>
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

