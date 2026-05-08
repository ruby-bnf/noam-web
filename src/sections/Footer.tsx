function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-[rgba(var(--colors-Primary-dark-green-rgb),0.1)] pt-4">
      <div className="flex flex-col gap-1">
        <p className="text-[0.75rem] font-semibold text-[var(--colors-Primary-dark-green)]">
          Noam Hen
        </p>
        <a
          href="mailto:noamhen100@gmail.com"
          className="text-[0.75rem] text-[rgba(var(--colors-Primary-dark-green-rgb),0.7)] hover:text-[var(--colors-Primary-dark-green)] transition-colors"
        >
          noamhen100@gmail.com
        </a>
      </div>

      <a
        href="https://instagram.com/noam.illustration"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[0.75rem] text-[rgba(var(--colors-Primary-dark-green-rgb),0.7)] hover:text-[var(--colors-Primary-dark-green)] transition-colors"
      >
        Instagram
      </a>
    </footer>
  );
}

export default Footer;
