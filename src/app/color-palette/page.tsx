import AwningVisualizer from "@/components/color/awning-visualizer"
import ColorPalette from "@/components/color/color-palette"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card"
import { PageIntro } from "@/components/PageIntro"
import ScrollButton from "@/components/ScrollButton"
import { ContactSection } from "@/components/ContactSection"
import { Container } from "@/components/Container"
import { Suspense } from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Awning Color Visualizer | Choose Your Perfect Awning Shade In London',
  description:
    'Explore our premium awning color palette and visualize your ideal awning. Select from a wide range of shades to match your style and see it in action with our interactive tool.',
}

export default function ColorPalettePage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <PageIntro
          eyebrow=""
          title="Awning Color Visualizer"
        >
          <p>
              Choose from our selection of premium awning fabrics to visualize how your awning will look.
          </p>
        </PageIntro>
      <Container>
        <div className="flex justify-center flex-col gap-8 mt-14">
            <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                <CardTitle>Awning Preview</CardTitle>
                <CardDescription>See how your awning will look with different colors</CardDescription>
                </CardHeader>
                <CardContent>
                <Suspense fallback={<div>Loading visualizer...</div>}>
                  <AwningVisualizer />
                </Suspense>
                </CardContent>
            </Card>
            </div>
            <div>
            <Card>
                <CardHeader>
                  <CardTitle>Color Options</CardTitle>
                  <CardDescription>Click on a color to see it applied to the awning</CardDescription>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<div>Loading colors...</div>}>
                    <ColorPalette />
                  </Suspense>
                </CardContent>
            </Card>
            </div>
        </div>
      </Container>
      <ContactSection/>
      <ScrollButton/>
    </div>
  )
}

