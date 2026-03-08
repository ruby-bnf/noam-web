function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen snap-start flex-col justify-center gap-5 px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <h2 className="font-[Fraunces] text-[clamp(2rem,6vw,4.2rem)] leading-[1.04]">
        Contact Info
      </h2>
      <div className="grid gap-2">
        <p className="max-w-[65ch] text-[clamp(1.03rem,1.3vw,1.2rem)] leading-[1.65]">
          Email: hello@friendsite.com
        </p>
        <p className="max-w-[65ch] text-[clamp(1.03rem,1.3vw,1.2rem)] leading-[1.65]">
          Instagram: @friendcreative
        </p>
        <p className="max-w-[65ch] text-[clamp(1.03rem,1.3vw,1.2rem)] leading-[1.65]">
          Location: Amsterdam, NL
        </p>
      </div>
    </section>
  );
}

export default ContactSection;
