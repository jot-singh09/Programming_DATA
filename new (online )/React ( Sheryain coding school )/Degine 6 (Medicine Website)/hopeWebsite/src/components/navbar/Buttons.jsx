const Buttons = () => {
  return (
    <div>
      <div class="hidden md:flex items-center gap-8 bg-neutral-100/60 border border-neutral-200/60 rounded-full px-6 py-2">
        <p class="text-[14px] cursor-pointer text-neutral-900 after:absolute after:w-full after:h-px after:bg-black  relative after:bottom-0 after:left-0 after:scale-x-100 ">
          Home
        </p>
        <a
          href="/products.html"
          class="text-[14px] text-neutral-900 transition-colors after:absolute after:w-full after:h-px after:bg-black  relative after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
        >
          Products
        </a>
        <a
          href="/contact.html"
          class="text-[14px] text-neutral-900 transition-colors after:absolute after:w-full after:h-px after:bg-black relative after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
        >
          Contact
        </a>
        <a className="text-[14px] text-neutral-900 hover:after:content-[''] after:scale-x-0 hover:after:scale-x-100  after:absolute after:origin-left after:bottom-0 after:left-0 after:bg-current after:w-full after:h-px after:transition-all relative after:ease-in-out " href="">Blog</a>
      </div>
    </div>
  );
};

export default Buttons;
