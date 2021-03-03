export const LogoIcon = ({ title = 'logo' }) => {
  return (
    <svg
      className="side__icon"
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#44494f">
        <path
          d="M18.17 7.93a0.83 0.83 0 0 0-0.74-0.46h-6.54l0.72-6.55a0.83 0.83 0 0 0-1.48-0.6l-8.3 10.79a0.83 0.83 0 0 0 0.66 1.34h6.54l-0.72 6.55a0.83 0.83 0 0 0 1.48 0.6l8.3-10.79c0.19-0.25 0.23-0.59 0.08-0.88z"
          fill="#44494f"
        />
      </g>
    </svg>
  )
}

export const HomeIcon = ({ title = 'home' }) => {
  return (
    <svg
      className="side__icon"
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#44494f">
        <path d="M19.6 9.77l-9.24-8.4a0.42 0.42 0 0 0-0.56 0l-4.34 3.94v-1.95a0.42 0.42 0 0 0-0.42-0.42h-1.68a0.42 0.42 0 0 0-0.42 0.42v4.2c0 0.01 0 0.03 0.01 0.04l-2.39 2.17a0.42 0.42 0 0 0 0.56 0.62l8.96-8.14 8.96 8.14a0.42 0.42 0 1 0 0.56-0.62z" />
        <path
          d="M10.08 3.38l-7.14 6.49v8.19a0.84 0.84 0 0 0 0.84 0.84h4.2a0.42 0.42 0 0 0 0.42-0.42v-3.78h3.36v3.78a0.42 0.42 0 0 0 0.42 0.42h4.2a0.84 0.84 0 0 0 0.84-0.84v-8.19l-7.14-6.49z m1.68 7.96a0.42 0.42 0 0 1-0.42 0.42h-2.52a0.42 0.42 0 0 1-0.42-0.42v-2.52a0.42 0.42 0 0 1 0.42-0.42h2.52a0.42 0.42 0 0 1 0.42 0.42v2.52z"
          fill="#44494f"
        />
      </g>
    </svg>
  )
}

export const UserIcon = ({ title = 'user' }) => {
  return (
    <svg
      className="side__icon"
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#44494f">
        <path
          d="M10.08 10.5c2.55 0 4.62-2.07 4.62-4.62v-0.84c0-2.55-2.07-4.62-4.62-4.62s-4.62 2.07-4.62 4.62v0.84c0 2.55 2.07 4.62 4.62 4.62z"
          fill="#44494f"
        />
        <path d="M16.5 13.1c-1.41-0.42-3.66-0.92-6.42-0.92s-5.01 0.5-6.42 0.92a3.34 3.34 0 0 0-2.4 3.22v3a0.42 0.42 0 0 0 0.42 0.42h16.8a0.42 0.42 0 0 0 0.42-0.42v-3c0-1.5-0.97-2.79-2.4-3.22z" />
      </g>
    </svg>
  )
}

export const CartIcon = ({ title = 'cart' }) => {
  return (
    <svg
      className="side__icon"
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#44494f">
        <path d="M5.88 15.12c-0.93 0-1.67 0.75-1.67 1.68s0.74 1.68 1.67 1.68 1.68-0.75 1.68-1.68-0.75-1.68-1.68-1.68z m-5.04-13.44v1.68h1.68l3.02 6.37-1.13 2.06c-0.13 0.24-0.21 0.52-0.21 0.81 0 0.93 0.75 1.68 1.68 1.68h10.08v-1.68h-9.72c-0.12 0-0.21-0.09-0.21-0.21 0-0.04 0.01-0.07 0.02-0.1l0.75-1.37h6.26c0.63 0 1.18-0.35 1.47-0.87l3.01-5.45c0.07-0.12 0.1-0.26 0.1-0.4a0.84 0.84 0 0 0-0.84-0.84h-12.42l-0.8-1.68h-2.74z m13.44 13.44c-0.93 0-1.67 0.75-1.67 1.68s0.74 1.68 1.67 1.68 1.68-0.75 1.68-1.68-0.75-1.68-1.68-1.68z" />
      </g>
    </svg>
  )
}

export const OrderIcon = ({ title = 'orders' }) => {
  return (
    <svg
      className="side__icon"
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#44494f">
        <path d="M14.28 8.4h-8.4v1.68h8.4v-1.68z m1.68-5.88h-0.84v-1.68h-1.68v1.68h-6.72v-1.68h-1.68v1.68h-0.84c-0.93 0-1.67 0.75-1.67 1.68l-0.01 11.76c0 0.93 0.75 1.68 1.68 1.68h11.76c0.93 0 1.68-0.75 1.68-1.68v-11.76c0-0.93-0.75-1.68-1.68-1.68z m0 13.44h-11.76v-9.24h11.76v9.24z m-4.2-4.2h-5.88v1.68h5.88v-1.68z" />
      </g>
    </svg>
  )
}

export const LoginIcon = ({ title = 'login' }) => {
  return (
    <svg
      className="side__icon"
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#44494f">
        <path d="M6.3 7.98v-2.94c0-2.08 1.7-3.78 3.78-3.78s3.78 1.7 3.78 3.78h0.84c0-2.55-2.07-4.62-4.62-4.62s-4.62 2.07-4.62 4.62v2.94h0.84z" />
        <path
          d="M16.38 8.82h-12.6a0.84 0.84 0 0 0-0.84 0.84v9.24a0.84 0.84 0 0 0 0.84 0.84h12.6a0.84 0.84 0 0 0 0.84-0.84v-9.24a0.84 0.84 0 0 0-0.84-0.84z m-5.88 6.68v1.72h-0.84v-1.72a2.1 2.1 0 1 1 0.84 0z"
          fill="#44494f"
        />
      </g>
    </svg>
  )
}

export const LogoutIcon = ({ title = 'logout' }) => {
  return (
    <svg
      className="side__icon"
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#44494f">
        <path
          d="M17.01 6.3h-2.52v-1.89c0-2.43-1.98-4.41-4.41-4.41s-4.41 1.98-4.41 4.41v1.89h-2.52a0.63 0.63 0 0 0-0.63 0.63v12.6a0.63 0.63 0 0 0 0.63 0.63h13.86a0.63 0.63 0 0 0 0.63-0.63v-12.6a0.63 0.63 0 0 0-0.63-0.63z m-6.3 8.1v1.98h-1.26v-1.98c-1.08-0.28-1.89-1.26-1.89-2.43 0-1.39 1.13-2.52 2.52-2.52s2.52 1.13 2.52 2.52c0 1.17-0.81 2.15-1.89 2.43z m2.52-8.1h-6.3v-1.89c0-1.74 1.41-3.15 3.15-3.15s3.15 1.41 3.15 3.15v1.89z"
          fill="#44494f"
        />
      </g>
    </svg>
  )
}

export const DashboardIcon = ({ title = 'dashboard' }) => {
  return (
    <svg
      className="side__icon"
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#44494f">
        <path d="M2.49 10.79h6.64v-8.3h-6.64v8.3z m0 6.64h6.64v-4.98h-6.64v4.98z m8.3 0h6.64v-8.3h-6.64v8.3z m0-14.94v4.98h6.64v-4.98h-6.64z" />
      </g>
    </svg>
  )
}

export const MenuIcon = ({ title = 'menu' }) => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#44494f">
        <path d="M2.49 14.94h14.94v-1.66h-14.94v1.66z m0-4.15h14.94v-1.66h-14.94v1.66z m0-5.81v1.66h14.94v-1.66h-14.94z" />
      </g>
    </svg>
  )
}

export const CloseIcon = ({ title = 'close', color = '44494f' }) => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={`#${color}`}>
        <path d="M15.77 5.32l-1.17-1.17-4.64 4.64-4.64-4.64-1.17 1.17 4.64 4.64-4.64 4.64 1.17 1.17 4.64-4.64 4.64 4.64 1.17-1.17-4.64-4.64z" />
      </g>
    </svg>
  )
}

export const EmptyStarIcon = ({ title = 'emptyStar' }) => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#f8e825" strokeWidth="2">
        <path
          d="M9.96 2.07l2.56 5.19 5.74 0.84-4.15 4.04 0.98 5.71-5.13-2.69-5.13 2.69 0.98-5.71-4.15-4.04 5.74-0.84z"
          fill="none"
          stroke="#f8e825"
          strokeLinecap="square"
        />
      </g>
    </svg>
  )
}

export const FullStarIcon = ({ title = 'fullStar' }) => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#f8e825">
        <path
          d="M10.55 1.61l2.47 4.99 5.5 0.81a0.66 0.66 0 0 1 0.37 1.12l-3.99 3.89 0.94 5.48a0.66 0.66 0 0 1-0.95 0.7l-4.93-2.59-4.93 2.59a0.66 0.66 0 0 1-0.95-0.7l0.94-5.48-3.99-3.89a0.66 0.66 0 0 1 0.36-1.12l5.51-0.81 2.47-4.99a0.66 0.66 0 0 1 1.18 0z"
          fill="#f8e825"
        />
      </g>
    </svg>
  )
}

export const HalfStarIcon = ({ title = 'halfStar' }) => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#f8e825">
        <path d="M18.26 7.67l-5.97-0.52-2.33-5.49-2.33 5.5-5.97 0.51 4.53 3.93-1.36 5.83 5.13-3.1 5.13 3.1-1.35-5.83 4.52-3.93z m-8.3 5.11v-7.72l1.42 3.36 3.63 0.31-2.75 2.39 0.83 3.55-3.13-1.89z" />
      </g>
    </svg>
  )
}

export const SearchIcon = ({ title = 'search' }) => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#44494f">
        <path
          d="M18.85 16.5l-3.63-3.63a8.24 8.24 0 0 0 1.38-4.57c0-4.58-3.72-8.3-8.3-8.3s-8.3 3.72-8.3 8.3 3.72 8.3 8.3 8.3a8.24 8.24 0 0 0 4.57-1.38l3.63 3.63a0.83 0.83 0 0 0 1.17 0l1.18-1.18a0.83 0.83 0 0 0 0-1.17z m-17.19-8.2c0-3.66 2.98-6.64 6.64-6.64s6.64 2.98 6.64 6.64-2.98 6.64-6.64 6.64-6.64-2.98-6.64-6.64z"
          fill="#44494f"
        />
      </g>
    </svg>
  )
}

export const TrashIcon = ({ title = 'trash', color = '44494f' }) => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={`#${color}`} strokeWidth="2">
        <path
          d="M16.6 7.47v11.62h-13.28v-11.62"
          fill="none"
          stroke={`#${color}`}
          strokeLinecap="square"
        />
        <path
          d="M0.83 4.15h18.26"
          fill="none"
          stroke={`#${color}`}
          strokeLinecap="square"
        />
        <path
          d="M9.96 9.96v4.98"
          fill="none"
          stroke={`#${color}`}
          strokeLinecap="square"
        />
        <path
          d="M6.64 9.96v4.98"
          fill="none"
          stroke={`#${color}`}
          strokeLinecap="square"
        />
        <path
          d="M13.28 9.96v4.98"
          fill="none"
          stroke={`#${color}`}
          strokeLinecap="square"
        />
        <path
          d="M6.64 4.15v-3.32h6.64v3.32"
          fill="none"
          stroke={`#${color}`}
          strokeLinecap="square"
        />
      </g>
    </svg>
  )
}

export const EditIcon = ({ title = 'edit', color = '44494f' }) => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={`#${color}`}>
        <path
          d="M19.09 3.72l-2.65-2.65c-0.69-0.69-1.95-0.69-2.64 0l-12.35 12.35c-0.06 0.06-0.13 0.13-0.13 0.19v0.19l-0.63 5.04c0 0.19 0.06 0.38 0.19 0.5 0.06 0.13 0.19 0.19 0.38 0.19h0.06l5.04-0.63h0.19c0.06 0 0.13-0.06 0.19-0.13l12.35-12.34c0.76-0.76 0.76-2.02 0-2.71z m-3.34 4.22l-3.53-3.53 1.01-1.01 3.53 3.53-1.01 1.01z m-9.45 9.45l-1.32-1.33 8.57-8.56 1.32 1.32-8.57 8.57z m5.04-12.1l1.32 1.32-8.56 8.57-1.33-1.32 8.57-8.57z"
          fill={`#${color}`}
        />
      </g>
    </svg>
  )
}

export const PlusIcon = ({ title = 'plus' }) => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#44494f">
        <path d="M10.79 5.81h-1.66v3.32h-3.32v1.66h3.32v3.32h1.66v-3.32h3.32v-1.66h-3.32v-3.32z m-0.83-4.15c-4.58 0-8.3 3.72-8.3 8.3s3.72 8.3 8.3 8.3 8.3-3.72 8.3-8.3-3.72-8.3-8.3-8.3z m0 14.94c-3.66 0-6.64-2.98-6.64-6.64s2.98-6.64 6.64-6.64 6.64 2.98 6.64 6.64-2.98 6.64-6.64 6.64z" />
      </g>
    </svg>
  )
}

export const CheckIcon = ({ title = 'check', color = '44494f' }) => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={`#${color}`}>
        <path
          d="M17.18 7.8c0.17 0.66 0.25 1.41 0.25 2.16 0 4.56-3.73 8.3-8.3 8.3s-8.3-3.73-8.3-8.3 3.73-8.3 8.3-8.3c1.58 0 3.07 0.41 4.4 1.25"
          fill="none"
          stroke={`#${color}`}
          strokeLinecap="butt"
          strokeWidth="2"
        />
        <path
          d="M5.81 8.3l3.32 3.32 9.13-9.13"
          fill="none"
          stroke={`#${color}`}
          strokeLinecap="square"
          strokeWidth="2"
        />
      </g>
    </svg>
  )
}
