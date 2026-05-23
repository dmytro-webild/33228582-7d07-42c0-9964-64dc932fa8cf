"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Rooms", id: "rooms" },
        { name: "Gallery", id: "gallery" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Hotel Surya Sadan"
      button={{ text: "Book Now", href: "#booking" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{ variant: "plain" }}
      logoText="Hotel Surya Sadan"
      description="Affordable luxury stay in Guptkashi with modern amenities and warm hospitality."
      buttons={[{ text: "Book Now", href: "#booking" }, { text: "View Rooms", href: "#rooms" }]}
      imageSrc="http://img.b2bpic.net/free-photo/older-people-talk-about-holiday-plans_482257-76640.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Welcome to Hotel Surya Sadan, Guptkashi"
      buttons={[{ text: "Learn More", href: "#contact" }]}
    />
  </div>

  <div id="rooms" data-section="rooms">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "r1", name: "Deluxe Room", price: "₹4,500/night", imageSrc: "http://img.b2bpic.net/free-photo/white-pillow-bed-decoration-beautiful-luxury-bedroom-interior_74190-7970.jpg" },
        { id: "r2", name: "Premium Family Room", price: "₹6,800/night", imageSrc: "http://img.b2bpic.net/free-photo/bedroom-with-bed-chair-front-sliding-glass-door_1340-25294.jpg" },
        { id: "r3", name: "Executive Stay", price: "₹8,900/night", imageSrc: "http://img.b2bpic.net/free-photo/man-looking-outside-modern-room-with-gray-curtains-hanging-lamp_8353-12543.jpg" },
        { id: "r4", name: "Standard Room", price: "₹3,200/night", imageSrc: "http://img.b2bpic.net/free-photo/interior-design-neoclassical-style-with-furnishings-decor_23-2151199314.jpg" },
        { id: "r5", name: "Suite Room", price: "₹9,500/night", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-holding-vibrator_23-2150232147.jpg" },
        { id: "r6", name: "Mountain View Room", price: "₹5,500/night", imageSrc: "http://img.b2bpic.net/free-photo/bellhop-offering-services-woman-lounge-area-waiting-room-check-seaside-hotel-tourist-sitting-couch-talking-hotel-concierge-summer-clothes-handheld-shot_482257-67916.jpg" }
      ]}
      title="Our Luxurious Accommodations"
      description="Thoughtfully designed spaces for every traveler."
    />
  </div>

  <div id="amenities" data-section="amenities">
      <FeatureCardSixteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{ items: ["No Hidden Fees", "No Early Checkout Stress", "No Compromise on Quality"] }}
      positiveCard={{ items: ["Free WiFi", "24/7 Room Service", "Parking Facility", "Airport Pickup", "Terrace Seating"] }}
      title="Modern Hotel Amenities"
      description="Experience comfort like never before."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "20+", title: "Rooms", items: ["Deluxe", "Premium", "Standard"] },
        { id: "m2", value: "100%", title: "Service", items: ["Housekeeping", "Room Service", "Support"] },
        { id: "m3", value: "5★", title: "Rating", items: ["Hospitality", "Cleanliness", "Location"] }
      ]}
      title="A Visual Glimpse"
      description="Take a look at the beauty and comfort that awaits."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="An incredible experience. The service was impeccable, rooms were pristine, and the location in Guptkashi is truly peaceful. Highly recommended!"
      rating={5}
      author="Sarah Jenkins"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/cropped-shot-dark-skinned-smiling-young-woman-with-afro-hairstyle-dressed-casual-summer-clothing_273609-3169.jpg", alt: "Guest 1" },
        { src: "http://img.b2bpic.net/free-photo/elegant-man-airport-with-suitcase_1157-33706.jpg", alt: "Guest 2" },
        { src: "http://img.b2bpic.net/free-photo/horizontal-view-delighted-female-tourist-walks-street_273609-25750.jpg", alt: "Guest 3" },
        { src: "http://img.b2bpic.net/free-photo/handsome-tourist-straw-hat-covering-face-from-sun-looking-distance-aside-smiling-pleased-t_1258-173882.jpg", alt: "Guest 4" },
        { src: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5294.jpg", alt: "Guest 5" }
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="explore" data-section="explore">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      title="Explore Local Attractions"
      description="Discover the richness of Uttarakhand."
      blogs={[
        { id: "b1", category: "Attraction", title: "Nearby Ancient Temples", excerpt: "Explore spiritual history.", imageSrc: "http://img.b2bpic.net/free-photo/lonely-male-lying-down-sunbathing-meadow-with-mountains_181624-30235.jpg", authorName: "Hotel Staff", authorAvatar: "http://img.b2bpic.net/free-photo/merry-young-adult-enjoying-christmas-conversation-video-call-room-decorated-festivity-celebration-talking-woman-preparing-drink-wine-kitchen-with-joyful-ornaments_482257-28400.jpg", date: "Jan 2025" },
        { id: "b2", category: "Nature", title: "Himalayan Vistas", excerpt: "Breathtaking mountain views.", imageSrc: "http://img.b2bpic.net/free-photo/gothic-church-with-spire-brick-architecture-historic-temple_169016-68118.jpg", authorName: "Hotel Staff", authorAvatar: "http://img.b2bpic.net/free-photo/cheerful-young-professional-rejoicing-achievement_1262-19112.jpg", date: "Jan 2025" },
        { id: "b3", category: "Local", title: "Guptkashi Market", excerpt: "Authentic local shopping.", imageSrc: "http://img.b2bpic.net/free-photo/nature-moldova-vale-with-flowing-rivers-lush-trees-along-them-fields-rare-buildings-rocky-hills_1268-15981.jpg", authorName: "Hotel Staff", authorAvatar: "http://img.b2bpic.net/free-photo/smiling-blonde-handsome-man-stretching-out-his-hand_141793-121304.jpg", date: "Jan 2025" }
      ]}
    />
  </div>

  <div id="booking" data-section="booking">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "rotated-rays-static" }}
      text="Book your serene mountain getaway today."
      buttons={[{ text: "Contact Us", href: "tel:+919876543210" }]}
    />
  </div>

  <div id="contact" data-section="contact">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Do you offer parking?", content: "Yes, secure parking is available for all guests." },
        { id: "f2", title: "Is WiFi available?", content: "High-speed WiFi is complimentary in all areas." },
        { id: "f3", title: "Do you provide airport pickup?", content: "Yes, we arrange reliable pickup and drop services." }
      ]}
      title="Need More Information?"
      description="Find answers to our most common questions."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Navigation", items: [{ label: "Rooms", href: "#rooms" }, { label: "About", href: "#about" }] },
        { title: "Support", items: [{ label: "Contact", href: "#contact" }, { label: "FAQs", href: "#faq" }] }
      ]}
      logoText="Hotel Surya Sadan"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
