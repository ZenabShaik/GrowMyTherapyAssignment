import ContactHero from "@/components/contact/ContactHero"
import BookingSection from "@/components/contact/BookingSection"
import OfficeSection from "@/components/contact/OfficeSection"
import SocialSection from "@/components/contact/SocialSection"

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <BookingSection />
      <OfficeSection />
      <SocialSection />
    </main>
  )
}
