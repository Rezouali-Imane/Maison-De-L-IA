export function NavLink({ href, children, active = false, className = "" }) {
  return (
    <a
      href={href}
      className={`font-silkscreen text-sm font-bold text-white transition-colors relative ${
        active ? "text-[rgba(63,95,183,1)]" : "text-gray-400 hover:text-white"
      } group ${className}`}
    >
      {children}
       <span
        className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
        aria-hidden="true"
      ></span>
    </a>
  )
}
