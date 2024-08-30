import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { useTrail } from "@react-spring/web"

const Link = ({
  children,
  img,
  ...otherProps
}: {
  children: string
  href: string
  img: string
}) => {
  const [isClient, setIsClient] = useState(false)
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)

  const text = children

  const topX = useRef(0)
  const bottomX = useRef(0)

  const fast = { tension: 400, friction: 40 }
  const slow = { mass: 2.3, tension: 680, friction: 50 }
  const portalStyleRef = useRef({
    top: 0,
    left: 0,
    x: 0,
    y: 0,
    opacity: 0,
    rotate: 0,
    scale: 0,
  })
  const linkStyleInfos = useRef({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  const [, api]: any = useTrail(2, (i) => ({
    mouseX: 0,
    config: i === 0 ? fast : slow,
    onChange(result) {
      let delta = 0
      if (i === 0) {
        bottomX.current = result.value.mouseX
        delta =
          result.value.mouseX -
          linkStyleInfos.current.x -
          linkStyleInfos.current.width / 2
        portalStyleRef.current = {
          ...portalStyleRef.current,
          x: delta,
        }
      } else {
        const y = 150
        topX.current = result.value.mouseX
        let rotate =
          90 - (Math.atan2(y, topX.current - bottomX.current) * 180) / Math.PI
        rotate = rotate / 3

        portalStyleRef.current = {
          ...portalStyleRef.current,
          rotate,
        }
        updatePortalStyle()
      }
    },
  }))

  const updatePortalStyle = () => {
    const { top, left, x, opacity, rotate, scale } = portalStyleRef.current

    if (outerRef.current) {
      outerRef.current.style.top = `${top}px`
      outerRef.current.style.left = `${left}px`
      outerRef.current.style.transform = `translate3d(${x}px, 0, 0) rotate(${rotate}deg)`
      outerRef.current.style.opacity = `${opacity}`
    }

    if (innerRef.current) {
      innerRef.current.style.transform = `scale(${scale})`
    }
  }

  const handleMouseEnter: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (!isClient) {
      return
    }
    if (!outerRef.current) {
      return
    }
    const outerRect = outerRef.current.getBoundingClientRect()
    const linkRect = linkRef.current!.getBoundingClientRect()
    const { x, y, width, height } = linkRect

    linkStyleInfos.current = {
      x,
      y,
      width,
      height,
    }

    portalStyleRef.current = {
      ...portalStyleRef.current,
      top: linkStyleInfos.current.y - outerRect.height - 10,
      left:
        linkStyleInfos.current.x +
        linkStyleInfos.current.width / 2 -
        outerRect.width / 2,
      opacity: 1,
      scale: 1,
    }

    api.start({
      mouseX: e.clientX,
      immediate: true,
    })
  }

  const handleMouseMove: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (!isClient) {
      return
    }
    api.start({
      mouseX: e.clientX,
    })
  }

  const handleMouseLeave = () => {
    if (!isClient) {
      return
    }
    portalStyleRef.current = {
      ...portalStyleRef.current,
      opacity: 0,
      scale: 0.5,
    }

    updatePortalStyle()
  }

  useEffect(() => {
    if (isClient) {
      const linkRect = linkRef.current!.getBoundingClientRect()
      const { x, y, width, height } = linkRect

      linkStyleInfos.current = {
        x,
        y,
        width,
        height,
      }
    }
  }, [isClient])

  useEffect(() => {
    window.addEventListener("scroll", handleMouseLeave)

    if (img) {
      setIsClient(true)
    }

    return () => {
      window.removeEventListener("scroll", handleMouseLeave)
    }
  }, [])

  return (
    <>
      <a
        ref={linkRef}
        target="_blank"
        className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-2"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...otherProps}
      >
        {text}
      </a>
      {isClient ? (
        <>
          {createPortal(
            <div
              className="fixed top-0 left-0 w-[180px] h-[100px] overflow-hidden pointer-events-none"
              ref={outerRef}
              style={{
                opacity: 0,
                transition: ".3s ease opacity",
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-full bg-neutral-50 border-2 border-white border-opacity-20 rounded-lg overflow-hidden origin-bottom"
                ref={innerRef}
                style={{
                  transform: "scale(0.5)",
                  transition: ".3s ease transform",
                }}
              >
                {img?.includes("mp4") ? (
                  <video
                    className="absolute top-0 left-0 w-full h-full"
                    preload="auto"
                    x-webkit-airplay="true"
                    webkit-playsinline="true"
                    playsInline
                    muted
                    loop
                    autoPlay
                  >
                    <source src={img} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={img}
                    alt=""
                  />
                )}
              </div>
            </div>,
            document.body
          )}
        </>
      ) : null}
    </>
  )
}

export default Link
