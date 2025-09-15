'use client'
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

const StaggeredMenu = ({
  position = 'right',
  colors = ['#B19EEF', '#5227FF'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className = '',
  logoUrl = '/favicon.ico',
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = true,
  accentColor = '#5227FF',
  onMenuOpen,
  onMenuClose
}) => {
  const [open, setOpen] = useState(false)
  const openRef = useRef(false)

  const panelRef = useRef(null)
  const preLayersRef = useRef(null)
  const preLayerElsRef = useRef([])
  const overlayRef = useRef(null)

  const plusHRef = useRef(null)
  const plusVRef = useRef(null)
  const iconRef = useRef(null)
  const textInnerRef = useRef(null)
  const textWrapRef = useRef(null)
  const toggleBtnRef = useRef(null)

  const [textLines, setTextLines] = useState(['Menu', 'Close'])
  const openTlRef = useRef(null)
  const closeTweenRef = useRef(null)
  const spinTweenRef = useRef(null)
  const textCycleAnimRef = useRef(null)
  const colorTweenRef = useRef(null)
  const busyRef = useRef(false)
  const itemEntranceTweenRef = useRef(null)

  // Setup initial positions
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current
      const preContainer = preLayersRef.current
      const plusH = plusHRef.current
      const plusV = plusVRef.current
      const icon = iconRef.current
      const textInner = textInnerRef.current

      if (!panel || !plusH || !plusV || !icon || !textInner) return

      const preLayers = preContainer ? Array.from(preContainer.querySelectorAll('.sm-prelayer')) : []
      preLayerElsRef.current = preLayers

      // start fully off-screen
      const offscreen = position === 'left' ? '-100%' : '100%'
      gsap.set([panel, ...preLayers], { x: offscreen })
      gsap.set(overlayRef.current, { autoAlpha: 0 })
      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 })
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 })
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' })
      gsap.set(textInner, { yPercent: 0 })

      // ensure toggle button color initial
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor })

      // ensure non-interactive at start
      if (panel) panel.style.pointerEvents = 'none'
      if (overlayRef.current) overlayRef.current.style.pointerEvents = 'none'
    })
    return () => ctx.revert()
  }, [menuButtonColor, position])

  // Build open timeline (layers -> panel -> items -> socials)
  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current
    const preLayers = preLayerElsRef.current
    if (!panel) return null

    // kill previous
    openTlRef.current?.kill()
    closeTweenRef.current?.kill()
    itemEntranceTweenRef.current?.kill()

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'))
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'))
    const socialTitle = panel.querySelector('.sm-socials-title')
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'))

    // prepare item states
    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 })
    if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity']: 0 })
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 })
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 })

    const tl = gsap.timeline({ paused: true })

    // animate layered backgrounds slightly staggered
    if (preLayers && preLayers.length) {
      preLayers.forEach((layer, i) => {
        tl.to(layer, { x: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07)
      })
    }

    // After prelayers, bring the panel in
    const lastTime = preLayers && preLayers.length ? (preLayers.length - 1) * 0.07 : 0
    const panelInsertTime = lastTime + (preLayers && preLayers.length ? 0.08 : 0)
    const panelDuration = 0.65
    tl.to(panel, { x: 0, duration: panelDuration, ease: 'power4.out' }, panelInsertTime)

    // item entrance
    if (itemEls.length) {
      const itemsStart = panelInsertTime + panelDuration * 0.15
      tl.to(itemEls, { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1, from: 'start' } }, itemsStart)
      if (numberEls.length) {
        tl.to(numberEls, { ['--sm-num-opacity']: 1, duration: 0.6, ease: 'power2.out', stagger: { each: 0.08 } }, itemsStart + 0.1)
      }
    }

    // socials
    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4
      if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart)
      if (socialLinks.length) tl.to(socialLinks, { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', stagger: { each: 0.08 } }, socialsStart + 0.04)
    }

    openTlRef.current = tl
    return tl
  }, [])

  const playOpen = useCallback(() => {
    if (busyRef.current) return
    busyRef.current = true

    // make overlay + panel interactive & bring overlay to visible
    if (overlayRef.current) {
      overlayRef.current.style.pointerEvents = 'auto'
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.35 })
    }
    if (panelRef.current) {
      panelRef.current.style.pointerEvents = 'auto'
    }

    const tl = buildOpenTimeline()
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false
      })
      tl.play(0)
    } else {
      busyRef.current = false
    }
  }, [buildOpenTimeline])

  const playClose = useCallback(() => {
    openTlRef.current?.kill()
    openTlRef.current = null
    itemEntranceTweenRef.current?.kill()

    const panel = panelRef.current
    const preLayers = preLayerElsRef.current
    if (!panel) return

    const all = [...preLayers, panel]
    closeTweenRef.current?.kill()

    const offscreen = position === 'left' ? '-100%' : '100%'
    closeTweenRef.current = gsap.to(all, {
      x: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        // hide overlay + make non-interactive after animation
        if (overlayRef.current) {
          gsap.set(overlayRef.current, { autoAlpha: 0 })
          overlayRef.current.style.pointerEvents = 'none'
        }
        if (panelRef.current) {
          panelRef.current.style.pointerEvents = 'none'
        }
        busyRef.current = false
      }
    })
  }, [position])

  // icon rotation
  const animateIcon = useCallback(opening => {
    const icon = iconRef.current
    const h = plusHRef.current
    const v = plusVRef.current
    if (!icon || !h || !v) return

    spinTweenRef.current?.kill()
    if (opening) {
      gsap.set(icon, { rotate: 0 })
      spinTweenRef.current = gsap.timeline().to(h, { rotate: 45, duration: 0.45, ease: 'power4.out' }, 0).to(v, { rotate: -45, duration: 0.45, ease: 'power4.out' }, 0)
    } else {
      spinTweenRef.current = gsap.timeline().to(h, { rotate: 0, duration: 0.35 }).to(v, { rotate: 90, duration: 0.35 }, 0)
    }
  }, [])

  // button color
  const animateColor = useCallback(opening => {
    const btn = toggleBtnRef.current
    if (!btn) return
    colorTweenRef.current?.kill()
    if (changeMenuColorOnOpen) {
      const target = opening ? openMenuButtonColor : menuButtonColor
      colorTweenRef.current = gsap.to(btn, { color: target, delay: 0.12, duration: 0.28 })
    } else {
      gsap.set(btn, { color: menuButtonColor })
    }
  }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor])

  // toggle text cycle
  const animateText = useCallback(opening => {
    const inner = textInnerRef.current
    if (!inner) return
    textCycleAnimRef.current?.kill()

    const current = opening ? 'Menu' : 'Close'
    const target = opening ? 'Close' : 'Menu'
    const cycles = 3
    const seq = [current]
    let last = current
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu'
      seq.push(last)
    }
    if (last !== target) seq.push(target)
    seq.push(target)

    setTextLines(seq)
    gsap.set(inner, { yPercent: 0 })
    const finalShift = ((seq.length - 1) / seq.length) * 100
    textCycleAnimRef.current = gsap.to(inner, { yPercent: -finalShift, duration: 0.5 + seq.length * 0.07, ease: 'power4.out' })
  }, [])

  const toggleMenu = useCallback(() => {
    const target = !openRef.current
    openRef.current = target
    setOpen(target)

    if (target) {
      onMenuOpen?.()
      playOpen()
    } else {
      onMenuClose?.()
      playClose()
    }

    animateIcon(target)
    animateColor(target)
    animateText(target)
  }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose])

  // close by clicking overlay
  const handleOverlayClick = useCallback(() => {
    if (openRef.current) toggleMenu()
  }, [toggleMenu])

  // Helper for logo src (handle imported image objects)
  const getLogoSrc = logoUrl && typeof logoUrl === 'object' ? (logoUrl.src || '') : logoUrl

  return (
    <div className={`sm-scope relative ${className}`} style={{ '--sm-accent': accentColor }}>
      <header className="staggered-menu-header fixed top-0 left-0 w-full z-60 pointer-events-none" aria-label="Main navigation header">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 pointer-events-auto">
          <div className="sm-logo flex items-center select-none" aria-label="Logo">
            <img src={getLogoSrc || '/favicon.ico'} alt="Logo" className="sm-logo-img block h-10 w-auto object-contain" draggable={false} />
          </div>

          <button
            ref={toggleBtnRef}
            className="sm-toggle relative inline-flex items-center gap-[0.45rem] bg-transparent border-0 cursor-pointer text-[#e9e9ef] font-medium leading-none overflow-visible z-70"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="staggered-menu-panel"
            onClick={toggleMenu}
            type="button"
            style={{ color: menuButtonColor }}
          >
            <span ref={textWrapRef} className="sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap w-[var(--sm-toggle-width,auto)] min-w-[var(--sm-toggle-width,auto)]" aria-hidden="true">
              <span ref={textInnerRef} className="sm-toggle-textInner flex flex-col leading-none">
                {textLines.map((l, i) => (
                  <span className="sm-toggle-line block h-[1em] leading-none" key={i}>{l}</span>
                ))}
              </span>
            </span>

            <span ref={iconRef} className="sm-icon relative w-[14px] h-[14px] ml-2 shrink-0 inline-flex items-center justify-center [will-change:transform]" aria-hidden="true">
              <span ref={plusHRef} className="sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2" />
              <span ref={plusVRef} className="sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2" />
            </span>
          </button>
        </div>
      </header>


      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        aria-hidden={!open}
        className="fixed inset-0 bg-black/60"
        style={{
          zIndex: 40,
          pointerEvents: 'none'
        }}
      />

      <div className="relative">

        <div ref={preLayersRef} className="absolute inset-0 pointer-events-none z-[45]" aria-hidden="true" style={{ display: 'block' }}>
          {(colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c']).map((c, i) => (
            <div key={i} className="sm-prelayer absolute inset-0" style={{ background: c }} />
          ))}
        </div>

        <aside
          id="staggered-menu-panel"
          ref={panelRef}
          className={`staggered-menu-panel fixed top-0 ${position === 'left' ? 'left-0' : 'right-0'} bottom-0 w-[clamp(260px,38vw,420px)] bg-white flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-50`}
          style={{ WebkitBackdropFilter: 'blur(12px)', pointerEvents: 'none' }} // pointerEvents toggled when opening
          aria-hidden={!open}
        >
          <div className="sm-panel-inner flex-1 flex flex-col gap-5">
            <ul className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2" role="list" data-numbering={displayItemNumbering || undefined}>
              {items && items.length ? (
                items.map((it, idx) => (
                  <li key={it.label + idx} className="sm-panel-itemWrap relative overflow-hidden leading-none">
                    <Link
                      className="sm-panel-item relative text-black hover:text-blue-accent font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-all duration-150 ease-linear inline-block no-underline pr-[1.4em]"
                      href={it.link}
                      aria-label={it.ariaLabel}
                      data-index={idx + 1}
                      onClick={() => { toggleMenu() }}
                    >
                      <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">{it.label}</span>
                    </Link>
                  </li>
                ))
              ) : (
                <li className="sm-panel-itemWrap relative overflow-hidden leading-none" aria-hidden="true">
                  <span className="sm-panel-item relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase inline-block no-underline pr-[1.4em]">
                    <span className="sm-panel-itemLabel inline-block">No items</span>
                  </span>
                </li>
              )}
            </ul>

            {displaySocials && socialItems && socialItems.length > 0 && (
              <div className="sm-socials mt-auto pt-8 flex flex-col gap-3" aria-label="Social links">
                <h3 className="sm-socials-title m-0 text-base font-medium" style={{ color: 'var(--sm-accent)' }}>Socials</h3>
                <ul className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap" role="list">
                  {socialItems.map((s, i) => (
                    <li key={s.label + i} className="sm-socials-item">
                      <a href={s.link} target="_blank" rel="noopener noreferrer" className="sm-socials-link text-[1.2rem] font-medium text-[#111] no-underline relative inline-block py-[2px] transition-[color,opacity] duration-300 ease-linear">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Component styles (keeps your original look + the pointer-events fixes) */}
      <style>{`
.sm-scope .staggered-menu-header { background: transparent; }
.sm-scope .staggered-menu-header > div { display:flex; align-items:center; justify-content:space-between; }
.sm-scope .sm-logo-img { display:block; height:40px; width:auto; object-fit:contain; }
.sm-scope .sm-toggle { position: relative; display: inline-flex; align-items: center; gap: 0.3rem; background: transparent; border: none; cursor: pointer; color: #e9e9ef; font-weight: 500; line-height: 1; overflow: visible; }
.sm-scope .sm-toggle-textWrap { display:inline-block; height:1em; overflow:hidden; white-space:nowrap; }
.sm-scope .sm-toggle-textInner { display:flex; flex-direction:column; }
.sm-scope .sm-icon-line { position: absolute; left: 50%; top: 50%; width: 100%; height: 2px; background: currentColor; border-radius: 2px; transform: translate(-50%, -50%); }
.sm-scope .sm-panel-list { list-style:none; margin:0; padding:0; }
.sm-scope .sm-panel-item { display:inline-block; text-decoration:none; color:inherit; }
.sm-scope .sm-panel-itemLabel { display:inline-block; transform-origin: 50% 100%; will-change: transform; }
.sm-scope .sm-socials-title { margin:0; font-size:1rem; font-weight:500; }
@media (max-width: 1024px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; } }
@media (max-width: 640px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; padding-top:5.5rem; } }
      `}</style>
    </div>
  )
}

export default StaggeredMenu
