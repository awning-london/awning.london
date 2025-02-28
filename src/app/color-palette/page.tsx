import AwningVisualizer from "@/components/color/awning-visualizer"
import ColorPalette from "@/components/color/color-palette"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card"
import { PageIntro } from "@/components/PageIntro"
import ScrollButton from "@/components/ScrollButton"
import { ContactSection } from "@/components/ContactSection"
import { Container } from "@/components/Container"

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
                <AwningVisualizer />
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
                <ColorPalette />
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

